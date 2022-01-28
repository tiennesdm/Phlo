import axios from 'axios';
/**
 * This function will call the API endpoints
 * 
 * 
 * 
 * *** */
export class  CallAPI{
    getLocalToken() {
      if(!this.accessToken){
        this.accessToken =JSON.parse( localStorage.getItem("auth-user"));
      }
    }
    /**
 * Call Synchrounous Api
 * @param {String} method
 * @param {String} url
 * @param {Object} body
 * @param {Number} limit
 * @param {Number} page 
 * ********** */
    async API_RESPONSE_SYNC (method, url, body, limit, page) {
        try{  
          this.getLocalToken();       
            let params;
            if (limit && page) {
                params = {
                    page: page,
                    limit: limit,
                };
            }
            let options = {
                headers: {
                    Authorization: `Bearer ${this.accessToken.auth.token}`,
                    'Content-Type': 'application/json',
                },
                params: params,
            };
            let headers = {
                Authorization: `Bearer ${this.accessToken.auth.token}`,
                'Content-Type': 'application/json',
            };
            let response;
            switch (method) {
                case 'GET':
                    response = await axios.get(url, options);
                    break;
                case 'POST':
                    response = await axios.post(url, body, { headers });
                    break;
                case 'PUT':
                    response = await axios.put(url, body, { headers });
                    break;
                case 'DELETE':
                    response = await axios.delete(url, options);
                    break;
                case 'PATCH':
                    response = await axios.patch(url, body, { headers });
                  break;
                default:
                    return null;
            }
            if (response) {
              if(response['data']){
                let object = response['data'];
                return object || response;
              }
            }else{
              const err = new Error(response.message);
              err.additional_info = response.additional_info;
              err.success = response.success;
              throw err;
            }
        }catch(err){
            return Promise.reject(err);
        }
    }
    /**
 * Normal API Call 
 * @param {String} method
 * @param {String} url
 * @param {Object} body
 * @param {Number} limit
 * @param {Number} page 
 * ********** */
       API_RESPONSE (method, url, body, limit, page) {
        try {
          this.getLocalToken();  
          let params;
          if (limit && page) {
            params = {
              page: page,
              limit: limit,
            };
          }
          let options = {
            headers: {
              Authorization: `Bearer ${this.accessToken.auth.access_token}`,
              "Content-Type": "application/json",
            },
            params: params,
          };
          let headers = {
            Authorization: `Bearer ${this.accessToken.auth.access_token}`,
            "Content-Type": "application/json",
          };
          let promise;
          switch (method) {
            case "GET":
              promise = axios.get(url, options);
              break;
            case "POST":
              promise = axios.post(url, body, { headers });
              break;
            case "PUT":
              promise = axios.put(url, body, { headers });
              break;
            case "DELETE":
              promise = axios.delete(url, options);
              break;
              case 'PATCH':
                promise =  axios.patch(url, body, { headers });
                break;
            default:
              return null;
          }
          if (promise) {
            return promise;
          } else {
            return null;
          }
        } catch (err) {
          return err;
        }
    };
}


