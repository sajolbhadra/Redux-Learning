import React from 'react';
import choose from '../../assets/icon/choice.png'
import join from '../../assets/icon/add-friend (1).png'
import learn from '../../assets/icon/learning (1).png'

const Step = () => {
    return (
        <div className="pt-8 pb-20 mx-8">
            <h2 className='text-center text-primary text-4xl font-bold uppercase py-5'>Steps to Learning</h2>

            <div className="cards grid grid-cols-1 lg:grid-cols-3 gap-4">


                <div className="card w-full text-black lg:w-[90%] text-center rounded-sm bg-green-200 mx-auto p-5">
                    <figure><img src={join} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-3xl font-bold uppercase">
                            Join

                        </h2>
                        <p>Expand your knowledge barrier by joining us. As you advance, your knowledge will increase, and you'll eventually become a skilled redux developer.</p>

                    </div>
                </div>

                <div className="card text-black w-full lg:w-[90%] rounded-sm bg-pink-200 mx-auto p-5 text-center">
                    <figure><img className='' src={choose} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-3xl font-bold uppercase">
                        Master a topic

                        </h2>
                        <p>We will help you learn redux using our professional guidance so that you can master a redux topic.</p>

                    </div>
                </div>

                <div className="card w-full text-black lg:w-[90%] rounded-sm bg-yellow-200 mx-auto p-5 text-center">
                    <figure><img src={learn} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-3xl font-bold uppercase">
                        Become Certified

                        </h2>
                        <p>Reading this documentation and taking the quiz afterwards will win you some gems, through which you can obtain a learning redux certificate.</p>

                    </div>
                </div>








            </div>
        </div>
    );
};

export default Step;