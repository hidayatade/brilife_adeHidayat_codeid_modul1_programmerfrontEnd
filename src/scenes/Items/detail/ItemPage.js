import React, { Component } from 'react';
import { Button, TextField, CircularProgress, Backdrop } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Page from '../../../components/Page';
import { findById, add } from '../../../actions/items';
import styles from './styles.js';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { connect } from 'react-redux';



class ItemPage extends Component {

  constructor(props) {
    super(props);

    const { match } = this.props;

    this.state = {
      form: {
        id: match.params.id,
      name: ''
      },
      error:false
    };
  }

  componentDidMount() {
    const { form } = this.state;
    if (form.id) {
      this.props.findById(form.id);
    }
  }
  
  componentDidUpdate(prevProps, prevState) {
    const { addData, addError, data , error, history} = this.props;

    if(prevProps.data !== data) {
      this.setState({form: data});
    } else if (addError && prevProps.addError !== addError) {
      this.setState({error: addError});
    } else if (error && prevProps.error !== error) {
      this.setState({error: error});
    }else if (addData && prevProps.addData !== addData) {
    history.goBack();
  }

}
  onAdd = () => {
    this.props.history.push('/items/add');
  }

  onChange = (event) => {
    const { name, value } = event.target;
    const {form} = this.state;
    this.setState({form: {...form,[name]:value}});
  };
  
  onSubmit = (event) => {
    event.preventDefault();
    // if (this.state.id == undefined){
      this.props.add(this.state.form)
  };

  onBack = (event) => {
    event.preventDefault();
    const { history } = this.props;
    history.push('/items');
  };

  render() {
    const { classes, loading, addError , error } = this.props; 
    const { form } = this.state;
    const errorData = addError?.data || {};

    return (
      <Page error = {error}>
        {!loading ?
        <form noValidate autoComplete="off" onSubmit={this.onSubmit} >
          {form.id && (<div className={classes.formField}>
              <TextField id="id" name="id" label="ID" value={form.id} fullWidth
                InputProps={{ readOnly: true }} />
            </div>
            )}
          <div className={classes.formField}>
            <TextField id="name" name="name" label="Name" value={form.name} error={errorData.name}
            helperText={errorData.name ? errorData.name[0] : null} onChange={this.onChange} fullWidth/>
          </div>
          <div className={classes.formField}>
            <Button className={classes.saveButton} size="small" variant="contained" color="primary" type="submit"
              startIcon={<SaveAltIcon />}>
              Save
            </Button>
            <Button className={classes.backButton2} size="small" variant="contained" color="secondary" onClick={this.onBack}
              startIcon={<ArrowBackIcon />}>
              Back
            </Button>
          </div>
        </form> :
        <Backdrop className={classes.backdrop} open={true}>
          <CircularProgress/>
        </Backdrop>
      }
 
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  addData: state.addItem.data,
  addError: state.addItem.error,
  data: state.findItemById.data,
  loading: state.findItemById.loading || state.addItem.loading,   
  error: state.findItemById.error || state.deleteItemById.error
});

const mapDispatchToProps = {
  findById,add
};

export default withStyles(styles, { withTheme: true })(
  connect(mapStateToProps, mapDispatchToProps)(ItemPage)
);