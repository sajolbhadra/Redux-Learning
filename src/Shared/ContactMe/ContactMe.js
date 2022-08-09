import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_ym54479', 'template_9fe7yr7', form.current, 'uFiMrjRyWCgEbiGXw')
        .then((result) => {
            console.log(result);
          alert('Sent!');
        }, (error) => {
            console.log(error.text);
          alert(JSON.stringify(error));
        });
        // emailjs.sendForm('service_ym54479', 'template_9fe7yr7', form.current, 'uFiMrjRyWCgEbiGXw')
        //   .then((result) => {
        //       console.log(result.text);
        //   }, (error) => {
        //       console.log(error.text);
        //   });
          e.target.reset();
      };

    return (
        <div className='py-4'>
            <p className='text-center text-4xl'>Contact US</p>
            <div className='grid grid-cols-1 lg:grid-cols-2 m-20'>
                <div>
                    <img className='w-[600px]' src="https://uploads-ssl.webflow.com/5ef0df6b9272f7410180a013/5ef204bb10b93fdbe5e601bb_contact-2860030_1920-1024x683.jpg" alt="" />
                </div>

                <div className='navStyle w-full my-4 lg:my-0 lg:w-3/4 p-2.5 rounded'>
                    <form ref={form} className='w-full' onSubmit={sendEmail}>
                        <div className="form-group">
                            <label className='text-xl text-white my-2' for="exampleFormControlInput1">Name<span className='text text-red-500'>*</span></label> <br />
                            <input type="text" className="my-2 py-2 rounded px-2 w-full" id="exampleFormControlInput1" required placeholder="your name" />
                        </div>
                        <div className="form-group">
                            <label className='text-xl text-white my-2' for="exampleFormControlInput1">Email<span className='text ext-red-500'>*</span></label> <br />
                            <input type="text" className="my-2 py-2 rounded px-2 w-full" id="exampleFormControlInput2" required placeholder="your email" />
                        </div>

                        <div className="form-group">
                            <label className='text-xl text-white my-2' for="exampleFormControlTextarea1">Your Message</label> <br />
                            <textarea className="my-2 py-2 rounded px-4 w-full" required id="exampleFormControlTextarea3" rows="3"></textarea>
                        </div>
                        <div className='mt-6'>
                            <button className='py-2 px-4 button btn btn-outline rounded-xl  w-full' type='Submit'><span className=' '>Send</span></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default ContactMe;