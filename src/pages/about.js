import React from 'react';

function about() {
    return (
        <div>
            <section>
                <h1 className='text-6xl font-bold text-center py-8 bolt'>About Me</h1>
                <div className="container max-w-5xl px-4 py-12 mx-auto">
                    <div className="grid gap-4 mx-4 sm:grid-cols-12">
                        <div className="col-span-12 sm:col-span-3">
                            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-2 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-black">
                                <h3 className="text-3xl font-semibold bolt">AkshayKumar Upadhyay</h3>
                                <span className="text-sm font-bold tracking-wider uppercase NType82">Educator by Passion</span>
                            </div>
                        </div>
                        <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-black">
                                    <h3 className="text-xl font-semibold tracking-wide ">Education</h3>
                                    <p className="mt-3 NType82">B.K.Birla College  •  2018 - 2020</p>
                                    <p className='mt-3 NType82'>C.H.M College  •  2014 - 2018</p>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-black">
                                    <h3 className="text-xl font-semibold tracking-wide">Work Experience</h3>
                                    <p className="mt-3 NType82">Akshay Classes •  2016 - 2020</p>
                                    <p className='mt-3 NType82'>Unacademy • 2020 - Present</p>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-black">
                                    <h3 className="text-xl font-semibold tracking-wide">Accomplishments</h3>
                                    <p className="mt-3 NType82">Legend Educator of Unacademy class 9 and 10</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* <Team /> */}
        </div >
    );
}

export default about;
