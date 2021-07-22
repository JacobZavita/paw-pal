import axios from 'axios'
const localStorage = window.localStorage

const Noise = {
  noise: _ => axios.get('api/noises', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }),
  dog: _ => axios.get('api/noises/dog', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }),
  cat: _ => axios.get('api/noises/cat', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }),
  bird: _ => axios.get('api/noises/bird', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }),
  rabbit: _ => axios.get('api/noises/rabbit', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }),
  horse: _ => axios.get('api/noises/horse', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
}

export default Noise
