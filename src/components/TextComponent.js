import React from 'react';

const TextComponent = (props) => {
    const {text} = props
    return (
        <p className={'text'}>
            {text}
        </p>
    );
};

export default TextComponent;