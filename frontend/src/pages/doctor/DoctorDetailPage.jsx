import DoctorDetail from '../../features/doctors/components/DoctorDetail'
import Footer from '../../layouts/components/Footer'
import Header from '../../layouts/components/Header'


export default function DoctorDetailPage() {
  return (
    <>
      <Header />
      {/* doctor details */}
      <DoctorDetail />
      <Footer />
    </>
  )
}
