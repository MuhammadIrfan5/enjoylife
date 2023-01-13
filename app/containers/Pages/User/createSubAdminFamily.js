import React, { useState, Fragment, useEffect, } from "react";

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
import { AdvancedTable } from "../../pageListAsync";
import { ToastContainer, toast } from "react-toastify";
import { apiActiveURL } from "../../../ApiBaseURL";
import { getUsers } from "../../../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import advAddFamilyUserFilter from "../../Tables/demos/advAddFamilyUserFilter";
import AdvAddFamilyUserFilter from "../../Tables/demos/advAddFamilyUserFilter";

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

function createSubAdminFamily(props) {
  const title = brand.name + " - Blank Page";
  const description = brand.desc;
  const [familyName, setFamilyName] = useState("");
  const [rows,setRows] = useState({});
  const [familyData, setFamilyData] = useState();
  const { classes } = props;

  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const userData = useSelector((state) => {
    console.log(state._root.nodes[4].entry[1].data, "userData");
    return state._root.nodes[4].entry[1].data;
  });

  const userError = useSelector((state) => {
    console.log(state._root.nodes[4].entry[1].error, "loginError");
    return state._root.nodes[4].entry[1].error;
  });

  useEffect(() => {
    if (userData) {
      console.log(userData.status.toString(), "if useEffect login data");

      // history.push("/dashboard");

      if (userData.status.toString() == "true") {
        // setAuthLoading(false);
        console.log("true");
        // toast.success(" Admin Login Successfully!", {
        //   position: "top-center",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "colored",
        // });

        console.log("user data successssssss", userData);
        setData(userData.data);

        // const session_token = loginData.token;
        // const id = loginData._id;
        // const { name } = loginData;
        // const { email } = loginData;
        // const { phone } = loginData;
        // const data = [session_token, id, name, email, phone];
        // localStorage.setItem('SessionData', JSON.stringify(data));
        // setAdminEmail('');
        // setPassword('');
        // history.push('/dashboard');
        // dispatch(resetloginAdmin());
      } else if (userData.status.toString() !== true) {
        // setAuthLoading(false);
        console.log("false");
        // setErrMsg(true);
        // dispatch(resetloginAdmin());
      }
    } else if (userError) {
      // setAuthLoading(false);
      // setErrMsg(true);
      console.log(userError, "if useEffect error");
    } else {
      console.log(userData, "else useEffect login data");
      // setAuthLoading(false);
      // toast.error("Something Went Wrong", {
      //   position: "top-center",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "colored",
      // });
      // dispatch(resetloginAdmin());
    }

    // return () => {
    //   dispatch(resetloginAdmin());
    // };
  }, [userData, userError]);

  const handleSelectRowsData = (item) => {
    
    // setRows(item);
    console.log(item, "main page data ")
    // setRows(data);
    // setMessage(message);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("indexs =>",indexes);
    const SessionData = JSON.parse(localStorage.getItem("SessionData"));
  
    console.log(
      familyName,
      SessionData[0],
      "Family Create"
    );

    // return;
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${SessionData[0]}`);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      name: familyName
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${apiActiveURL}be/api/v1/dashboard/create/familys`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result, "success");
        if (result.status.toString() == "true") {          
          // `${result.msg}`
          toast.success("Family Created Successfully", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }else{
          toast.error("Family not created", {
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
        // error
        toast.error("I am in catch", {
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

  //   const handleImage = (e) => {
  //     console.log(e[0], "clicked");
  //     setGiftImage(e[0]);
  //     const url = URL.createObjectURL(e[0]);
  //     setGiftUrl(url);
  //     console.log(url, "urlll");
  //   };

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
          title="Create Sub Admin Family"
          icon="ion-ios-ionitron-outline"
          desc="Create Sub Admin Family"
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
                    label="Family Name"
                    fullWidth
                    autoComplete="adminName"
                    required
                    onChange={(e) => {
                      setFamilyName(e.target.value);
                    }}
                  />
                </div>
              </Grid>
            </Grid>
          </Fragment>

          <Button
            className={classes.button}
            variant="contained"
            size="medium"
            type="submit"
          >
            <Save className={classNames(classes.leftIcon, classes.iconSmall)} />
            Save
          </Button>
          <AdvAddFamilyUserFilter pageRoute="" data={data} handleSelectRowsData={handleSelectRowsData}/>
        </PapperBlock>
      </form>

    



      {/* <form onSubmit={handleSubmit}>
        <PapperBlock
          title="Create Sub Admin Family"
          icon="ion-ios-ionitron-outline"
          desc="Add User to the Family "
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
                    label="Family Name"
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
                    label="User"
                    fullWidth
                    autoComplete="1"
                    type="email"
                    required
                    onChange={(e) => {
                      setAdminEmail(e.target.value);
                    }}
                  />
                </div>
              </Grid>
            </Grid>
          </Fragment>

          <Button
            className={classes.button}
            onClick={createAdmin}
            variant="contained"
            size="medium"
            type="submit"
          >
            <Save className={classNames(classes.leftIcon, classes.iconSmall)} />
            Save
          </Button>
        </PapperBlock>
      </form> */}
    </div>
  );
}
createSubAdminFamily.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(createSubAdminFamily);
