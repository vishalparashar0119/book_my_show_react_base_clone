import React from 'react'
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

const Filter = () => {
    return (
        <>
            <div className='hidden lg:flex flex-col items-start '>
                <h1 style={{ fontSize: "clamp(1rem , 2.5vw , 1.5rem)" }}>Fiters</h1>
                <div className="w-full  py-4">

                    <div className=" w-full  my-4 ">
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <div className='bg-white rounded-md h-auto w-auto p-1'>

                                        <Disclosure.Button className="flex justify-between px-4 py-4 text-left text-sm font-medium text-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75" style={{ width: "18rem" }}>
                                            <div className='flex n gap-2'>
                                                <ChevronUpIcon
                                                    className={`${open ? 'rotate-180 transform' : ''
                                                        }  h-5 w-5`}
                                                />
                                                <span className={`${open ? 'text-crimson-300':' text-gray-500'}`}>Data</span>
                                            </div>
                                            <p >
                                                clear
                                            </p>

                                        </Disclosure.Button>
                                        <Disclosure.Panel className=" flex gap-2 px-4  pb-2  flex-wrap text-sm text-gray-500" style={{ width: "18rem" }}>
                                            <button className='border  text-crimson-300 px-3 py-2'>today</button>
                                            <button className='border  text-crimson-300 px-3 py-2'>Tomorrow</button>
                                            <button className='border  text-crimson-300 px-3 py-2'>This weekend</button>
                                        </Disclosure.Panel>
                                    </div>
                                </>
                            )}
                        </Disclosure>


                         

                    </div>
                    <div className=" w-full  my-4 ">
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <div className='bg-white rounded-md h-auto w-auto p-1'>

                                    <Disclosure.Button className="flex justify-between px-4 py-4 text-left text-sm font-medium text-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75" style={{ width: "18rem" }}>
                                            <div className='flex n gap-2'>
                                                <ChevronUpIcon
                                                    className={`${open ? 'rotate-180 transform' : ''
                                                        }  h-5 w-5`}
                                                />
                                                <span className={`${open ? 'text-crimson-300':' text-gray-500'}`}>Language</span>
                                            </div>
                                            <p >
                                                clear
                                            </p>

                                        </Disclosure.Button>
                                        <Disclosure.Panel className=" flex gap-2 px-4  pb-2  flex-wrap text-sm text-gray-500" style={{ width: "18rem" }}>
                                            <button className='border  text-crimson-300 px-3 py-2'>English</button>
                                            <button className='border  text-crimson-300 px-3 py-2'>Hindi</button>
                                            <button className='border  text-crimson-300 px-3 py-2'>Telgu</button>
                                            <button className='border  text-crimson-300 px-3 py-2'>Urdu</button>
                                            <button className='border  text-crimson-300 px-3 py-2'>Bengali</button>
                                            <button className='border  text-crimson-300 px-3 py-2'>Maharati</button>
                                        </Disclosure.Panel>
                                    </div>
                                </>
                            )}
                        </Disclosure>


                         

                    </div>
                    <div className=" w-full  my-4 ">
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <div className='bg-white rounded-md h-auto w-auto p-1'>

                                    <Disclosure.Button className="flex justify-between px-4 py-4 text-left text-sm font-medium text-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75" style={{ width: "18rem" }}>
                                            <div className='flex n gap-2'>
                                                <ChevronUpIcon
                                                    className={`${open ? 'rotate-180 transform' : ''
                                                        }  h-5 w-5`}
                                                />
                                                <span className={`${open ? 'text-crimson-300':' text-gray-500'}`}>Catagory</span>
                                            </div>
                                            <p >
                                                clear
                                            </p>

                                        </Disclosure.Button>
                                        <Disclosure.Panel className=" flex gap-2 px-4  pb-2  flex-wrap text-sm text-gray-500" style={{ width: "18rem" }}>
                                            <button className='border  text-crimson-300 px-3 py-2'>Workshop </button>
                                            <button className='border  text-crimson-300 px-3 py-2'>Online Streaming Event</button>
                                            <button className='border  text-crimson-300 px-3 py-2'>Comady Show</button>
                                            <button className='border  text-crimson-300 px-3 py-2'>Sprituality</button>
                                            <button className='border  text-crimson-300 px-3 py-2'>Music Show</button>
                                            <button className='border  text-crimson-300 px-3 py-2'>Kids</button>
                                        </Disclosure.Panel>
                                    </div>
                                </>
                            )}
                        </Disclosure>


                         

                    </div>
                    <div className=" w-full  my-4 ">
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <div className='bg-white rounded-md h-auto w-auto p-1'>

                                    <Disclosure.Button className="flex justify-between px-4 py-4 text-left text-sm font-medium text-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75" style={{ width: "18rem" }}>
                                            <div className='flex n gap-2'>
                                                <ChevronUpIcon
                                                    className={`${open ? 'rotate-180 transform' : ''
                                                        }  h-5 w-5`}
                                                />
                                                <span className={`${open ? 'text-crimson-300':' text-gray-500'}`}>More Filters</span>
                                            </div>
                                            <p >
                                                clear
                                            </p>

                                        </Disclosure.Button>
                                        <Disclosure.Panel className=" flex gap-2 px-4  pb-2  flex-wrap text-sm text-gray-500" style={{ width: "18rem" }}>
                                            <button className={`border  text-crimson-300 px-3 py-2 ${open?'bg-crimson-300 text-white':''}`}>Online Stereming </button>
                                            <button className='border  text-crimson-300 px-3 py-2'>Outdoor Events</button>
                                            <button className='border  text-crimson-300 px-3 py-2'>Fast Filling</button>
                                            <button className='border  text-crimson-300 px-3 py-2'>Kids Allowed</button>
                                            <button className='border  text-crimson-300 px-3 py-2'>Must Attend</button>
                                            
                                        </Disclosure.Panel>
                                    </div>
                                </>
                            )}
                        </Disclosure>


                         

                    </div>
                    <div className=" w-full  my-4 ">
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <div className='bg-white rounded-md h-auto w-auto p-1'>

                                    <Disclosure.Button className="flex justify-between px-4 py-4 text-left text-sm font-medium text-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75" style={{ width: "18rem" }}>
                                            <div className='flex n gap-2'>
                                                <ChevronUpIcon
                                                    className={`${open ? 'rotate-180 transform' : ''
                                                        }  h-5 w-5`}
                                                />
                                                <span className={`${open ? 'text-crimson-300':' text-gray-500'}`}>Price</span>
                                            </div>
                                            <p >
                                                clear
                                            </p>

                                        </Disclosure.Button>
                                        <Disclosure.Panel className=" flex gap-2 px-4  pb-2  flex-wrap text-sm text-gray-500" style={{ width: "18rem" }}>
                                            <button className={`border  text-crimson-300 px-3 py-2 `}>Free</button>
                                            <button className='border  text-crimson-300 px-3 py-2'>0-500</button>
                                            <button className='border  text-crimson-300 px-3 py-2'>501-2000</button>
                                            <button className='border  text-crimson-300 px-3 py-2'>above 2000</button>
                                            
                                            
                                        </Disclosure.Panel>
                                    </div>
                                </>
                            )}
                        </Disclosure>


                         

                    </div>
                </div>

            </div>
        </>
    )
}

export default Filter