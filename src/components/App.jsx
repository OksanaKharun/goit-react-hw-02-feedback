import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';

export class App extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    onLeaveFeedback = (option) => {
        this.setState(prevState => {
            return ({
            [option]: prevState[option] + 1 
            })
        });
    };

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    }

    countPositiveFeedbackPercentage = () => {
        const total = this.countTotalFeedback();
        return Math.round(this.state.good * 100 / total);
    }
    
    render() {
        const { good, neutral, bad } = this.state;
        const options = Object.keys(this.state);
        const total = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage() || 0;

        return (
          <>
            <div className="container">
           <div className="wrapper">
                <Section title='Please leave feedback'>
                    <FeedbackOptions
                        options={options}
                        onLeaveFeedback={this.onLeaveFeedback} />
                </Section>
                       {(total > 0) ? (
                <Section title="Statistics">
                       <Statistics good={good} neutral={neutral} bad={bad} total={total}
                        positivePercentage={positivePercentage}/>
                </Section>
                          ) : (
                      <p>No feedback given</p>
                      )}

                </div>
               </div>
            </>
        );
    }
};