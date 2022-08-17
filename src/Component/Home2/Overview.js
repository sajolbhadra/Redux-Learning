import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { FaUserCheck } from 'react-icons/fa';
import { MdQuiz } from 'react-icons/md';
import { GiNotebook } from 'react-icons/gi';

const Overview = () => {
    const [viewPortEntered, setViewPortEntered] = useState(false);

    return (
        <div className="pt-8 pb-32 px-8">
            <h2 className='text-center text-primary text-4xl font-bold uppercase py-5'>overview</h2>
            <div className='cards grid grid-cols-1 lg:grid-cols-3 gap-4'>
                <div class="card card-side bg-base-100 shadow-xl p-5 overViewStyle">
                    <figure><FaUserCheck className='w-[100px]'></FaUserCheck></figure>
                    <div class="card-body">
                        <h1 class="text-5xl font-bold">
                            <CountUp start={viewPortEntered ? null : 0} end={500} suffix='+'>
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

                <div class="card card-side bg-base-100 shadow-xl p-5 overViewStyle">
                    <figure><GiNotebook className='w-[100px]'></GiNotebook></figure>
                    <div class="card-body">
                        <h1 class="text-5xl font-bold">
                            <CountUp start={viewPortEntered ? null : 0} end={400} suffix='+'>
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
                        <h2 class="card-title">Topics Covered</h2>
                    </div>
                </div>

                <div class="card card-side bg-base-100 shadow-xl p-5 overViewStyle">
                    <figure><MdQuiz className='w-[100px]'></MdQuiz></figure>
                    <div class="card-body">
                        <h1 class="text-5xl font-bold">
                            <CountUp start={viewPortEntered ? null : 0} end={300} suffix='+'>
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
                        <h2 class="card-title">Quizzes for Evaluation</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;