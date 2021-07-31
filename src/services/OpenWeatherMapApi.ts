import { OpenWeatherMapDayResponse } from "../data/model/OpenWeatherResponse/OpenWeatherMapDayResponse";
import { OpenWeatherMapWeekResponse } from "../data/model/OpenWeatherResponse/OpenWeatherMapWeekResponse";

export function loadWeekWeatherInfo(): OpenWeatherMapWeekResponse | null {
    let mockedData = `
    {
        "lat": -21.9957,
        "lon": -47.9515,
        "timezone": "America/Sao_Paulo",
        "timezone_offset": -10800,
        "current": {
            "dt": 1627673939,
            "sunrise": 1627638316,
            "sunset": 1627678260,
            "temp": 63.59,
            "feels_like": 61.05,
            "pressure": 1023,
            "humidity": 30,
            "dew_point": 31.68,
            "uvi": 0.24,
            "clouds": 85,
            "visibility": 10000,
            "wind_speed": 9.73,
            "wind_deg": 143,
            "wind_gust": 16.84,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ]
        },
        "daily": [
            {
                "dt": 1627657200,
                "sunrise": 1627638316,
                "sunset": 1627678260,
                "moonrise": 0,
                "moonset": 1627654260,
                "moon_phase": 0.72,
                "temp": {
                    "day": 58.64,
                    "min": 35.1,
                    "max": 63.59,
                    "night": 45.05,
                    "eve": 61.2,
                    "morn": 35.1
                },
                "feels_like": {
                    "day": 55.56,
                    "night": 39.38,
                    "eve": 58.51,
                    "morn": 30.42
                },
                "pressure": 1025,
                "humidity": 29,
                "dew_point": 26.67,
                "wind_speed": 12.46,
                "wind_deg": 148,
                "wind_gust": 27.96,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": 68,
                "pop": 0,
                "uvi": 6.36
            },
            {
                "dt": 1627743600,
                "sunrise": 1627724688,
                "sunset": 1627764684,
                "moonrise": 1627700520,
                "moonset": 1627742640,
                "moon_phase": 0.75,
                "temp": {
                    "day": 66.09,
                    "min": 39.88,
                    "max": 70.57,
                    "night": 52.56,
                    "eve": 59.18,
                    "morn": 39.88
                },
                "feels_like": {
                    "day": 63.91,
                    "night": 50.43,
                    "eve": 56.86,
                    "morn": 34.99
                },
                "pressure": 1026,
                "humidity": 32,
                "dew_point": 35.89,
                "wind_speed": 10.92,
                "wind_deg": 140,
                "wind_gust": 27.16,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": 55,
                "pop": 0,
                "uvi": 6.48
            },
            {
                "dt": 1627830000,
                "sunrise": 1627811058,
                "sunset": 1627851108,
                "moonrise": 1627789920,
                "moonset": 1627831140,
                "moon_phase": 0.78,
                "temp": {
                    "day": 70.14,
                    "min": 49.84,
                    "max": 74.52,
                    "night": 56.8,
                    "eve": 63.5,
                    "morn": 50.56
                },
                "feels_like": {
                    "day": 68.5,
                    "night": 55,
                    "eve": 61.81,
                    "morn": 48.27
                },
                "pressure": 1026,
                "humidity": 35,
                "dew_point": 42.01,
                "wind_speed": 10.51,
                "wind_deg": 88,
                "wind_gust": 23.31,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": 98,
                "pop": 0,
                "uvi": 6.71
            },
            {
                "dt": 1627916400,
                "sunrise": 1627897428,
                "sunset": 1627937532,
                "moonrise": 1627879440,
                "moonset": 1627919820,
                "moon_phase": 0.81,
                "temp": {
                    "day": 75,
                    "min": 53.42,
                    "max": 77.9,
                    "night": 61.59,
                    "eve": 67.53,
                    "morn": 53.6
                },
                "feels_like": {
                    "day": 73.65,
                    "night": 60.17,
                    "eve": 65.97,
                    "morn": 52.05
                },
                "pressure": 1024,
                "humidity": 31,
                "dew_point": 42.89,
                "wind_speed": 10.51,
                "wind_deg": 52,
                "wind_gust": 21.07,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "clouds": 34,
                "pop": 0,
                "uvi": 6.86
            },
            {
                "dt": 1628002800,
                "sunrise": 1627983796,
                "sunset": 1628023956,
                "moonrise": 1627968960,
                "moonset": 1628008740,
                "moon_phase": 0.84,
                "temp": {
                    "day": 74.7,
                    "min": 53.28,
                    "max": 77.27,
                    "night": 59.43,
                    "eve": 66.15,
                    "morn": 53.28
                },
                "feels_like": {
                    "day": 73.71,
                    "night": 58.32,
                    "eve": 64.99,
                    "morn": 52.3
                },
                "pressure": 1021,
                "humidity": 39,
                "dew_point": 48.96,
                "wind_speed": 13.71,
                "wind_deg": 147,
                "wind_gust": 28.12,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": 0,
                "pop": 0,
                "uvi": 6.62
            },
            {
                "dt": 1628089200,
                "sunrise": 1628070164,
                "sunset": 1628110379,
                "moonrise": 1628058600,
                "moonset": 1628097900,
                "moon_phase": 0.87,
                "temp": {
                    "day": 68.67,
                    "min": 48.99,
                    "max": 71.22,
                    "night": 54.39,
                    "eve": 60.76,
                    "morn": 48.99
                },
                "feels_like": {
                    "day": 66.69,
                    "night": 53.06,
                    "eve": 58.98,
                    "morn": 44.64
                },
                "pressure": 1024,
                "humidity": 31,
                "dew_point": 36.97,
                "wind_speed": 19.17,
                "wind_deg": 149,
                "wind_gust": 36.51,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "clouds": 42,
                "pop": 0,
                "uvi": 2.06
            },
            {
                "dt": 1628175600,
                "sunrise": 1628156530,
                "sunset": 1628196803,
                "moonrise": 1628148180,
                "moonset": 1628187360,
                "moon_phase": 0.9,
                "temp": {
                    "day": 70.79,
                    "min": 50.13,
                    "max": 74.95,
                    "night": 59.07,
                    "eve": 64.89,
                    "morn": 50.13
                },
                "feels_like": {
                    "day": 68.94,
                    "night": 57.92,
                    "eve": 62.82,
                    "morn": 48.74
                },
                "pressure": 1026,
                "humidity": 29,
                "dew_point": 37.63,
                "wind_speed": 18.54,
                "wind_deg": 143,
                "wind_gust": 37.58,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": 61,
                "pop": 0,
                "uvi": 3
            },
            {
                "dt": 1628262000,
                "sunrise": 1628242895,
                "sunset": 1628283226,
                "moonrise": 1628237760,
                "moonset": 1628277000,
                "moon_phase": 0.94,
                "temp": {
                    "day": 71.22,
                    "min": 52.16,
                    "max": 74.73,
                    "night": 60.8,
                    "eve": 66.04,
                    "morn": 52.16
                },
                "feels_like": {
                    "day": 69.46,
                    "night": 58.69,
                    "eve": 63.9,
                    "morn": 50.97
                },
                "pressure": 1027,
                "humidity": 30,
                "dew_point": 39.11,
                "wind_speed": 13.91,
                "wind_deg": 72,
                "wind_gust": 25.34,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": 100,
                "pop": 0,
                "uvi": 3
            }
        ]
    }    
    `;

    // TODO: Map the data from JSON to OpenWeatherMapWeekResponse
    return null;
}

