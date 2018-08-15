import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import { Theme, withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import * as React from 'react';
import styles from './Styles';
import menuItems from './MenuItems';

interface State {
  mobileOpen: boolean;
}

interface Props {
  classes: {
    appBar: string;
    content: string;
    drawerPaper: string;
    root: string;
    logo: string;
    navIconHide: string;
    toolbar: string;
  };
}

class DrawerMenu extends React.Component<Props, State, Theme> {
public state = {
    mobileOpen: false
  };

  constructor(props: Props) {
    super(props);
}

  public handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  }

  public render() {
   const { classes } = this.props;

    const drawer = (
      <div>
        <div className={classes.logo}>Company Logo</div>
        <Divider />
        <List>{menuItems}</List>
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='Open drawer'
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='title' color='inherit' noWrap={true}>
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Hidden mdUp={true}>
          <Drawer
            variant='temporary'
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown={true} implementation='css'>
          <Drawer
            variant='permanent'
            open={true}
            classes={{
              paper: classes.drawerPaper
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          <div className={classes.toolbar} />
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(DrawerMenu);
