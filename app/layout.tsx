'use client'
import type { Metadata } from "next";
import Link from "next/link";
import { useState } from "react";
import Button from "./UI/button";

import { motion } from "framer-motion";
import { MenuButton } from "./UI/menu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)

{
  const [ menuOpen, setMenuOpen ] = useState(false)
  
  const handleMenu = () => {
    setMenuOpen(prevState => !prevState);
  }
  
  return (
    <html lang="en">
      <body
      >
        <header className="text-white backdrop-blur-2xl sticky bg-accent px-7 md:px-24 lg:px-40 flex justify-between items-center py-4">
          <p className="">header</p>
          <nav className="flex gap-4">
            <Link href=''>Lorem</Link>
            <Link href=''>Lorem</Link>
            <Link href=''>Lorem</Link>
          </nav>
          <MenuButton  onClick={handleMenu}/>
          <Button
            onClick={() => {}}
            className="hidden md:flex hover:translate-x-[-10px]">
              Start Now
          </Button>
        </header>
        {menuOpen && (
          <motion.div 
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "tween", duration: 0.6 }}
            className="md:hidden w-full h-full fixed px-7 pt-2 flex flex-col gap-6 bg-accent text-white z-40">
            <ol>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
            </ol>
            <Button
              onClick={() => {}}
              className="md:hidden border-solid  hover:translate-y-[-10px]">
                Start Now
            </Button>
          </motion.div>
        )}
        <main className="px-7 md:px-24 lg:px-40">
          {children}
        </main>
      </body>
    </html>
  );
}
