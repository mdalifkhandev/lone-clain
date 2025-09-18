"use server"
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

export async function GET() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  if (!accessToken) {
    return NextResponse.json({ isLoggedIn: false, user: null });
  }

  try {
    const decodedToken: any = jwt.verify(accessToken, process.env.JWT_SECRET as string);

    const user = {
      id: decodedToken.id,
      name: decodedToken.name,
      email: decodedToken.email,
    };

    return NextResponse.json({ isLoggedIn: true, user });
  } catch (error) {
    return NextResponse.json({ isLoggedIn: false, user: null });
  }
}