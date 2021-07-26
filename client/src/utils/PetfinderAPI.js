import axios from 'axios'

const Petfinder = {
  get: query => axios.post('/api/petfinder', query)
}

export default Petfinder
