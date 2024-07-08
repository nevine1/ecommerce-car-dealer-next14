"use client"
import React from 'react'
import CustomButton from './customComponents/CustomButton';
import Image from 'next/image'
import ImageOne from '../../public/assets/imgs/hero.png'
import {footerLinks } from '../components/constants/page'
const Hero = () => {
  const handleScroll = () =>{
    console.log('hello this is my page ')
  }

  return (
    <div className="hero">
      <div className="flex-1 pt-36  padding-x">
        <h1 className="hero__title">
          Find, book or rent a car quickly and easily
        </h1>
        <p className="hero__subtitle">
          Streamline your can rental experience
          with effortless booking process.
        </p>
        <CustomButton
          title="Explore Cars"
          btnStyles="bg-primary-blue text-white rounded-full mt-10"
            handleClick={handleScroll}
          
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src={ImageOne} alt="hero image" 
            fill className="object-fit mt-12"
          />
          <div className="hero__image-overlay"></div>
        </div>
      </div>

    </div>
  );
}

export default Hero; 