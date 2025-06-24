import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import CommonButton from "../common/CommonButton";
import { Menu } from "lucide-react";
import HeaderDropDown from "./headerDropDown";

export default function Header() {
  const navItems = [
    {
      nav: "Home",
      path: "/",
    },
    {
      nav: "All Doctors",
      path: "/",
    },
    {
      nav: "About",
      path: "/",
    },
    {
      nav: "Contact",
      path: "/",
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
                className="font-inter font-medium text-base text-primary-dark"
              >
                {items.nav}
              </Link>
            </li>
          ))}
        </ul>
        <CommonButton className="bg-theme-color font-outfit cursor-pointer px-9 !py-2.5 text-lg font-normal leading-6 h-auto hover:bg-theme-color/80 transition-all duration-300 ease-in-out">
          <Link href={'#'}>
          Create account
          </Link>
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
            alt = 'logo'
          />
                  <CommonButton className="bg-theme-color font-outfit cursor-pointer px-3 !py-1.5  text-xs font-normal leading-6 h-auto hover:bg-theme-color/80 transition-all duration-300 ease-in-out">
          Create account
        </CommonButton>
      </div>
    </>
  );
}
