import CommonButton from "@/components/common/CommonButton";

interface DoctorsCategoriesProps {
    categories: string;
    setCategories: (categories: string) => void;
}

const DOCTOR_CATEGORIES = [
    "General physician",
    "Gynecologist",
    "Dermatologist",
    "Pediatricians",
    "Neurologist",
    "Gastroenterologist",
] as const;


export default function DoctorsCategories({
  categories,
  setCategories,
}: DoctorsCategoriesProps) {
    console.log(categories)
  return (
    <div className="flex lg:flex-col md:flex-col sm:flex-row flex-row flex-wrap gap-3">
      {DOCTOR_CATEGORIES.map((items: string, index:number) => (
        <CommonButton
          key={index}
          className={`max-w-[210px] rounded-md py-3 text-gray-primary-100 font-outfit text-base cursor-pointer hover:bg-button-hover ${categories === items ? "bg-button-hover" : "bg-transparent"}`}
          variant="outline"
          handleClick={() => setCategories(items)}
        >
          {items}
        </CommonButton>
      ))}
    </div>
  );
}
