import React, { Component } from 'react';
import { WeatherDailyInfo } from '../../components/WeatherDailyInfo';
import { OpenWeatherMapWeekResponse } from '../../data/model/OpenWeatherResponse/OpenWeatherMapWeekResponse';
import { WeatherInfoMap } from '../../data/model/WeatherInfo/response/WeatherInfoMap';
import { DailyWeatherInfo } from '../../data/model/WeatherInfo/DailyWeatherInfo';
import { loadWeekWeatherInfo } from '../../services/OpenWeatherMapApi';
import './styles.css';

interface IProps {

}

interface IState {
    weekWeatherInfos: Array<DailyWeatherInfo>
}

export class HomePage extends Component<IProps, IState> {

    constructor(props: IProps){
        super(props);

        this.state = {
            weekWeatherInfos: []
        };
    }
    
    componentDidMount = () => {
        const weekWeatherInfo = loadWeekWeatherInfo();
        if (weekWeatherInfo !== undefined) {
            let weekWeatherInfos = weekWeatherInfo.daily.map((weatherInfoMap, _) => WeatherInfoMap.toDailyWeatherInfo(weatherInfoMap));
            weekWeatherInfos.sort((weatherInfoA, weatherInfoB) => weatherInfoB.date.getTime() - weatherInfoA.date.getTime());
            if (weekWeatherInfos.length > 5) {
                weekWeatherInfos = weekWeatherInfos.slice(0, 5);
            }
            
            this.setState({weekWeatherInfos: weekWeatherInfos});
        }
    }

    render() {
        const {weekWeatherInfos} = this.state;
        
        return (
            <div className="HomePageMain">
                <div className="WeekWeatherInfo">
                    {weekWeatherInfos != undefined &&
                        weekWeatherInfos.map((dayWeatherInfo, key) => 
                            <WeatherDailyInfo weatherDailyInfo={dayWeatherInfo} />
                        )
                    }
                </div>
            </div>
        );
    }

}