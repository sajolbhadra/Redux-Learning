import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2';

const ContactMe = () => {
  // const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ym54479",
        "template_9fe7yr7",
        e.target,
        "uFiMrjRyWCgEbiGXw"
      )
      .then(
        (result) => {
          console.log(result);
          Swal.fire({
            icon: 'success',
            title: 'Message Sent Successfully'
        })
        },
        (error) => {
          console.log(error.text);
          alert(JSON.stringify(error));
        }
      );
    // emailjs.sendForm('service_ym54479', 'template_9fe7yr7', form.current, 'uFiMrjRyWCgEbiGXw')
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });
    e.target.reset();
  };

  return (
    <div className="py-4 mt-16 ">
      <p className="text-center font-bold text-4xl">Contact US</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 m-6 lg:mx-20">
        <div>
          <img
            className="w-[600px]"
            src="https://uploads-ssl.webflow.com/5ef0df6b9272f7410180a013/5ef204bb10b93fdbe5e601bb_contact-2860030_1920-1024x683.jpg"
            alt=""
          />
        </div>

        <div className="navStyle w-full my-4 lg:my-0 lg:w-3/4 p-2.5 rounded text-black">
          <form onSubmit={sendEmail}>
            <div class="form-control">
              <label class="label">
                <span class="label-text text-white">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                class="input input-bordered"
                required
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text text-white">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                class="input input-bordered"
                required
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text text-white">Message</span>
              </label>
              <textarea
                name="message"
                className="input input-bordered h-[100px]"
                id=""
                cols="30"
                rows="10"
                required
              ></textarea>
            </div>
            <div className="mt-6">
              <button
                className="py-2 px-4 button btn btn-outline rounded-xl  w-full"
                type="Submit"
              >
                <span className=" ">Send</span>
              </button>
            </div>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
