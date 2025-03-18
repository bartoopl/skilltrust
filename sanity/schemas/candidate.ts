import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'candidate',
    title: 'Kandydat',
    type: 'document',
    fields: [
        defineField({
            name: 'currentPosition',
            title: 'Dotychczasowe stanowisko',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'availability',
            title: 'Dostępność',
            type: 'string',
            options: {
                list: [
                    { title: 'Natychmiastowa', value: 'immediate' },
                    { title: '2 tygodnie', value: '2weeks' },
                    { title: '1 miesiąc', value: '1month' },
                    { title: '3 miesiące', value: '3months' },
                ]
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'skills',
            title: 'Kompetencje',
            type: 'array',
            of: [{ type: 'block' }],
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'experience',
            title: 'Doświadczenie',
            type: 'string',
            options: {
                list: [
                    { title: 'Junior (0-2 lata)', value: 'junior' },
                    { title: 'Mid (2-5 lat)', value: 'mid' },
                    { title: 'Senior (5-8 lat)', value: 'senior' },
                    { title: 'Expert (8+ lat)', value: 'expert' },
                ]
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'salary',
            title: 'Oczekiwane wynagrodzenie',
            type: 'number',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'location',
            title: 'Lokalizacja',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'industry',
            title: 'Branża',
            type: 'string',
            options: {
                list: [
                    { title: 'IT', value: 'IT' },
                    { title: 'Produkcja', value: 'Produkcja' },
                    { title: 'Automotive', value: 'Automotive' }
                ]
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'remote',
            title: 'Praca zdalna',
            type: 'boolean',
            initialValue: false
        })
    ]
})