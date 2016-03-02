import BaseStore from 'fluxible/addons/BaseStore';

class GameStore extends BaseStore {
  constructor(dispatcher) {
    super(dispatcher);
    this.score = null;
  }

  addScore(payload) {
    this.score = this.score +1 ;
    this.emitChange();
  }

  getScore() {
    return this.score;
  }
}

GameStore.storeName = 'GameStore';
GameStore.handlers = {
  'ADD_SCORE': 'addScore'
};

export default GameStore;
