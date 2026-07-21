import { NextResponse } from 'next/server';
import { hubspotUpsert } from '@/lib/hubspot';
import type { HubspotUpsertInput } from '@/lib/hubspot';

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
