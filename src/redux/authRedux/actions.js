import * as Types from "./types";

export const loginRequest = user => {
  return {
    type: Types.LOGIN_REQUEST,
    payload: user
  }
}

export const signupRequest = user => {
  return {
    type: Types.SIGNUP_REQUEST,
    payload: user
  }
}

export const updateDeviceTokenRequest = () => {
  return {
    type: Types.UPDATE_DEVICE_TOKEN_REQUEST
  }
}

export const phoneConfirmed = () => {
  return {
    type: Types.PHONE_CONFIRMED
  }
}

export const fetchProfileRequest = () => {
  return {
    type: Types.FETCH_PROFILE_REQUEST
  }
}

export const logout = () => {
  return { type: Types.LOGOUT }
}