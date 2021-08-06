import { Provider } from "react-redux";
import { Switch, Route, BrowserRouter, HashRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import HourlyWeatherInfoPage from "./pages/HourlyWeatherInfo";
import { store } from "./store";
import { DateUtilities } from "./utils/dateUtils";

export default function Routes() {
    return (
        <Provider store={store}>
            <HashRouter>
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
            </HashRouter>
        </Provider>
    );
}