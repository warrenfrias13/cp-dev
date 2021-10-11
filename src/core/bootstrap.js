
window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

window.axios.interceptors.response .use((response) => { return response; }, function (error) {
  if (error.response.status === 401 || error.response.status === 419) {
    location.reload()
  }

  return Promise.reject(error);
  
});
