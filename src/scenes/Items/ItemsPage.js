import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Page from '../../components/Page';
import { deleteById, findAll} from '../../actions/items';
import { Button } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { connect } from 'react-redux';
import MUIDataTable from 'mui-datatables';
import StickyFooter from 'react-sticky-footer';
import { CircularProgress, Backdrop } from '@material-ui/core';
import {
  Cached as ReloadIcon,
} from '@material-ui/icons';
import styles from './styles.js';

class ItemsPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      total: 0,
      params: {
        search: { name: '' },
        sort: 'asc',
        page: 0,
        size: 2
        
      },
      error: null
    };
  }

  componentDidMount() {
    this.reload();
  }

  reload() {
    this.props.findAll(this.state.params);
  }

  componentDidUpdate(prevProps, prevState) {
    const { deleteData, deleteError, data, error } = this.props;
    const { params } = this.state;

    if (prevProps.data !== data) {
      this.setState({ data: data.list, total: data.total });
    } else if (prevState.params !== params ||
      prevProps.deleteData !== deleteData) {
      this.reload();
    } else if (deleteError && prevProps.deleteError !== deleteError) {
      this.setState({ error: deleteError });
    } else if (error && prevProps.error !== error) {
      this.setState({ error: error });
    }
  }

  onAdd = () => {
    this.props.history.push('/items/add');
  }

  onReload = () => {
    this.reload();
  }
  onRowsDelete = (rowsDeleted) => {
    const { list } = this.props.data;

    const e = list[rowsDeleted.data[0].index];
    this.props.deleteById(e.id);

    return false;
  }
  
  onRowClick = rowData => {
    this.props.history.push(`/items/${rowData[0]}`);
  };

  onChangePage = (currentPage) => {
    const { params } = this.state;
    this.setState({ params: { ...params, page: currentPage } });
  }

  onChangeRowsPerPage = (numberOfRows) => {
    const { params } = this.state;
    this.setState({ params: { ...params, size: numberOfRows } });
  }

  onSearchChange = (searchText) => {
    const { params } = this.state;
    this.setState({ params: { ...params, search: { name: searchText } } });
  }

  onColumnSortChange = (changedColumn, direction) => {
    const { params } = this.state;
    const sort = direction === 'descending' ? 'desc' : 'asc';
    this.setState({ params: { ...params, sort } });
  }

  render() {
    const { classes, loading } = this.props;
    const { data, total, params, error } = this.state;

    const columns = [
      {
        name: "id",
        label: "ID",
        options: {
          sortDirection: params.sort
        }
      },
      {
        name: "name",
        label: "Name",
        options: {
          sort: false,
        }
      }
    ];
    const options = {
      serverSide: true,
      selecttableRows: 'single',
      page: params.page,
      count: total,
      rowsPerPage: params.size,
      rowsPerPageOptions: [2, 10, 15, 100],
      filter: false,
      searchText: params.search.name,
      onRowClick: this.onRowClick,
      onRowsDelete: this.onRowsDelete,
      onChangePage: this.onChangePage,
      onChangeRowsPerPage: this.onChangeRowsPerPage,
      onSearchChange: this.onSearchChange,
      onColumnSortChange: this.onColumnSortChange,

      textLabels: {
        body: {
          noMatch: loading ? 
          <Backdrop className={classes.backdrop} open={true}>
            <CircularProgress/>
          </Backdrop>

            : "Sorry, not macth records not found"
        }
      }
    }

    return (
      <Page error={error}>
        <div className={classes.buttonContainer}>
          <Button className={classes.buttonItem} size="small" variant="contained" color="primary"
            onClick={this.onAdd}
            startIcon={<AddCircleOutlineIcon />}>
            New Item
          </Button>
        </div>
        <MUIDataTable
          title={"Item List"}
          data={!loading ? data : []}
          columns={columns}
          options={options}
        />
        <div className={classes.buttonContainer}>
          <Button className={classes.buttonReload} size="small" variant="contained" color="primary"
            onClick={this.onReload}
            startIcon={<ReloadIcon />}
            disabled={loading}>
            Reload
          </Button>
        </div>
        <div className={classes.footer}>
          <StickyFooter
            bottomThreshold={50}
            normalStyles = { {
            backgroundColor: "#999999",
            padding: "2rem",
            }}

            stickyStyles={{
            backgroundColor: "rgba(255,255,255,.8)",
            padding:"5rem" 
            }}
          >
            <marquee behavior="alternate" className={classes.footerText}>@2020 | adhdyt | items page</marquee>
          </StickyFooter>
        </div>

      </Page>
    );
  }
}

const mapStateToProps = state => ({
 
  deleteData: state.deleteItemById.data,
  deleteError: state.deleteItemById.error,
  deleteLoading: state.deleteItemById.loading,
  data: state.findItems.data,
  loading: state.findItems.loading, 
  error: state.findItems.error
});

const mapDispatchToProps = {
  deleteById, findAll
};

export default withStyles(styles, { withTheme: true })(
  connect(mapStateToProps, mapDispatchToProps)(ItemsPage)
);