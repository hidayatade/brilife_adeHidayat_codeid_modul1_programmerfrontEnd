import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Page from '../../components/Page';
import styles from './styles.js';
import { connect } from 'react-redux';
import life from '../../img/life.jpg';
import Button from '@material-ui/core/Button';

class HomesPage extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: 'BRI LIFE',
      act: 0,
      index: '',
      datas: [],
    }
  }

  componentDidMount() {
    this.refs.name.focus();
  }

  fSubmit = (e) => {
    e.preventDefault();
    console.log('try');

    let datas = this.state.datas;
    let name = this.refs.name.value;
    let address = this.refs.address.value;

     if(this.state.act === 0) { //new
      let data = {
        name, address
      }
      datas.push(data);
     } else {                   //update
        let index = this.state.index;
        datas[index].name = name;
        datas[index].address = address;
     }

    this.setState({
      datas:datas,
      act: 0
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  }

  fRemove = (i) => {
    let datas = this.state.datas;
    datas.splice(i,1);
    this.setState({
      datas: datas
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  }

  fEdit = (i) => {
    let data = this.state.datas[i];
    this.refs.name.value = data.name;
    this.refs.address.value = data.address;

    this.setState({
      act: 1,
      index: i
    })
  }

  render() {
    const { classes } = this.props; 
    let datas = this.state.datas;
    return (
      <Page>
        <img src={life} width="1415" height="400" />
        <div className={classes.App}>
        <h2>{this.state.title}</h2>
        <form ref = "myForm" className={classes.myForm}>
            <input type="number" ref="name" placeholder="number" className={classes.formField} />
            <input type="text" ref="address" placeholder="Nama Propinsi" className={classes.formField} />
            <button onClick={(e)=>this.fSubmit(e)} className={classes.myButton}>Submit</button>
        </form>
        <pre>
          {datas.map((data, i) =>
            <li key={i} className={classes.myList}>
              {i+1}. {data.name}, {data.address}
              <Button onClick={()=>this.fRemove(i)} className={classes.myListButton} variant="contained" color="secondary">
                Remove
              </Button>
              <Button onClick={()=>this.fEdit(i)} className={classes.myListButton} variant="contained" color="primary">
                Edit
              </Button>
            </li>
          )}
        </pre>
      </div>
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  addData: state.addHome.data,
  addError: state.addHome.error,
  addLoading: state.addHome.loading,
  deleteData: state.deleteHomeById.data,
  deleteError: state.deleteHomeById.error,
  deleteLoading: state.deleteHomeById.loading,
  data: state.findHomes.data,
  loading: state.findHomes.loading,   
  error: state.findHomes.error

});

const mapDispatchToProps = {
};

export default withStyles(styles, { withTheme: true })(
  connect(mapStateToProps, mapDispatchToProps)(HomesPage)
);