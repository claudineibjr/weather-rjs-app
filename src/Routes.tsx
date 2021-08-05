import { Provider } from "react-redux";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import HourlyWeatherInfoPage from "./pages/HourlyWeatherInfo";
import { store } from "./store";
import { DateUtilities } from "./utils/utils";

export default function Routes() {
    return (
        <Provider store={store}>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route path={
                        [
                            ...["/tomorrow"],
                            ...DateUtilities.days.map((day, _, __) => `/${day}`)
                        ]}
                        component={HourlyWeatherInfoPage}
                    />
                    <Route path="/" component={HomePage} />
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}