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
if (request.nextUrl.pathname === '/productinvestor') {
return new URL('https://drive.google.com/file/d/18AIx44g9hG1LssX0QldppegIAWxtxGcQ/view?usp=drivesdk');
}

  return NextResponse.next();
}

export const config = {
  matcher: ['/investordeck', '/2pagerdeck', '/productinvestor'],
};
