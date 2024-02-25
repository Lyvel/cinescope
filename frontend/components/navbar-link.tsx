"use client";

import { clearGenres } from "@/lib/features/genres/slice";
import { useAppDispatch } from "@/lib/hooks";
import Link from "next/link";
import React from "react";

interface NavbarLinkProps {
  href: string;
  title: string;
  currentPage: string;
  children?: React.ReactNode;
}

export default function NavbarLink(props: NavbarLinkProps) {
  const dispatch = useAppDispatch();
  return (
    <Link
      href={props.href}
      className={`${
        props.currentPage === props.title && "border-b-2 border-green-400"
      } hover:text-green-400`}
      role="menuitem"
      onClick={() =>
        props.currentPage !== props.title ? dispatch(clearGenres()) : null
      }
    >
      {props.children || props.title}
    </Link>
  );
}
