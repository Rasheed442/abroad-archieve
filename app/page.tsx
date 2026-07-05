import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ComprehensiveServices from '@/components/SubComponents/Home/ComprehensiveServices'
import Faq from '@/components/SubComponents/Home/Faq'
import Feedback from '@/components/SubComponents/Home/Feedback'
import Footer from '@/components/SubComponents/Home/Footer'
import StudyDestination from '@/components/SubComponents/Home/StudyDestination'
import React from 'react'

function page() {
  return (
    <div>
      {/* <Header/> */}
      <Hero/>
          <ComprehensiveServices/>
          <StudyDestination/>
          <Feedback/>
          <Faq/>
          {/* <Footer/> */}
      
    </div>
  )
}

export default page