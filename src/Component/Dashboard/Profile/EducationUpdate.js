import React from 'react';

const EducationUpdate = () => {
    return (
        <div>
            <input type="checkbox" id="education-update" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <div class="card flex-shrink-0 w-full max-w-sm mx-auto bg-base-100">
                        <div class="card-body">
                            <form >

                                {/* university------------------------ */}
                                <h3 className="text-center font-bold text-xl">University</h3>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">University</span>
                                    </label>
                                    <input type="text" placeholder="University" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Graduation Subject</span>
                                    </label>
                                    <input type="text" placeholder="Graduation Subject" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Passing Year</span>
                                    </label>
                                    <input type="text" placeholder="University passing year" class="input input-bordered" />
                                </div>
                                {/* colleget-------------------------------- */}
                                <h3 className="text-center font-bold text-xl">College </h3>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">College Name</span>
                                    </label>
                                    <input type="text" placeholder="College Name" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Group</span>
                                    </label>
                                    <input type="text" placeholder="Group" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">College Passing Year</span>
                                    </label>
                                    <input type="text" placeholder="College passing year" class="input input-bordered" />
                                </div>
                                {/* high school---------- */}
                                <h3 className="text-center font-bold text-xl">High School</h3>

                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">School Name</span>
                                    </label>
                                    <input type="text" placeholder="School Name" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Group</span>
                                    </label>
                                    <input type="text" placeholder="School Group" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">High School Passing Year</span>
                                    </label>
                                    <input type="text" placeholder="High School passing year" class="input input-bordered" />
                                </div>
                                <div class="form-control mt-6">
                                    <button class="btn btn-primary">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="modal-action">
                        <label for="education-update" class="btn">close</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducationUpdate;