const styles = theme => ({
    root: {
        display: 'flex',
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    buttonContainer: {
        padding: theme.spacing(3),
        display: 'flex',
        justifyContent:'flex-end'
    },

    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    buttonItem: {
        background: 'linear-gradient(45deg, #6ec436 30%, #c322ad 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 31,
        padding: '10 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    buttonReload: {
        background: 'linear-gradient(45deg, #c3224b 30%, #6ec436 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 31,
        padding: '10 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    footer: {
        marginTop: '14%',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        color: 'white',
        boxShadow: '0 1px 10px 6px rgba(65, 229, 240, .3)',
    },
    footerText: {
        justifyContent: 'center', 
        alignItems: 'center',
        fontSize: '18px',
    },


    
});

export default styles;