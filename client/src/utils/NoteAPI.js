import axios from 'axios'
const localStorage = window.localStorage

const Note = {
  // get notes associated with pet ID
  notes: petId => axios.get(`/api/notes${petId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }),

  // create note (title, body, pet_id)
  create: note => axios.post('/api/notes', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }),

  // update note
  update: (_id, note) => axios.put(`/api/notes/${_id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }, note),

  // delete note
  delete: _id => axios.delete(`/api/notes${_id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
}

export default Note
