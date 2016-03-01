import React from 'react';

const Button = React.createClass({
  propTypes: {
    onClick: React.PropTypes.func.isRequired
  },

  render: function() {
    return (
      <input type="button" value="start" onClick={this.props.onClick}/>
    )
  }
});

export default Button;