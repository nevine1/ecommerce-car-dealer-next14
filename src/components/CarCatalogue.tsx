"use client"
import { useEffect } from 'react'
import SearchBar from './SearchBar'
import CustomFilter from './customComponents/CustomFilter'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../src/store/store'
import { fetchAllCars } from '../store/slices/carsAsync';
import { CarCard } from './CarCard';
type Props = {}

const CarCatalogue = (props: Props) => {
  const dispatch = useDispatch(); 
  const { cars, isLoading, carsError } = useSelector((state: RootState) => state.cars); 
  
  useEffect(() => {
    dispatch(fetchAllCars())
  }, [])
  return (
    <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="flex flex-col justify-start ">
            <h2 className="font-bold text-3xl ">Car Catalogue</h2>
            <p className="py-2">Explore the cars you might like</p>
        </div>

        <div className="mt-12 w-full flex-between items-center flex-wrap gap-5">
            <SearchBar/>
            <div className="flex justify-start flex-wrap items-center gap-2">
                <CustomFilter title="fuel"/>
                <CustomFilter title="year"/>
            </div>
            <div className=" bg-red-500 w-full items-center mx-auto grid grid-cols-4 md:grid-cols-3
              sm:grid-cols-2 px-2 max-sm:grid-cols-1 gap-5">
              {
                cars.length > 0 && (
                  cars.map((car, index) =>(
                    <CarCard car={car}/>
                  ))
                )
              }
              
            </div>
        </div>
    </div>
  )
}

export default CarCatalogue;