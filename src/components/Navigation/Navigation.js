import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import {
    Divider,
    Drawer,
    Hidden,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import {
    Home as HomeIcon,
    EventAvailable as ItemIcon,
} from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles.js';

const menus = [
    {
        path: '/homes',
        icon: HomeIcon,
        label: 'Home'
    },
    {
        path: '/items',
        icon: ItemIcon,
        label: 'Items'
    },

];


class Navigation extends Component {

    render() {
        const { classes, theme, mobileOpen, handleDrawerToggle } = this.props;

        const drawer = (
            
            <div>
                <div className={classes.toolbar} />
                <Divider />
                <List>
                    {menus.map((menu, index) => (
                        <Link key={index} to={menu.path} className={classes.menu}>
                            <ListItem button >
                                <ListItemIcon><menu.icon /></ListItemIcon>
                                <ListItemText className={classes.list} primary={menu.label} />
                            </ListItem>
                        </Link>
                    ))}
                </List>
                <Divider />
                <List>
                    <ListItem button>
                        <ListItemIcon><InfoIcon /></ListItemIcon>
                        <ListItemText primary="About" />
                    </ListItem>
                </List>
            </div>
        );

        return (
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        );
    }
}

Navigation.propTypes = {

    mobileOpen: PropTypes.bool.isRequired,
    handleDrawerToggle: PropTypes.func.isRequired
};
export default withStyles(styles, { withTheme: true })(Navigation);