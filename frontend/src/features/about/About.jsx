import { Link } from 'react-router-dom'
import aboutImg from '../../assets/images/about.png'
import aboutCardImg from '../../assets/images/about-card.png'

export default function About() {
  return (
    <>
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
            <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
              <img src={aboutImg} alt="" />
              <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[30%] md:right-[-7%] lg:right-[22%]">
                <img src={aboutCardImg} alt="" />
              </div>
            </div>

            <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
              <h2 className="heading">Proud to be one of the nations best</h2>
              <p className="text_para">
                For 30 years in a row , U.S. News and World Report has organized
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                reprehenderit pariatur, velit similique aliquid magnam nesciunt
                sed itaque nulla blanditiis quam nisi sit totam eum eos
                eligendi, quisquam quo a.
              </p>
              <p className="text_para mt-[30px]">
                Our bes is something we strive for each day, caring for our
                patients Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Est magni esse obcaecati ab excepturi earum voluptates
                nesciunt soluta modi, adipisci asperiores voluptatibus? Suscipit
                tenetur delectus sequi similique saepe, provident dolores?
              </p>
              <Link to="/">
                <button className="btn">Learn More</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
