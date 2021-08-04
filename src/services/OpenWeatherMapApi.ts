import axios from "axios";
import { plainToClass } from "class-transformer";
import loadWeekWeatherInfoMockedData from "../data/mock/loadWeekWeatherInfo.json";
import loadDayWeatherInfoMockedData from "../data/mock/loadDayWeatherInfo.json";
import { OpenWeatherMapDayResponse } from "../data/model/OpenWeatherResponse/OpenWeatherMapDayResponse";
import { OpenWeatherMapWeekResponse } from "../data/model/OpenWeatherResponse/OpenWeatherMapWeekResponse";

const sleep = (milliseconds: number) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

export async function loadWeekWeatherInfo(): Promise<OpenWeatherMapWeekResponse | undefined> {
    // TODO: Map the data from JSON to OpenWeatherMapWeekResponse
    let openWeatherMapWeekResponse: OpenWeatherMapWeekResponse = plainToClass(OpenWeatherMapWeekResponse, loadWeekWeatherInfoMockedData as Object);

    await sleep(1000);

    return openWeatherMapWeekResponse;

    // try {
    //     const response = await axios.get(
    //         'https://api.openweathermap.org/data/2.5/onecall?lat=-21.9956977&lon=-47.9515105&exclude=minutely,hourly,alerts,current&appid=5bf4009a1c9ac711a96acf649074854f&units=imperial'
    //     );

    //     if (response.status === 200) {
    //         let openWeatherMapWeekResponse: OpenWeatherMapWeekResponse = plainToClass(OpenWeatherMapWeekResponse, response.data as Object);
    //         return openWeatherMapWeekResponse;
    //     } else {
    //         return undefined;
    //     }
    // } catch (_) {
    //     return undefined;
    // }
}

export async function loadDayWeatherInfo(): Promise<OpenWeatherMapDayResponse | undefined> {
    // // TODO: Map the data from JSON to OpenWeatherMapDayResponse
    // let openWeatherMapDayResponse: OpenWeatherMapDayResponse = plainToClass(OpenWeatherMapDayResponse, loadDayWeatherInfoMockedData as Object);

    // // TODO: Map the data from JSON to OpenWeatherMapDayResponse
    // return openWeatherMapDayResponse;

    try {
        const response = await axios.get(
            'https://api.openweathermap.org/data/2.5/onecall?lat=-21.9956977&lon=-47.9515105&exclude=minutely,alerts,current,daily&appid=5bf4009a1c9ac711a96acf649074854f&units=imperial'
        );

        if (response.status === 200) {
            let openWeatherMapWeekResponse: OpenWeatherMapDayResponse = plainToClass(OpenWeatherMapDayResponse, response.data as Object);
            return openWeatherMapWeekResponse;
        } else {
            return undefined;
        }
    } catch (_) {
        return undefined;
    }    
}