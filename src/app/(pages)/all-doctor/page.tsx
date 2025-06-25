import AllDoctor from "@/components/section/all-doctor";

export default function Page() {
  return (
    <section className="max-w-[1440px] mx-auto">
      <div className="overflow-hidden px-6">
        <p className="text-outfit font-normal text-lg text-gray-primary-100">
          Browse through the doctors specialist.
        </p>
        <div className="mt-9">
            <AllDoctor />
        </div>
      </div>
    </section>
  );
}
