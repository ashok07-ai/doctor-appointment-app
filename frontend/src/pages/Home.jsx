import Header from '../layouts/components/Header'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import heroImg01 from '../assets/images/hero-img01.png'
import heroImg02 from '../assets/images/hero-img02.png'
import heroImg03 from '../assets/images/hero-img03.png'
import icon01 from '../assets/images/icon01.png'
import icon02 from '../assets/images/icon02.png'
import icon03 from '../assets/images/icon03.png'
import About from '../features/about/About'

const doctorDetail = [
  {
    number: '30+',
    title: 'Years of Experience',
    color: 'bg-yellowColor',
  },
  {
    number: '15+',
    title: 'Clinic Location',
    color: 'bg-purpleColor',
  },
  {
    number: '100%',
    title: 'Patient Satisfaction',
    color: 'bg-irisBlueColor',
  },
]

const medicalService = [
  {
    title: 'Find a Doctor',
    icon: icon01,
  },
  {
    title: 'Find a Doctor',
    icon: icon02,
  },
  {
    title: 'Find a Doctor',
    icon: icon03,
  },
]

export default function Home() {
  return (
    <>
      <Header />
      <section className="hero_section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  We help patients live a healthy and longer life.
                </h1>

                <p className="text_para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  magnam autem quia fugit. Neque alias officiis excepturi
                  tempora deserunt molestias, rem aspernatur, eum nobis
                  exercitationem sit iusto facere ut fugiat.
                </p>
                <button className="btn">Request an Appointment</button>
              </div>

              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                {doctorDetail.map((data, index) => (
                  <div key={index}>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      {data.number}
                    </h2>
                    <span
                      className={`w-[100px] h-2 ${data.color} rounded-full block mt-[14px]`}
                    ></span>

                    {/* <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[14px]"></span> */}
                    <p className="text_para">{data.title}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroImg01} alt="" />
              </div>
              <div className="mt-[30px]">
                <img className="w-full mb-[30px]" src={heroImg02} alt="" />
                <img className="w-full" src={heroImg03} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text">
              Providing the best medical services
            </h2>
            <p className="text_para text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            {medicalService.map((data, index) => (
              <div className="py-[30px] px-5" key={index}>
                <div className="flex items-center justify-center">
                  <img src={data.icon} alt="" />
                </div>

                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                    {data.title}
                  </h2>
                  <p className="text-[16px] leading-7 text-textColor font-[400] text-center">
                    World class care for everyone. Our health system offers
                    unmatched, expert health care. From the lab of the clinic.
                  </p>
                  <Link
                    to="/doctors"
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                  >
                    <BsArrowRight className="group-hover:text-white w-6 h-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <About />
    </>
  )
}
