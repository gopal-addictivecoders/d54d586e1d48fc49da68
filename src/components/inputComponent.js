import React from 'react';

const InputComponent = (props) => {
    const {placeholder, onChange, value} = props;
    return (
        <input type="text" className={'centerWithMargin'} placeholder={placeholder} value={value} onChange={onChange}/>
    );
};

export default InputComponent;