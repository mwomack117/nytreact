import React, { Component } from "react";
import moment from "moment";

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      searchParams: {},
      searching: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState(
      {
        searchParams: {
          topic: this.refs.topic.value,
          startDate: this.refs.startYear.value
            ? `&begin_date=${moment(new Date(this.refs.startYear.value)).format(
                "YYYYMMDD"
              )}`
            : "",
          endDate: this.refs.endYear.value
            ? `&end_date=${moment(new Date(this.refs.endYear.value)).format(
                "YYYYMMDD"
              )}`
            : "",
          limit: this.refs.numOfRecords.value
            ? this.refs.numOfRecords.value
            : 10
        }
      },
      function() {
        // alert("new state is " + JSON.stringify(this.state));
        this.props.newQuery(this.state); // Send the Query to Home Component
        this.setState(
          {
            searching: true
          },
          () => setTimeout(() => this.setState({ searching: null }), 1200)
        );
      }
    );
  }

  render() {
    return (
      <React.Fragment>
        <div className="col s12 m12 l6">
          <div className="card-panel">
            <h2 className="header center">Search for an Article</h2>
            <div className="row">
              <form className="col s12" onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">search</i>
                    <label for="topic">Topic</label>
                    <input
                      type="text"
                      ref="topic"
                      id="topic"
                      required="required"
                      className="validate"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">
                      format_list_numbered
                    </i>
                    <label for="options">Choose your option</label>
                    <select id="numOfRecords" ref="numOfRecords">
                      <option value="" disabled="disabled" selected="selected">
                        Choose your option
                      </option>
                      <option value="1">1</option>
                      <option value="5">5</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">date_range</i>
                    <label for="startYear">Start Year (Optional)</label>
                    <input
                      type="date"
                      ref="startYear"
                      className="datepicker"
                      id="startYear"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">date_range</i>
                    <label for="endYear">End Year (Optional)</label>
                    <input
                      type="date"
                      ref="endYear"
                      className="datepicker"
                      id="endYear"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <button
          className="btn cyan waves-effect waves-light right"
          type="submit"
          name="action"
        >
          Submit
          <i className="mdi-content-send right" />
        </button>
      </React.Fragment>
    );
  }
}

export default SearchForm;
