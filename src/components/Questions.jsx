import React, { Component } from "react";
import JSONObj from "../services/questions.json";
import Tags from "../services/tags.json";
import Companies from "../services/companies.json";
import { Stack } from "@chakra-ui/react";

import QuestionView from "./QuestionView";
import ListView from "./common/ListView";

class Questions extends Component {
  state = {
    questions: [],
    order: 1,
    selectedTags: {},
    selectedCompanies: {},
    viewList: [],
  };

  componentDidMount() {
    const questions = JSONObj;
    const selectedTags = {};
    const selectedCompanies = {};
    const viewList = [];
    for (let i = 0; i < 10; ++i) viewList.push(JSONObj[i]);
    for (const tag of Tags) selectedTags[tag] = false;
    for (const company of Companies) selectedCompanies[company] = false;
    this.setState({ questions, selectedCompanies, selectedTags, viewList });
  }

  sortList = (comp) => {
    const stableSort = (arr, compare) =>
      arr
        .map((item, index) => ({ item, index }))
        .sort((a, b) => compare(a.item, b.item) * this.state.order)
        .map(({ item }) => item);

    const viewList = stableSort(this.state.viewList, comp);
    this.setState({ viewList, order: this.state.order * -1 });
  };

  findCommonElements = (lhs, rhs) => {
    return [lhs, rhs].reduce((p, c) => p.filter((e) => c.includes(e)));
  };

  Update = (obj) => {
    let temp = [];
    let arr1 = [];
    let count = 0;
    for (const [key, value] of Object.entries(this.state.selectedTags)) {
      if (value) {
        arr1.push(key);
        ++count;
      }
      temp.push(key);
    }
    if (count === 0) arr1 = temp;
    count = 0;
    temp = [];
    let arr2 = [];
    for (const [key, value] of Object.entries(this.state.selectedCompanies)) {
      if (value) {
        arr2.push(key);
        ++count;
      }
      temp.push(key);
    }
    if (count === 0) arr2 = temp;
    obj.viewList = this.state.questions.filter((q) => {
      if (
        this.findCommonElements(q.tags, arr1).length > 0 &&
        this.findCommonElements(q.companies, arr2).length > 0
      )
        return true;
      return false;
    });

    this.setState({ ...obj });
  };

  render() {
    return (
      <Stack spacing={2} direction="column">
        <ListView
          Header="Tags"
          List={Tags}
          SelectedMap={this.state.selectedTags}
          onSelect={(t) => {
            const obj = this.state;
            obj.selectedTags[t] = true;
            this.Update(obj);
          }}
          onDeselect={(t) => {
            const obj = this.state;
            obj.selectedTags[t] = false;
            this.Update(obj);
          }}
        />{" "}
        <ListView
          Header="Companies"
          List={Companies}
          SelectedMap={this.state.selectedCompanies}
          onSelect={(t) => {
            const obj = this.state;
            obj.selectedCompanies[t] = true;
            this.Update(obj);
          }}
          onDeselect={(t) => {
            const obj = this.state;
            obj.selectedCompanies[t] = false;
            this.Update(obj);
          }}
        />
        <QuestionView
          List={this.state.viewList}
          onDoneClick={() => {}}
          onSortClick={(comp) => this.sortList(comp)}
        />
      </Stack>
    );
  }
}

export default Questions;
