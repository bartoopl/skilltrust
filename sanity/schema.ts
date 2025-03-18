// sanity/schema.ts
import { type SchemaTypeDefinition } from 'sanity'
import job from './schemas/job'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [job],
}