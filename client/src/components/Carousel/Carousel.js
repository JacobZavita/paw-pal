import { useState, useEffect } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import MobileStepper from '@material-ui/core/MobileStepper'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import SwipeableViews from 'react-swipeable-views'
import ImgMediaCard from '../PetCard'
import Image from '../../components/Images/footerLong.png'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Slide from '@material-ui/core/Slide';


const useStyles = makeStyles((theme) => ({
  root: {
    
    maxWidth: '70vh',
    flexGrow: 1,
    
    
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 400,
    display: 'block',
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
    
  },
  footerStyle: {
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    width: '100%',
    height: '550px',
    objectFit: 'cover',
    overflow: 'visible'
  },
  gradientStyle: {
    background: 'linear-gradient(45deg, #595959 30%, #1c1c1c 90%)',
    backgroundImage: `url(${Image})`,
    backgroundSize: 'auto 55%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    height: '100vh'
  },
  
}))

const Carousel = props => {
  const classes = useStyles();

  const theme = useTheme();

  const [activeStep, setActiveStep] = useState(0);

  const maxSteps = props.petState.pets.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [activeStep])
  return (
    <main className={classes.gradientStyle}>
      <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{props.petState.pets[activeStep]?.label}</Typography>
      </Paper>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {props.petState.pets.map((step, index) => (
          <div key={step.label}>
            <ImgMediaCard
              pet={step}
              petState={props.petState}
              setPetState={props.setPetState}
              activeStep={activeStep}
              setActiveStep={setActiveStep}
              handleClickFavorite={props.handleClickFavorite}
              handleClickPass={props.handleClickPass}
            />
          </div>
        ))}
      </SwipeableViews>
      <MobileStepper
      
        // steps={maxSteps}
        position="static"
        variant="progress"
        // activeStep={activeStep}
        nextButton={
          <Button  onClick={handleNext} >
            <ChevronRightIcon />
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} >
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            <ChevronLeftIcon />
          </Button>
        }
      />
    </div>
    
      </main>
  )
}

export default Carousel
