import React from 'react'
import { services } from '../../assets/data/services.js'
import ServiceCrad from './ServiceCrad'
const ServiceList = () => {
    return (
        <div className=' container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] lg:mt-[55px]'>
            {services.map((item, index) => (
                <ServiceCrad item={item} index={index} key={index} />
            ))}
        </div>
    )
}

export default ServiceList