import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Aim from '../../components/aim/Aim'
import Testimonials from '../../components/testimonials/Testimonial'

export default function HomePage() {
  return (
    <div className='home-page'>
        <Navbar/>
        <Header />
        <Aim/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}
