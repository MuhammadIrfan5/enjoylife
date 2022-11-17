import React, { useState, Fragment, useCallback, useEffect } from "react";
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
import TextField from "@material-ui/core/TextField";
// import FormHelperText from '@material-ui/core/FormHelperText';
// import { MaterialDropZone } from 'dan-components';
import Save from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import AdvFilter from "../../Tables/demos/AdvFilter";
import { AdvancedTable } from "../../pageListAsync";
import MaterialDropZone from "../../../components/Forms/MaterialDropZone";
import {
  postBanner,
  resetAddBanner,
} from "../../../redux/actions/addBannerActions";

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

function addBanner(props) {
  // const loginData = useSelector((state) => {
  //   console.log(state._root.nodes[7].entry[1].data, "loginData");
  //   return state._root.nodes[7].entry[1].data;
  // });

  // const loginError = useSelector((state) => {
  //   console.log(state._root.nodes[7].entry[1].error, "loginError");
  //   return state._root.nodes[7].entry[1].error;
  // });
  const bannerData = useSelector((state) => {
    console.log(state._root.nodes[5].entry[1].data, "bannerData");
    return state._root.nodes[5].entry[1].data;
  });

  const bannerError = useSelector((state) => {
    console.log(state._root.nodes[5].entry[1].error, "bannerError");
    return state._root.nodes[5].entry[1].error;
  });

  const title = brand.name + " - Blank Page";
  const description = brand.desc;
  //   const [name, setName] = useState('Title');
  const [bannerTitle, setBannerTitle] = useState("");
  const [bannerImage, setBannerImage] = useState([]);
  const [bannerUrl, setBannerUrl] = useState();
  const [authLoading, setAuthLoading] = useState(false);
  const [files] = useState([]);
  const { classes } = props;

  const dispatch = useDispatch();

  useEffect(
    () => () => {
      dispatch(resetAddBanner());
    },
    []
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    e.preventDefault();
    const data = {
      bannerTitle,
      bannerImage,
    };
    console.warn(data, "Banner page data");
    dispatch(postBanner(data));
    setAuthLoading(true);
  };

  // const handleImage = useCallback(
  //   (event) => {
  //     console.log("You clicked ", event);
  //     setBannerImage(event);
  //   },
  //   [props]
  // );

  const handleImage = (e) => {
    console.log(e[0], "clicked");
    setBannerImage(e);
    const url = URL.createObjectURL(e[0]);
    setBannerUrl(url);
    console.log(url, "urlll");
  };

  useEffect(() => {
    if (bannerData) {
      console.log(bannerData.status.toString(), "if useEffect login data");

      // history.push("/dashboard");

      if (bannerData.status.toString() == "true") {
        setAuthLoading(false);
        console.log("true");
        toast.success(" Banner Added  Successfully!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

        console.warn("banner successssssss", bannerData);

        // setAdminEmail("");
        // setPassword("");
        // history.push("/dashboard");
        dispatch(resetAddBanner());
      } else if (bannerData.status.toString() !== true) {
        setAuthLoading(false);
        console.log("false");

        toast.error("Something went Wrong!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        // setErrMsg(true);
        dispatch(resetAddBanner());
      }
    } else if (bannerError) {
      setAuthLoading(false);
      // setErrMsg(true);
      console.log(bannerError, "if useEffect error");
      toast.error("Something went Wrong!", {
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
      console.log(bannerData, "else useEffect login data");
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
      dispatch(resetAddBanner());
    }

    // return () => {
    //   dispatch(resetloginAdmin());
    // };
  }, [bannerData, bannerError]);
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
        title="Add Banner"
        icon="ion-ios-card-outline"
        desc="Add Banner Details"
      >
        <form onSubmit={handleSubmit}>
          <Fragment>
            <Grid
              container
              alignItems="flex-start"
              justify="flex-start"
              direction="row"
              spacing={3}
            >
              <Grid item md={6} sm={12} className={classes.demo}>
                <Typography variant="button" className={classes.divider}>
                  Banner Title
                </Typography>
                <div className={classes.container}>
                  <TextField
                    required
                    id="bannerTitle"
                    name="bannerTitle"
                    label="Banner Title"
                    fullWidth
                    autoComplete="Title"
                    onChange={(e) => {
                      setBannerTitle(e.target.value);
                    }}
                  />
                </div>
              </Grid>
            </Grid>
          </Fragment>
          <Typography variant="button" className={classes.divider}>
            Banner Image
          </Typography>
          <Fragment>
            <div>
              <MaterialDropZone
                acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
                files={files}
                showPreviews
                maxSize={5000000}
                filesLimit={1}
                text="Drag and drop image(s) here or click"
                onDrop={handleImage}
              />
              <Fragment>
                <img src={bannerUrl} />
              </Fragment>
            </div>
          </Fragment>

          <Button
            className={classes.button}
            variant="contained"
            size="small"
            type="submit"
          >
            <Save className={classNames(classes.leftIcon, classes.iconSmall)} />
            {authLoading ? <>Loading....</> : <>Add Banner</>}
          </Button>
        </form>
      </PapperBlock>
      <PapperBlock
        title="Banners List"
        icon="ion-ios-card-outline"
        desc="Banner Details"
      >
        {/* <AdvancedTable tbl_title="Banner List" /> */}
        {/* <AdvFilter /> */}
      </PapperBlock>
    </div>
  );
}

addBanner.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(addBanner);
