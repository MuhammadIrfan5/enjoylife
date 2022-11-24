import React, { useState } from "react";
import { Helmet } from "react-helmet";
import brand from "dan-api/dummy/brand";
import { PapperBlock } from "dan-components";
import { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { withStyles } from '@material-ui/core/styles';
import swal from 'sweetalert';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink, Link, useHistory } from 'react-router-dom';
const styles = theme => ({
  demo: {
    height: 'auto',
  },
  divider: {
    margin: `${theme.spacing(3)}px 0`,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin:{
    marginTop:"20px",
  }
});

function changePassword(props) {
  const { classes } = props;
  const title = brand.name + " - Blank Page";
  const description = brand.desc;
  const history = useHistory();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(oldPassword, newPassword, confirmPassword, "password");
  };


  const handleChangePassword = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const SessionData = JSON.parse(localStorage.getItem('SessionData'));
    // const data = {
    //   userId,
    // };
    // dispatch(blockUser(data));

    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${SessionData[0]}`);
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      "oldPassword": oldPassword,
      "newPassword": newPassword
    });
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    const response = await fetch(
      `http://34.125.246.209:3000/be/api/v1/dashboard/change-password`,
      // ${userId}
      requestOptions
    )
      .then((response) => response.json())
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
          setIsLoading(false);
          localStorage.clear();
          setTimeout( () => {
            history.push('/');
          },2000)
        } else {
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
          setIsLoading(false);
        }
      })
      .catch((error) => {
        toast.error('Something Went Wrong', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
        console.log('error', error);
        setIsLoading(false);
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

      <PapperBlock title="Password Form" desc="Change Your password from here">
        <form onSubmit={handleChangePassword}>
          <Fragment>
            <Typography variant="h5" gutterBottom>
              Password Form
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={4} sm={4}>
                {/* <Typography variant="h5" gutterBottom>
                  Old Password
                </Typography> */}
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="Old Password"
                  type="password"
                  fullWidth
                  autoComplete="old_passworf"
                  onChange={(e) => {
                    setOldPassword(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={4} sm={4}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="New Password"
                  fullWidth
                  type="password"
                  autoComplete="new_password"
                  onChange={(e) => {
                    setNewPassword(e.target.value);
                  }}
                />
              </Grid>
            </Grid>
            <Grid item md={4} sm={4}>
              <div className="fluid-container mt-10">
                <Button
                  variant="contained"
                  color="primary"
                  // value="submit"
                  // onClick={onClickButton}
                  type="submit"
                  className={classes.margin}
                >
                  {isLoading ? <>Loading ... </> : <>Update Password</>}
                </Button>
              </div>
            </Grid>
          </Fragment>
        </form>
      </PapperBlock>
    </div>
  );
}

// export default changePassword;

changePassword.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(changePassword);