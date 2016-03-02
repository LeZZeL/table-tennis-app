import React from 'react';

const Button = React.createClass({
  propTypes: {
    onClick: React.PropTypes.func.isRequired,
    valueButton: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      <input type="button" value={this.props.valueButton} onClick={this.props.onClick}/>
    )
  }
});

export default Button;