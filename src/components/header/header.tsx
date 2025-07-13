"use client";
import Image from "next/image";
import Link from "next/link";
import CommonButton from "@/components/common/CommonButton";
import HeaderDropDown from "./headerDropDown";
import { usePathname } from "next/navigation";

interface DecodedToken {
  id?: string;
  userId?: string;
  user_id?: string;
}

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    {
      nav: "Home",
      path: "/",
    },
    {
      nav: "All Doctors",
      path: "/all-doctor",
    },
    {
      nav: "About",
      path: "/#0",
    },
    {
      nav: "Contact",
      path: "/#0",
    },
  ];

  return (
    <>
      <div className="mx-auto lg:max-w-[1440px] p-4 lg:flex md:flex hidden items-center justify-between border-b border-primary-border">
        <div>
          <Image
            src={"/logo-prescripto.png"}
            width={170}
            height={35}
            alt="logo"
          />
        </div>
        <ul className="flex gap-5">
          {navItems.map((items, index) => (
            <li key={index}>
              <Link
                href={items.path}
                className={`font-inter font-medium text-base text-primary-dark pb-1 transition-all duration-400 ease-in-out ${
                  pathname === items.path
                    ? "border-b-2 border-theme-color"
                    : "border-b-2 border-transparent"
                }`}
              >
                {items.nav}
              </Link>
            </li>
          ))}
        </ul>
        <CommonButton className="bg-theme-color font-outfit cursor-pointer px-9 !py-2.5 text-lg font-normal leading-6 h-auto hover:bg-theme-color/80 transition-all duration-400 ease-in-out">
          <Link href="/singup">Create account</Link>
        </CommonButton>
      </div>

      {/* for mobile screen */}

      <div className="w-full lg:hidden md:hidden flex justify-between p-2 items-center">
        <div>
          <HeaderDropDown navItems={navItems} />
        </div>
        <Image
          src={"/logo-prescripto.png"}
          width={180}
          height={30}
          alt="logo"
        />
        <CommonButton className="bg-theme-color font-outfit cursor-pointer px-9 !py-2.5 text-lg font-normal leading-6 h-auto hover:bg-theme-color/80 transition-all duration-400 ease-in-out">
          <Link href="/singup">Create account</Link>
        </CommonButton>
      </div>
    </>
  );
}
