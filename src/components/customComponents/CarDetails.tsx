import {useState, Fragment} from 'react'
import { Car } from '../../types/page';
import { Dialog, Transition  } from '@headlessui/react';

interface CarDetailsProps {
    isOpen: boolean;
    closeModal: () => void; 
    car: Car; 
}

export const CarDetails = ({isOpen, closeModal, car}: CarDetailsProps) => {
    return (
        <>
            <Transition appear   as={Fragment} show={isOpen} >
                <Dialog as="div" className="relative z-100">

                </Dialog>

            </Transition>
        </>
    )
}
