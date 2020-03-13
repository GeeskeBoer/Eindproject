import React, { Component } from "react";
// import "../App.css"
import { Bar } from "react-chartjs-2";
import data from "../data/data";

// data=[
//   {
//     id: 1,
//     name: "Evelyn",
//     assignment: "SCRUM",
//     ratingLevel: 3,
//     ratingFun: 4
//   },
//   {
//     id: 2,
//     name: "Evelyn",
//     assignment: "W1D1-1",
//     ratingLevel: 3,
//     ratingFun: 3
//   },
//   {
//     id: 3,
//     name: "Evelyn",
//     assignment: "W1D2-1",
//     ratingLevel: 1,
//     ratingFun: 3
//   }]

// assignmentRatingAverage = assignmentRatingAverage.map(avg => ({
//   assignment: avg.assignment,
//   ratingLevel: avg.ratingLevel,
//   ratingFun: avg.ratingFun
// }));

console.log("dit is mijn data", { calculateAverageLevelForAssignment });

class DashboardChart extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {
        // labels: this.props.data.assignment.map()
        labels: ["Aranka", "Evelyn", "Hector", "Floris"],
        datasets: [
          {
            label: "gemiddelde cijfer",
            data: [5, 3, 6, 7]
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
          // width={100}
          // height={50}
          title="Average rating of the assignments"
          backgroundColor="ffffff"
          options={{}}
        />
      </div>
    );
  }
}
export default DashboardChart;
