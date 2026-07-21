import { z } from 'zod';

const HUBSPOT_API_BASE_URL = 'https://api.hubapi.com/crm/v3/objects/contacts';
const HUBSPOT_SEARCH_URL = `${HUBSPOT_API_BASE_URL}/search`;

export const HubspotUpsertInputSchema = z.object({
  email: z.string().email().describe("The contact's email address."),
  fullName: z.string().optional().describe("The contact's full name."),
  phoneNumber: z.string().optional().describe("The contact's phone number."),
  city: z.string().optional().describe("The contact's city."),
  requirement: z
    .enum([
      'Linear Workstations',
      'Cluster Workstations',
      'Modular Workstations',
      'Manager Workstations',
      'Custom Workstations',
    ])
    .optional()
    .describe("The contact's furniture requirement."),
  quantity: z
    .enum(['3+', '6+', '8+', '12+', '15+', '20+'])
    .optional()
    .describe('The required quantity.'),
});

export type HubspotUpsertInput = z.infer<typeof HubspotUpsertInputSchema>;

export const HubspotUpsertOutputSchema = z.object({
  id: z.string().describe('The HubSpot contact ID.'),
  isNew: z.boolean().describe('Whether a new contact was created.'),
});

export type HubspotUpsertOutput = z.infer<typeof HubspotUpsertOutputSchema>;

type HttpMethod = 'POST' | 'PATCH';

async function callHubspotAPI<T>(url: string, method: HttpMethod, body?: unknown): Promise<T> {
  const apiKey = process.env.HUBSPOT_API_KEY;
  if (!apiKey) {
    console.warn('HubSpot API key is not configured. Skipping HubSpot CRM sync.');
    return { id: 'mock-contact-id' } as unknown as T;
  }

  const res = await fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  const text = await res.text();
  if (!res.ok) {
    throw new Error(`HubSpot API request failed (${res.status}): ${text}`);
  }

  return (text ? JSON.parse(text) : {}) as T;
}

async function searchContactIdByEmail(email: string): Promise<string | null> {
  if (!process.env.HUBSPOT_API_KEY) return null;

  type SearchResp = {
    total?: number;
    results?: Array<{ id: string }>;
  };

  const payload = {
    filterGroups: [
      {
        filters: [{ propertyName: 'email', operator: 'EQ', value: email }],
      },
    ],
    properties: ['email', 'lead_source'],
    limit: 1,
  };

  try {
    const resp = await callHubspotAPI<SearchResp>(HUBSPOT_SEARCH_URL, 'POST', payload);
    return resp?.results?.[0]?.id ?? null;
  } catch (err) {
    console.warn('HubSpot contact search failed, proceeding to create.', err);
    return null;
  }
}

function buildProperties(input: HubspotUpsertInput) {
  const properties: Record<string, string> = {
    email: input.email,
    lead_source: 'office workstation',
  };

  if (input.fullName) {
    const [firstname, ...lastname] = input.fullName.trim().split(/\s+/);
    properties.firstname = firstname || '';
    if (lastname.length > 0) properties.lastname = lastname.join(' ');
  }

  if (input.phoneNumber) properties.phone = input.phoneNumber;
  if (input.city) properties.city = input.city;

  if (input.requirement) {
    properties.lifecyclestage = 'lead';
    properties.what_is_your_requirement = input.requirement;
  }

  if (input.quantity) properties.quantity_required = input.quantity;

  return properties;
}

export async function hubspotUpsert(input: HubspotUpsertInput): Promise<HubspotUpsertOutput> {
  if (!process.env.HUBSPOT_API_KEY) {
    console.warn('HUBSPOT_API_KEY not configured. Mocking success response.');
    return { id: 'mock-contact-id', isNew: true };
  }

  try {
    const properties = buildProperties(input);
    const existingContactId = await searchContactIdByEmail(input.email);

    if (existingContactId) {
      const url = `${HUBSPOT_API_BASE_URL}/${existingContactId}`;
      const resp = await callHubspotAPI<{ id: string }>(url, 'PATCH', { properties });
      return { id: resp.id ?? 'mock-contact-id', isNew: false };
    }

    const resp = await callHubspotAPI<{ id: string }>(HUBSPOT_API_BASE_URL, 'POST', { properties });
    return { id: resp.id ?? 'mock-contact-id', isNew: true };
  } catch (err) {
    console.error('HubSpot upsert error:', err);
    return { id: 'mock-contact-id', isNew: true };
  }
}
