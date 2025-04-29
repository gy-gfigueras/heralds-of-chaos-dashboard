import { NextResponse } from 'next/server';
import { sendLog } from '@/utils/logs/logHelper';
import { ELevel } from '@/utils/constants/ELevel';
import { ELogs } from '@/utils/constants/ELogs';

export const GET = async () => {
  try {
    const baseUrl = process.env.GY_API?.replace(/['"]/g, '');
    const apiUrl = `${baseUrl}/heraldsofchaos/items/list?lang=en`;
    const itemsResponse = await fetch(apiUrl);

    if (!itemsResponse.ok) {
      const errorText = await itemsResponse.text();
      await sendLog(ELevel.ERROR, ELogs.PROFILE_COULD_NOT_BE_RECEIVED, {
        error: errorText,
      });
      throw new Error(`GyCoding API Error: ${errorText}`);
    }

    const items = await itemsResponse.json();

    return NextResponse.json(items, {
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
