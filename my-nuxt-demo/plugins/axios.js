import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3301/'

var options = {
    // timeout: 3000
}

export default axios.create(options)
