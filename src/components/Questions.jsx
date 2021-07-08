import React, { Component } from "react";
import JSONObj from "../services/questions.json";
import QuestionView from "./QuestionView";

class Questions extends Component {
  state = {};
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-xl-5">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                checked
              />
              <label class="form-check-label" for="flexCheckChecked">
                Checked checkbox
              </label>
            </div>
          </div>
        </div>
        <div class="row">
          <QuestionView List={JSONObj} onDoneClick={() => {}} />;
        </div>
      </div>
    );
  }
}

export default Questions;
