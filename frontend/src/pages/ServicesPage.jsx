import { services } from '../assets/data/services'
import ServiceCard from '../features/services/components/ServiceCard'
import Footer from '../layouts/components/Footer'
import Header from '../layouts/components/Header'
export default function ServicesPage() {
  return (
    <>
      <Header />
      <section>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px]">
            {services.map((item, index) => (
              <ServiceCard item={item} index={index} key={index} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
