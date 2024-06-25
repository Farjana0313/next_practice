// import { NextResponse } from 'next/server'

import { NextResponse } from "next/server";
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
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

function getLocale(request) {
  const acceptedLanguage = request.headers.get("accept-language") ?? undefined;
  const headers = { 'accept-language': acceptedLanguage }
  const languages = new Negotiator({ headers });
  return match(languages, locales, defaultLocale)
}


export function middleware(request) {
  // get the pathname from request url
  const pathname = request.nextUrl.pathname;


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