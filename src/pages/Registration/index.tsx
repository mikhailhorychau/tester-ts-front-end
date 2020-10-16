import React from 'react';

import './index.scss';

interface IRegistrationProps {

}

const Registration: React.FC<IRegistrationProps> = () => {

    return (
        <div className="container">
            <div className="form">
                <div className="input-container">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" className="input" autoComplete="off"/>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" className="input"/>
                </div>
                <button>Register</button>
            </div>
        </div>
    )
}

export default Registration;