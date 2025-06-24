import Image from "next/image";
import Link from "next/link";

export default function FindBySpeciality() {
    const specialityList =[
        {
            icon : 'generalphysician.svg',
            iconWidth : 82,
            iconHeight : 92,
            title : "General physician",
            path : "#0"
        },
        {
            icon : "gynecologist.svg",
            iconWidth : 62,
            iconHeight :104,
            title : "Gynecologist",
            path : "#0"
        },
        {
            icon : "dermatologist.svg",
            iconWidth : 75,
            iconHeight :90,
            title : "Dermatologist",
            path : "#0"
        },
        {
            icon : "pediatricians.svg",
            iconWidth : 76,
            iconHeight :86,
            title : "Pediatricians",
            path : "#0"
        },
        {
            icon : "neurologist.svg",
            iconWidth : 73,
            iconHeight :83,
            title : "Neurologist",
            path : "#0"
        },
        {
            icon : "gastroenterologist.svg",
            iconWidth : 67,
            iconHeight :82,
            title : "Gastroenterologist",
            path : "#0"
        },
    ]
  return (
    <section className="mx-auto">
      <div className="overflow-hidden">
        <div className="lg:max-w-[1440px] mx-auto lg:pt-28">
          <h2 className="font-medium lg:mt-0 mt-10 text-[40px] font-outfit text-primary-dark text-center">
            Find by Speciality
          </h2>
          <p className="text-center lg:max-w-[570px] text-gray-primary-100 mx-auto lg:text-lg text-base font-normal mt-3">
            Simply browse through our extensive list of trusted doctors,
            schedule your appointment hassle-free.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-16 pb-10 w-full max-w-[1440px] mx-auto">
           {
            specialityList.map((items,index)=>(
                <Link href={items.path} className="flex flex-col hover:-translate-y-4 transition-all duration-300 ease-in-out items-center gap-6 justify-center" key={index}>
                <div
                  className="w-[126px] h-[126px] flex items-center justify-center"
                  style={{
                    background: "url(/Ellipse.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <Image src={`/${items.icon}`} width={items.iconWidth} height={items.iconHeight} alt={`${items.title}`} />
                </div>
                  <p className="text-lg font-outfit font-normal text-gray-primary-100">{items.title}</p>
                </Link>
            ))
           }
          </div>
        </div>
      </div>
    </section>
  );
}
