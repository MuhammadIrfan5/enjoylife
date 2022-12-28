import React, { useState, Fragment } from "react";
import { Helmet } from "react-helmet";
import brand from "dan-api/dummy/brand";
import { PapperBlock } from "dan-components";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Save from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
import classNames from "classnames";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ToastContainer, toast } from "react-toastify";
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
  }
});


function addPrivacyPolicy(props) {
  const title = brand.name + " - Blank Page";
  const description = brand.desc;
  const { classes } = props;
  const [policyData, setpolicyData] = useState("");
  const addPolicyClick = (e) => {
    console.log("bilal => ",policyData);
    e.preventDefault();
    const SessionData = JSON.parse(localStorage.getItem('SessionData'));
   console.log('session data =>', SessionData);
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${SessionData[0]}`);
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    var urlencoded = new URLSearchParams();
    var formdata = new FormData();
    urlencoded.append("data",policyData);
    urlencoded.append("name", "privacyPolicy")

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      mode: "cors",
      redirect: 'follow'
    };

    fetch("http://34.125.246.209:3000/be/api/v1/staticContent", requestOptions)
    .then(response => response.json())
    .then((result) => {
      console.log(result, 'success');
        if (result.status.toString() == 'true') {
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
        } else {
          // `${result.msg}`
            toast.error(`${result.msg}`, {
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
      <form onSubmit={addPolicyClick}>
        <PapperBlock
          title="Add Privacy Policy"
          icon="ion-ios-ionitron-outline"
          desc="Add Privacy Policy Details"
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
                    <CKEditor
                        editor={ ClassicEditor }
                        data="<p>Privacy Policy</p>"
                        onInit={ editor => {
                            editor.ui.view.editable.editableElement.style.height = '600px';
                        }}
                        onReady={ editor => {
                            // You can store the "editor" and use when it is needed.
                            // console.log( 'Editor is ready to use!', editor );
                        } }
                        onChange={ ( event, editor ) => {
                            const data = editor.getData();                          
                            setpolicyData(editor.getData());                          
                            // console.log( { event, editor, data } );
                        } }
                        onBlur={ ( event, editor ) => {
                            // console.log( 'Blur.', editor );
                        } }
                        onFocus={ ( event, editor ) => {
                            // console.log( 'Focus.', editor );
                        } }
                    />
                </div>
              </Grid>
            </Grid>
          </Fragment>
          <Button className={classes.button} variant="contained" size="medium" type="submit">
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
addPrivacyPolicy.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(addPrivacyPolicy);
