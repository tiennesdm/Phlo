import http from "../config/http-comon";

class AuthDataService {
  loginUser(data) {
    return http.post("/auth/login", data);
  }
  signUpUser(data) {
    return http.post("/auth/signup", data);
  }
}

export default new AuthDataService();