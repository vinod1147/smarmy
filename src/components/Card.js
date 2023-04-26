import React from 'react';


function Card({ title, description, button, link }) {
    return (
        <div>
            <div className="max-w-sm bg-white border border-black rounded-lg shadow p-8 m-5 hover:shadow-2xl ">
                <div className="p-5">
                    <text>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">{title}</h5>
                    </text>
                    <p className="mb-3 font-normal text-gray-700 fontfamily NType82">{description}</p>
                    <a href={link} className="Ndot inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-900 focus:ring-2 focus:outline-double focus:ring-gray-900 ">
                        {button}
                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                </div>
            </div>

        </div >
    );
}

export default Card;
