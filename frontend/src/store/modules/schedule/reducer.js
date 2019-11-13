import produce from 'immer';

const INITIAL_STATE = {
  filledInput: true,
};

export default function schedule(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@schedule/FILLED_INSERT':
      return produce(state, draft => {
        draft.filledInput = !state.filledInput;
      });
    default:
      return state;
  }
}
