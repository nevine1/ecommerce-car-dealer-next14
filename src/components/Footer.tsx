import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ImageLogo from '../../public/assets/imgs/logo.svg'
import { footerLinks } from '../components/constants/page'
interface Props {
    
}

export const Footer = (props: Props) => {
    console.log(footerLinks);
    console.log('helloooooooooooooo')
    console.log('hello')
    return (
        <div className="flex flex-col mt-4 border-t border-gray-200 text-black-100">
           <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6">
            <div className="flex flex-col justify-start items-center mt-3 gap-6 sm:py-1 py-4 ">
                <Image src={ImageLogo} 
                width={120} height={20}
                alt="footer logo"
                className="object-contain"
                />
            </div>

            <div className="footer__links">
                {
                  footerLinks.map((link) =>(
                    <div key={link.title} className="flex flex-col  py-4 justify-start">
                        <h2 className="font-bold text-gray-900 ">{link.title}</h2>
                        {
                            link.links.map((item)=>(
                                <Link href={`/item.url`} className="text-[15px] py-1">{item.title}</Link>
                            ))
                        }
                    </div>
                  ))  
                }
           </div>
        </div>

        <div className="flex  items-center justify-center  border-t border-gray-100 sm:px-16 px-6 py-4">
            <p className="text-[14px] text-gray-500">@2024 CarHub. All rights reserved</p>
        </div>
    </div>
    )
}
