import { NextRequest, NextResponse } from 'next/server';
import { sendLog } from '@/utils/logs/logHelper';
import { ELevel } from '@/utils/constants/ELevel';
import { ELogs } from '@/utils/constants/ELogs';

export const GET = async (req: NextRequest) => {
  try {
    const baseUrl = process.env.GY_API?.replace(/['"]/g, '');
    const searchParams = req.nextUrl.searchParams;
    const language = searchParams.get('lang') || 'en';

    const apiUrl = `${baseUrl}/heraldsofchaos/characters/list?lang=${language}`;
    console.log('API URL:', apiUrl);

    const charactersResponse = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('Characters Response:', charactersResponse);

    if (!charactersResponse.ok) {
      const errorText = await charactersResponse.text();
      await sendLog(ELevel.ERROR, ELogs.PROFILE_COULD_NOT_BE_RECEIVED, {
        error: errorText,
      });
      throw new Error(`GyCoding API Error: ${errorText}`);
    }

    const characters = await charactersResponse.json();

    return NextResponse.json(characters, {
      status: 200,
    });
  } catch (error) {
    console.error('Error in /api/data/characters:', error);

    return NextResponse.json(
      { error: error instanceof Error ? error.message : ELogs.UNKNOWN_ERROR },
      { status: 500 }
    );
  }
};
