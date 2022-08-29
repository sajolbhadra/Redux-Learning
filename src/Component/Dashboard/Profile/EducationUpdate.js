import React from 'react';

const EducationUpdate = () => {
    return (
        <div>
            <input type="checkbox" id="education-update" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <label for="education-update" class="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducationUpdate;