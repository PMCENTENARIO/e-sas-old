export function signUpRequest(data) {
  const { name, phone, document, email, password, profile = 0 } = data;
  return {
    type: '@user/SIGN_UP_REQUEST',
    payload: { name, phone, document, email, password, profile },
  };
}

export function userAllRequest() {
  return {
    type: '@user/USER_ALL_REQUEST',
  };
}

export function signFailure() {
  return {
    type: '@user/SIGN_FAILURE',
  };
}
