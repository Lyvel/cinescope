"use client";
import { navbarLinks } from "@/assets/constants";
import Hamburger from "hamburger-react";
import Link from "next/link";
import { useState } from "react";
export default function MobileMenu() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="z-10 xl:hidden">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      {isOpen && (
        <nav className="fixed bg-[#252525] top-0 left-0 right-0 bottom-0 py-32 px-16">
          <ul className="flex flex-col items-end text-3xl gap-5">
            {navbarLinks.map((link) => (
              <li key={link.title}>
                <Link href={link.href} onClick={() => setOpen(false)}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
