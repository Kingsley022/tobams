import React from 'react'
import logo from "@/app/assets/images/logo.png"
import Image from 'next/image'
import DropdownMenu from './DropdownMenu'
import { Button } from '@chakra-ui/react'
import DropdownMenu2 from './DropdownMenu2'
import Link from 'next/link'
import { MdOutlineMenu } from 'react-icons/md'

const Navbar = () => {

    const nav_links = [
        {
            title: "About",
            sublinks: ["About 1", "About 2", "About 3"],
            isUnderlined: true
        },
        {
            title: "What we do",
            sublinks: ["What we do 1", "What we do 2", "What we do 3"]
        },
        {
            title: "Jobs",
            sublinks: ["Job page 1", "Job page 2", "Job page 3"]
        },
        {
            title: "Projects"
        },
        {
            title: "TG Academy"
        },
        {
            title: "Strategic Partnership"
        },
        {
            title: "Pricing"
        },
        {
            title: "Book a Consultation"
        }
    ]

    return (
        <header className="bg-white sticky top-0 z-50">
            <div className="flex items-center justify-between lg:px-12 md:px-6 px-4 lg:py-2 md:py-2">
                <Link href="/">
                    <Image src={logo} alt="logo" width={150} height={50} className='lg:w-[150px] lg:h-[50px] w-[120px]' />
                </Link>

                <div className="gap-3 items-center hidden lg:flex md:flex">
                    <DropdownMenu/>
                    <Button size="md" className='bg-orange px-4'>Take Assessment</Button>
                </div>

                <div className="lg:hidden md:hidden block bg-black text-white p-1 rounded-lg">
                    <MdOutlineMenu className='text-2xl' />
                </div>

            </div>

            <div className="lg:flex justify-center items-center gap-6 border-t-[1.5px] py-2 hidden">
                {
                    nav_links.map(link => (
                        <>
                            {
                                link.sublinks ? (
                                    <DropdownMenu2 title={link.title} sub_items={link.sublinks} isUnderlined={link?.isUnderlined}/>
                                ) : ( 
                                    <Link href="/" className='text-[#151515] lg:px-none px-4'>{link.title}</Link>
                                )
                            }
                        </>
                    ))
                }
            </div>
        </header>
    )
}

export default Navbar