// import React from 'react';

// function contact() {
//     return (
//         <div className='max-w-[1240px] m-auto p-4 h-screen'>
//             <h1 className='text-6xl font-bold text-center p-4 bolt'>Contact Me</h1>
//             <form className='max-w-[600px] m-auto'>
//                 <div className='grid grid-cols-2 gap-2'>
//                     <input className='border shadow-lg p-3' type="text" placeholder='Name' />
//                     <input className='border shadow-lg p-3' type="email" placeholder='Email' />
//                 </div>
//                 <input className='border shadow-lg p-3 w-full my-2' type="text" placeholder='Subject' />
//                 <textarea className='border shadow-lg p-3 w-full' cols="30" rows="10" placeholder='Message'></textarea>
//                 <button className='border shadow-lg p-3 w-full mt-2'>Submit</button>
//             </form>
//         </div>
//     );
// }

// export default contact;


import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hb53pgp', 'template_tiihc06', form.current, 'JK8tX538GPv2Pbj8J')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        // <form ref={form} onSubmit={sendEmail}>
        //     <label>Name</label>
        //     <input type="text" name="user_name" />
        //     <label>Email</label>
        //     <input type="email" name="user_email" />
        //     <label>Message</label>
        //     <textarea name="message" />
        //     <input type="submit" value="Send" />
        // </form>

        <div className='max-w-[1240px] m-auto p-4 h-screen'>
            <h1 className='text-6xl font-bold text-center p-4 bolt'>Contact Me</h1>
            <form ref={form} onSubmit={sendEmail} className='max-w-[600px] m-auto'>
                <div className='grid grid-cols-2 gap-2'>
                    {/* <input className='border shadow-lg p-3' type="text" placeholder='Name' /> */}
                    <input className='border shadow-lg p-3' type="text" name="name" placeholder='Name' />
                    <input className='border shadow-lg p-3' type="email" name="email" placeholder='Email' />
                    {/* <input className='border shadow-lg p-3' type="email" placeholder='Email' /> */}
                </div>
                <input className='border shadow-lg p-3 w-full my-2' type="text" placeholder='Subject' name='subject' />
                <textarea name="message" className='border shadow-lg p-3 w-full' cols="30" rows="10" placeholder='Message'></textarea>
                <button type='submit' value="send" className='border shadow-lg p-3 w-full mt-2'>Submit</button>
                {/* <input type="submit" value="Send" /> */}
            </form>
        </div>
    );
}

export default contact;
