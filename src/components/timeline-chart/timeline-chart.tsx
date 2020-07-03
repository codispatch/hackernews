import React from "react";
import "./timeline-chart.scss";
import Chart from "react-google-charts";

export interface TimelineChartProps {
  newsDetailsData?: any
}
export interface TimelineChartState { }

class TimelineChart extends React.Component<TimelineChartProps, TimelineChartState> {
  getTimelineChart(data: any) {
    let timelineChart = [];
    if (data && data.length && data.length > 0) {
      timelineChart.push(['x', 'upvotes']);
      for (let i = 0; i < data.length; i++) {
        timelineChart.push([data[i]["objectID"], data[i]["points"]]);
      }
    }
    return timelineChart;
  }
  renderChart(data: any) {
    if (data && data.length && data.length > 0) {
      return (<Chart
        width="100%"
        height="700px"
        chartType="LineChart"
        loader={<div>Loading Chart ...</div>}
        data={this.getTimelineChart(data)}
        options={{
          hAxis: {
            title: 'Story ID',
            direction: -1,
            slantedText: true,
            slantedTextAngle: 90
          },
          vAxis: {
            title: 'Votes',
          },
          backgroundColor: "#F6F6EF",
          legend: { position: "bottom" }
        }}
      />);
    }
    return;
  }
  render() {
    return (
      <div className="timeline-chart-component">
        {this.renderChart(this.props.newsDetailsData)}
      </div>
    );
  }

}
export default TimelineChart;