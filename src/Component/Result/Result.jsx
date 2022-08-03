import React from 'react';

const Result = ({totalAns}) => {
    return (
        <div>
            <p>Result : {totalAns?.length}</p>
        </div>
    );
};

export default Result;