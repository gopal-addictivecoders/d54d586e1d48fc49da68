import React from 'react';

const ImageComponent = (props) => {
    const {source} = props;
    return (
            <img src={source} className={'flag'} alt={'flag'}/>
    );
};

export default ImageComponent;