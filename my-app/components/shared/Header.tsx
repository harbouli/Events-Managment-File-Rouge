"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/assets/images/eventify.svg";
import { Button } from "../ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

function Header() {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-150">
          <Image
            className="transform transition duration-300 hover:scale-110"
            src={logo.src}
            alt="Eventify logo"
            width={150}
            height={34}
          />
        </Link>
        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">

            <NavItems />
          </nav>
        </SignedIn>
        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/"/>
            <MobileNav/>
          </SignedIn>
          <SignedOut>
            <Button
              asChild
              size="lg"
              className="bg-[#F2BD00] hover:bg-black text-black hover:text-white font-extrabold rounded-none "
            >
              <Link href="/sign-in" className="text-black">
                Login
              </Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
}

export default Header;
