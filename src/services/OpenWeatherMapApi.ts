import axios from "axios";
import { plainToClass } from "class-transformer";
import loadWeekWeatherInfoMockedData from "../data/mock/loadWeekWeatherInfo.json";
import loadDayWeatherInfoMockedData from "../data/mock/loadDayWeatherInfo.json";
import loadGeocodingInfoMockedData from "../data/mock/loadGeocodingInfo.json";
import { OpenWeatherMapDayResponse } from "../data/model/OpenWeatherResponse/OpenWeatherMapDayResponse";
import { OpenWeatherMapWeekResponse } from "../data/model/OpenWeatherResponse/OpenWeatherMapWeekResponse";
import { OpenWeatherMapGeocodingResponse } from "../data/model/OpenWeatherResponse/OpenWeatherMapGeocodingResponse";

const sleep = (milliseconds: number) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

export async function loadWeekWeatherInfo(latitude: number, longitude: number): Promise<OpenWeatherMapWeekResponse | undefined> {
    // // TODO: Map the data from JSON to OpenWeatherMapWeekResponse
    // let openWeatherMapWeekResponse: OpenWeatherMapWeekResponse = plainToClass(OpenWeatherMapWeekResponse, loadWeekWeatherInfoMockedData as Object);

    // await sleep(250);

    // const OPEN_WHEATER_MAP_API_KEY = process.env.REACT_APP_OPEN_WHEATER_MAP_API_KEY;

    // return openWeatherMapWeekResponse;

    try {
        const OPEN_WHEATER_MAP_API_KEY = process.env.REACT_APP_OPEN_WHEATER_MAP_API_KEY;
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts,current&appid=${OPEN_WHEATER_MAP_API_KEY}&units=imperial`
        );

        if (response.status === 200) {
            let openWeatherMapWeekResponse: OpenWeatherMapWeekResponse = plainToClass(OpenWeatherMapWeekResponse, response.data as Object);
            return openWeatherMapWeekResponse;
        } else {
            return undefined;
        }
    } catch (_) {
        return undefined;
    }
}

export async function loadDayWeatherInfo(latitude: number, longitude: number): Promise<OpenWeatherMapDayResponse | undefined> {
    // // TODO: Map the data from JSON to OpenWeatherMapDayResponse
    // let openWeatherMapDayResponse: OpenWeatherMapDayResponse = plainToClass(OpenWeatherMapDayResponse, loadDayWeatherInfoMockedData as Object);

    // await sleep(250);

    // const OPEN_WHEATER_MAP_API_KEY = process.env.REACT_APP_OPEN_WHEATER_MAP_API_KEY;

    // // TODO: Map the data from JSON to OpenWeatherMapDayResponse
    // return openWeatherMapDayResponse;

    try {
        const OPEN_WHEATER_MAP_API_KEY = process.env.REACT_APP_OPEN_WHEATER_MAP_API_KEY;
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,alerts,current,daily&appid=${OPEN_WHEATER_MAP_API_KEY}&units=imperial`
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

export async function loadGeocodingInfo(latitude: number, longitude: number): Promise<OpenWeatherMapGeocodingResponse | undefined> {
    // // TODO: Map the data from JSON to OpenWeatherMapDayResponse
    // let openWeatherMapGeocodingResponse: Array<OpenWeatherMapGeocodingResponse> = plainToClass(OpenWeatherMapGeocodingResponse, loadGeocodingInfoMockedData as Object[]);

    // await sleep(250);

    // const OPEN_WHEATER_MAP_API_KEY = process.env.REACT_APP_OPEN_WHEATER_MAP_API_KEY;

    // // TODO: Map the data from JSON to OpenWeatherMapDayResponse
    // if (openWeatherMapGeocodingResponse.length > 0) {
    //     return openWeatherMapGeocodingResponse[0];
    // } else {
    //     return undefined;
    // }

    try {
        const OPEN_WHEATER_MAP_API_KEY = process.env.REACT_APP_OPEN_WHEATER_MAP_API_KEY;

        const response = await axios.get(
            `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&appid=${OPEN_WHEATER_MAP_API_KEY}`
        );

        if (response.status === 200) {
            let openWeatherMapGeocodingResponse: Array<OpenWeatherMapGeocodingResponse> = plainToClass(OpenWeatherMapGeocodingResponse, response.data as Object[]);
            if (openWeatherMapGeocodingResponse.length > 0) {
                return openWeatherMapGeocodingResponse[0];
            } else {
                return undefined;
            }
        } else {
            return undefined;
        }
    } catch (_) {
        return undefined;
    }
}