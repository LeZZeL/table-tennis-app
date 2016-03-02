import React from 'react';
import ReactDOM from 'react-dom';
import {handleHistory} from 'fluxible-router';
import provideContext from 'fluxible-addons-react/provideContext';

let Main = React.createClass({
  propTypes: {
    currentRoute: React.PropTypes.object,
    context: React.PropTypes.object.isRequired,
  },

  contextTypes: {
    getStore: React.PropTypes.func.isRequired,
    executeAction: React.PropTypes.func.isRequired
  },

  childContextTypes: {
    routeName: React.PropTypes.string
  },

  render: function() {
    console.log("props", this.props);
    console.log("children", this.props.children);
    console.log("context", this.context);
    const Handler = this.props.currentRoute.get('handler');

    // const Handler = this.props.currentRoute.get('handler');
    // const params = this.props.currentRoute.get('params').toJS();
    return (
      <div className="wrapper">
        <Handler />
      </div>
    );
  }
});

Main = handleHistory(Main);
Main = provideContext(Main);

export default Main;
