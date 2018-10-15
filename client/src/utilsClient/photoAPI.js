import axios from "axios";

const accessKey = "6034a87bbb5cd3811b06c74ca3ad4a0b0318a241b2e22b1626dcb017a13ea977";
const secretKey = "d73234dd3a5d9064fd0688a79eca6e4ad5bcb79131829b40cf0306acd502f306";

export default {
  getPhoto: function(item) {
    return axios.get(`https://api.unsplash.com/search/photos/?client_id=${accessKey}&query=${item}`);
  }
};

