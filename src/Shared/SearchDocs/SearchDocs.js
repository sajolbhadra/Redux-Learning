import React from 'react';
import { Link } from 'react-router-dom';

const SearchDocs = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/gettingStarted">Getting Started with Redux</Link>
                </li>
                <li>
                    <Link to="/gettingStarted/installation">Installation</Link>{" "}
                </li>
                <li>
                    <Link to="/gettingStarted/whyReduxToolkit">Why redux toolkit</Link>
                </li>
                <li>
                    <Link to="/gettingStarted/coreConcept">Core Concept</Link>
                </li>
                <li>
                    <Link to="/gettingStarted/resources">Resources</Link>
                </li>
                <li>
                    <Link to="/gettingStarted/example">Example</Link>
                </li>

                <li>
                    <Link to="/gettingStarted/tutorial">Tutorials Index </Link>
                </li>
                <li>
                    <Link to="/gettingStarted/quickStart">Quick Start</Link>
                </li>
                <li>
                    <Link to="/gettingStarted/typescriptQuickStart">Videos</Link>
                </li>
                <li>
                    <Link to="/gettingStarted/reduxEssentials">Redux Essentials</Link>
                </li>
                <li>
                    <Link to="/gettingStarted">Using Redux</Link>
                </li>
                <li>
                    <Link to="/gettingStarted/installation">Setup and Organization</Link>
                </li>
                <li>
                    <Link to="/gettingStarted/why-redux"> Code quality</Link>
                </li>
                <li>
                    <Link to="/gettingStarted/coreConcept">Redux Essentials</Link>
                </li>
            </ul>
        </div>
    );
};

export default SearchDocs;