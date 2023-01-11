import React, { useState, Fragment } from "react";
import { Helmet } from "react-helmet";
import brand from "dan-api/dummy/brand";
import { PapperBlock } from "dan-components";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
// import FormHelperText from '@material-ui/core/FormHelperText';
// import { MaterialDropZone } from 'dan-components';
import MaterialDropZone from "../../../components/Forms/MaterialDropZone";
import TextField from "@material-ui/core/TextField";
import AdvFilter from "../../Tables/demos/AdvFilter";
import Save from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
import classNames from "classnames";
import { ToastContainer, toast } from "react-toastify";
import { AdvancedTable } from "../../pageListAsync";
import { apiActiveURL } from "../../../ApiBaseURL";
const styles = (theme) => ({
  demo: {
    height: "auto",
  },
  divider: {
    margin: `${theme.spacing(3)}px 0`,
  },
  input: {
    margin: theme.spacing(3),
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  formControl: {
    margin: theme.spacing(3),
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
});

function addNotifications(props) {
  const title = brand.name + " - Blank Page";
  const description = brand.desc;
  //   const [name, setName] = useState('Title');
  const [notificaitionTitle, setNotificaitionTitle] = useState("");
  const [notificaitionPath, setNotificaitionPath] = useState("");
  const [notificaitionDesc, setNotificaitionDesc] = useState("");
  const [files] = useState([]);
  const { classes } = props;

  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(giftTitle, "Gift");
  };

  const SubmitApi = (e) => {
    e.preventDefault();
    const SessionData = JSON.parse(localStorage.getItem("SessionData"));

    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${SessionData[0]}`);
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      title: notificaitionTitle,
      body: notificaitionDesc,
      path: notificaitionPath,
      userId: SessionData,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      `${apiActiveURL}be/api/v1/dashboard/notification/all/generate`,
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
        }
      })
      .catch((error) => {
        toast.error(error, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
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
      <form onSubmit={handleSubmit}>
        <PapperBlock
          title="Add Notifications"
          icon="ion-ios-ionitron-outline"
          desc="Add Notifications Details"
        >
          <Fragment>
            <Grid
              container
              alignItems="flex-start"
              justify="flex-start"
              direction="row"
              spacing={3}
            >
              <Grid item md={6} sm={12} className={classes.demo}>
                {/* <Typography variant="button" className={classes.divider}>Gift Title</Typography> */}
                <div className={classes.container}>
                  <TextField
                    required
                    id="notificationTitle"
                    name="notificationTitle"
                    label="Notification Title"
                    fullWidth
                    autoComplete="notificationTitle"
                    onChange={(e) => {
                      setNotificaitionTitle(e.target.value);
                    }}
                  />
                  {/* <InputLabel htmlFor="noGifts">Number of Diamonds</InputLabel>
                      <Input id="noGifts"  onChange={handleChange} /> */}
                </div>

                <div className={classes.container}>
                  <TextField
                    required
                    id="notificationPath"
                    name="notificationPath"
                    label="Notification Path"
                    fullWidth
                    autoComplete="notificationPath"
                    onChange={(e) => {
                      setNotificaitionPath(e.target.value);
                    }}
                  />
                  {/* <InputLabel htmlFor="noGifts">Number of Diamonds</InputLabel>
                      <Input id="noGifts"  /> */}
                </div>
                <div className={classes.container}>
                  <TextField
                    required
                    id="notificationDesc"
                    name="notificationDesc"
                    label="Notification Description"
                    fullWidth
                    autoComplete="notificationDesc"
                    onChange={(e) => {
                      setNotificaitionDesc(e.target.value);
                    }}
                  />
                </div>
              </Grid>
            </Grid>
          </Fragment>

          <Button
            className={classes.button}
            onClick={SubmitApi}
            variant="contained"
            size="medium"
          >
            <Save className={classNames(classes.leftIcon, classes.iconSmall)} />
            Save
          </Button>
        </PapperBlock>
      </form>
    </div>
  );
}
addNotifications.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(addNotifications);
