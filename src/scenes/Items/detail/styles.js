const styles = theme => ({
    root: {
        display: 'flex',
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    formField: {
        width: 300,
        padding: theme.spacing(1),
        marginRight: 10, 

    },
    saveButton: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #1A77A2 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 31,
        padding: '10 30px',
        marginRight: '30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    backButton2: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 31,
        padding: '10 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    }
   
    
});

export default styles;