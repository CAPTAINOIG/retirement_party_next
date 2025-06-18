import { NextResponse } from 'next/server';

export function middleware(request) {
  if (request.nextUrl.pathname === '/investordeck') {
    return NextResponse.redirect(
      new URL('https://drive.google.com/file/d/1iUrEK2Maxo--GGeYJ7rBzPSj-S6ycfJF/view?usp=sharing')
    );
  }
  if (request.nextUrl.pathname === '/2pagerdeck') {
    return NextResponse.redirect(
      new URL('https://drive.google.com/file/d/1vo9mlA-Bo1_vWXqj58VQBqy-mYr77bxI/view?usp=sharing')
    );
  }
  if (request.nextUrl.pathname.toLowerCase() === '/productinvestor') {
    return NextResponse.redirect(
      new URL('https://drive.google.com/file/d/1on7Dx35DtcDNkVDWy2s8i2E3AdaAI8UE/view?usp=sharing')
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/investordeck', '/2pagerdeck', '/product(.*)'],
};
