import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    minWidth: 150,
    margin: 5,
    backgroundColor: '#fafafa'
  }
})

const SimpleCard = props => {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant='body2' component='p'>
          {props.body}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default SimpleCard
