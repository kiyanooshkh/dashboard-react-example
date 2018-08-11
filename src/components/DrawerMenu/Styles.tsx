import { createStyles, Theme } from '@material-ui/core/styles';

const drawerWidth = 350;

export const Styles = (theme: Theme) => createStyles({
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      [theme.breakpoints.up('md')]: {
        marginLeft: drawerWidth,
        position: 'absolute',
      },
      [theme.breakpoints.down('sm')]: {
        width:'100%'
      },
    },
    content: {
      backgroundColor: theme.palette.background.default,
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
    },
    drawerPaper: {
      width: drawerWidth,
      [theme.breakpoints.up('md')]: {
        position: 'relative',
      },
    },
    navIconHide: {
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    root: {
      display: 'flex',
      flexGrow: 1,
      overflow: 'hidden',
      position: 'relative',
      width: '100%',
      zIndex: 1,
    },
    toolbar: theme.mixins.toolbar,
  });

  export default Styles;