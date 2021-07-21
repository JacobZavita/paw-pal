import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'
import { TextField } from '@material-ui/core'

const getModalStyle = props => {
  return {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #2f2f2f',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}))

const ProfileModal = props => {
  // style
  const classes = useStyles()

  // state
  const [modalStyle] = useState(getModalStyle)

  const body = (
    // this needs a text input, with state and handle input change
    <div style={modalStyle} className={classes.paper}>
      <h2 id='simple-modal-title'>Edit information:</h2>
      <TextField
        className={classes.field}
        id={props.type}
        name={props.type}
        value={props.nameState}
        onChange={props.handleInputChange}
        variant='outlined'
        label={props.type}
        color='primary'
        fullWidth
      />
      <br /><br />
      <Button
        type='submit'
        color='primary'
        variant='contained'
        size='large'
        onClick={props.handleClose}
      >
        submit
      </Button>
    </div>
  )

  return (
    <div>
      {/* <button type='button' onClick={props.handleOpen}>
        Open Modal
      </button> */}
      <Modal
        open={props.state}
        onClose={props.handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        {body}
      </Modal>
    </div>
  )
}

export default ProfileModal
