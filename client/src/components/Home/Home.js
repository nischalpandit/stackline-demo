import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className='abs-center-container'>
            <Link to='/sales-demo'>
                <button className="btn btn-primary">Preview Demo</button>
            </Link>
        </div>
    )
}
