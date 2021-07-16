import React from 'react'
import axios from 'axios'

function Profile(){
const getPets=()=>{
  axios.get(`https://api.petfinder.com/v2/${CATEGORY}/${ACTION}?${parameter_1}=${value_1}&${parameter_2}=${value_2}`, { headers: { Authorization: `Bearer ${'FLnqEoWDuj92X9rjiYmc2u0jYWwglFXJs0XL4R8neHOEYcZRwQ'}` } })
    .then(
      function(data){
        console.log(data)
      }
      
    )

    .catch(err => console.log(err))

}

return (
  <div></div>
)
}

export default Profile



