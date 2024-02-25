import { navbarLinks } from "@/assets/constants";
import { clearGenres } from "@/lib/features/genres/slice";
import { useAppDispatch } from "@/lib/hooks";
import Link from "next/link";
import MobileMenu from "./mobile-menu";
import NavbarLink from "./navbar-link";
import SearchBar from "./search-bar";

interface NavbarProps {
  currentPage: string;
}

/**
 * A component representing the navigation bar.
 * @param {Object} props - The props object containing the current page.
 * @param {string} props.currentPage - The title of the current page.
 * @returns {JSX.Element} JSX representing the navigation bar component.
 */

export default function Navbar({ currentPage }: NavbarProps) {
  return (
    <header>
      <nav className="xl:flex justify-between items-center" role="navigation">
        <div className="flex gap-10 justify-between xl:justify-normal items-center">
          <h2 className="text-xl font-bold">
            <NavbarLink href={"/"} title={""} currentPage={currentPage}>
              Cine<span className="text-green-400">Scope</span>
            </NavbarLink>
          </h2>
          <MobileMenu />
          <ul
            className="xl:flex text-xl font-light gap-10 hidden"
            role="menubar"
          >
            {navbarLinks.map((link) => (
              <li key={link.title}>
                <NavbarLink
                  href={link.href}
                  title={link.title}
                  currentPage={currentPage}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden xl:flex">
          <SearchBar />
        </div>
      </nav>
    </header>
  );
}
