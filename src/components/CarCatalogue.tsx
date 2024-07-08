import React from 'react'
import SearchBar from './SearchBar'
import CustomFilter from './customComponents/CustomFilter'
type Props = {}

const CarCatalogue = (props: Props) => {
  return (
    <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="flex flex-col justify-start ">
            <h2 className="font-bold text-3xl ">Car Catalogue</h2>
            <p className="py-2">Explore the cars you might like</p>
        </div>

        <div className="home__filters">
            <SearchBar/>
            <div className="home__filters-container">
                <CustomFilter/>
            </div>
        </div>
    </div>
  )
}

export default CarCatalogue;