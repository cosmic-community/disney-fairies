import { createBucketClient } from '@cosmicjs/sdk'
import type { Fairy, Event, Costume } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

export function getMetafieldValue(field: unknown): string {
  if (field === null || field === undefined) return '';
  if (typeof field === 'string') return field;
  if (typeof field === 'number' || typeof field === 'boolean') return String(field);
  if (typeof field === 'object' && field !== null && 'value' in field) {
    return String((field as { value: unknown }).value);
  }
  if (typeof field === 'object' && field !== null && 'key' in field) {
    return String((field as { key: unknown }).key);
  }
  return '';
}

export async function getFairies(): Promise<Fairy[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'fairies' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.objects as Fairy[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return [];
    throw new Error('Failed to fetch fairies');
  }
}

export async function getFairy(slug: string): Promise<Fairy | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'fairies', slug })
      .depth(1);
    return response.object as Fairy;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null;
    throw new Error('Failed to fetch fairy');
  }
}

export async function getEvents(): Promise<Event[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'events' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    const events = response.objects as Event[];
    return events.sort((a, b) => {
      const dateA = new Date(a.metadata?.event_date || '').getTime();
      const dateB = new Date(b.metadata?.event_date || '').getTime();
      return dateB - dateA;
    });
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return [];
    throw new Error('Failed to fetch events');
  }
}

export async function getEvent(slug: string): Promise<Event | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'events', slug })
      .depth(1);
    return response.object as Event;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null;
    throw new Error('Failed to fetch event');
  }
}

export async function getCostumes(): Promise<Costume[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'costumes' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.objects as Costume[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return [];
    throw new Error('Failed to fetch costumes');
  }
}

export async function getCostume(slug: string): Promise<Costume | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'costumes', slug })
      .depth(1);
    return response.object as Costume;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null;
    throw new Error('Failed to fetch costume');
  }
}