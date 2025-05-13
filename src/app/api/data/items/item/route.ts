// filepath: /api/data/characters/[identifier]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { sendLog } from '@/utils/logs/logHelper';
import { ELevel } from '@/utils/constants/ELevel';
import { ELogs } from '@/utils/constants/ELogs';

export const POST = async (req: NextRequest) => {
  try {
    const baseUrl = process.env.GY_API?.replace(/['"]/g, '');
    const body = await req.json();
    const { identifier, lang = 'en' } = body;

    const apiUrl = `${baseUrl}/heraldsofchaos/items/${identifier}?lang=${lang}`;
    console.log('API URL:', apiUrl);

    const itemsResponse = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!itemsResponse.ok) {
      const errorText = await itemsResponse.text();
      await sendLog(ELevel.ERROR, ELogs.PROFILE_COULD_NOT_BE_RECEIVED, {
        error: errorText,
      });
      throw new Error(`GyCoding API Error: ${errorText}`);
    }

    const item = await itemsResponse.json();

    return NextResponse.json(item, {
      status: 200,
    });
  } catch (error) {
    console.error('Error in /api/data/items/[identifier]:', error);

    return NextResponse.json(
      { error: error instanceof Error ? error.message : ELogs.UNKNOWN_ERROR },
      { status: 500 }
    );
  }
};
