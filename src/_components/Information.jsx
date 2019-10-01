import React, { Component } from 'react';

import timeParse from '../_helpers/timeParse';

class Information extends Component {

  state = {
    info: null,
  }

  showAll = () => {
    this.setState({
      info: this.props.results,
    })
  }

  showBest = () => {
    const resultsTime = this.props.results.map(item => item.time)
    const index = resultsTime.indexOf(Math.min(...resultsTime));
    const info = this.props.results.filter((_, i) => i === index);
    this.setState({ info })
  }

  showWorst = () => {
    const resultsTime = this.props.results.map(item => item.time)
    const index = resultsTime.indexOf(Math.max(...resultsTime));
    const info = this.props.results.filter((_, i) => i === index);
    this.setState({ info })
  }

  showAvg5 = () => {
    const resultsTime = this.props.results.map(item => item.time);
    const res = resultsTime;
    let all = [];
    for (let i = 0; i < res.length - 4; i++) {
      let sum = [];
      sum.push(res[i]);sum.push(res[i+1]);sum.push(res[i+2]);sum.push(res[i+3]);sum.push(res[i+4]);
      let min = sum.indexOf(Math.min(...sum)); sum.splice(min, 1);
      let max = sum.indexOf(Math.max(...sum)); sum.splice(max, 1);
      let avg = sum.reduce((a,b) => (a + b), 0) / sum.length;
      all.push(avg);
    }
    let indexOfMin = all.indexOf(Math.min(...all));
    let info = this.props.results.slice(indexOfMin, indexOfMin + 5);
    this.setState({ info })
  }

  render() {
    return (
      <div className="information">
        <p className="information__title">More info</p>
        <div className="information__container">
          <ul className="information__nav">
            <li className="information__link">Single</li>
            <li className="information__link" onClick={this.showBest}>Best</li>
            <li className="information__link" onClick={this.showWorst}>Worst</li>
            <li className="information__link" onClick={this.showAvg5}>Avg5</li>
            <li className="information__link" onClick={this.showAll}>All</li>
          </ul>
          <ul className="information__list">
            {
              this.state.info && this.state.info.map((item, index) => {
                return <li className="information__item" key={index}>
                  <span className="information__count">{index + 1}. </span>
                  <span className="information__time">{timeParse(item.time)} - </span>
                  <span className="information__scramble">{item.scramble}</span>
                </li>
              })
            }
          </ul>
        </div>
      </div>
    );
  }

};

export default Information;