export function loadDayWeatherInfo(): OpenWeatherMapDayResponse | null {
    let mockedData = `
    {
        "lat": -21.9957,
        "lon": -47.9515,
        "timezone": "America/Sao_Paulo",
        "timezone_offset": -10800,
        "hourly": [
            {
                "dt": 1627678800,
                "temp": 58.19,
                "feels_like": 55.54,
                "pressure": 1024,
                "humidity": 39,
                "dew_point": 33.39,
                "uvi": 0,
                "clouds": 90,
                "visibility": 10000,
                "wind_speed": 7.56,
                "wind_deg": 147,
                "wind_gust": 17.11,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1627682400,
                "temp": 56.43,
                "feels_like": 53.69,
                "pressure": 1024,
                "humidity": 41,
                "dew_point": 33.04,
                "uvi": 0,
                "clouds": 90,
                "visibility": 10000,
                "wind_speed": 7.65,
                "wind_deg": 151,
                "wind_gust": 23,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1627686000,
                "temp": 55,
                "feels_like": 52.27,
                "pressure": 1024,
                "humidity": 44,
                "dew_point": 33.51,
                "uvi": 0,
                "clouds": 92,
                "visibility": 10000,
                "wind_speed": 10.85,
                "wind_deg": 146,
                "wind_gust": 27.78,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1627689600,
                "temp": 52.43,
                "feels_like": 49.82,
                "pressure": 1025,
                "humidity": 52,
                "dew_point": 35.35,
                "uvi": 0,
                "clouds": 92,
                "visibility": 10000,
                "wind_speed": 12.46,
                "wind_deg": 148,
                "wind_gust": 27.6,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1627693200,
                "temp": 49.08,
                "feels_like": 44.19,
                "pressure": 1026,
                "humidity": 61,
                "dew_point": 36.23,
                "uvi": 0,
                "clouds": 72,
                "visibility": 10000,
                "wind_speed": 12.3,
                "wind_deg": 144,
                "wind_gust": 27.96,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1627696800,
                "temp": 45.05,
                "feels_like": 39.38,
                "pressure": 1026,
                "humidity": 71,
                "dew_point": 36.81,
                "uvi": 0,
                "clouds": 44,
                "visibility": 10000,
                "wind_speed": 11.43,
                "wind_deg": 143,
                "wind_gust": 26.26,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1627700400,
                "temp": 43.72,
                "feels_like": 38.23,
                "pressure": 1027,
                "humidity": 74,
                "dew_point": 36.91,
                "uvi": 0,
                "clouds": 48,
                "visibility": 10000,
                "wind_speed": 10.07,
                "wind_deg": 141,
                "wind_gust": 24.92,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1627704000,
                "temp": 43,
                "feels_like": 37.78,
                "pressure": 1027,
                "humidity": 76,
                "dew_point": 36.7,
                "uvi": 0,
                "clouds": 56,
                "visibility": 10000,
                "wind_speed": 9.01,
                "wind_deg": 140,
                "wind_gust": 23.76,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1627707600,
                "temp": 41.9,
                "feels_like": 36.7,
                "pressure": 1027,
                "humidity": 79,
                "dew_point": 36.37,
                "uvi": 0,
                "clouds": 48,
                "visibility": 10000,
                "wind_speed": 8.41,
                "wind_deg": 137,
                "wind_gust": 22.3,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1627711200,
                "temp": 41.11,
                "feels_like": 36,
                "pressure": 1026,
                "humidity": 81,
                "dew_point": 36.34,
                "uvi": 0,
                "clouds": 48,
                "visibility": 10000,
                "wind_speed": 7.9,
                "wind_deg": 130,
                "wind_gust": 20.87,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1627714800,
                "temp": 41.29,
                "feels_like": 36.43,
                "pressure": 1026,
                "humidity": 82,
                "dew_point": 36.66,
                "uvi": 0,
                "clouds": 98,
                "visibility": 10000,
                "wind_speed": 7.49,
                "wind_deg": 135,
                "wind_gust": 19.08,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1627718400,
                "temp": 40.21,
                "feels_like": 35.35,
                "pressure": 1026,
                "humidity": 86,
                "dew_point": 37,
                "uvi": 0,
                "clouds": 61,
                "visibility": 10000,
                "wind_speed": 7.07,
                "wind_deg": 132,
                "wind_gust": 14.92,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1627722000,
                "temp": 39.88,
                "feels_like": 34.99,
                "pressure": 1027,
                "humidity": 88,
                "dew_point": 37.18,
                "uvi": 0,
                "clouds": 46,
                "visibility": 10000,
                "wind_speed": 7.02,
                "wind_deg": 137,
                "wind_gust": 15.23,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1627725600,
                "temp": 40.3,
                "feels_like": 35.78,
                "pressure": 1028,
                "humidity": 88,
                "dew_point": 37.36,
                "uvi": 0,
                "clouds": 56,
                "visibility": 10000,
                "wind_speed": 6.53,
                "wind_deg": 123,
                "wind_gust": 16.04,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1627729200,
                "temp": 45.16,
                "feels_like": 41.45,
                "pressure": 1027,
                "humidity": 72,
                "dew_point": 37.36,
                "uvi": 0.68,
                "clouds": 65,
                "visibility": 10000,
                "wind_speed": 6.82,
                "wind_deg": 117,
                "wind_gust": 15.37,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1627732800,
                "temp": 52.41,
                "feels_like": 49.8,
                "pressure": 1027,
                "humidity": 52,
                "dew_point": 36.12,
                "uvi": 2.04,
                "clouds": 70,
                "visibility": 10000,
                "wind_speed": 8.25,
                "wind_deg": 118,
                "wind_gust": 13.71,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1627736400,
                "temp": 58.21,
                "feels_like": 55.71,
                "pressure": 1027,
                "humidity": 42,
                "dew_point": 35.58,
                "uvi": 3.9,
                "clouds": 93,
                "visibility": 10000,
                "wind_speed": 9.17,
                "wind_deg": 108,
                "wind_gust": 14.72,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1627740000,
                "temp": 63.09,
                "feels_like": 60.75,
                "pressure": 1027,
                "humidity": 35,
                "dew_point": 35.73,
                "uvi": 5.63,
                "clouds": 56,
                "visibility": 10000,
                "wind_speed": 10.29,
                "wind_deg": 104,
                "wind_gust": 14.41,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1627743600,
                "temp": 66.09,
                "feels_like": 63.91,
                "pressure": 1026,
                "humidity": 32,
                "dew_point": 35.89,
                "uvi": 6.48,
                "clouds": 55,
                "visibility": 10000,
                "wind_speed": 10.11,
                "wind_deg": 96,
                "wind_gust": 12.33,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1627747200,
                "temp": 68.5,
                "feels_like": 66.42,
                "pressure": 1025,
                "humidity": 29,
                "dew_point": 35.92,
                "uvi": 6.18,
                "clouds": 53,
                "visibility": 10000,
                "wind_speed": 9.4,
                "wind_deg": 96,
                "wind_gust": 10.42,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1627750800,
                "temp": 69.87,
                "feels_like": 67.87,
                "pressure": 1023,
                "humidity": 28,
                "dew_point": 35.69,
                "uvi": 4.71,
                "clouds": 55,
                "visibility": 10000,
                "wind_speed": 8.43,
                "wind_deg": 101,
                "wind_gust": 9.06,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1627754400,
                "temp": 70.57,
                "feels_like": 68.59,
                "pressure": 1022,
                "humidity": 27,
                "dew_point": 35.73,
                "uvi": 2.77,
                "clouds": 57,
                "visibility": 10000,
                "wind_speed": 8.25,
                "wind_deg": 111,
                "wind_gust": 8.75,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1627758000,
                "temp": 69.8,
                "feels_like": 67.8,
                "pressure": 1022,
                "humidity": 28,
                "dew_point": 36.21,
                "uvi": 1.13,
                "clouds": 33,
                "visibility": 10000,
                "wind_speed": 8.97,
                "wind_deg": 124,
                "wind_gust": 9.01,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1627761600,
                "temp": 66.33,
                "feels_like": 64.26,
                "pressure": 1023,
                "humidity": 34,
                "dew_point": 37.99,
                "uvi": 0.24,
                "clouds": 32,
                "visibility": 10000,
                "wind_speed": 9.22,
                "wind_deg": 134,
                "wind_gust": 14.83,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1627765200,
                "temp": 59.18,
                "feels_like": 56.86,
                "pressure": 1024,
                "humidity": 44,
                "dew_point": 37.69,
                "uvi": 0,
                "clouds": 54,
                "visibility": 10000,
                "wind_speed": 8.63,
                "wind_deg": 150,
                "wind_gust": 19.46,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1627768800,
                "temp": 56.28,
                "feels_like": 53.82,
                "pressure": 1025,
                "humidity": 47,
                "dew_point": 37.2,
                "uvi": 0,
                "clouds": 62,
                "visibility": 10000,
                "wind_speed": 9.19,
                "wind_deg": 147,
                "wind_gust": 23.49,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1627772400,
                "temp": 56.52,
                "feels_like": 54.07,
                "pressure": 1026,
                "humidity": 47,
                "dew_point": 36.99,
                "uvi": 0,
                "clouds": 69,
                "visibility": 10000,
                "wind_speed": 10.65,
                "wind_deg": 146,
                "wind_gust": 27.16,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1627776000,
                "temp": 55.96,
                "feels_like": 53.56,
                "pressure": 1026,
                "humidity": 49,
                "dew_point": 37.81,
                "uvi": 0,
                "clouds": 74,
                "visibility": 10000,
                "wind_speed": 10.16,
                "wind_deg": 139,
                "wind_gust": 25.7,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1627779600,
                "temp": 54.66,
                "feels_like": 52.32,
                "pressure": 1026,
                "humidity": 53,
                "dew_point": 38.39,
                "uvi": 0,
                "clouds": 100,
                "visibility": 10000,
                "wind_speed": 10.92,
                "wind_deg": 140,
                "wind_gust": 25.57,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1627783200,
                "temp": 52.56,
                "feels_like": 50.43,
                "pressure": 1026,
                "humidity": 62,
                "dew_point": 40.41,
                "uvi": 0,
                "clouds": 100,
                "visibility": 10000,
                "wind_speed": 8.16,
                "wind_deg": 141,
                "wind_gust": 21.07,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1627786800,
                "temp": 50.97,
                "feels_like": 48.97,
                "pressure": 1027,
                "humidity": 68,
                "dew_point": 41.49,
                "uvi": 0,
                "clouds": 100,
                "visibility": 10000,
                "wind_speed": 7.11,
                "wind_deg": 126,
                "wind_gust": 14.7,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1627790400,
                "temp": 49.84,
                "feels_like": 47.01,
                "pressure": 1026,
                "humidity": 72,
                "dew_point": 41.88,
                "uvi": 0,
                "clouds": 84,
                "visibility": 10000,
                "wind_speed": 6.98,
                "wind_deg": 129,
                "wind_gust": 13.09,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1627794000,
                "temp": 49.98,
                "feels_like": 47.46,
                "pressure": 1026,
                "humidity": 72,
                "dew_point": 41.88,
                "uvi": 0,
                "clouds": 87,
                "visibility": 10000,
                "wind_speed": 6.38,
                "wind_deg": 122,
                "wind_gust": 12.37,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1627797600,
                "temp": 50,
                "feels_like": 47.5,
                "pressure": 1025,
                "humidity": 71,
                "dew_point": 41.36,
                "uvi": 0,
                "clouds": 89,
                "visibility": 10000,
                "wind_speed": 6.35,
                "wind_deg": 115,
                "wind_gust": 13.58,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1627801200,
                "temp": 50.41,
                "feels_like": 48.31,
                "pressure": 1025,
                "humidity": 67,
                "dew_point": 40.37,
                "uvi": 0,
                "clouds": 100,
                "visibility": 10000,
                "wind_speed": 6.71,
                "wind_deg": 101,
                "wind_gust": 19.69,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1627804800,
                "temp": 51.13,
                "feels_like": 48.87,
                "pressure": 1025,
                "humidity": 62,
                "dew_point": 39.13,
                "uvi": 0,
                "clouds": 100,
                "visibility": 10000,
                "wind_speed": 7.74,
                "wind_deg": 91,
                "wind_gust": 20.8,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1627808400,
                "temp": 50.56,
                "feels_like": 48.27,
                "pressure": 1026,
                "humidity": 63,
                "dew_point": 38.88,
                "uvi": 0,
                "clouds": 95,
                "visibility": 10000,
                "wind_speed": 7.61,
                "wind_deg": 96,
                "wind_gust": 20.78,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1627812000,
                "temp": 50.31,
                "feels_like": 48.04,
                "pressure": 1027,
                "humidity": 64,
                "dew_point": 39.04,
                "uvi": 0,
                "clouds": 96,
                "visibility": 10000,
                "wind_speed": 7.4,
                "wind_deg": 109,
                "wind_gust": 20,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1627815600,
                "temp": 54.66,
                "feels_like": 52.47,
                "pressure": 1027,
                "humidity": 56,
                "dew_point": 39.81,
                "uvi": 0.71,
                "clouds": 95,
                "visibility": 10000,
                "wind_speed": 8.1,
                "wind_deg": 98,
                "wind_gust": 22.62,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1627819200,
                "temp": 59.63,
                "feels_like": 57.51,
                "pressure": 1028,
                "humidity": 47,
                "dew_point": 40.05,
                "uvi": 2.13,
                "clouds": 94,
                "visibility": 10000,
                "wind_speed": 10.51,
                "wind_deg": 88,
                "wind_gust": 17.9,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1627822800,
                "temp": 63.43,
                "feels_like": 61.45,
                "pressure": 1028,
                "humidity": 42,
                "dew_point": 40.71,
                "uvi": 4.04,
                "clouds": 100,
                "visibility": 10000,
                "wind_speed": 10.11,
                "wind_deg": 86,
                "wind_gust": 14.09,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1627826400,
                "temp": 67.05,
                "feels_like": 65.23,
                "pressure": 1027,
                "humidity": 38,
                "dew_point": 41.41,
                "uvi": 5.83,
                "clouds": 100,
                "visibility": 10000,
                "wind_speed": 8.52,
                "wind_deg": 87,
                "wind_gust": 10.49,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1627830000,
                "temp": 70.14,
                "feels_like": 68.5,
                "pressure": 1026,
                "humidity": 35,
                "dew_point": 42.01,
                "uvi": 6.71,
                "clouds": 98,
                "visibility": 10000,
                "wind_speed": 7.23,
                "wind_deg": 85,
                "wind_gust": 7.74,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1627833600,
                "temp": 72.3,
                "feels_like": 70.79,
                "pressure": 1025,
                "humidity": 33,
                "dew_point": 42.44,
                "uvi": 6.37,
                "clouds": 91,
                "visibility": 10000,
                "wind_speed": 6.26,
                "wind_deg": 89,
                "wind_gust": 6.22,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1627837200,
                "temp": 73.78,
                "feels_like": 72.36,
                "pressure": 1024,
                "humidity": 32,
                "dew_point": 43.05,
                "uvi": 4.86,
                "clouds": 88,
                "visibility": 10000,
                "wind_speed": 5.08,
                "wind_deg": 97,
                "wind_gust": 4.85,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1627840800,
                "temp": 74.52,
                "feels_like": 73.17,
                "pressure": 1023,
                "humidity": 32,
                "dew_point": 43.54,
                "uvi": 2.87,
                "clouds": 77,
                "visibility": 10000,
                "wind_speed": 4.29,
                "wind_deg": 102,
                "wind_gust": 4.25,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1627844400,
                "temp": 73.81,
                "feels_like": 72.45,
                "pressure": 1023,
                "humidity": 33,
                "dew_point": 43.7,
                "uvi": 1.18,
                "clouds": 89,
                "visibility": 10000,
                "wind_speed": 4.21,
                "wind_deg": 126,
                "wind_gust": 3.53,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1627848000,
                "temp": 70.9,
                "feels_like": 69.51,
                "pressure": 1023,
                "humidity": 39,
                "dew_point": 45.41,
                "uvi": 0.25,
                "clouds": 94,
                "visibility": 10000,
                "wind_speed": 6.08,
                "wind_deg": 131,
                "wind_gust": 8.9,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0
            }
        ]
    }
    `;

    // TODO: Map the data from JSON to OpenWeatherMapWeekResponse
    return null;
}