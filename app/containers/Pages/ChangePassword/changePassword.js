import React, { useState } from "react";
import { Helmet } from "react-helmet";
import brand from "dan-api/dummy/brand";
import { PapperBlock } from "dan-components";
import { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

function changePassword() {
  const title = brand.name + " - Blank Page";
  const description = brand.desc;

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(oldPassword, newPassword, confirmPassword, "password");
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
      <PapperBlock title="Password Form" desc="Some text description">
        <form onSubmit={handleSubmit}>
          <Fragment>
            <Typography variant="h5" gutterBottom>
              Password Form
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                <Typography variant="h5" gutterBottom>
                  Old Password
                </Typography>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="Old Password"
                  fullWidth
                  autoComplete="fname"
                  // value={name}
                  // disabled
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
                  label="New Password"
                  fullWidth
                  autoComplete="fname"
                  // value={email}
                  // disabled
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
                  label="Confirm Password"
                  fullWidth
                  autoComplete="fname"
                  // value={status}
                  // disabled
                  // onChange={(e) => {
                  //   setFirstName(e.target.value);
                  // }}
                />
              </Grid>
            </Grid>
            <Grid item md={12} sm={12}>
              <Button
                variant="contained"
                color="primary"
                // value="submit"
                type="submit"
                // className={classes.button}
              >
                Update password
              </Button>
            </Grid>
          </Fragment>
        </form>
      </PapperBlock>
    </div>
  );
}

export default changePassword;
