import React, { useState } from 'react';
import './Header.css';
import { A } from 'hookrouter';

const Header = () => {
    return (
        <div className="row bg-primary text-light headerRow">
            <div className="col-12 d-flex align-items-center justify-content-center">
                <A href="/">
                    <h1 className='headerText'>Speed Games!</h1>
                </A>
            </div>
        </div>
    )
}

export default Header;