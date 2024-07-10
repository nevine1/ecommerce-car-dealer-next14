"use client"
import { useState } from 'react'
import {SearchManufactureProps } from '../../types/page'
import { Combobox, ComboboxInput } from '@headlessui/react'
interface Props {
    
}

const SearchManufacture = ({ manufacturer, setManufacturer }: SearchManufactureProps) => {
    const [query, setQuery] = useState('');
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
                </div>
            </Combobox>
        </div>
    )
}

export default SearchManufacture;