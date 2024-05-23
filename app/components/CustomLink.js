"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CustomLink({ path, children, prefetch = true }) {
    const pathname = usePathname();
    const active = pathname === path;
    return (
        <Link className={active ? "text-blue-500" : ""} href={path} prefetch={prefetch}>{children}</Link>
    )
}
