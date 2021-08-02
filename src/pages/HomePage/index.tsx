import React, { Component } from 'react';
import { WeatherDailyInfo } from '../../components/WeatherDailyInfo';
import { OpenWeatherMapWeekResponse } from '../../data/model/OpenWeatherResponse/OpenWeatherMapWeekResponse';
import { WeatherInfoMap } from '../../data/model/WeatherInfo/response/WeatherInfoMap';
import { loadWeekWeatherInfo } from '../../services/OpenWeatherMapApi';
import './styles.css';

interface IProps {

}

interface IState {
    weekWeatherInfo?: OpenWeatherMapWeekResponse
}

export class HomePage extends Component<IProps, IState> {

    constructor(props: IProps){
        super(props);

        this.state = {
            weekWeatherInfo: undefined
        };
    }
    
    componentDidMount = () => {
        const weekWeatherInfo = loadWeekWeatherInfo();
        this.setState({weekWeatherInfo: weekWeatherInfo});
    }

    render() {
        const {weekWeatherInfo} = this.state;
        
        return (
            <div className="Main">
                {weekWeatherInfo != undefined &&
                    weekWeatherInfo.daily.map((dayWeatherInfo, key) => 
                        <WeatherDailyInfo weatherDailyInfo={WeatherInfoMap.toWeatherInfo(dayWeatherInfo)} />
                    )
                }
            </div>
        );
    }

}