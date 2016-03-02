import React from 'react';
import {Link} from 'react-router';

const NavBar = React.createClass({
  render: function() {
    return (
      <ul>
        <li><Link to='/start'>Start</Link></li>
        <li><Link to='/viewmatch'>View Match</Link></li>
        <li><Link to='/ranking'>Ranking</Link></li>
      </ul>
    );
  }
});

export default NavBar;