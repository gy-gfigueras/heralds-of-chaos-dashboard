// filepath: /api/data/characters/[identifier]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { ELogs } from '@/utils/constants/ELogs';

export const POST = async (req: NextRequest) => {
  try {
    const baseUrl = process.env.GY_API?.replace(/['"]/g, '');
    const body = await req.json();
    const { identifier, lang = 'en' } = body;

    const apiUrl = `${baseUrl}/heraldsofchaos/worlds/get?id=${identifier}&lang=${lang}`;
    console.log('API URL:', apiUrl);

    const charactersResponse = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!charactersResponse.ok) {
      throw new Error(`GyCoding API Error:` + charactersResponse.statusText);
    }

    const character = await charactersResponse.json();

    return NextResponse.json(character, {
      status: 200,
    });
  } catch (error) {
    console.error('Error in /api/data/worlds/world/[identifier]:', error);

    return NextResponse.json(
      { error: error instanceof Error ? error.message : ELogs.UNKNOWN_ERROR },
      { status: 500 }
    );
  }
};
