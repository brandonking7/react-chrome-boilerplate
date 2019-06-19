import axios from "axios";

function init() {
  const api = axios.create({
    baseURL: "/api/v1"
  });

  return api;
}

export { addAuthenticationHeaders, init };

export default init();
