import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase/firebase.init';
import { toast } from 'react-toastify';

const SkillsUpdate = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;

    const handleSkillsSubmit = (e) => {
        e.preventDefault();
        const html = e.target.html.value;
        const css = e.target.css.value;
        const js = e.target.js.value;
        const tailwind = e.target.tailwind.value;
        const redux = e.target.redux.value;
        const nextjs = e.target.nextjs.value;
        const daisy = e.target.daisy.value;
        const bs = e.target.bs.value;

        console.log(html, css, js, tailwind, redux, nextjs, bs, daisy);
        const data = { html, css, js, tailwind, redux, nextjs, bs, daisy, email }

        // fetch(`http://localhost:5000/skills/${email}`)

        fetch(`http://localhost:5000/skills/${email}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.upsertedCount === 1) {
                    toast("Updated!!");

                } else {
                    toast.error("Already Updated!!");
                }
            });


    }
    return (
        <div className='z-50'>
            <input type="checkbox" id="skill-update" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <div class="modal-action">
                        <label for="skill-update" class="btn rounded-full">X</label>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm mx-auto bg-base-100">

                        <div class="card-body">
                            <form onSubmit={handleSkillsSubmit} >
                                <div class="form-control">
                                    <label for="html ">Html (Out of 100)</label>

                                    <select name="html" className="select select-bordered" id="html">
                                        <option value="10">10</option>
                                        <option value="20">20</option>
                                        <option value="30">30</option>
                                        <option value="40">40</option>
                                        <option value="50">50</option>
                                        <option value="60">60</option>
                                        <option value="70">70</option>
                                        <option value="80">80</option>
                                        <option value="90">90</option>
                                        <option value="100">100</option>
                                    </select>
                                </div>
                                <div class="form-control">
                                    <label for="css ">CSS</label>

                                    <select name="css" className="select select-bordered" id="css">
                                        <option value="10">10</option>
                                        <option value="20">20</option>
                                        <option value="30">30</option>
                                        <option value="40">40</option>
                                        <option value="50">50</option>
                                        <option value="60">60</option>
                                        <option value="70">70</option>
                                        <option value="80">80</option>
                                        <option value="90">90</option>
                                        <option value="100">100</option>
                                    </select>
                                </div>
                                <div class="form-control">
                                    <label for="js ">Javascript</label>

                                    <select name="js" className="select select-bordered" id="js">
                                        <option value="10">10</option>
                                        <option value="20">20</option>
                                        <option value="30">30</option>
                                        <option value="40">40</option>
                                        <option value="50">50</option>
                                        <option value="60">60</option>
                                        <option value="70">70</option>
                                        <option value="80">80</option>
                                        <option value="90">90</option>
                                        <option value="100">100</option>
                                    </select>
                                </div>
                                <div class="form-control">
                                    <label for="tailwind ">Tailwind css</label>

                                    <select name="tailwind" className="select select-bordered" id="tailwind">
                                        <option value="10">10</option>
                                        <option value="20">20</option>
                                        <option value="30">30</option>
                                        <option value="40">40</option>
                                        <option value="50">50</option>
                                        <option value="60">60</option>
                                        <option value="70">70</option>
                                        <option value="80">80</option>
                                        <option value="90">90</option>
                                        <option value="100">100</option>
                                    </select>
                                </div>
                                <div class="form-control">
                                    <label for="redux ">Redux </label>

                                    <select name="redux" className="select select-bordered" id="redux">
                                        <option value="10">10</option>
                                        <option value="20">20</option>
                                        <option value="30">30</option>
                                        <option value="40">40</option>
                                        <option value="50">50</option>
                                        <option value="60">60</option>
                                        <option value="70">70</option>
                                        <option value="80">80</option>
                                        <option value="90">90</option>
                                        <option value="100">100</option>
                                    </select>
                                </div>
                                <div class="form-control">
                                    <label for="nextjs ">Next js</label>

                                    <select name="nextjs" className="select select-bordered" id="nextjs">
                                        <option value="10">10</option>
                                        <option value="20">20</option>
                                        <option value="30">30</option>
                                        <option value="40">40</option>
                                        <option value="50">50</option>
                                        <option value="60">60</option>
                                        <option value="70">70</option>
                                        <option value="80">80</option>
                                        <option value="90">90</option>
                                        <option value="100">100</option>
                                    </select>
                                </div>
                                <div class="form-control">
                                    <label for="bs ">Bootstrap</label>

                                    <select name="bs" className="select select-bordered" id="bs">
                                        <option value="10">10</option>
                                        <option value="20">20</option>
                                        <option value="30">30</option>
                                        <option value="40">40</option>
                                        <option value="50">50</option>
                                        <option value="60">60</option>
                                        <option value="70">70</option>
                                        <option value="80">80</option>
                                        <option value="90">90</option>
                                        <option value="100">100</option>
                                    </select>
                                </div>
                                <div class="form-control">
                                    <label for="daisy ">Daisy ui</label>

                                    <select name="daisy" className="select select-bordered" id="daisy">
                                        <option value="10">10</option>
                                        <option value="20">20</option>
                                        <option value="30">30</option>
                                        <option value="40">40</option>
                                        <option value="50">50</option>
                                        <option value="60">60</option>
                                        <option value="70">70</option>
                                        <option value="80">80</option>
                                        <option value="90">90</option>
                                        <option value="100">100</option>
                                    </select>
                                </div>

                                <div class="form-control mt-6">
                                    <input className="btn" type="submit" value="Save" />
                                </div>


                            </form>
                        </div>
                    </div>
                    <div class="modal-action">
                        <label for="skill-update" class="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsUpdate;