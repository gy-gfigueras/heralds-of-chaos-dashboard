import { NextResponse } from 'next/server';
import { sendLog } from '@/utils/logs/logHelper';
import { ELevel } from '@/utils/constants/ELevel';
import { ELogs } from '@/utils/constants/ELogs';

export const GET = async () => {
  try {
    const baseUrl = process.env.GY_API?.replace(/['"]/g, '');
    const apiUrl = `${baseUrl}/heraldsofchaos/creatures/list?lang=en`;
    console.log(apiUrl);
    const charactersResponse = await fetch(apiUrl);

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
    console.error('Error in /api/auth/user:', error);

    return NextResponse.json(
      { error: error instanceof Error ? error.message : ELogs.UNKNOWN_ERROR },
      { status: 500 }
    );
  }
};
