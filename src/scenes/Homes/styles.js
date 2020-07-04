const styles = theme => ({
    root: {
        display: 'flex',
    },
    toolbar:theme.mixins.toolbar,
    content:{
        flexGrow:1,
        padding:theme.spacing(3),
    },     
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    App: {
        margin: 'auto',
        width: '50%'
    },
    myForm: {
        width: '100%',
        backgroundColor: '#dfe6e9',
        borderRadius: '5px',
        padding: '20px'
    },
    formField: {
        width: '100%',
        padding: '12px 20px',
        margin: '8px 0',
        display: 'block',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxSizing: 'borderBox'
    },
    myButton: {
        width: '100%',
        backgroundColor: '#00b894',
        color: 'white',
        padding: '14px 20px',
        margin: '8px 0',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
    },
    myListButton: {
        marginLeft: '20px'
    }

});

export default styles;