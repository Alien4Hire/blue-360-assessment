var arr = [
  {
    'guest_type': 'crew',
    'first_name': 'Marco',
    'last_name': 'Burns',
    'guest_booking': {
        'room_no': 'A0073',
        'some_array': [7,2,4]
    },
  },
  {
    'guest_type': 'guest',
    'first_name': 'John',
    'last_name': 'Doe',
    'guest_booking': {
        'room_no': 'C73',
        'some_array': [1,3,5,2,4,3]
    },
  },
  {
    'guest_type': 'guest',
    'first_name': 'Jane',
    'last_name': 'Doe',
    'guest_booking': {
        'room_no': 'C73',
        'some_array': [1,3,5,2,4,3]
    },
  },
  {
    'guest_type': 'guest',
    'first_name': 'Albert',
    'last_name': 'Einstein',
    'guest_booking': {
        'room_no': 'B15',
        'some_array': [2,5,6,3]
    },
  },
  {
    'guest_type': 'crew',
    'first_name': 'Jack',
    'last_name': 'Daniels',
    'guest_booking': {
        'room_no': 'B15',
        'some_array': [2,5,6,3]
    },
  },
  {
    'guest_type': 'guest',
    'first_name': 'Alan',
    'last_name': 'Turing',
    'guest_booking': {
        'room_no': 'B15',
        'some_array': [2,5,6,3]
    },
  },
];


// This is a constant object to define guest types
// In a complete project, this could be moved to a separate file or module
// for better maintainability and reusability.
// It helps to avoid hardcoding strings throughout the code.
const guestTypes = {
  CREW: 'crew',
  GUEST: 'guest'
}


// This function mutates the array to filter and map guest details
// It returns a new array containing only the guest details with the specified structure.
// It filters out any entries that do not match the guest type 'guest'.
function mutateArray(a) {
    return a
    // Only include objects with guest_type 'guest'
    .filter(item => item.guest_type === guestTypes.GUEST)
    // Map to the desired structure
    .map(item => ({
        guest_type: item.guest_type,
        first_name: item.first_name,
        last_name: item.last_name,
        room_no: item.guest_booking.room_no,
        some_total: item.guest_booking.some_array.reduce((sum, n) => sum + n, 0)
    }));
}

$(document).ready(function() {
    $('#originalArray').html(JSON.stringify(arr, null, 2));
    $('#resultsArray').html(JSON.stringify(mutateArray(arr), null, 2));
});
