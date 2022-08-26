import React from 'react';

const Skills = () => {
    return (
        <div className='py-12'>
            <div className='py-4'>
                <h2 className="text-center font-bold text-2xl text-[#4D4C7D] uppercase">Skills</h2>
                <div className='w-4 h-1 bg-[#4D4C7D] mx-auto'></div>
            </div>

            {/* ----------------------------- */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div class="w-full bg-gray-200 rounded-full  dark:bg-gray-700">
                    <div class="bg-[#4D4C7D] text-white font-bold uppercase pl-2  rounded-full" style={{ width: `95%` }}>html</div>
                </div>
                <div class="w-full bg-gray-200 rounded-full  dark:bg-gray-700">
                    <div class="bg-[#4D4C7D] text-white font-bold uppercase pl-2  rounded-full" style={{ width: `75%` }}>css</div>
                </div>
                <div class="w-full bg-gray-200 rounded-full  dark:bg-gray-700">
                    <div class="bg-[#4D4C7D] text-white font-bold uppercase pl-2  rounded-full" style={{ width: `55%` }}>javascript</div>
                </div>
                <div class="w-full bg-gray-200 rounded-full  dark:bg-gray-700">
                    <div class="bg-[#4D4C7D] text-white font-bold uppercase pl-2  rounded-full" style={{ width: `65%` }}>Tailwind Css</div>
                </div>
                <div class="w-full bg-gray-200 rounded-full  dark:bg-gray-700">
                    <div class="bg-[#4D4C7D] text-white font-bold uppercase pl-2  rounded-full" style={{ width: `85%` }}>redux</div>
                </div>
                <div class="w-full bg-gray-200 rounded-full  dark:bg-gray-700">
                    <div class="bg-[#4D4C7D] text-white font-bold uppercase pl-2  rounded-full" style={{ width: `55%` }}>next js</div>
                </div>
                <div class="w-full bg-gray-200 rounded-full  dark:bg-gray-700">
                    <div class="bg-[#4D4C7D] text-white font-bold uppercase pl-2  rounded-full" style={{ width: `65%` }}>TailwindCss</div>
                </div>
                <div class="w-full bg-gray-200 rounded-full  dark:bg-gray-700">
                    <div class="bg-[#4D4C7D] text-white font-bold uppercase pl-2  rounded-full" style={{ width: `45%` }}>bootstrap</div>
                </div>
            </div>
            {/* ----------------------------- */}

        </div>
    );
};

export default Skills;