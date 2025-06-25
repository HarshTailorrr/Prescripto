"use client"
import { useState } from "react";
import DoctorsCategories from "./Catogeries";
import DoctorList from "./DoctorList";

export default function AllDoctor(){
    const [categories, setCategories] = useState('')
    return(
        <div className="flex lg:flex-row md:flex-row sm:flex-col flex-col lg:gap-16 md:gap-10 sm:gap-6 gap-4 mb-40 justify-around">
            <DoctorsCategories categories={categories}  setCategories={setCategories} />
            <DoctorList categories={categories} />
        </div>
    )
}