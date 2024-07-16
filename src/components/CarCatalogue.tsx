"use client"
import { useEffect } from 'react'
import SearchBar from './SearchBar'
import CustomFilter from './customComponents/CustomFilter'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../src/store/store'
import { fetchAllCars } from '../store/slices/carsAsync'
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
        </div>
    </div>
  )
}

export default CarCatalogue;