import { navbarLinks } from "@/assets/constants";
import { clearGenres } from "@/lib/features/genres/slice";
import { useAppDispatch } from "@/lib/hooks";
import Link from "next/link";
import MobileMenu from "./mobile-menu";
import SearchBar from "./search-bar";

interface NavbarProps {
  currentPage: string;
}

export default function Navbar({ currentPage }: NavbarProps) {
  return (
    <nav className="xl:flex justify-between items-center">
      <div className="flex gap-10 justify-between xl:justify-normal items-center">
        <h1 className="text-xl font-bold">
          <Link href={"/"}>
            Cine<span className="text-green-400">Scope</span>
          </Link>
        </h1>
        <MobileMenu />
        <ul className="xl:flex text-xl font-light gap-10 hidden">
          {navbarLinks.map((link) => (
            <li key={link.title}>
              <Link
                href={link.href}
                className={`${
                  currentPage === link.title && "border-b-2 border-green-400"
                } hover:text-green-400`}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden xl:flex">
        <SearchBar />
      </div>
    </nav>
  );
}
