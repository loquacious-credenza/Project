module.exports = {
  //user.isLoggedIn
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',

  //user.activeTrip
  ADD_START: 'ADD_WAYPOINT',
  ADD_DESTINATION: 'ADD_WAYPOINT',
  ADD_DESTINATION_SUCCESS: 'ADD_WAYPOINT',
  ADD_DESTINATION_FAIL: 'ADD_WAYPOINT',
  ADD_ETA: 'ADD_WAYPOINT',

  //activeTrip.waypoints
  ADD_WAYPOINT: 'ADD_WAYPOINT',

  //user.onTrip
  START_TRIP: 'START_TRIP',
  START_TRIP_SUCCESS: 'START_TRIP_SUCCESS',
  START_TRIP_FAIL: 'START_TRIP_FAIL',
  CHECK_IN: 'CHECK_IN',
  CHECK_IN_SUCCESS: 'CHECK_IN_SUCCESS',
  CHECK_IN_FAIL: 'CHECK_IN_FAIL',

  //user.isOverdue
  PASSED_ACCEPTABLE_DELAY: 'PASSED_ACCEPTABLE_DELAY',
  PASSED_ETA: 'PASSED_ETA',
  //user.isOverdue && user.activeTrip.endTime
  RESET_DELAY: 'RESET_DELAY',
  RESET_DELAY_SUCCESS: 'RESET_DELAY_SUCCESS',
  RESET_DELAY_FAIL: 'RESET_DELAY_FAIL',

  //user.emergencyContacts
  UPDATE_EMERGENCY_CONTACT: 'UPDATE_EMERGENCY_CONTACT',
  UPDATE_EMERGENCY_CONTACT_SUCCESS: 'UPDATE_EMERGENCY_CONTACT_SUCCESS',
  UPDATE_EMERGENCY_CONTACT_FAIL: 'UPDATE_EMERGENCY_CONTACT_FAIL',

  //user.currentLocation
  GET_CURRENT_LOCATION: 'GET_CURRENT_LOCATION',
  GET_CURRENT_LOCATION_SUCCESS: 'GET_CURRENT_LOCATION_SUCCESS',
  GET_CURRENT_LOCATION_FAIL: 'GET_CURRENT_LOCATION_FAIL',

  // needed for protected routes
  AUTHENTICATE: 'AUTHENTICATE',
  AUTH_FAIL: 'AUTH_FAIL',
  AUTH_SUCCESS: 'AUTH_SUCCESS',
};
