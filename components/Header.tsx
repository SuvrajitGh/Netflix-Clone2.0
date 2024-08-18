"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, seIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        seIsScrolled(true);
      } else {
        seIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header className={
        `fixed w-full z-50 top-0 flex items-center justify-between p-5 bg-gradient-to-t from-gray-200/0 via-[#141414]/25 to-[#141414]
        ${isScrolled && 'bg-[#141414]'}
        `
      }>
        <div className="flex items-center space-x-2 ">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Netflix Logo"
              width={120}
              height={100}
              className="cursor-pointer"
            />
          </Link>
          <ul className="hidden space-x-4 md:flex">
            <Link
              className="cursor-pointer text-sm text-[#e5e5e5] transition duration-[.4s] hover:text-[#b3b3b3] font-semibold"
              href="/"
            >
              <li>Home</li>
            </Link>
            <Link
              className="cursor-pointer text-sm text-[#e5e5e5] transition duration-[.4s] hover:text-[#b3b3b3] font-semibold"
              href="/"
            >
              <li>TV Shows</li>
            </Link>
            <Link
              className="cursor-pointer text-sm text-[#e5e5e5] transition duration-[.4s] hover:text-[#b3b3b3] font-semibold"
              href="/"
            >
              <li>Movies</li>
            </Link>
            <Link
              className="cursor-pointer text-sm text-[#e5e5e5] transition duration-[.4s] hover:text-[#b3b3b3] font-semibold"
              href="/"
            >
              <li>New & Popular</li>
            </Link>
          </ul>
        </div>
        <div className="flex items-center space-x-2">
          <Search color="white" />
          <h3 className="font-semibold">Suvrajit</h3>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </header>
    </>
  );
};

export default Header;
