import React from 'react'
import BannerSlider from '../component/BannerSlider'
import AboutHighlights from '../component/AboutHighlights'
import Counter from '../component/Counter'
import WhyChooseUs from '../component/WhyChooseUs'
import GalleryHome from '../component/GalleryHome'
import FacilitiesSection from '../component/academics/FacilitiesSection'
import OfferSection from '../component/OfferSection'
import EventsSection from '../component/EventsSection'
import Enrollment from '../component/Enrollment'
import Department from '../component/Department'
import Testimonials from '../component/Testimonials'
import LogoStrip from '../component/LogoStrip'
import FeaturesSection from '../component/academics/FeaturesSection'
import CourseData from '../component/ProgramData'

const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
     <BannerSlider /> 
     <AboutHighlights />
     <Counter />
     <CourseData />
     <WhyChooseUs />
     <FeaturesSection />
     {/* <TeachersSection /> */}
    <FacilitiesSection limit={3} />

     <GalleryHome />
     {/* <OfferSection /> */}
     {/* <EventsSection /> */}
     <Enrollment />
     {/* <Department /> */}
     <Testimonials />
     {/* <LogoStrip /> */}
     {/* <Footer /> */}
    </>
  )
}

export default Home
