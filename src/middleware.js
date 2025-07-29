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
        'https://www.dropbox.com/scl/fo/egibgzo6b1gs0h9bxvo87/ACfXbWT6hECJjGIKE2hCN84?rlkey=ltqyl0p24lfd471t40zbu3oju&st=47ag9hub&dl=0'
      )
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/investordeck', '/2pagerdeck', '/ideck', '/ideck_teaser', '/product(.*)', '/dataroom'],
};
