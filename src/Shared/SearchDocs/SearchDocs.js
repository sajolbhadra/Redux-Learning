import React from 'react';
import { Link } from 'react-router-dom';

const SearchDocs = ({titles}) => {
    const {title, link}=titles;
    console.log(title, link);
    return (
        <li>
            <Link to={link}>{title}</Link>
        </li>

    );
};

export default SearchDocs;