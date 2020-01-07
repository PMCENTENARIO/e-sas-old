import React from 'react';
import * as d3 from 'd3';
import moment from 'moment';
import CalendarHeatmap from 'reactjs-calendar-heatmap';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    // Initialize random data for the demo
    const now = moment()
      .endOf('day')
      .toDate();
    const time_ago = moment()
      .startOf('day')
      .subtract(10, 'year')
      .toDate();

    const data = d3.timeDays(time_ago, now).map((dateElement, index) => {
      return {
        date: dateElement,
        details: Array.apply(
          null,
          new Array(Math.floor(Math.random() * 15))
        ).map(function(e, i, arr) {
          return {
            name: `Project ${Math.ceil(Math.random() * 10)}`,
            date: (function() {
              const projectDate = new Date(dateElement.getTime());
              projectDate.setHours(Math.floor(Math.random() * 24));
              projectDate.setMinutes(Math.floor(Math.random() * 60));
              return projectDate;
            })(),
            value:
              3600 * ((arr.length - i) / 5) +
              Math.floor(Math.random() * 3600) *
                Math.round(Math.random() * (index / 365)),
          };
        }),
        init() {
          this.total = this.details.reduce((prev, e) => prev + e.value, 0);
          return this;
        },
      }.init();
    });
    console.log(data[0]);
    this.state = {
      data,
      color: '#5334B7',
      overview: 'year',
    };
  }

  _renderHeatMap = ({ i, data, color, overview }) => (
    <>
      <h3>HeatMap{i}</h3>
      <CalendarHeatmap data={data} color={color} overview={overview} />
    </>
  );

  render() {
    const { data, color, overview } = this.state;
    return <>{this._renderHeatMap({ data, color, overview })}</>;
  }
}
