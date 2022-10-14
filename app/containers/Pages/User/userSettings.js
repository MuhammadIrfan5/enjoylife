import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { PapperBlock } from 'dan-components';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import { Field, reduxForm } from 'redux-form/immutable';
// import MenuItem from '@material-ui/core/MenuItem';
// import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Typography from "@material-ui/core/Typography";
import { Fragment } from 'react';
// import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
import Button from '@material-ui/core/Button';

function userSettings() {
  const title = brand.name + ' - Blank Page';
  const description = brand.desc;
  const [firstname, setFirstName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstname, 'name');
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
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First name"
                  fullWidth
                  autoComplete="fname"
                  value={firstname}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </Grid>
              {/* <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last name"
                  fullWidth
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="address1"
                  name="address1"
                  label="Address line 1"
                  fullWidth
                  autoComplete="billing address-line1"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="addiress2"
                  name="addiress2"
                  label="Address line 2"
                  fullWidth
                  autoComplete="billing address-line2"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="city"
                  name="city"
                  label="City"
                  fullWidth
                  autoComplete="billing address-level2"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="state"
                  name="state"
                  label="State/Province/Region"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="zip"
                  name="zip"
                  label="Zip / Postal code"
                  fullWidth
                  autoComplete="billing postal-code"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="country"
                  name="country"
                  label="Country"
                  fullWidth
                  autoComplete="billing country"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="secondary"
                      name="saveAddress"
                      value="yes"
                    />
                  }
                  label="Use this address for payment details"
                />
              </Grid> */}
            </Grid>
          </Fragment>
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            // disabled={submitting}
          >
            Submit
          </Button>
        </form>
      </PapperBlock>
    </div>
  );
}

export default userSettings;
