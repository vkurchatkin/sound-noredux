import authed from '../reducers/authed';
import entities from '../reducers/entities';
import environment from '../reducers/environment';
import modal from '../reducers/modal';
import navigator from '../reducers/navigator';
import player from '../reducers/player';
import playlists from '../reducers/playlists';

const rootReducer = (state = {}, action) => {
  return {
      authed: authed(state.authed, action),
      entities: entities(state.entities, action),
      environment: environment(state.environment, action),
      modal: modal(state.modal, action),
      navigator: navigator(state.navigator, action),
      player: player(state.player, action),
      playlists: playlists(state.playlists, action)
  };
};

export default rootReducer;
