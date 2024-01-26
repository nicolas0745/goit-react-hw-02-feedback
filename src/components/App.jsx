import { Component } from 'react';
import { Statistics } from './Statistics';
import { SectionTitle } from './SectionTitle';
import { FeedBackOptions } from './FeedbackOptions';
import { Notification } from './Notification';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleAdd = evt => {
    const { name } = evt.target;
    this.setState(s => {
      return { [name]: s[name] + 1 };
    });
  };
  countTotalFeedback = () => {
    const allValues = Object.values(this.state).reduce((a, b) => a + b);
    return allValues;
  };
  countPositiveFeedbackPercentage = () => {
    return (this.state.good / this.countTotalFeedback()) * 100;
  };
  render() {
    return (
      <>
        <SectionTitle title="Please leave feedback">
          <FeedBackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleAdd}
          />
        </SectionTitle>
        <SectionTitle title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={Math.round(
                this.countPositiveFeedbackPercentage()
              )}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </SectionTitle>
      </>
    );
  }
}

export { App };
