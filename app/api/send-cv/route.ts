import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const file = formData.get('file');
    
    // Here you would process the CV file and send it to your backend or email
    // Example: send to email service or save to database
    
    console.log('Received CV submission:', { name, email, file });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing CV submission:', error);
    return NextResponse.json(
      { error: 'Failed to process CV submission' },
      { status: 500 }
    );
  }
}