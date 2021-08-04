import { Switch, Route, BrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import HourlyWeatherInfoPage from "./pages/HourlyWeatherInfo";
import { DateUtilities } from "./utils/utils";

export default function Routes() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path={
                    [
                        ...["/today", "/tomorrow", "/yesterday"],
                        ...DateUtilities.days.map((day, _, __) => `/${day}`)
                    ]}
                    component={HourlyWeatherInfoPage}
                />
                <Route path="/" component={HomePage} />
            </Switch>
        </BrowserRouter>
    );
}