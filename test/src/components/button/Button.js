import React from 'react';

const Button = ({ label, action }) => {
    return (
        <div>
            <button onClick={action}>{label}</button>
        </div>

    );
};

export default Button;