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
import AdvTableDemo from "../../Tables/demos/AdvTableDemo";
import Save from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
import classNames from "classnames";
import { AdvancedTable } from "../../pageListAsync";
import { ToastContainer, toast } from "react-toastify";
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

function createSubAdmin(props) {
  const title = brand.name + " - Blank Page";
  const description = brand.desc;
  const [adminName, setAdminName] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");

  const [giftTitle, setGiftTitle] = useState("");
  const [giftNumber, setGiftNumber] = useState("");
  const [files] = useState([]);
  const [giftImage, setGiftImage] = useState([]);
  const [giftUrl, setGiftUrl] = useState();
  const { classes } = props;

  var SessionData = JSON.parse(localStorage.getItem("SessionData"));

  const handleSubmit = (e) => {
    e.preventDefault();

    const SessionData = JSON.parse(localStorage.getItem("SessionData"));
    console.log(
      adminName,
      adminEmail,
      adminPassword,
      SessionData[0],
      "Admin Create"
    );

    // return;
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${SessionData[0]}`);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email: adminEmail,
      name: adminName,
      password: adminPassword,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      `${apiActiveURL}be/api/v1/dashboard/register/subAdmin`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
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
      });
  };

  // const createAdmin = (e) => {
  //   e.preventDefault();

  //   return;
  //   const SessionData = JSON.parse(localStorage.getItem("SessionData"));

  //   const myHeaders = new Headers();
  //   myHeaders.append("Authorization", `Bearer ${SessionData[0]}`);
  //   var formdata = new FormData();
  //   // formdata.append("file", giftImage);

  //   var requestOptions = {
  //     method: "POST",
  //     headers: myHeaders,
  //     body: formdata,
  //     mode: "cors",
  //     redirect: "follow",
  //   };

    // fetch(`${apiActiveURL}be/api/v1/file/admin/upload`, requestOptions)
    //   .then((response) => response.json())
    //   .then((result) => {
    //     console.log(result, "success");
    //     if (result.status.toString() == "true") {
    //       let imageUrl = result.link;

  //         const giftHeaders = new Headers();
  //         giftHeaders.append("Authorization", `Bearer ${SessionData[0]}`);
  //         giftHeaders.append("Content-Type", "application/json");

  //         var raw = JSON.stringify({
  //           gift: giftTitle,
  //           credit: giftNumber,
  //           url: imageUrl,
  //         });

      //     var giftRequestOptions = {
      //       method: "POST",
      //       headers: giftHeaders,
      //       body: raw,
      //       redirect: "follow",
      //     };
      //     fetch(
      //       `${apiActiveURL}be/api/v1/dashboard/gift/add`,
      //       giftRequestOptions
      //     )
      //       .then((response) => response.json())
      //       .then((result) => {
      //         console.log(result, "gift success");
      //         toast.success(`${result.msg}`, {
      //           position: "top-center",
      //           autoClose: 5000,
      //           hideProgressBar: false,
      //           closeOnClick: true,
      //           pauseOnHover: true,
      //           draggable: true,
      //           progress: undefined,
      //           theme: "colored",
      //         });
      //       })
      //       .catch((error) => {
      //         toast.error(error, {
      //           position: "top-center",
      //           autoClose: 5000,
      //           hideProgressBar: false,
      //           closeOnClick: true,
      //           pauseOnHover: true,
      //           draggable: true,
      //           progress: undefined,
      //           theme: "colored",
      //         });
      //       });
      //   } else {
      //     // `${result.msg}`
      //     toast.error("I am here", {
      //       position: "top-center",
      //       autoClose: 5000,
      //       hideProgressBar: false,
      //       closeOnClick: true,
      //       pauseOnHover: true,
      //       draggable: true,
      //       progress: undefined,
      //       theme: "colored",
      //     });
      //   }
      // })
      // .catch((error) => {
      //   // error
      //   toast.error("I am in catch", {
      //     position: "top-center",
      //     autoClose: 5000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //     theme: "colored",
      //   });
      // });

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
          title="Create Sub-Admin"
          icon="ion-ios-ionitron-outline"
          desc="Add Sub Admin Details"
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
                <div className={classes.container}>
                  <TextField
                    id="adminName"
                    name="adminName"
                    label="Name"
                    fullWidth
                    autoComplete="adminName"
                    required
                    onChange={(e) => {
                      setAdminName(e.target.value);
                    }}
                  />
                </div>
                <div className={classes.container}>
                  <TextField
                    id="adminEmail"
                    name="adminEmail"
                    label="Email"
                    fullWidth
                    autoComplete="1"
                    type="email"
                    required
                    onChange={(e) => {
                      setAdminEmail(e.target.value);
                    }}
                  />
                </div>
                <div className={classes.container}>
                  <TextField
                    id="adminEmail"
                    name="adminPassword"
                    label="Password"
                    fullWidth
                    autoComplete="1"
                    type="password"
                    required
                    onChange={(e) => {
                      setAdminPassword(e.target.value);
                    }}
                  />
                </div>
              </Grid>
            </Grid>
          </Fragment>

          <Button
            className={classes.button}
            // onClick={createAdmin}
            variant="contained"
            size="medium"
            type="submit"
          >
            <Save className={classNames(classes.leftIcon, classes.iconSmall)} />
            Save
          </Button>

          {/* <PapperBlock
            title="User List"
            icon="ion-ios-card-outline"
            desc="User Details"
          >
            <AdvTableDemo />
          </PapperBlock> */}
        </PapperBlock>
      </form>
    </div>
  );
        }
createSubAdmin.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(createSubAdmin);
