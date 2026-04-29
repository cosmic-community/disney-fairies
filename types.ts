export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface Fairy extends CosmicObject {
  type: 'fairies';
  metadata: {
    name?: string;
    talent_type?: string;
    bio?: string;
    portrait?: {
      url: string;
      imgix_url: string;
    };
  };
}

export interface Event extends CosmicObject {
  type: 'events';
  metadata: {
    event_title?: string;
    description?: string;
    event_date?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
  };
}

export interface Costume extends CosmicObject {
  type: 'costumes';
  metadata: {
    costume_name?: string;
    description?: string;
    worn_by?: Fairy;
    costume_image?: {
      url: string;
      imgix_url: string;
    };
    gallery?: Array<{
      url: string;
      imgix_url: string;
    }>;
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}