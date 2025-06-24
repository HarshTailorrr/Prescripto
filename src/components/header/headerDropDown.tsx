"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import CommonButton from "@/components/common/CommonButton";

interface NavItem {
  nav: string;
  path: string;
}

interface HeaderDropDownProps {
  navItems: NavItem[];
}

export default function HeaderDropDown({ navItems }: HeaderDropDownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <div
            className="cursor-pointer border p-1.5"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[100vw] mt-2 h-screen  lg:hidden md:hidden block">
          <DropdownMenuLabel className="text-md text-primary-dark">
            Where do you want to go
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <div className="flex flex-col justify-between h-[calc(100%-10%)] w-full">
            <div>
              {navItems.map((items, index) => (
                <DropdownMenuItem
                  key={index}
                  className="hover:bg-gray-200 transition-all duration-300 ease-in-out group"
                  onClick={() => setIsOpen(false)}
                >
                  <Link
                    href={items.path}
                    className="w-full text-base text-primary-dark group-hover:text-theme-color transition-all duration-300 ease-in-out"
                  >
                    {items.nav}
                  </Link>
                </DropdownMenuItem>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <DropdownMenuItem className="!hover:bg-transparent  focus:bg-transparent">
                <CommonButton className="w-full rounded-none py-2 text-lg font-outfit bg-theme-color cursor-pointer hover:bg-theme-color/90">
                  <Link href="#">Login</Link>
                </CommonButton>
              </DropdownMenuItem>
              <DropdownMenuItem className="!hover:bg-transparent   focus:bg-transparent">
                <CommonButton className="w-full rounded-none py-2 text-lg font-outfit cursor-pointer" variant="outline">
                  <Link href="#">Sing in</Link>
                </CommonButton>
              </DropdownMenuItem>
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
