const styles = theme => ({
    root: {
        display: 'flex',
    },
    toolbar:theme.mixins.toolbar,
    content:{
        flexGrow:1,
        padding:theme.spacing(3),
    }, 
    title: {
        border: '5px solid gray'
    }
});

export default styles;