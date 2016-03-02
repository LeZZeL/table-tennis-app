// Load actions for routes when needed
import addScore from './actions/addScore';

// Load component handlers
import Game from './Game.jsx';

// Define fluxible route object
const routes = {
  index: {
    method: 'GET',
    path: '/',
    handler: Game,
    action: addScore
  },
};

export default routes;
