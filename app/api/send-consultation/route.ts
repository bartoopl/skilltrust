import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    try {
        const formData = await request.json()

        // Here you would typically send an email or save to database
        console.log('Received consultation request:', formData)

        // For now, just return success
        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Error processing consultation request:', error)
        return NextResponse.json(
            { error: 'Failed to process request' },
            { status: 500 }
        )
    }
}