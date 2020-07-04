import {DRAWER_WIDTH} from '../constants'

const styles = theme => ({
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: DRAWER_WIDTH,
        background: 'linear-gradient(45deg, #B9F7F8 30%, #1A77A2 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: '100%',
        padding: '10 30px',
        marginRight: '30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: DRAWER_WIDTH,
            flexShrink: 0,
        },
    },
  menu: {
    textDecoration:'none',
    color: 'black',
  }
    
});

export default styles;