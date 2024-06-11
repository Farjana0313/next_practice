// import { NextResponse } from 'next/server'

import { NextResponse } from "next/server";

// // This function can be marked `async` if using `await` inside
// export function middleware(request) {

//   // if (request.url.includes("dashboard")) {
//     return NextResponse.redirect(new URL('/', request.url))
//   // }
//   // return NextResponse.next()

// }

// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/dashboard',
// }
let defaultLocale = 'en';
let locales = ['en', 'bn'];

function getLocale(request){
  
}

export function middleware(request) {
  // get the pathname from request url
  const pathname = request.nextUrl.pathname;
  console.log(pathname);
  const pathNameIsMissingLocale = locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}`) &&
      !pathname.startsWith(`/${locale}/`) 
  );
  if (pathNameIsMissingLocale) {
    // detect user's preference & redirect with a locale with a path en:/en/about
    const locale = getLocale(request);
    return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url))
  }
  return NextResponse.next();
}