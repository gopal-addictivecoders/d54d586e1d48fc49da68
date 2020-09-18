import React from 'react';
import './detailPage.css';
import CountryCard from "../../components/CountryCard";
import ButtonComponent from "../../components/ButtonComponent";

const DetailPage = (props) => {
    const {data} = props.location.state;
    // function to go back
    const goBack = () => {
        window.history.back();
    }
    return (
        <div>
            <ButtonComponent disabled={false} name={'Search for another Country'} onClick={goBack}/>
            {
                data.map((item, index) => (
                    <CountryCard data={item} key={index}/>
                ))
            }
        </div>
    );
};

export default DetailPage;