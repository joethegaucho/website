import React from "react";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, ResponsiveContainer
} from 'recharts';
import { ReferenceLabel } from './ReferenceLabel'

function makeTickInteval(start: number, end: number, interval: number) {

    let listOfTicks = []
    let numTicks = (end - start) / interval
    for (let i = 0; i <= numTicks; i++) {
        listOfTicks.push(start + (i * interval))
    }
    return (listOfTicks)

}

export type ChartProps = {
    chartData: object[]
}

const Chart = ({ chartData }: ChartProps) => {
    return (
        <div className="chart-container">
            <ResponsiveContainer width="98%">
                <LineChart
                    data={chartData}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis type="number" domain={[1.5, 3.25]} label={{ value: 'Difference in Population Growth', angle: -90, position: 'center', dx: -20 }}
                        ticks={makeTickInteval(1.5, 3.5, .5)} />
                    <ReferenceLine
                        y={2.12}
                        stroke="black"
                        label={<ReferenceLabel
                            value="Avg Difference in Population Growth"
                            viewBox={{}}
                            fontSize={15}
                        />}
                    />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="uv" stroke="#63a3ed" name="Difference in Population Growth" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );

}

export default Chart;