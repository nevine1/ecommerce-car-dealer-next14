"use client";
import {useState } from 'react'
import CustomButton from '../components/customComponents/CustomButton';
import  SearchManufacture from '../components/customComponents/SearchManufacture';


interface Props {
    
}

 const SearchBar = (props: Props) => {
    const [manufacturer, setManufacturer ] = useState('')
    const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault();
        console.log('hello search')
    }
    return (
        <div>
           <form 
            className="flex items-center justify-start relative max-sm:flex-col w-full max-sm:gap-4 max-w-3xl"
           >
            <div className="flex-1 max-sm:w-full flex items-center justify-between relative">
                <SearchManufacture
                    manufacturer={manufacturer}
                    setManufacturer={setManufacturer}
                />
            </div>
            
            <CustomButton
                btnType="submit"
                title="Search"
            />
           </form> 
        </div>
    )
}
 export default SearchBar;