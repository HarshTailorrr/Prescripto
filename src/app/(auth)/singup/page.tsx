import { SingUpForm } from "@/components/forms/singup-form";
import { GalleryVerticalEnd } from "lucide-react";
import Image from "next/image";

export default function Singup() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10 bg-gray-100/30">
        <div className="flex justify-center gap-2 md:justify-start lg:justify-center">
          <Image
          src='/logo-prescripto.png'
          alt="logo"
          width={150}
          height={50}
          className="object-cover"
          />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SingUpForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <Image
          src="/singupimg2.jpg"
          fill
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
