import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'
// import DeleteIcon from '@material-ui/icons/Delete'
// import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      display: 'flex'
    }
  },
//   input[type = text] {
//     textAlign: left;
// }
}))

const NoteForm = props => {
  const classes = useStyles()
  // const submitButoon = event => {
  //   event.preventDefault()
  //   props.handleCreateNote()
  //   console.log(props.state)
  // }
  return (
    <form className={classes.root}>
      <FormControl fullWidth variant='outlined'>
        <InputLabel htmlFor='body'>Note</InputLabel>
        <OutlinedInput
          id='body'
          labelWidth={75}
          // multiline
          rows={3}
          name='body'
          value={props.body}
          onChange={props.handleInputChange}
          autoFocus
          // textAlign='left'
        />
      </FormControl>
      <br />
      <Button
        onClick={event => {
          event.preventDefault()
          props.handleCreateNote(props.pet_id)
        }}
        variant='outlined'
        color='primary'
      >
        Create Note
      </Button>
      <br />
    </form>
  )
}

export default NoteForm
