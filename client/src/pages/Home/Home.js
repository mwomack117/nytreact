import React, { Component } from "react";

import SearchForm from "../../components/SearchForm";
import Results from "../../components/Results";
import API from "../../utils/API";
import Nav from "../../components/Navbar";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      limit: null
    };

    this.newQuery = this.newQuery.bind(this);
    this.searchArticles = this.searchArticles.bind(this);
  }

  newQuery({ searchParams }) {
    // console.log(JSON.stringify(searchParams))
    let { topic, startDate, endDate, limit } = searchParams;
    this.setState({ limit }); // Set the limit of Articles to Show
    let queryString = `${topic}${startDate}${endDate}`;
    this.searchArticles(queryString);
  }

  searchArticles = query => {
    API.search(query)
      .then(res => {
        let articlesArray = [];

        res.data.response.docs.map(
          ({ snippet, web_url, pub_date, _id, multimedia }) => {
            articlesArray.push({
              title: snippet,
              url: web_url,
              date: pub_date,
              articleId: _id,
              image: multimedia[2]
            });
          }
        );

        this.setState(
          prevState => ({
            articles: [...prevState]
              .concat(articlesArray)
              .splice(0, this.state.limit)
          }),
          console.log(this.state.limit)
        );

        // console.log("state is " + JSON.stringify(this.state));
      })
      .catch(err => console.log(err));
  }; // End of searchArticles

  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <SearchForm newQuery={this.newQuery} />
          <Results results={this.state} />
        </div>
      </div>
    );
  }
}

export default Home;
