export class WeatherInfoMapResponse {
    id: number;
    main: string;
    icon: string;

    constructor(id: number, main: string, icon: string) {
        this.id = id;
        this.main = main;
        this.icon = icon;
    }
}