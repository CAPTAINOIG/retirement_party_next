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
  if (request.nextUrl.pathname.toLowerCase() === '/ideck') {
    return NextResponse.redirect(
      new URL('https://drive.google.com/file/d/1OEOeldgTZrFNDNbxQ6ZIKpoCwRrH_Xf7/view?usp=sharing')
    );
  }
  if (request.nextUrl.pathname.toLowerCase() === '/ideck_teaser') {
    return NextResponse.redirect(
      new URL('https://drive.google.com/file/d/1iRMp0cueG99ehRp7-RX3SbMce9y_dizw/view?usp=sharing')
    );
  }
  if (request.nextUrl.pathname.toLowerCase() === '/dataroom') {
    return NextResponse.redirect(
      new URL(
        'https://www.dropbox.com/scl/fo/a3t0vn1aiemm55iotq0ds/AGOFqrEIxt1SRhjZATTIVVs?rlkey=13eso48o42nrc5elotejayqrs&st=qzfirhg0&dl=0'
      )
    );
  }
  if (/^\/analysts?$/i.test(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/analysts', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/investordeck',
    '/2pagerdeck',
    '/ideck',
    '/ideck_teaser',
    '/product(.*)',
    '/dataroom',
    '/analyst',
    '/Analyst',
    '/ANALYST',
    '/Analysts',
    '/ANALYSTS',
  ],
};
