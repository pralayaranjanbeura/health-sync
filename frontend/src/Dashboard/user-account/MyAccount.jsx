import userImg from "../../assets/images/doctor-img01.png"
import { useContext, useState } from "react"
import { authContext } from "../../context/AuthContext"
import MyBookings from "./MyBookings"
import ProfileSettings from "./ProfileSettings"
import userGetProfile from '../../hooks/useFetchData'
import { BASE_URL } from "../../config"
import Loading from "../../components/Loader/Loading"
import Error from "../../components/Error/Error"

const MyAccount = () => {

    const { dispatch } = useContext(authContext);

    const [tab, setTab] = useState("bookings");
    const {data:userData,loading,error}=userGetProfile(`${BASE_URL}/users/profile/me`);
    console.log(userData,"usedata");
    
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })
    }
    return (
        <section>
            <div className="max-w-[1174px] px-5 mx-auto ">
                {loading && !error && <Loading/>}

                {error && !loading && <Error errMessage={error}/>}

                {!loading && !error && (<div className="grid   md:grid-cols-3 gap-10">
                    <div className="pb-[50px] px-[30px] rounded-md">
                        <div className="flex items-center justify-center ">
                            <figure className="h-[100px] w-[100px] rounded-full border-2 border-solid border-primaryColor">
                                <img src={userImg} alt="" className=" w-full h-full rounded-full" />
                            </figure>
                        </div>
                        <div className="text-center mt-3">
                            <h3 className="text-textColor text-[18px] leading-7 font-bold">Lewis Hemilton</h3>
                            <p className="font-medium text-[14px] leading-6">lewishemil@gmail.com</p>
                            <p className="font-medium text-[14px] leading-6">Blood Type <span > O-</span></p>
                        </div>
                        <div className="mt-[50px] md:mt-[100px]">
                            <button onClick={handleLogout} className=" w-full bg-red-600 px-3 py-2 text-white text-[16px] rounded-md leading-6 ">logout</button>
                            <button className=" w-full bg-slate-900 px-3 py-2 text-white text-[16px] mt-2 rounded-md leading-6 ">Delete</button>
                        </div>
                    </div>

                    <div className="md:col-span-2 md:px-[30px]">
                        <div>
                            <button onClick={() => setTab('bookings')} className={`${tab == "bookings" && 'bg-primaryColor text-white font-normal'} mr-5 p-2 px-3 py-2 text-center  text-textColor text-[15px] border-2 border-solid leading-5 rounded-md border-primaryColor `}>My Bookings</button>
                            <button onClick={() => setTab('settings')} className={`${tab === 'settings' && 'bg-primaryColor text-white font-normal'
                                } px-3 py-2 text-center   text-textColor text-[15px] border-2 border-solid leading-5 rounded-md border-primaryColor `}>Profile Settings</button>
                        </div>

                        {tab === 'bookings' && <MyBookings />}
                        {tab === 'settings' && <ProfileSettings user={userData} />}

                    </div>
                </div>)}
            </div>

        </section>
    )
}

export default MyAccount