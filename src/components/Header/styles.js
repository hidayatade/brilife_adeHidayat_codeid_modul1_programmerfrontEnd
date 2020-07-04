import {DRAWER_WIDTH} from '../constants'
const styles = theme => ({
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
      marginLeft: DRAWER_WIDTH,
      background: 'linear-gradient(45deg, #1A77A2 30%, #B9F7F8 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      padding: '10 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  header: {
    
}
})

export default styles;