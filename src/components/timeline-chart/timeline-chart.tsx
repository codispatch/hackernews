import React from "react";
import "./timeline-chart.scss";
import Chart from "react-google-charts";

export interface TimelineChartProps { }
export interface TimelineChartState { }

class TimelineChart extends React.Component<TimelineChartProps, TimelineChartState> {
  render() {
    return (
      <div className="timeline-chart-component">
        <Chart
          width="100%"
          height="400px"
          chartType="LineChart"
          loader={<div>Loading Chart ...</div>}
          data={data}
          options={{
            hAxis: {
              title: 'Story ID',
            },
            vAxis: {
              title: 'Votes',
            },
            backgroundColor: "#F6F6EF",
            legend: { position: "bottom" }
          }}
        />
      </div>
    );
  }
}
export default TimelineChart;

// Dummy static data (will be removed later) //
const data = [
  ['x', 'upvotes'],
  [0, 0],
  [1, 10],
  [2, 23],
  [3, 17],
  [4, 18],
  [5, 9],
  [6, 11],
  [7, 27],
  [8, 33],
  [9, 40],
  [10, 32],
  [11, 35],
  [12, 10],
  [13, 12],
  [14, 23],
  [15, 20],
  [16, 18],
  [17, 15],
  [18, 9],
  [19, 12],
  [20, 17],
]