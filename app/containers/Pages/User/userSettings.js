import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { PapperBlock ,CounterIconsWidget} from 'dan-components';
import Grid from '@material-ui/core/Grid';
import { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import DeleteIcon from "@material-ui/icons/Delete";
import FileUpload from "@material-ui/icons/CloudUpload";
// import KeyboardVoice from "@material-ui/icons/KeyboardVoice";
// import Save from "@material-ui/icons/Save";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const styles = (theme) => ({
  demo: {
    height: "auto",
  },
  divider: {
    margin: `${theme.spacing(3)}px 0`,
  },
  field: {
    margin: `${theme.spacing(3)}px 5px`,
  },
  button: {
    margin: theme.spacing(1),
  },
  inputUpload: {
    display: "none",
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  },
  Margin_top:{
    marginTop:'20px',
  },
});

function userSettings(props) {
  // console.log(props.location.state.data.name, "page data");

  const { classes } = props;

  useEffect(() => {
    if (props.location.state.data) {
      setName(props.location.state.data.name);
      setEmail(props.location.state.data.email);
      setStatus(props.location.state.data.status);
    }
  }, []);

  const title = brand.name + ' - Blank Page';
  const description = brand.desc;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("name");
  };

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <PapperBlock title="Diamonds" icon="ion-ios-videocam" desc="User Diamond Info">
          <div className={classes.container}>
            <CounterIconsWidget titleOne="Total Sent Diamonds" titleTwo="Total Recieved Diamonds" titleThree="" titleFour="" pageKey="user-settings"/>
          </div>
      </PapperBlock>
      <PapperBlock
        title="User Settings form"
        desc="Please fill in the form details"
      >
        {/* Content */}

        <form onSubmit={handleSubmit}>
          <Fragment>
            <Typography variant="h6" gutterBottom>
              User Settings form
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First name"
                  fullWidth
                  autoComplete="fname"
                  value={name}
                  disabled
                  // onChange={(e) => {
                  //   setFirstName(e.target.value);
                  // }}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="Email"
                  fullWidth
                  autoComplete="fname"
                  value={email}
                  disabled
                  // onChange={(e) => {
                  //   setFirstName(e.target.value);
                  // }}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="Status"
                  fullWidth
                  autoComplete="fname"
                  value={status}
                  disabled
                  // onChange={(e) => {
                  //   setFirstName(e.target.value);
                  // }}
                />
              </Grid>
            </Grid>
          </Fragment>
        </form>

        <Grid item md={12} className={classes.demo,classes.Margin_top}>
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
          >
            Update
            <DeleteIcon className={classes.rightIcon} />
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
          >
            Activate
            <Icon className={classes.rightIcon}>send</Icon>
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            color="default"
          >
            Deactivate
            <FileUpload className={classes.rightIcon} />
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            color="default"
          >
            Block
            <FileUpload className={classes.rightIcon} />
          </Button>

          <Button
            className={classes.button}
            variant="contained"
            color="default"
          >
            Un-Block
            <FileUpload className={classes.rightIcon} />
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            color="default"
            onClick={handleClickOpen}
          >
            Permanently Block
            <FileUpload className={classes.rightIcon} />
          </Button>
          {/* <Button
            className={classes.button}
            variant="contained"
            disabled
            color="secondary"
          >
            <KeyboardVoice className={classes.leftIcon} />
            Block
          </Button> */}
          {/* <Button className={classes.button} variant="contained" size="small">
            <Save className={classNames(classes.leftIcon, classes.iconSmall)} />
            Save
          </Button> */}
        </Grid>
      </PapperBlock>

      {/* Permanently block ths user Dialog box */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Block User"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to permanently block this user ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

// export default userSettings;

userSettings.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(userSettings);
