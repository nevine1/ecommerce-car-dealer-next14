import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import Logo from '../../public/assets/imgs/logo.svg'
import CustomButton from './customComponents/CustomButton';
interface Props {
    
}

export const Navbar = (props: Props) => {
    return (
        <header className="w-full relative z-10 bg-red-900">
           <nav className="max-w-[1440px] mx-auto flex justify-between
                items-center sm:px-16 px-6 py-4">
                <Link href="/" className="flex justify-center items-center">
                    <Image src={Logo} 
                    className="object-contain"
                    width={120} height={20}
                    alt="logo" />
                </Link>
                <CustomButton 
                    btnType="button" 
                    title="sing in"
                    btnStyles="bg-primary-blue "
                />
                <ul className="flex items-center justify-center">
                    <li className="px-4"><Link href="/">Home</Link></li>
                    <li className="px-4"><Link href="/">Home</Link></li>
                    <li className="px-4"><Link href="/">Home</Link></li>
                    <li className="px-4"><Link href="/">Home</Link></li>
                </ul>
           </nav>
        </header>
    )
}
