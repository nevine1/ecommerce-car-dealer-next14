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
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
    return (
        <div className="flex flex-1 max-sm:w-full justify-start items-center">
            <Combobox value={manufacturer} onChange={setManufacturer}>
                <div className="relative w-full">
                    <ComboboxInput
                        className="w-full h-[48px] pl-12 p-4 rounded-l-full max-sm:rounded-full bg-gray-200 outline-none cursor-pointer text-sm"
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
                                    filteredManufacturers.map((item) =>(
                                        <ComboboxOption value={item} key={item}
                                            className={({active}) => `relative cursor-default select-none mt-1 py-2 pl-10 pr-4 
                                                ${active ? `bg-primary-blue text-white rounded-l-full` : `text-gray-900`}
                                            `}
                                        >
                                            {item}
                                        </ComboboxOption>
                                    ))
                               }
                            </ComboboxOptions>
                        </Transition>
                </div>
            </Combobox>
        </div>
    )
}

export default SearchManufacture;

