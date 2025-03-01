import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import brand from "dan-api/dummy/brand";
import { PapperBlock, CounterIconsWidget } from "dan-components";
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import { Field, reduxForm } from 'redux-form/immutable';
// import MenuItem from '@material-ui/core/MenuItem';
// import InputLabel from '@material-ui/core/InputLabel';
import Grid from "@material-ui/core/Grid";
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Typography from "@material-ui/core/Typography";
import { Fragment } from "react";
// import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import classNames from "classnames";
import PropTypes, { number } from "prop-types";
import { withStyles } from "@material-ui/core/styles";
// import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
import Icon from "@material-ui/core/Icon";
// import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from "@material-ui/icons/Delete";
// import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
// import PhotoCamera from '@material-ui/icons/PhotoCamera';
import FileUpload from "@material-ui/icons/CloudUpload";
import KeyboardVoice from "@material-ui/icons/KeyboardVoice";
import Save from "@material-ui/icons/Save";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { getUsers, blockUser } from "../../../redux/actions/userActions";
import { apiActiveURL } from "../../../ApiBaseURL";

import newsData from "../../../api/dummy/newsData";

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
  Margin_top: {
    marginTop: "20px",
  },
});

function userSettings(props) {
  console.log("page data", props);
  // const eventData = useSelector(state => state.getIn([reducer, 'events']));
  // const data = useSelector((state) => state._root.entries[6]);
  // console.log(data[1], 'user page data');

  const dispatch = useDispatch();

  const { classes } = props;

  const userData = JSON.parse(localStorage.getItem("UserData"));

  useEffect(() => {
    if (userData) {
      console.log(userData, "userData");
      setName(userData[0]);
      setEmail(userData[1]);
      setFriendsCount(userData[4]);
      setStatus(userData[4] == false ? "not verified" : "verified");
      setPhoneNumber(userData[9]);
      setUserId(userData[11]);
    }
  }, []);

  // useEffect(() => {
  //   if (props.location.state.data) {
  //     setName(
  //       props.location.state.data.newData[0]
  //         ? props.location.state.data.newData[0]
  //         : ""
  //     );
  //     setEmail(
  //       props.location.state.data.newData[1]
  //         ? props.location.state.data.newData[1]
  //         : ""
  //     );
  //     setFriendsCount(
  //       props.location.state.data.newData[4]
  //         ? props.location.state.data.newData[4]
  //         : " "
  //     );
  //     setStatus(
  //       props.location.state.data.newData[7] == false
  //         ? "not verified"
  //         : "verified"
  //     );
  //     setPhoneNumber(
  //       props.location.state.data.newData[9]
  //         ? props.location.state.data.newData[9]
  //         : ""
  //     );
  //     setUserId(
  //       props.location.state.data.newData[11]
  //         ? props.location.state.data.newData[11]
  //         : ""
  //     );
  //   }
  // }, []);

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  const title = brand.name + " - Blank Page";
  const description = brand.desc;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [friendsCount, setFriendsCount] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userId, setUserId] = useState("");
  const [open, setOpen] = useState(false);
  const [blockloading, setBlockLoading] = useState(false);
  const [unblockloading, setUnBlockLoading] = useState(false);

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

  const handleBlock = async (e) => {
    e.preventDefault();
    console.log(userId, "block user");
    setBlockLoading(true);
    const SessionData = JSON.parse(localStorage.getItem("SessionData"));
    const data = {
      userId,
    };
    // dispatch(blockUser(data));

    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${SessionData[0]}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const response = await fetch(
      `${apiActiveURL}be/api/v1/dashboard/user/block?user_id=${userId}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result, "success");
        if (result.status.toString() == "true") {
          toast.success(`${result.msg}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setBlockLoading(false);
        } else {
          toast.error(`${result.msg}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setBlockLoading(false);
        }
      })
      .catch((error) => {
        toast.error("Something Went Wrong", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        console.log("error", error);
        setBlockLoading(false);
      });
  };

  const handleUnBlock = async (e) => {
    e.preventDefault();
    console.log(userId, "Unblock user");
    setUnBlockLoading(true);
    const SessionData = JSON.parse(localStorage.getItem("SessionData"));
    const data = {
      userId,
    };
    // dispatch(blockUser(data));

    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${SessionData[0]}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const response = await fetch(
      `${apiActiveURL}be/api/v1/dashboard/user/unblock?user_id=${userId}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result, "success");
        if (result.status.toString() == "true") {
          toast.success(`${result.msg}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setUnBlockLoading(false);
        } else {
          toast.error(`${result.msg}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setUnBlockLoading(false);
        }
      })
      .catch((error) => {
        toast.error("Something Went Wrong", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setUnBlockLoading(false);
        console.log("error", error);
      });
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
      <PapperBlock
        title="Diamonds"
        icon="ion-ios-videocam"
        desc="User Diamond Info"
      >
        <div className={classes.container}>
          <CounterIconsWidget
            titleOne="Total Beans Count"
            titleTwo="Total Diamond Count"
            titleThree=""
            titleFour=""
            // firstVal={props.location.state.data.newData[3]}
            // secondVal={props.location.state.data.newData[5]}
            firstVal={userData[3] ? userData[3] : null}
            secondVal={userData[5] ? userData[5] : null}
            pageKey="user-settings"
          />
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
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="Friends Count"
                  fullWidth
                  autoComplete="fname"
                  value={friendsCount}
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
                  label="Phone Number"
                  fullWidth
                  autoComplete="fname"
                  value={phoneNumber}
                  disabled
                  // onChange={(e) => {
                  //   setFirstName(e.target.value);
                  // }}
                />
              </Grid>
            </Grid>
          </Fragment>
        </form>

        <Grid item md={12} className={(classes.demo, classes.Margin_top)}>
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
            onClick={handleBlock}
          >
            {blockloading ? <>Loading....</> : <>Block</>}
            <FileUpload className={classes.rightIcon} />
          </Button>

          <Button
            className={classes.button}
            variant="contained"
            color="default"
            onClick={handleUnBlock}
          >
            {unblockloading ? <>Loading....</> : <> Un-Block</>}

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
        <DialogTitle id="alert-dialog-title">Block User</DialogTitle>
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
