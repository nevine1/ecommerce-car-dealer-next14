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
            <div className="flex flex-col justify-start items-center gap6">
                <Image src={ImageLogo} 
                width={120} height={20}
                alt="footer logo"
                className="object-contain"
                />
                <p className="text-base text-gray-300 "></p>
            </div>

            <div className="flex flex-col justify-start items-center py-3">
                {
                  footerLinks.map((link) =>(
                    <div key={link.title} className="flex flex-col items-center justify-start">
                        <h2 className="text-semibold text-gray-900 bg-pink-200">{link.title}</h2>
                        {
                            link.links.map((item)=>(
                                <Link href={`/item.url`}>{item.title}</Link>
                            ))
                        }
                    </div>
                  ))  
                }
           </div>

        </div>
        </div>
    )
}
