import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SendIcon from '@material-ui/icons/Send';
import TableChartIcon from '@material-ui/icons/TableChart';
import * as React from 'react';

export const menuItems = (
  <div>
    <ListItem button={true}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary='Dashboard' />
    </ListItem>
    <ListItem button={true}>
      <ListItemIcon>
        <TableChartIcon />
      </ListItemIcon>
      <ListItemText primary='Tables' />
    </ListItem>
    <ListItem button={true}>
      <ListItemIcon>
        <SendIcon />
      </ListItemIcon>
      <ListItemText primary='Contact Us' />
    </ListItem>
  </div>
);

export default menuItems;