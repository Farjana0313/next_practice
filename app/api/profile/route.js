import { Cookie } from "next/font/google";
import { cookies, headers } from "next/headers";

export async function GET(request) {
    // const requestHeader = new Headers(request.headers);
    const headerList = headers()

    // console.log(requestHeader.get("Authorization"));
    console.log(headerList.get("Authorization"));
    cookies().set("page",2);
    console.log(request.cookies.get("theme"));
    console.log(cookies().get("page"));

    return new Response("Porfile api", {
        headers: {
            "Set-Cookie": "theme=dark"
        }
    });
}