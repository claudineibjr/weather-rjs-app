import { useMemo, useCallback } from 'react';
import { HourlyWeatherInfo } from '../../data/model/WeatherInfo/HourlyWeatherInfo';
import { scaleTime, scaleLinear } from '@vx/scale';
import { AxisLeft, AxisBottom } from '@vx/axis';
import { Group } from '@vx/group';
import { AreaClosed, Bar, Line } from '@vx/shape';
import { localPoint } from '@visx/event';
import { LinearGradient } from '@vx/gradient';
import { bisector, extent, max, mean, min } from 'd3-array';
import { withTooltip, Tooltip, TooltipWithBounds, defaultStyles } from '@visx/tooltip';
import { WithTooltipProvidedProps } from '@visx/tooltip/lib/enhancers/withTooltip';

type TooltipData = HourlyWeatherInfo;

export type AreaProps = {
    width: number;
    height: number;
    margin?: { top: number; right: number; bottom: number; left: number };
    weatherDailyInfo: Array<HourlyWeatherInfo>;
};

export default withTooltip<AreaProps, TooltipData>(
    ({
        width,
        height,
        margin = { top: 0, right: 0, bottom: 0, left: 0 },
        showTooltip,
        hideTooltip,
        tooltipData,
        tooltipTop = 0,
        tooltipLeft = 0,
        weatherDailyInfo,
    }: AreaProps & WithTooltipProvidedProps<TooltipData>) => {
        // Bounds
        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;

        // Accessors
        const getDate = (d: HourlyWeatherInfo): Date => d.date;
        const getTemperatureValue = (d: HourlyWeatherInfo): number => d.temperature;
        const getWeatherValue = (d: HourlyWeatherInfo): string => d.whaterInfoText();

        const bisectDate = bisector<HourlyWeatherInfo, Date>(d => new Date(d.date)).left;

        // Scales
        const yMean = (mean(weatherDailyInfo, getTemperatureValue) || 0);
        const yMin = (min(weatherDailyInfo, getTemperatureValue) || 0) - yMean / 10;
        const yMax = (max(weatherDailyInfo, getTemperatureValue) || 0) + yMean / 10;

        const xDateValues = useMemo(
            () =>
                scaleTime({
                    range: [margin.left, innerWidth + margin.left],
                    domain: extent(weatherDailyInfo, getDate) as [Date, Date],
                }),
            [innerWidth, margin.left],
        );
        const yTemperatureValues = useMemo(
            () =>
                scaleLinear({
                    range: [innerHeight + margin.top, margin.top],
                    domain: [yMin, yMax],
                    nice: true,
                }),
            [margin.top, innerHeight],
        );

        // Styles
        const mainColor = '#3f51b5';

        const tooltipStyles = {
            ...defaultStyles,
            background: mainColor,
            border: '1px solid white',
            color: 'white',
        };

        // Tooltip handler
        const handleTooltip = useCallback(
            (event: React.TouchEvent<SVGRectElement> | React.MouseEvent<SVGRectElement>) => {
                const { x } = localPoint(event) || { x: 0 };
                const x0 = xDateValues.invert(x);
                const index = bisectDate(weatherDailyInfo, x0, 1);
                const d0 = weatherDailyInfo[index - 1];
                const d1 = weatherDailyInfo[index];
                let d = d0;
                if (d1 && getDate(d1)) {
                    d = x0.valueOf() - getDate(d0).valueOf() > getDate(d1).valueOf() - x0.valueOf() ? d1 : d0;
                }
                showTooltip({
                    tooltipData: d,
                    tooltipLeft: x,
                    tooltipTop: yTemperatureValues(getTemperatureValue(d)),
                });
            },
            [showTooltip, yTemperatureValues, xDateValues],
        );

        return (
            <div className="WeatherHourlyChartMain">
                <svg width={width} height={height}>
                    <rect
                        x={margin.left}
                        y={margin.top}
                        width={innerWidth}
                        height={innerHeight}
                        fill="url(#area-background-gradient)"
                        rx={14}
                    />
                    <LinearGradient id="area-background-gradient" from="#f3f3f3" to="#e2e2e2" vertical />
                    <LinearGradient
                        from='#FF8F00'
                        to='#FFE082'
                        id='gradient'
                        vertical={false}
                    />
                    <Group top={0} left={0}>
                        <AreaClosed<HourlyWeatherInfo>
                            data={weatherDailyInfo}
                            x={d => xDateValues(getDate(d)) ?? 0}
                            y={d => yTemperatureValues(getTemperatureValue(d)) ?? 0}
                            yScale={yTemperatureValues}
                            fill="url(#gradient)"
                        />

                        <Bar
                            x={margin.left}
                            y={margin.top}
                            width={innerWidth}
                            height={innerHeight}
                            fill="transparent"
                            rx={14}
                            onTouchStart={handleTooltip}
                            onTouchMove={handleTooltip}
                            onMouseMove={handleTooltip}
                            onMouseLeave={() => hideTooltip()}
                        />

                        <AxisLeft
                            scale={yTemperatureValues}
                            top={0}
                            left={margin.left}
                            label={'Temperature (Fº)'}
                            stroke={'#1b1a1e'}
                        />

                        <AxisBottom
                            scale={xDateValues}
                            top={innerHeight + margin.top}
                            label={'Hour'}
                            stroke={'#1b1a1e'}
                        />
                        {tooltipData && (
                            <g>
                                <Line
                                    from={{ x: tooltipLeft, y: margin.top }}
                                    to={{ x: tooltipLeft, y: innerHeight + margin.top }}
                                    stroke={mainColor}
                                    strokeWidth={2}
                                    pointerEvents="none"
                                    strokeDasharray="5,2"
                                />
                                <circle
                                    cx={tooltipLeft}
                                    cy={tooltipTop + 1}
                                    r={4}
                                    fill="black"
                                    fillOpacity={0.1}
                                    stroke="black"
                                    strokeOpacity={0.1}
                                    strokeWidth={2}
                                    pointerEvents="none"
                                />
                                <circle
                                    cx={tooltipLeft}
                                    cy={tooltipTop}
                                    r={4}
                                    fill={mainColor}
                                    stroke="white"
                                    strokeWidth={2}
                                    pointerEvents="none"
                                />
                            </g>
                        )}
                    </Group>
                </svg>
                {tooltipData && (
                    <div>
                        <TooltipWithBounds
                            key={Math.random()}
                            top={tooltipTop - 12}
                            left={tooltipLeft + 12}
                            style={tooltipStyles}
                        >
                            {`${getTemperatureValue(tooltipData)} Fº`} <br/>
                            {`${getWeatherValue(tooltipData)}`}
                        </TooltipWithBounds>
                        <Tooltip
                            top={innerHeight + margin.top - 14}
                            left={tooltipLeft}
                            style={{
                                ...defaultStyles,
                                minWidth: 72,
                                textAlign: 'center',
                                transform: 'translateX(-50%)',
                            }}
                        >
                            {(getDate(tooltipData).toLocaleTimeString())}
                        </Tooltip>
                    </div>
                )}
            </div>
        );
    },
);
