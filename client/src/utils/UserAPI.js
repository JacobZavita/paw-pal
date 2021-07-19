import axios from 'axios'
const localStorage = window.localStorage

const User = {
  // register
  register: user => axios.post('/api/users/register', user),

  // login
  login: user => axios.post('/api/users/login', user),

  // get self
  me: _ => axios.get('/api/users/me', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }),

  // update
  update: user => axios.put('/api/users/', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }, user),

  // delete
  delete: user => axios.delete('/api/users/', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
}

export default User
