

const Error = ({errMessage}) => {
  return (
    <div className='flex items-center justify-center w-full h-full '>
        <h3 className='text-textColor text-[15px] font-semibold leading-[30px]'>
            {errMessage}
        </h3>
    </div>
  )
}

export default Error