import { plainToClass } from "class-transformer";
import loadWeekWeatherInfoMockedData from "../data/mock/loadWeekWeatherInfo.json";
import loadDayWeatherInfoMockedData from "../data/mock/loadDayWeatherInfo.json";
import { OpenWeatherMapDayResponse } from "../data/model/OpenWeatherResponse/OpenWeatherMapDayResponse";
import { OpenWeatherMapWeekResponse } from "../data/model/OpenWeatherResponse/OpenWeatherMapWeekResponse";

export function loadWeekWeatherInfo(): OpenWeatherMapWeekResponse | undefined {
    // TODO: Map the data from JSON to OpenWeatherMapWeekResponse
    let openWeatherMapWeekResponse: OpenWeatherMapWeekResponse = plainToClass(OpenWeatherMapWeekResponse, loadWeekWeatherInfoMockedData as Object);

    return openWeatherMapWeekResponse;
}

export function loadDayWeatherInfo(): OpenWeatherMapDayResponse | undefined {
    // TODO: Map the data from JSON to OpenWeatherMapDayResponse
    let openWeatherMapDayResponse: OpenWeatherMapDayResponse = plainToClass(OpenWeatherMapDayResponse, loadDayWeatherInfoMockedData as Object);

    // TODO: Map the data from JSON to OpenWeatherMapDayResponse
    return openWeatherMapDayResponse;
}