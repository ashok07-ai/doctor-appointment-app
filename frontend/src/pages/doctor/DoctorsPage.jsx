import { doctors } from '../../assets/data/doctors'
import DoctorCard from '../../features/doctors/components/DoctorCard'
import Footer from '../../layouts/components/Footer'
import Header from '../../layouts/components/Header'
import TestimonialPage from '../TestimonialPage'

export default function DoctorsPage() {
  return (
    <>
      <Header />
      {/* list of doctors */}
      <section className="bg-[#fff9ea]">
        <div className="container text-center">
          <h2 className="heading">Find a Doctor</h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justjify-between">
            <input
              type="text"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none  placeholder:text-textColor"
              placeholder="Search doctor"
            />

            <button className="btn mt-0 rounded-[0px] rounded-r-md">
              Search
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-cols-4 gap-5">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>

      {/* testimonial section */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What our Patient say</h2>
            <p className="text_para text-center">
              World class card for everyone. Our Health System offers unmatched,
              expert health care
            </p>
          </div>

          <TestimonialPage />
        </div>
      </section>
      <Footer />
    </>
  )
}
