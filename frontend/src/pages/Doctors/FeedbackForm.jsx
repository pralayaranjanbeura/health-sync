import React, { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'

const FeedbackForm = () => {

    const [rating ,setRating]=useState(0);
    const [hover,setHover]=useState(0);



    const  [reviewText,setReviewText]=useState('');

    const submitHandler= async(e)=>{
        e.preventDefault();

        // later at db we manage this one

    }
    return (
        <form action="">
            <div >
                <h5 className='font-semibold mb-5 text-[20px] sm;text-[15px] mt-0'>
                    How would you rate the overall experience
                </h5>

            </div>
            <div>
            {[...Array(5).keys()].map((index)=>{
                index+=1;
                return (
                    <button key={index}
                    type='button'
                    className={`${index<=((rating && hover )||hover)
                    ?" text-yellowColor"
                    :" text-gray-400"
                    }
                    bg-transparent border-none outline-none text-[22px] cursor-pointer
                    `}
                    onClick={()=>setRating(index)}
                    onMouseEnter={()=>setHover(index)}
                    onMouseLeave={()=>setHover(rating)}
                    onDoubleClick={()=>{
                        setHover(0),
                        setRating(0);
                    }}
                    >
                    <span><AiFillStar/></span>
                    </button>
                )
            })}
          
            </div>

            <div className='mt-[30px]'>
            <h5 className='font-semibold mb-5 text-[20px] sm;text-[15px]'>
                 Share your feedback suggestion
                </h5>

                <textarea className='border-solid border border-[#0066ff34] focus:outline outline-primaryColor w-full px-1 py-2 rounded'
                rows='5'
                placeholder='write your message'
                onChange={e=>setReviewText(e.target.value)}
                >
                </textarea>
            </div>
            <button onClick={submitHandler()} type='submit'>
                Give feedback
            </button>

          
        </form>
    )
}

export default FeedbackForm