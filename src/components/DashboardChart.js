import React, { Component } from "react";
// import "../App.css"
import { Bar } from "react-chartjs-2";
import FilteredData from "../data/FilteredData";
import ratings from "../data/data";
// import { AverageLevelAssignment } from "../data/data";

// console.log("dit is mijn data", { averageLevel });

class DashboardChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FilteredData: FilteredData,
      ratings: ratings,
      chartData: {
        labels: ["W1D1-1", "W1D1-2", "W1D1-3"],
        datasets: [
          {
            label: "moeilijk",
            data: [3, 4, 5],
            backgroundColor: "#44B4FB"
          },
          {
            label: "Leuk",
            data: [2, 4, 4],
            backgroundColor: "#300BF9"
          }
        ]
      }
    };
  }

  render() {
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          //   width={40}
          //   height={25}
          options={{
            title: {
              display: true,
              text: "Gemiddelde moeilijkheid per opdracht",
              fontSize: 25,
              color: "#white"
            },

            layout: {
              padding: {
                left: 20,
                right: 20,
                bottom: 20,
                top: 20
              }
            }
          }}
        />
      </div>
    );
  }
}
export default DashboardChart;
