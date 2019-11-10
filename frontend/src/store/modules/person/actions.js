export function personAllRequest() {
  return {
    type: '@person/PERSON_ALL_REQUEST',
  };
}

export function personAll(people) {
  return {
    type: '@person/PERSON_ALL_REQUEST',
    payload: people,
  };
}

export function signFailure() {
  return {
    type: '@person/SIGN_FAILURE',
  };
}
