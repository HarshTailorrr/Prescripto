import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  const navItmes = [
    {
      nav: "Home",
      path: "/#0",
    },
    {
      nav: "About us",
      path: "/#0",
    },
    {
      nav: "Contact us",
      path: "/#0",
    },
    {
      nav: "Privacy policy",
      path: "/#0",
    },
  ];
  return (
    <footer className="max-w-[1440px] mx-auto px-4">
      <div className="overflow-hidden">
        <div className="flex justify-between border-b-2 border-black/20 pb-10">
          <div className="lg:block hidden">
            <Image
              src="/logo-prescripto.png"
              width={180}
              height={80}
              alt="logo-prescripto"
            />
            <p className="max-w-[640px] mt-10 text-lg text-gray-primary-100 font-outfit ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
            <div>
              <h4 className="lg:text-lg text-base font-outfit text-gray-primary-100 font-semibold">
                COMPANY
              </h4>
              <ul className="mt-10 flex flex-col gap-2">
                {navItmes.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="lg:text-lg text-sm font-outfit text-gray-primary-100"
                    >
                      <Link href={item.path}>{item.nav}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
                <h4 className="lg:text-lg text-base font-outfit text-gray-primary-100 font-semibold">GET IN TOUCH</h4>
                <ul className="mt-10 flex flex-col gap-2">
                    <li className="lg:text-lg text-sm font-outfit text-gray-primary-100">
                        <p>+1-212-456-7890</p>
                    </li>
                    <li className="lg:text-lg text-sm font-outfit text-gray-primary-100">
                        <p>greatstackdev@gmail.com</p>
                    </li>
                </ul>
            </div>
        </div>
        <p className="text-center text-sm text-gray-primary-100 py-8">Copyright © 2025 GreatStack - All Right Reserved.</p>
      </div>
    </footer>
  );
}
