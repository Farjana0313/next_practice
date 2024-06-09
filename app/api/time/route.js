export const dynamic = "force-dynamic"
export async function GET(rquest) {
    return new Response(new Date().toLocaleTimeString());
}