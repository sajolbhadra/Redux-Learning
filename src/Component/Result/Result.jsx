import React, { useContext } from 'react';
import { AllContext } from '../../context/AllProvider';

const Result = () => {
    const {totalAns} =useContext(AllContext);
    return (
        <div>
            <p>Result : {totalAns?.length}</p>
        </div>
    );
};

export default Result;