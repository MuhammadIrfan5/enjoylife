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
import { AdvancedTable } from "../../pageListAsync";
import { ToastContainer, toast } from 'react-toastify';
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

function addGifts(props) {
  const title = brand.name + " - Blank Page";
  const description = brand.desc;
  const [giftTitle, setGiftTitle] = useState("");
  const [giftNumber, setGiftNumber] = useState("");
  const [files] = useState([]);
  const [giftImage, setGiftImage] = useState([]);
  const [giftUrl, setGiftUrl] = useState();
  const { classes } = props;

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(giftTitle, "Gift");
  };

  const handleImage = (e) => {
    console.log(e[0], "clicked");
    setGiftImage(e[0]);
    const url = URL.createObjectURL(e[0]);
    setGiftUrl(url);
    console.log(url, "urlll");
  };

  const addGift = (e) => {
    e.preventDefault();
    const SessionData = JSON.parse(localStorage.getItem('SessionData'));
   
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${SessionData[0]}`);
    var formdata = new FormData();
    formdata.append("file",giftImage);
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      mode: "cors",
      redirect: 'follow'
    };

    fetch("http://34.125.246.209:3000/be/api/v1/file/admin/upload", requestOptions)
    .then(response => response.json())
    .then((result) => {
      console.log(result, 'success');
        if (result.status.toString() == 'true') {
          let imageUrl = result.link;

          const giftHeaders = new Headers();
          giftHeaders.append('Authorization', `Bearer ${SessionData[0]}`);
          giftHeaders.append("Content-Type", "application/json");

          var raw = JSON.stringify({
            "gift": giftTitle,
            "credit": giftNumber,
            "url": imageUrl
          });
          
          var giftRequestOptions = {
            method: 'POST',
            headers: giftHeaders,
            body: raw,
            redirect: 'follow'
          };
          fetch("http://34.125.246.209:3000/be/api/v1/dashboard/gift/add", giftRequestOptions)
            .then(response => response.json())
            .then((result) => {
              console.log(result, 'gift success');
              toast.success(`${result.msg}`, {
                  position: 'top-center',
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: 'colored',
                });
            }).catch((error) => {
              toast.error(error, {
                  position: 'top-center',
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: 'colored',
                });
            });
        } else {
          // `${result.msg}`
            toast.error('I am here', {
                position: 'top-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
              });
        }
  })
  .catch((error) => {
    // error
    toast.error('I am in catch', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
  });

  }


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
          title="Add Gift"
          icon="ion-ios-ionitron-outline"
          desc="Add Gift Details"
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
                    id="giftTitle"
                    name="giftTitle"
                    label="Gift Title"
                    fullWidth
                    autoComplete="Title"
                    onChange={(e) => {
                      setGiftTitle(e.target.value);
                    }}
                  />
                  {/* <InputLabel htmlFor="noGifts">Number of Diamonds</InputLabel>
                      <Input id="noGifts"  onChange={handleChange} /> */}
                </div>
                <div className={classes.container}>
                  <TextField
                    required
                    id="noGifts"
                    name="noGifts"
                    label="No of Diamonds"
                    fullWidth
                    autoComplete="1"
                    type="number"
                    onChange={(e) => {
                      setGiftNumber(e.target.value);
                    }}
                  />
                  {/* <InputLabel htmlFor="noGifts">Number of Diamonds</InputLabel>
                      <Input id="noGifts"  /> */}
                </div>
              </Grid>
            </Grid>
          </Fragment>
          <Typography variant="button" className={classes.divider}>
            Gift Image
          </Typography>
          <Fragment>
            <div>
              <MaterialDropZone
                // acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
                files={files}
                showPreviews
                maxSize={5000000000}
                filesLimit={5}
                text="Drag and drop image(s) here or click"
                onDrop={handleImage}
              />
              <Fragment>
                <img src={giftUrl} />
              </Fragment>
            </div>
          </Fragment>
          

          <Button className={classes.button} onClick={addGift} variant="contained" size="medium">
            <Save className={classNames(classes.leftIcon, classes.iconSmall)} />
            Save
          </Button>
        </PapperBlock>
      </form>
      {/* <PapperBlock
        title="Gifts List"
        icon="ion-ios-card-outline"
        desc="Gifts Details"
      >
        <AdvancedTable tbl_title="Gifts List" /> 
        <AdvFilter  />
      </PapperBlock> */}
    </div>
  );
}
addGifts.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(addGifts);
