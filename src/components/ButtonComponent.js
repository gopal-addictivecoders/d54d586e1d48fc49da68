import React from 'react';

const ButtonComponent = (props) => {
    const {name, onClick, disabled} = props;
    return (
        <button type={'submit'} className={'centerWithMargin'} onClick={onClick} disabled={disabled}>{name}</button>
    );
};

export default ButtonComponent;