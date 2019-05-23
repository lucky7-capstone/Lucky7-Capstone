import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AnalysisPage from './AnalysisPage.jsx';
import UploadPage from './UploadPage.jsx';
import HomePage from './HomePage.jsx';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SpinnerPage from './SpinnerPage.jsx';
import FileSaver from 'file-saver';
import UnderDevelopmentPopup from './UnderDevelopmentPopup.jsx'



const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
    height:  'calc(100vh - 64px)',
  },
  main: {
    flex: 1,
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    height: '100vh',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  h5: {
    marginBottom: theme.spacing.unit * 2,
  },
  h6: {
    marginBottom: theme.spacing.unit * 2,
  },
});


class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open : false,
      disableAnalysis: true,
      page : "home",
      data : null,
        underDevOpen: false
    };
    this.underDevToggle = this.underDevToggle.bind(this);
  }

  saveData = (data) => {
    try {
      data = JSON.parse(data)
    } catch(err){
      
    }
    this.setState({
      data: data,
      page: "analysis"
    });
   // console.log(data);
  }
  
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  start = () => {
    this.setState({ page : "upload" });
  };

  setAnalysisToVisible = () => {
    this.setState({ disableAnalysis: false });
  };

  saveJSON = (json) => {
    var blob = new Blob([JSON.stringify(json)], {type:"application/json;charset=utf-8"});
    FileSaver.saveAs(blob, "ontology.json");
  };

  underDevToggle(){
    this.setState({underDevOpen: !this.state.underDevOpen});
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <UnderDevelopmentPopup
            onClose={this.undeDevToggle}
            open={this.state.underDevOpen}
        />
        <CssBaseline />
        <AppBar
          position="absolute"
          className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
        >
          <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(
                classes.menuButton,
                this.state.open && classes.menuButtonHidden,
              )}
            >
            <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="title"
              color="inherit"
              noWrap
              className={classes.title}
            >
              Dashboard
            </Typography>

            <Button variant="contained" color="default" className={classes.button}
            href="https://lucky7-1.gitbook.io/lucky7/">
              Help
              {/*<CloudUploadIcon className={classes.rightIcon} />*/}
            </Button>


          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            <div>
              <ListItem button onClick={() => this.setState({ page : "home"} )}>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
              <ListItem button onClick={() => this.setState({ page : "upload"} )}>
                <ListItemIcon>
                  <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="Upload"/>
              </ListItem>
              <ListItem disabled={this.state.disableAnalysis} button onClick={() => this.setState({ page : "analysis"} )}>
                <ListItemIcon>
                  <LayersIcon />
                </ListItemIcon>
                <ListItemText primary="Analysis"/>
              </ListItem>
            </div>
          </List>
          <Divider />
          <List>
            <div>
              <ListSubheader inset>Saved Ontologies</ListSubheader>
              <ListItem button onClick={this.underDevToggle}>
                <ListItemIcon>
                  <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Ontology A" />
              </ListItem>
              <ListItem button onClick={this.underDevToggle}>
                <ListItemIcon>
                  <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Ontology B" />
              </ListItem>
              {this.state.page == "analysis" && this.state.data != null && this.state.open &&
                <ListItem button>
                  <Button name='download_button' variant="contained" color="default" className={classes.button} onClick={() => this.saveJSON(this.state.data)}> Download Ontology
                  </Button>
                </ListItem>
              }
            </div>  
          </List>
        </Drawer>

        <main className={classes.main}>
          <div className={classes.appBarSpacer} />
          {this.state.page == "upload" && <UploadPage  
            handleData={this.saveData} 
            handleError={(error) => {alert(error); this.setState({ page : "upload"} );} }
            loadSpinner={() => this.setState({ page : "spinner"})}
            setAnalysisToVisible={this.setAnalysisToVisible} 
          />}
          {this.state.page == "spinner" && <SpinnerPage />}
          {this.state.page == "analysis" && this.state.data != null && <AnalysisPage
            setAnalysisToVisible={this.setAnalysisToVisible}
            data={this.state.data} />}
          {this.state.page == "home" && <HomePage start={this.start}/>}
        </main>
        
      </div>
    );
  }

}


Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
