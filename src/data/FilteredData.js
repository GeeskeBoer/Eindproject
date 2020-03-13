import React, { Component } from "react";

import ratings from "./data";

class FilteredData extends Component {
  constructor() {
    super();
    this.state = {
      ratings: ratings
    };
    const filteredAssignment = ratings.filter(rating => {
      return rating.assignment === "W1D2-1";
    });

    const AverageLevelAssignment =
      filteredAssignment.reduce((currentTotal, filteredAssignment) => {
        return filteredAssignment.level + currentTotal;
      }, 0) / filteredAssignment.length;

    console.log("hier ook de data", AverageLevelAssignment);

    // console.log(filteredAssignment);
    // const calculateAverage = arr => arr.reduce((a, b) => a + b, 0) / arr.length;
    // const calculateAverageLevelForAssignment = (ratings, assignmentName) => {
    //   const filteredRatings = ratings.filter(rating => {
    //     return rating.assignment === assignmentName;
    //   });
    //   const filteredLevelRatings = filteredRatings.map(rating => rating.level);
    //   const averageLevel = calculateAverage(filteredLevelRatings);

    //   return averageLevel;
    // };

    // calculateAverageLevelForAssignment();

    // const assignmentByStudent = (ratings, studentName) => {
    //   const filteredStudents = ratings.filter(rating => {
    //     return rating.name === studentName;
    //     const filteredRatingStudent = filteredStudents.map(
    //       rating => rating.level
    //     );
    //     const averageRatingLevel = calculateAverage(filteredRatingStudent);
    //   });

    //   assignmentByStudent();
    // };
  }
}

export default FilteredData;
