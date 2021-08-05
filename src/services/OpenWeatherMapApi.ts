import axios from "axios";
import { plainToClass } from "class-transformer";
import loadWeekWeatherInfoMockedData from "../data/mock/loadWeekWeatherInfo.json";
import load5Day3HoursWeatherForecastInfoMockedData from "../data/mock/load5Day3HoursWeatherForecastInfo.json";
import OpenWeatherMap5Day3HoursWeatherInfoResponse from "../data/model/OpenWeatherResponse/OpenWeatherMap5Day3HoursWeatherInfoResponse";
import { OpenWeatherMapWeekResponse } from "../data/model/OpenWeatherResponse/OpenWeatherMapWeekResponse";

export const sleep = (milliseconds: number) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

export async function loadWeekWeatherInfo(latitude: number, longitude: number): Promise<OpenWeatherMapWeekResponse | undefined> {
    try {
        // TODO: Map the data from JSON to OpenWeatherMapWeekResponse
        let openWeatherMapWeekResponse: OpenWeatherMapWeekResponse = plainToClass(OpenWeatherMapWeekResponse, loadWeekWeatherInfoMockedData as Object);

        await sleep(250);

        return openWeatherMapWeekResponse;
    } catch (_) {
        return undefined;
    }

    // try {
    //     const OPEN_WHEATER_MAP_API_KEY = process.env.REACT_APP_OPEN_WHEATER_MAP_API_KEY;
    //     const response = await axios.get(
    //         `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts,current&appid=${OPEN_WHEATER_MAP_API_KEY}&units=imperial`
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

export async function load5Days3HoursForecastWeatherInfo(latitude: number, longitude: number): Promise<OpenWeatherMap5Day3HoursWeatherInfoResponse | undefined> {
    try {
        // TODO: Map the data from JSON to OpenWeatherMapWeekResponse
        let openWeatherMap5Day3HoursWeatherInfoResponse: OpenWeatherMap5Day3HoursWeatherInfoResponse = plainToClass(OpenWeatherMap5Day3HoursWeatherInfoResponse, load5Day3HoursWeatherForecastInfoMockedData as Object);

        await sleep(250);

        return openWeatherMap5Day3HoursWeatherInfoResponse;
    } catch (_) {
        return undefined;
    }

    // try {
    //     const OPEN_WHEATER_MAP_API_KEY = process.env.REACT_APP_OPEN_WHEATER_MAP_API_KEY;
    //     const response = await axios.get(
    //         `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${OPEN_WHEATER_MAP_API_KEY}&units=imperial`
    //     );

    //     if (response.status === 200) {
    //         const openWeatherMap5Day3HoursWeatherInfoResponse: OpenWeatherMap5Day3HoursWeatherInfoResponse = plainToClass(OpenWeatherMap5Day3HoursWeatherInfoResponse, response.data as Object);
    //         return openWeatherMap5Day3HoursWeatherInfoResponse;
    //     } else {
    //         return undefined;
    //     }
    // } catch (_) {
    //     return undefined;
    // }
}