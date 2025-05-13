// filepath: /api/data/characters/[identifier]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { sendLog } from '@/utils/logs/logHelper';
import { ELevel } from '@/utils/constants/ELevel';
import { ELogs } from '@/utils/constants/ELogs';

export const POST = async (req: NextRequest) => {
  try {
    const baseUrl = process.env.GY_API?.replace(/['"]/g, '');
    const body = await req.json();
    const { identifier, language } = body;

    const apiUrl = `${baseUrl}/heraldsofchaos/characters/${identifier}?lang=${language}`;
    console.log('API URL:', apiUrl);

    const charactersResponse = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!charactersResponse.ok) {
      const errorText = await charactersResponse.text();
      await sendLog(ELevel.ERROR, ELogs.PROFILE_COULD_NOT_BE_RECEIVED, {
        error: errorText,
      });
      throw new Error(`GyCoding API Error: ${errorText}`);
    }

    const character = await charactersResponse.json();

    return NextResponse.json(character, {
      status: 200,
    });
  } catch (error) {
    console.error('Error in /api/data/characters/[identifier]:', error);

    return NextResponse.json(
      { error: error instanceof Error ? error.message : ELogs.UNKNOWN_ERROR },
      { status: 500 }
    );
  }
};
