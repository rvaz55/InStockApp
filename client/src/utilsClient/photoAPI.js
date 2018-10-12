import axios from "axios";

export default {
  getPhoto: function() {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  }
}