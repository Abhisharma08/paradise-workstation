import { NextResponse } from 'next/server';
import { hubspotUpsert } from '@/ai/flows/hubspot-upsert-flow';
import type { HubspotUpsertInput } from '@/ai/flows/hubspot-upsert-flow';

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as HubspotUpsertInput;
    const result = await hubspotUpsert(body);
    return NextResponse.json(result);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
