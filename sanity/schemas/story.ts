// sanity/schemas/story.ts
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'story',
    title: 'Historia',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Tytuł',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'publishedAt',
            title: 'Data publikacji',
            type: 'datetime',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'excerpt',
            title: 'Krótki opis',
            type: 'text',
            validation: Rule => Rule.max(200)
        }),
        defineField({
            name: 'mainImage',
            title: 'Zdjęcie główne',
            type: 'image',
            options: {
                hotspot: true
            }
        }),
        defineField({
            name: 'body',
            title: 'Treść',
            type: 'array',
            of: [{ type: 'block' }],
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'category',
            title: 'Kategoria',
            type: 'string',
            options: {
                list: [
                    { title: 'Kariera', value: 'kariera' },
                    { title: 'Rekrutacja', value: 'rekrutacja' },
                    { title: 'Rynek pracy', value: 'rynek-pracy' },
                    { title: 'Sukces', value: 'sukces' }
                ]
            }
        }),
        defineField({
            name: 'author',
            title: 'Autor',
            type: 'string'
        })
    ]
})