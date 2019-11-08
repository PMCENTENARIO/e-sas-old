import produce from 'immer';

const INITIAL_STATE = {
  people: null,
};

export default function person(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@person/PERSON_ALL_REQUEST':
      return produce(state, draft => {
        draft.people = action.payload.peolpe;
      });
    default:
      return state;
  }
}
