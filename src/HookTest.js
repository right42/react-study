import React, { useState } from 'react';

const HookTest = function HookTest(props) {
    const [text, setText] = useState('');

    const clickHandle = () => {
        setText('Click!');
    };

    return (
        <div>
            <button onClick={clickHandle}>Click me</button>
            <h1>{text}</h1>
        </div>
    );
}

export default HookTest;