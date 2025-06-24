import DoctorCard from "@/components/common/card/DoctorCard";
import CommonButton from "@/components/common/CommonButton";
import Link from "next/link";

export default function TopDoctor() {
  const doctorList = [
    {
      img: "doctorimg1.png",
      name: "Dr. Richard James",
      speciality: "General physician",
    },
    {
      img: "doctorimg2.png",
      name: "Dr. Richard James",
      speciality: "General physician",
    },
    {
      img: "doctorimg3.png",
      name: "Dr. Richard James",
      speciality: "General physician",
    },
    {
      img: "doctorimg4.png",
      name: "Dr. Richard James",
      speciality: "General physician",
    },
    {
      img: "doctorimg5.png",
      name: "Dr. Richard James",
      speciality: "General physician",
    },
    {
      img: "doctorimg1.png",
      name: "Dr. Richard James",
      speciality: "General physician",
    },
    {
      img: "doctorimg2.png",
      name: "Dr. Richard James",
      speciality: "General physician",
    },
    {
      img: "doctorimg3.png",
      name: "Dr. Richard James",
      speciality: "General physician",
    },
    {
      img: "doctorimg4.png",
      name: "Dr. Richard James",
      speciality: "General physician",
    },
    {
      img: "doctorimg5.png",
      name: "Dr. Richard James",
      speciality: "General physician",
    },
  ];
  return (
    <section className="mx-auto">
      <div className="overflow-hidden px-4 ">
        <div className="lg:max-w-[1440px] mx-auto lg:pt-28">
          <h2 className="font-medium lg:mt-0 mt-10 text-[40px] font-outfit text-primary-dark text-center">
            Top Doctors to Book
          </h2>
          <p className="text-center lg:max-w-[570px] text-gray-primary-100 mx-auto lg:text-lg text-base font-normal mt-3 ">
            Simply browse through our extensive list of trusted doctors.
          </p>
          <div className="mx-auto mt-10 grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 gap-5 lg:px-0 px-2">
            {doctorList.map((doctor, index) => (
              <Link key={index} href={"#0"} className="group flex justify-center" >
                <DoctorCard
                  imgClasses="group-hover:scale-95 transition-all duration-300"
                  image={`/${doctor.img}`}
                  name={doctor.name}
                  speciality={doctor.speciality}
                  status="Available"
                />
              </Link>
            ))}
          </div>
          <div className="mt-14 flex justify-center">
            <CommonButton className="px-12 py-2 text-gray-primary-100 bg-gray-primary-150 text-xl font-outfit cursor-pointer hover:bg-gray-primary-100 transition-all duration-300 ease-in-out hover:text-white">
                <Link href="#0">more</Link>
            </CommonButton>
          </div>
        </div>
      </div>
    </section>
  );
}
