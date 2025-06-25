import DoctorCard from "@/components/common/card/DoctorCard";

export default function DoctorList ({categories}: {categories: string}){
    const doctorsList = [
        {
            image:"/doctorimg1.png",
            name:"Dr. Richard James",
            speciality:"General physician",
            status:"Available",
        },
        {
            image:"/doctorimg2.png",
            name:"Dr. Richard James",
            speciality:"Gynecologist",
            status:"Available",
        },
        {
            image:"/doctorimg3.png",
            name:"Dr. Richard James",
            speciality:"Dermatologist",
            status:"Available",
        },
        {
            image:"/doctorimg4.png",
            name:"Dr. Richard James",
            speciality:"Pediatricians",
            status:"Available",
        },
        {
            image:"/doctorimg5.png",
            name:"Dr. Richard James",
            speciality:"Neurologist",
            status:"Available",
        },
        {
            image:"/doctorimg6.png",
            name:"Dr. Richard James",
            speciality:"Dermatologist",
            status:"Available",
        },
        {
            image:"/doctorimg7.png",
            name:"Dr. Richard James",
            speciality:"Pediatricians",
            status:"Available",
        },
        {
            image:"/doctorimg8.png",
            name:"Dr. Richard James",
            speciality:"Gynecologist",
            status:"Available",
        },
        {
            image:"/doctorimg9.png",
            name:"Dr. Richard James",
            speciality:"Neurologist",
            status:"Available",
        },
        {
            image:"/doctorimg10.png",
            name:"Dr. Richard James",
            speciality:"Dermatologist",
            status:"Available",
        },
        {
            image:"/doctorimg11.png",
            name:"Dr. Richard James",
            speciality:"Pediatricians",
            status:"Available",
        },
        {
            image:"/doctorimg12.png",
            name:"Dr. Richard James",
            speciality:"Gastroenterologist",
            status:"Available",
        },
        {
            image:"/doctorimg13.png",
            name:"Dr. Richard James",
            speciality:"Gastroenterologist",
            status:"Available",
        },
        {
            image:"/doctorimg14.png",
            name:"Dr. Richard James",
            speciality:"Pediatricians",
            status:"Available",
        },
        {
            image:"/doctorimg15.png",
            name:"Dr. Richard Jame",
            speciality:"Neurologist",
            status:"Available",
        },
    ]
    return (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 gap-8 ">
            {doctorsList.filter((doctor) => categories === '' || doctor?.speciality === categories).map((doctor, index) => (
                <DoctorCard 
                mainClasses="lg:!min-w-[274px]  md:!min-w-[225px] sm:!min-w-[200px]"
                key={index}
                image={doctor.image}
                name={doctor.name}
                speciality={doctor.speciality}
                status={doctor.status}
                imgClasses="object-cover"
                />
            ))}
        </div>
    )
}