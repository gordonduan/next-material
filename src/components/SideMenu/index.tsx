import { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import HomeIcon from '@material-ui/icons/Home';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
}));

const index = (props) => {
    console.log(1111);
    console.log(props.drawerOpen);
    const theme = useTheme();
  const classes = useStyles();

  const [expand, setExpand] = useState(false);

  const handleClick = () => {
    setExpand(!expand);
  };

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

  return (

    <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: props.drawerOpen,
          [classes.drawerClose]: !props.drawerOpen,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: props.drawerOpen,
            [classes.drawerClose]: !props.drawerOpen,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={props.handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button key="Home">
            <ListItemIcon> <HomeIcon /> </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={handleClick}>
            <ListItemIcon> <AccountBoxIcon /> </ListItemIcon>
            <ListItemText primary="Group" />
            {expand ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={expand} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon> <GroupAddIcon /> </ListItemIcon>
                <ListItemText primary="User" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button key="Setting">
            <ListItemIcon> <SettingsIcon /> </ListItemIcon>
            <ListItemText primary="Setting" />
          </ListItem>
        </List>

      </Drawer>
  );
}

export default index;