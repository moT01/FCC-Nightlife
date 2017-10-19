import axios from 'axios';
import yelp from 'yelp-v3';


export function createEvent(event) {
  return dispatch => {
    return axios.post('/api/events', event)
  };
}



export function loadBars(location) {
  var config = {
    headers: {
      'Authorization': 'Bearer ' + process.env.REACT_APP_ACCESS_TOKEN,
    },
    params:{
      location: location,
      term: "bars"
    }
  };

  var crossorigin = "https://cors-anywhere.herokuapp.com/";
  return dispatch => {
    return axios.get(crossorigin + 'https://api.yelp.com/v3/businesses/search', config)
  };
}
