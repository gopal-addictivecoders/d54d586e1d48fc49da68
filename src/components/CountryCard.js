import React from 'react';
import ImageComponent from "./imageComponent";
import TextComponent from "./TextComponent";
import ButtonComponent from "./ButtonComponent";
import {apiKey} from "../config/config";
import {Api} from "../services/api";
const api = new Api();

const CountryCard = (props) => {
    const [showWeather, setShowWeather]  = React.useState(false);
    const [loader, setLoader]  = React.useState(false);
    const {flag, capital, latlng, population}  = props.data;
    const [weatherData, setWeatherData] = React.useState({
        weather_icons: '',
        temperature: 0,
        wind_speed: 0,
        precip: ''
    });
    /**
     * functon to get the weather for the country
     * @param capital: capital
     */
    const getWeather = (capital) => {
        setLoader(true);
        const param = 'http://api.weatherstack.com/current?access_key=' + apiKey + '&query=' + capital;
        api.getApi(param).then(res => {
            setLoader(false);
            if (res.status === 200) {
                res.json().then(response => {
                    setShowWeather(true);
                    setWeatherData({
                        weather_icons: response.current.weather_icons[0],
                        temperature: response.current.temperature,
                        wind_speed: response.current.wind_speed,
                        precip: response.current.precip
                    })
                }).catch(error => {
                    api.showAlert('Could not fetch the weather data')
                })
            } else {
                api.showAlert('Could not fetch the weather data' + res.status);
            }
        }).catch(error => {
            setLoader(false);
            api.showAlert('Network request failed');
        });
    }
    return (
        <React.Fragment>
            <div className={'countryWrapper'}>
                <ImageComponent source={flag}/>
                <div>
                    <TextComponent text={'Capital :- ' + capital}/>
                    <TextComponent text={'Population :- ' + population}/>
                    <TextComponent text={'latlng :- ' + latlng}/>
                </div>
            </div>
            {
                loader ? <TextComponent text={'please wait ...'}/> : null
            }
            {!showWeather ?
                <React.Fragment>
                    {
                        capital ? <ButtonComponent name={'Capital Weather'} onClick={() => {getWeather(capital)}} disabled={false}/>: <TextComponent text={'Cannot fetch weather since capital not found'}/>
                    }
                </React.Fragment>
                : (
                    <div className={'countryWrapper weatherWrapper'}>
                        <ImageComponent source={weatherData.weather_icons}/>
                        <div>
                            <TextComponent text={'temperature :- ' + weatherData.temperature}/>
                            <TextComponent text={'wind_speed :- ' + weatherData.wind_speed}/>
                            <TextComponent text={'precip :- ' + weatherData.precip}/>
                        </div>
                    </div>
                )
            }
        </React.Fragment>
    );
};

export default CountryCard;