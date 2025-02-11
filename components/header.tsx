import Image from "next/image";
import logo from "@/images/download.png";
import Link from "next/link";

const navLinks = [
  { title: "Strona Główna", href: "/" },
  { title: "Posty", href: "/posts" },
];

const Header = () => {
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
                <Link href={link.href} className="text-zinc-400">
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
