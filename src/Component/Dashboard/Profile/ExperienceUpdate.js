import React from 'react';

const ExperienceUpdate = () => {
    const handleEducationUpdate = e => {
        e.preventDefault();


    }
    return (
        <div>
            <input type="checkbox" id="experience-update" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">

                    <form onSubmit={handleEducationUpdate} className="mt-12">

                        {/* university------------------------ */}
                        <h3 className="text-center font-bold text-xl">Experience 1 </h3>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Position</span>
                            </label>
                            <input name='experience1' type="text" placeholder="Position" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Description</span>
                            </label>
                            <input name='description1' type="text" placeholder="Description" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Time</span>
                            </label>
                            <input name='time1' type="text" placeholder="Time" class="input input-bordered" />
                        </div>
                        {/* college-------------------------------- */}
                        <h3 className="text-center font-bold text-xl">Experience 2 </h3>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Position</span>
                            </label>
                            <input name='experience2' type="text" placeholder="Position" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Description</span>
                            </label>
                            <input name='description2' type="text" placeholder="Description" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Time</span>
                            </label>
                            <input name='time2' type="text" placeholder="Time" class="input input-bordered" />
                        </div>
                        {/* high school---------- */}
                        <h3 className="text-center font-bold text-xl">Experience 3</h3>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Position</span>
                            </label>
                            <input name='experience3' type="text" placeholder="Position" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Description</span>
                            </label>
                            <input name='description3' type="text" placeholder="Description" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Time</span>
                            </label>
                            <input name='time3' type="text" placeholder="Time" class="input input-bordered" />
                        </div>
                        <div class="form-control mt-6">
                            <input className='btn ' type="submit" value="Save" />
                        </div>
                    </form>

                    <div class="modal-action">
                        <label for="experience-update" class="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceUpdate;