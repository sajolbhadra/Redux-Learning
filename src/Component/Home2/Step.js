import React from 'react';
import choose from '../../assets/icon/choice.png'
import join from '../../assets/icon/add-friend (1).png'
import learn from '../../assets/icon/learning (1).png'

const Step = () => {
    return (
        <div className="pt-8 pb-32 mx-8">
            <h2 className='text-center text-primary text-4xl font-bold uppercase py-5'>Steps to Learning</h2>

            <div className="cards grid grid-cols-1 lg:grid-cols-3 gap-4">


                <div class="card w-full text-black lg:w-[90%] text-center rounded-sm bg-green-200 mx-auto p-5">
                    <figure><img src={join} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="text-3xl font-bold uppercase">
                            Join

                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

                    </div>
                </div>

                <div class="card text-black w-full lg:w-[90%] rounded-sm bg-pink-200 mx-auto p-5 text-center">
                    <figure><img className='' src={choose} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="text-3xl font-bold uppercase">
                            Choose a topic

                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

                    </div>
                </div>

                <div class="card w-full text-black lg:w-[90%] rounded-sm bg-yellow-200 mx-auto p-5 text-center">
                    <figure><img src={learn} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="text-3xl font-bold uppercase">
                            Learn redux

                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

                    </div>
                </div>








            </div>
        </div>
    );
};

export default Step;