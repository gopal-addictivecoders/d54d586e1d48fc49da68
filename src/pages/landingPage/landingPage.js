import React from 'react';
import {Api} from "../../services/api";
import InputComponent from "../../components/inputComponent";
import './landingPage.css'
import ButtonComponent from "../../components/ButtonComponent";
import TextComponent from "../../components/TextComponent";
import ImageComponent from "../../components/imageComponent";

const api = new Api();
const LandingPage = (props) => {
    const [country, setCountry] = React.useState('');
    const [loader, setLoader] = React.useState(false);

    const onCountrySubmit = () => {
        setLoader(true);
        const param = 'https://restcountries.eu/rest/v2/name/' + country;
        api.getApi(param).then(res => {
            setLoader(false);
            if (res.status === 200) {
                res.json().then(response => {
                    props.history.push({
                        pathname: 'detail',
                        state: {data: response}
                    });
                }).catch(error => {
                    api.showAlert('Could not fetch the country data')
                })
            } else  if (res.status === 404) {
                api.showAlert('Country not found');
            } else {
                api.showAlert('Could not fetch the country data' + res.status);
            }
        }).catch(error => {
            setLoader(false);
            api.showAlert('Network request failed');
        });
    }
    const onTextChange = ev => {
            setCountry(ev.target.value);
    }
    return (
        <div className={'box'}>
            <ImageComponent source={'data:image/png;base64,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'}/>
            <h1 className={'heading'}>Welcome</h1>
            <InputComponent placeholder={'Enter country'} value={country} onChange={onTextChange}/>
            {
                loader ? <TextComponent text={'please wait ...'}/> : null
            }
            <ButtonComponent name={'Submit'} onClick={onCountrySubmit} disabled={!country}/>
        </div>
    );
};

export default LandingPage;