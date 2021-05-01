import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID O3Ilusmhj-1I4Fa-5AsEgxSZtz7x2CzkwPpkTWS6oBA",
  },
});
