import { Inter } from "next/font/google";
import "./globals.css";
import CustomLink from "./components/CustomLink";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="border-b border-gray-400 p-4">
          <ul className="flex gap-5">
            <li>
              <CustomLink path='/'>Home</CustomLink>
              </li>
            <li>
              <CustomLink path='/dashboard/analytics'>Analytics</CustomLink>
              </li>
            <li>
              <CustomLink path='/dashboard/settings' prefetch={false} >Settings</CustomLink>
              </li>
          </ul>
        </nav>
        {children}
        </body>
    </html>
  );
}
