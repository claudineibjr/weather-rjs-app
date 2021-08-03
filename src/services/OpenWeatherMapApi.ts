import axios from "axios";
import { plainToClass } from "class-transformer";
import loadDayWeatherInfoMockedData from "../data/mock/loadDayWeatherInfo.json";
import { OpenWeatherMapDayResponse } from "../data/model/OpenWeatherResponse/OpenWeatherMapDayResponse";
import { OpenWeatherMapWeekResponse } from "../data/model/OpenWeatherResponse/OpenWeatherMapWeekResponse";

export async function loadWeekWeatherInfo(): Promise<OpenWeatherMapWeekResponse | undefined> {
    try {
        const response = await axios.get(
            'https://api.openweathermap.org/data/2.5/onecall?lat=-21.9956977&lon=-47.9515105&exclude=minutely,hourly,alerts,current&appid=5bf4009a1c9ac711a96acf649074854f&units=imperial'
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

export function loadDayWeatherInfo(): OpenWeatherMapDayResponse | undefined {
    // TODO: Map the data from JSON to OpenWeatherMapDayResponse
    let openWeatherMapDayResponse: OpenWeatherMapDayResponse = plainToClass(OpenWeatherMapDayResponse, loadDayWeatherInfoMockedData as Object);

    // TODO: Map the data from JSON to OpenWeatherMapDayResponse
    return openWeatherMapDayResponse;
}