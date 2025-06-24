import CommonButton from "@/components/common/CommonButton";
import Link from "next/link";
import Image from "next/image";

export default function AppointmentBanner() {
  return (
    <section className="mx-auto mb-24">
      <div className="px-4">
        <div className="max-w-[1440px] flex justify-between items-center bg-theme-color lg:px-[100px] lg:py-20 rounded-md mx-auto mt-20 max-h-[450px]">
          <div className="flex flex-col lg:items-start items-center justify-center lg:w-auto w-full">
            <h2 className="max-w-[636px] lg:text-left lg:mt-0 mt-6 text-center lg:text-5xl text-3xl  font-bold text-white lg:leading-20 leading-10">
              Book Appointment With 100+ Trusted Doctors
            </h2>
            <CommonButton className="px-8 py-2.5 text-lg text-gray-primary-100 bg-white mt-9 cursor-pointer hover:bg-white/90 transition-all duration-300 ease-in-out max-w-[200px] lg:mb-0 mb-6">
              <Link href={"#0"}>create account</Link>
            </CommonButton>
          </div>
          <div className="relative min-w-[580px] min-h-[529px] lg:block hidden bottom-9.5 right-0">
            <Image
            src="/appointment-doc-img.png"
            width={580}
            height={529}
            alt="appointment-doc-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
