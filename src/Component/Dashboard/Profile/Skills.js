import React from 'react';
import SkillsUpdate from './SkillsUpdate';

const Skills = () => {
    return (
        <div className='py-12 px-4'>


            <div className="flex justify-between">
                <h2 className="text-[#4D4C7D] text-3xl font-bold">Skills</h2>
                <label for="my-modal" class="btn modal-button rounded-none btn-sm">Edit</label>
            </div>
            <hr />

            {/* ----------------------------- */}
            <div className="grid grid-cols-1 py-8 lg:grid-cols-2 gap-8">
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
            <SkillsUpdate />

        </div>
    );
};

export default Skills;