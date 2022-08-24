import React from 'react'
import ResponsiveAppBar from './ResponsiveAppBar'
import Header from './Header'
import Footer from './Footer'



import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    particlesCanvas: {
        position:"absolute"
    }
})

export const Home = () => {

  return (
    <div>
        <ResponsiveAppBar/>
        <Header/>
        <Footer/>
    </div>
  )
}

export default Home; 
