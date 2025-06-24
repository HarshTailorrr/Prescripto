import CommonButton from "@/components/common/CommonButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function LandingHero() {
  return (
    <section className="relative w-full">
      <div className="overflow-hidden px-4">
        <div className="max-w-[1440px] mx-auto flex lg:flex-row flex-col gap-8 items-center justify-center bg-theme-color rounded-xl">
          <div className="flex flex-col justify-center gap-6 px-4 lg:px-6">
            <h1 className="font-outfit font-semibold text-3xl sm:text-4xl sm:mt-8 mt-8 md:mt-6 lg:mt-0 md:text-4xl lg:text-5xl text-white max-w-[600px] leading-[1.2]">
              Book Appointment With Trusted Doctors
            </h1>
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="relative flex ">
                <Avatar className=" w-18 h-18 lg:w-14 lg:h-14">
                  <AvatarImage
                    src="/heroavatarimg1.png"
                    className="object-cover object-left-top aspect-auto w-full h-full"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className=" w-18 h-18 lg:w-14 lg:h-14 absolute lg:left-10 left-14">
                  <AvatarImage
                    src="/heroavatarimg2.png"
                    className="object-cover aspect-auto w-full h-full"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className=" w-18 h-18 lg:w-14 lg:h-14 absolute lg:left-20 left-28">
                  <AvatarImage
                    src="/heroavatarimg3.png"
                    className="object-cover aspect-auto w-full h-full"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <p className="text-white font-outfit text-sm sm:text-base relative lg:left-[80px] lg:text-lg max-w-[400px] sm:max-w-[500px] sm:left-0 left-0">
                Simply browse through our extensive list of trusted doctors,
                schedule your appointment hassle-free.
              </p>
            </div>
            <div className="mt-6">
              <CommonButton className="w-full sm:w-auto bg-white px-6 sm:px-8 py-2 text-sm sm:text-base text-outfit cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-in-out group">
                <Link
                  href={"#0"}
                  className="flex items-center justify-center gap-2"
                >
                  Book appointment{" "}
                  <MoveRight
                    size={14}
                    className="group-hover:translate-x-2 transition-all duration-300 ease-in-out"
                  />
                </Link>
              </CommonButton>
            </div>
          </div>
          <div className=" w-full sm:w-auto flex items-end justify-center">
            <Image 
              src={"/herobgimg.png"} 
              width={800}
              height={596}
              alt="bg-img"
              className="w-full sm:w-[400px] md:w-[600px] lg:w-[800px] h-full 
               rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
