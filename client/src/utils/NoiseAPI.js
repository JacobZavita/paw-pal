import axios from 'axios'
const localStorage = window.localStorage

const Noise = {
  noise: _ => axios.get('api/noises', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
}

export default Noise
