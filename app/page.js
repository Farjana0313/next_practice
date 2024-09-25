import getJoke from "@/utils/getJoke";
import { cookies } from "next/headers";
import Image from "next/image";

export default async function Home() {
  // const theme = cookies().get("theme");
  const joke = await getJoke();
  console.log('joke', joke);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     {joke.value}
    </main>
  );
}
