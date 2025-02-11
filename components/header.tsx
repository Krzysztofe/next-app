"use client";
import Image from "next/image";
import logo from "@/images/download.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { title: "Strona Główna", href: "/" },
  { title: "Posty", href: "/posts" },
  { title: "Zapisz post", href: "/create-post" },
];

const Header = () => {
  const pathName = usePathname();

  return (
    <header className="flex items-center justify-between p-5 border-b">
      <Link href="/">
        <Image src={logo} alt="Logo" width={35} height={35} />
      </Link>

      <nav>
        <ul className="flex">
          {navLinks.map(link => {
            return (
              <li key={link.href} className="ml-5">
                <Link
                  href={link.href}
                  className={`${
                    pathName === link.href ? "text-zinc-900" : "text-zinc-400"
                  }`}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
