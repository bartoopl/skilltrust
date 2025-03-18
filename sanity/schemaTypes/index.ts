import { type SchemaTypeDefinition } from 'sanity'
import job from "@/sanity/schemas/job";
import candidate from "@/sanity/schemas/candidate";
import story from "@/sanity/schemas/story";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [job, candidate, story],
}
