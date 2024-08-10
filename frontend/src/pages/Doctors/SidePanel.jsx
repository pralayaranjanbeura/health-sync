

const SidePanel = () => {
  return (
    <div className='shadow-panelShadow  p-3 lg:p-5 rounded-md'>
        <div className='flex items-center justify-between'>
            <p className='text__para mt-0 font-semibold'>
                Ticket Price
            </p>
            <span className='text-[16px] lg:text-[25px] leading-5 lg:leading-7 font-bold text-headingColor '>
                50 $
            </span>
        </div>
        <div className='mt-[30px]'>
            <p className='mt-2 font-semibold text__para text-headingColor'>Available Time Slots</p>
            <ul className='mt-3'>
                <li className='flex items-center justify-between mb-2'>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        Sunday
                    </p>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        4:00 PM - 9:30 PM
                    </p>
                </li>
                <li className='flex items-center justify-between mb-2'>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        Tuesday
                    </p>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        4:00 PM - 9:30 PM
                    </p>
                </li>
                <li className='flex items-center justify-between mb-2'>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        Wednesday
                    </p>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        4:00 PM - 9:30 PM
                    </p>
                </li>
            </ul>
        </div>
        <button className='btn w-full rounded'>Book Appointment</button>
    </div>
  )
}

export default SidePanel