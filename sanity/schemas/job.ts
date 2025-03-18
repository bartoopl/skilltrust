import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'job',
    title: 'Job',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: 'block' }],
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'company',
            title: 'Company',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'salary',
            title: 'Salary',
            type: 'number',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'industry',
            title: 'Industry',
            type: 'string',
            options: {
                list: [
                    { title: 'IT', value: 'IT' },
                    { title: 'Produkcja', value: 'Produkcja' },
                    { title: 'Automotive', value: 'Automotive' }
                ]
            },
            validation: Rule => Rule.required()
        })
    ]
})