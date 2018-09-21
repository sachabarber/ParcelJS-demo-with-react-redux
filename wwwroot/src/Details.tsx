import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { RootState } from './redux/index';
import { incrementCounter } from './redux/details';

import { Well } from 'react-bootstrap';

interface Props {
  counter: number;
}

interface Actions {
  incrementCounter: any;
}

interface TOwnProps extends RouteComponentProps<{ id: string }> {}

interface State {}

class DetailsInner extends React.Component<Props & Actions, State> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Well className="outer-well">
        <div>this is the Details page</div>
        <div>Counter : {this.props.counter}</div>
        <div>
          <button onClick={this.props.incrementCounter}>Increment</button>
        </div>
      </Well>
    );
  }
}

export const Details = connect<Props, Actions, TOwnProps, RootState>(
  state => ({
    counter: state.details.counter,
  }),
  {
    incrementCounter: incrementCounter,
  }
)(DetailsInner);
