import React from 'react'
import logo from "@/app/assets/images/logo.png"
import Image from 'next/image'
import { FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { AiFillInstagram } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { IoMdCall } from 'react-icons/io'
import Link from 'next/link'

const Footer = () => {

  const quickLinks = [
    {
      title: "What We Do",
      links: ['Sustainability Services', "Strategy Planning and Implementation", "Tech Talent Solutions", "Training and Development", "IT Consulting Services", "Social Impact", "Talent Recruitment"]
    },
    {
      title: "Company",
      links: ["About", "Jobs", "Projects", "Our Founder", "Business Model", "The Team", "Contact Us", "Blog", "FAQs", "Testimonials"]
    },
    {
      title: "Solution",
      links: ["Tobams Group Academy", "Help a Tech Talent", "Campus Ambassadors Program", "Join Our Platform", "Pricing", "Book a Consultation", "Join Our Slack Community"]
    }
  ];

  return (
    <footer className="bg-hue-dark lg:p-12 md:p-6 px-4 py-6 text-[#F8F8F8]">
      {/* Upper footer area */}
      <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-20 gap-12 text-sm">
        <div className="flex flex-col gap-6">
          <Image src={logo} alt='logo'/>
          <p className="">Tobams Group is an innovative consultancy firm reshaping the future of tech talent development in Africa, specializing in talent acquisition, internships, and skill development with a global perspective.</p>
          
          <div className="flex gap-4">
            <div className="flex items-center justify-center bg-white text-black rounded-full w-8 h-8">
              <FaLinkedinIn />
            </div>
            <div className="flex items-center justify-center bg-white text-black rounded-full w-8 h-8">
              <AiFillInstagram />
            </div>

            <div className="flex items-center justify-center bg-white text-black rounded-full w-8 h-8">
              <FaXTwitter />
            </div>
          </div>
        </div>

        {quickLinks.map(link => (
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-base">{link.title}</h3>
            <div className="flex flex-col gap-4">
              {link.links.map(link => (
                <span>{link}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Mid footer area */}
      <div className="bg-[#2b0c23] p-6 my-12 flex lg:flex-row flex-col rounded text-sm">
        <div className="flex flex-col">
          <h3 className="font-semibold text-base">Registered Offices</h3>
          <div className="flex lg:flex-row flex-col">
            <div className="mt-4">
              <span className='text-orange'>United Kingdom</span>
              <p>07451196 (Registered by Company House)Vine Cottages, 215 North Street, Romford, Essex, United Kingdom, RM1 4QA</p>
            </div>

            <div className="mt-4 lg:border-l-[2px] lg:pl-6 lg:border-l-[#57124385]">
              <span className='text-orange'>Nigeria</span>
              <p>RC 1048722 (Registered by the Corporate Affairs Commission) 4, Muaz Close, Angwar-Rimi</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:border-l-[2px] lg:pl-6 lg:mt-0 mt-6 lg:border-l-[#57124385]">
          <h3 className="font-semibold text-base">Contact Information</h3>
          <div className="flex flex-col mt-4">
            <div className="flex items-center gap-2">
              <MdEmail className='text-orange'/>
              <span>theteam@tobamsgroup.com</span>
            </div>

            <div className="flex items-center gap-2">
              <IoMdCall className='text-orange'/>
              <span>+447886600748</span>
            </div>
          </div>
        </div>
      </div>

      {/* Lower footer area */}
      <div className="flex lg:flex-row flex-col lg:px-0 px-12 text-sm lg:justify-between text-center border-t-[2px] border-t-[#2b0c23] pt-6">
        <p className='lg:text-sm text-xs lg:order-0 order-1 lg:mt-0 mt-6'>Copyright ⓒ Tobams Group, 2024. All rights reserved.</p>

        <div className="flex lg:gap-4 gap-2 justify-center flex-wrap">
          <Link href="/" className='underline'>Terms and Conditions</Link>
          <Link href="/" className='underline'>Privacy Policy</Link>
          <Link href="/" className='underline'>Cookies Policy</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer