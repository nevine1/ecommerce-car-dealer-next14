"use client"
import { useState, Fragment } from 'react'
import {SearchManufactureProps } from '../../types/page'
import { Combobox, ComboboxInput, Transition, ComboboxOptions, ComboboxOption } from '@headlessui/react'
import { manufacturers } from '../constants/page';
interface Props {
    
}

const SearchManufacture = ({ manufacturer, setManufacturer }: SearchManufactureProps) => {
    const [query, setQuery] = useState('');
    const filteredManufacturers = 
        query ===  " " ? 
        manufacturers : 
        manufacturers.filter((item) =>(
            item.toLowerCase()
            .replace(/\s+/g,"")
            .includes(item.toLowerCase().replace(/\s+/g,""))
        ))
    return (
        <div className="flex flex-1 max-sm:w-full justify-start items-center">
            <Combobox >
                <div className="relative w-full">
                    <ComboboxInput
                        className="w-full h-[48px] pl-12 p-4 rounded-l-full max-sm:rounded-full bg-light-white outline-none cursor-pointer text-sm"
                        placeholder="Honda"
                        displayValue={(manufacturer:string) => manufacturer}
                        onChange={(e) =>setQuery(e.target.value)}
                        />
                        <Transition
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                            afterLeave={() =>setQuery('')}
                            >
                            <ComboboxOptions>
                                {
                                    filteredManufacturers.length === 0 && query !=="" ? (
                                        <ComboboxOption 
                                            value={query}
                                            className="cursor-default select-none py-2 pl-10 pr-4"
                                        > 
                                         Create " { query} "
                                        </ComboboxOption>
                                    ):(
                                        filteredManufacturers.map((item) =>(
                                            <ComboboxOption key={item}
                                                className=""
                                            >
                                                {item}
                                            </ComboboxOption>
                                        ))
                                    )
                                      
                                }
                            </ComboboxOptions>
                        </Transition>
                </div>
            </Combobox>
        </div>
    )
}

export default SearchManufacture;