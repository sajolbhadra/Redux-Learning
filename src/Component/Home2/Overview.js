import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { FaUserCheck } from 'react-icons/fa';
import { MdQuiz } from 'react-icons/md';
import { GiNotebook } from 'react-icons/gi';

const Overview = () => {
    // const [userCountUp, setUserCountUp] = useState('');
    // const [topicCountUp, setTopicCountUp] = useState('');
    // const listenScrollEvent = () => {
    //     window.scrollY > 900 ? setUserCountUp(<CountUp start={0} end={500} duration={3}/>) : setUserCountUp('500');
    //     window.scrollY > 900 ? setTopicCountUp(<CountUp start={0} end={500} duration={3}/>) : setTopicCountUp('500');
    // };
    // useEffect(() => {
    //     window.addEventListener("scroll", listenScrollEvent);
    //     return () => {
    //         window.removeEventListener("scroll", listenScrollEvent);
    //     };
    // }, []);
    const [viewPortEntered, setViewPortEntered] = useState(false);
    return (
        <div className="pt-8 pb-32 px-8">
            <h2 className='text-center text-primary text-4xl font-bold uppercase py-5'>overview</h2>
            <div className='cards grid grid-cols-1 lg:grid-cols-3 gap-4'>
                <div class="card card-side bg-base-100 shadow-xl p-5 bg-slate-300">
                    <figure><FaUserCheck></FaUserCheck></figure>
                    <div class="card-body">
                        <h1 class="text-5xl font-bold">
                            <CountUp start={viewPortEntered ? null : 0} end={100}>
                                {({ countUpRef }) => (
                                    <VisibilitySensor onChange={isVisible => {
                                        if (isVisible) {
                                            setViewPortEntered(true);
                                        }
                                    }} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                        </h1>
                        <h2 class="card-title">Registered Users</h2>
                    </div>
                </div>

                <div class="card card-side bg-base-100 shadow-xl p-5 bg-slate-300">
                    <figure><GiNotebook></GiNotebook></figure>
                    <div class="card-body">
                        <h1 class="text-5xl font-bold">{ }+</h1>
                        <h2 class="card-title">Topics Covered</h2>
                    </div>
                </div>

                <div class="card card-side bg-base-100 shadow-xl p-5 bg-slate-300">
                    <figure><MdQuiz></MdQuiz></figure>
                    <div class="card-body">
                        <h1 class="text-5xl font-bold">{'300'}+</h1>
                        <h2 class="card-title">Quizzes for Evaluation</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;