import React, { Component } from "react";
import JSONObj from "../services/questions.json";
import QuestionView from "./QuestionView";

class Questions extends Component {
  state = {
    questions: [],
    order: -1,
  };

  componentDidMount() {
    const questions = [];
    for (let i = 0; i < 10; ++i) questions.push(JSONObj[i]);
    console.log(questions);
    this.setState({ questions });
  }

  sortList(comp) {
    const stableSort = (arr, compare) =>
      arr
        .map((item, index) => ({ item, index }))
        .sort((a, b) => compare(a.item, b.item) * this.state.order)
        .map(({ item }) => item);

    const questions = stableSort(this.state.questions, comp);
    this.setState({ questions, order: this.state.order * -1 });
  }

  render() {
    return (
      <QuestionView
        List={this.state.questions}
        onDoneClick={() => {}}
        onSortClick={(comp) => this.sortList(comp)}
      />
    );
  }
}

export default Questions;
