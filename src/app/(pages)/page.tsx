import AppointmentBanner from "@/components/section/appointmentBanner";
import FindBySpeciality from "@/components/section/findbyspeciality";
import LandingHero from "@/components/section/landing/heroSection";
import TopDoctor from "@/components/section/topDoctor.tsx";

export default function Page() {
    return (
        <>
        <LandingHero />
        <FindBySpeciality />
        <TopDoctor />
        <AppointmentBanner />
        </>
    )
}
