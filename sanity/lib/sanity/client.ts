import { createClient } from 'next-sanity';
import { config } from './config';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient(config);

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source);
}