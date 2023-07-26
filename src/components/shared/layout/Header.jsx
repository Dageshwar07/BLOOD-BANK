
import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
    const [show, setShow] = useState(false);
    const [profile, setProfile] = useState(false);

    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const location = useLocation();
    // logout handler
    const handleLogout = () => {
        localStorage.clear();
        alert("Logout Successfully");
        navigate("/login");
    };
    return (
        <>
            <nav className="h-16 flex items-center lg:items-stretch justify-end lg:justify-between bg-white shadow relative z-10">
                <div className="hidden lg:flex w-full pr-6">
                    <div className="w-1/2 h-full hidden lg:flex items-center pl-6 pr-24">
                        <div className="relative w-full">


                            <Link to='/' className=" flex items-center  text-2xl font-semibold text-gray-900 dark:text-white">



                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-droplet-heart w-8 h-8 mr-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M18.288 11.282a6.734 6.734 0 0 0 -.224 -.405l-4.89 -7.26c-.42 -.625 -1.287 -.803 -1.936 -.397a1.376 1.376 0 0 0 -.41 .397l-4.893 7.26c-1.695 2.838 -1.035 6.441 1.567 8.546a7.117 7.117 0 0 0 3.824 1.548" />
                                    <path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z" />
                                </svg>
                                <h1 className=" font-normal text-2xl leading-6 text-gray-600 hover:text-blue-500 focus:text-blue-700 focus:outline-none ">Blood Bank</h1>

                            </Link>
                        </div>

                    </div>
                    <div className="w-1/2 hidden lg:flex">
                        <div className="w-full flex items-center pl-8 justify-end">
                            <div className="h-full w-20 flex items-center justify-center border-r">

                            </div>
                            <div className=" hover:text-blue-500 focus:text-blue-700  h-full w-20 flex items-center justify-center border-r mr-4 cursor-pointer text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chart-histogram" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M3 3v18h18"></path>
                                    <path d="M20 18v3"></path>
                                    <path d="M16 16v5"></path>
                                    <path d="M12 13v8"></path>
                                    <path d="M8 16v5"></path>
                                    <path d="M3 11c6 0 5 -5 9 -5s3 5 9 5"></path>
                                </svg>

                            </div>
                            <div className=" flex items-center relative cursor-pointer " onClick={() => setProfile(!profile)}>
                                <div className="rounded-full ">
                                    {profile ? (
                                        <ul className=" p-2 w-full border-r bg-white absolute rounded left-0 shadow mt-12 sm:mt-16 ">
                                            <li className="flex w-full justify-between text-gray-600  hover:text-blue-500 focus:text-blue-700  cursor-pointer items-center">
                                                <div className="flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <circle cx={12} cy={7} r={4} />
                                                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                                    </svg>
                                                    <span className="text-sm ml-2">{user?.role}</span>
                                                </div>
                                            </li>
                                            <li className="flex w-full justify-between text-gray-600  hover:text-blue-500 focus:text-blue-700  cursor-pointer items-center mt-2">
                                                <div className="flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-logout" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                                                        <path d="M7 12h14l-3 -3m0 6l3 -3" />
                                                    </svg>
                                                    <span onClick={handleLogout} className="text-sm ml-2">Sign out</span>
                                                </div>
                                            </li>
                                        </ul>
                                    ) : (
                                        ""
                                    )}
                                    <div className="relative">
                                        <img className="rounded-full h-10 w-10 object-cover" src="https://tuk-cdn.s3.amazonaws.com/assets/components/sidebar_layout/sl_1.png" alt="avatar" />
                                        <div className="w-2 h-2 rounded-full bg-green-400 border border-white absolute inset-0 mb-0 mr-0 m-auto" />
                                    </div>
                                </div>
                                <p className=" hover:text-blue-500 focus:text-blue-700  text-gray-800 text-sm mx-3">Welcome {user?.name || user?.hospitalName || user?.organisationName}{""} &nbsp;</p>
                                <div className="cursor-pointer text-gray-600">
                                    <svg aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-gray-600 mr-8 visible lg:hidden relative" onClick={() => setShow(!show)}>
                    {show ? (
                        " "
                    ) : (
                        <svg aria-label="Main Menu" aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu cursor-pointer" width={30} height={30} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1={4} y1={8} x2={20} y2={8} />
                            <line x1={4} y1={16} x2={20} y2={16} />
                        </svg>
                    )}
                </div>
            </nav>

            {/*Mobile responsive sidebar*/}
            <div className={show ? "w-full h-full absolute z-40  transform  translate-x-0 " : "   w-full h-full absolute z-40  transform -translate-x-full"} id="mobile-nav">
                <div className="bg-gray-800 opacity-50 absolute h-full w-full lg:hidden" onClick={() => setShow(!show)} />
                <div className="absolute z-40 sm:relative w-64 md:w-96 shadow pb-4 bg-gray-100 lg:hidden transition duration-150 ease-in-out h-full">
                    <div className="flex flex-col justify-between h-full w-full">
                        <div>
                            <div className="flex items-center justify-between px-8">
                                <div className="h-16 w-full flex items-center">

                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-droplet-heart w-10 h-10 mr-2" width="50" height="50" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M18.288 11.282a6.734 6.734 0 0 0 -.224 -.405l-4.89 -7.26c-.42 -.625 -1.287 -.803 -1.936 -.397a1.376 1.376 0 0 0 -.41 .397l-4.893 7.26c-1.695 2.838 -1.035 6.441 1.567 8.546a7.117 7.117 0 0 0 3.824 1.548" />
                                        <path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z" />

                                    </svg>
                                    <h1 className=" font-normal text-3xl leading-6 text-gray-600 hover:text-blue-500 focus:text-blue-700 focus:outline-none ">B Bank</h1>

                                </div>
                                <div id="closeSideBar" className="flex items-center justify-center h-10 w-10" onClick={() => setShow(!show)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1={18} y1={6} x2={6} y2={18} />
                                        <line x1={6} y1={6} x2={18} y2={18} />
                                    </svg>
                                </div>
                            </div>
                            <ul aria-orientation="vertical" className=" py-6">
                                <li className="pl-6 cursor-pointer text-sm leading-3 tracking-normal pb-4 pt-5 text-gray-600 focus:text-indigo-700 focus:outline-none">
                                    <div className="flex items-center">
                                        <div className="w-6 h-6 md:w-8 md:h-8">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <rect x={4} y={4} width={6} height={6} rx={1} />
                                                <rect x={14} y={4} width={6} height={6} rx={1} />
                                                <rect x={4} y={14} width={6} height={6} rx={1} />
                                                <rect x={14} y={14} width={6} height={6} rx={1} />
                                            </svg>
                                        </div>
                                        <span className="ml-2 xl:text-base sm:text-gray-600  md:text-2xl text-base">Dashboard</span>
                                    </div>
                                </li>
                                <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                    <div className="flex items-center">
                                        <div className="w-6 h-6 md:w-8 md:h-8">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-invoice" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                                                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                                                <path d="M9 7l1 0"></path>
                                                <path d="M9 13l6 0"></path>
                                                <path d="M13 17l2 0"></path>
                                            </svg>
                                        </div>
                                        <span className="ml-2 xl:text-base md:text-2xl text-base">Inventory</span>
                                    </div>
                                </li>
                                <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                    <div className="flex items-center">
                                        <div className="w-6 h-6 md:w-8 md:h-8">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-heart" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                                                <path d="M6 21v-2a4 4 0 0 1 4 -4h.5"></path>
                                                <path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z"></path>
                                            </svg>
                                        </div>
                                        <span className="ml-2 xl:text-base md:text-2xl text-base">Donar</span>
                                    </div>
                                </li>
                                <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                    <div className="flex items-center">
                                        <div className="w-6 h-6 md:w-8 md:h-8">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-hospital" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M3 21l18 0"></path>
                                                <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16"></path>
                                                <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4"></path>
                                                <path d="M10 9l4 0"></path>
                                                <path d="M12 7l0 4"></path>
                                            </svg>
                                        </div>
                                        <span className="ml-2 xl:text-base md:text-2xl text-base">Hospital</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full">
                            <div className="flex justify-center mb-4 w-full px-6">

                            </div>
                            <div className="border-t border-gray-300 ">
                                <div className="w-full flex items-center justify-between px-2">
                                    <div className="flex items-center">
                                        <img alt="profile-pic" src="https://tuk-cdn.s3.amazonaws.com/assets/components/boxed_layout/bl_1.png" className="w-8 h-8 rounded-md" />
                                        <p className="md:text-xl text-gray-800 text-base leading-4 ml-2 sm:text-sm">Welcome {user?.name || user?.hospitalName || user?.organisationName}!{""} <span className="font-normal text-xl leading-6 text-blue-600">{user?.role}</span></p>
                                    </div>



                                    <ul className="flex ">

                                        <li className="cursor-pointer text-white pt-7 pb-3 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" onClick={handleLogout} className="icon icon-tabler icon-tabler-logout" width={24} height={24} viewBox="0 0 24 24" strokeWidth={1} stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                                                <path d="M7 12h14l-3 -3m0 6l3 -3" />
                                            </svg>
                                            <span onClick={handleLogout} className="text-sm">Sign out</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/*Mobile responsive sidebar*/}
            {/* Sidebar ends */}
            <div className="w-full h-full"></div>
        </>
    )

}


