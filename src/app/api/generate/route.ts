import { NextResponse } from 'next/server';
import OpenAI from 'openai';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { startupName, description } = await request.json();

    if (!startupName || !description) {
      return NextResponse.json(
        { error: 'Startup name and description are required' },
        { status: 400 }
      );
    }

    // Create the prompt for GPT-4
    const prompt = `Generate a comprehensive startup pitch package for a startup called "${startupName}" with the following description: "${description}". 

Please provide the following 4 components:

1. A concise elevator pitch (2-3 sentences)

2. A detailed SWOT analysis with 4-5 bullet points for each category (Strengths, Weaknesses, Opportunities, Threats)

3. A pitch deck outline with 10 slides (provide slide title and brief content description for each)

4. A 60-second video pitch script

Format the response as a JSON object with the following structure:
{
  "elevatorPitch": "...",
  "swotAnalysis": {
    "strengths": ["...", "..."],
    "weaknesses": ["...", "..."],
    "opportunities": ["...", "..."],
    "threats": ["...", "..."]
  },
  "pitchDeck": [
    {"title": "...", "content": "..."},
    ...
  ],
  "videoScript": "..."
}`;

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'You are an expert startup consultant who helps entrepreneurs create compelling pitches.',
        },
        { role: 'user', content: prompt },
      ],
      temperature: 0.7,
    });

    // Parse the response
    const responseContent = completion.choices[0]?.message?.content;
    if (!responseContent) {
      throw new Error('No response from OpenAI');
    }

    // Parse the JSON response
    const parsedResponse = JSON.parse(responseContent);

    return NextResponse.json(parsedResponse);
  } catch (error: any) {
    console.error('Error generating pitch:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to generate pitch' },
      { status: 500 }
    );
  }
}