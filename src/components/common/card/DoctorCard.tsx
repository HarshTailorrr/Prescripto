import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface DoctorCardProps {
    image : string,
    name : string,
    speciality : string,
    status : string,
    imgClasses : string
    mainClasses? :string
}

export default function DoctorCard({image,name,speciality,status,imgClasses,mainClasses}:DoctorCardProps) {
  return (
    <div className={`${mainClasses} lg:min-w-[230px] max-w-[274px] border border-border-secondary rounded-lg bg-gray-primary-150`}>
      <div className="max-h-[273px] min-h-[273px] rounded-t-xl flex justify-center">
        <Image
          src={image}
          width={210}
          height={262}
          alt="doctorimg1"
          className={`object-cover ${imgClasses}`}
        />
      </div>
      <div className="px-3 py-4 bg-white rounded-b-lg">
        <Badge className="flex gap-1 bg-transparent items-center p-0">
          <div className="w-2 h-2 rounded-full bg-green-primary"></div>
          <p className="text-green-primary text-base font-normal font-outfit">
            {status}
          </p>
        </Badge>
        <h3 className="font-outfit mt-1.5 font-medium text-xl text-primary-dark">
          {name}
        </h3>
        <p className="mt-1.5 text-gray-primary-100 text-base">{speciality}</p>
      </div>
    </div>
  );
}
