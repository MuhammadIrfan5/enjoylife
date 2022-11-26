import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import datas from 'dan-api/apps/connectionData';
import ProfileCard from '../CardPaper/ProfileCard';
import styles from './profile-jss';

function Connection(props) {
  const { classes, data } = props;
  return (
    <Grid
      container
      alignItems="flex-start"
      justify="space-between"
      direction="row"
      spacing={2}
      className={classes.rootx}
    >
      {
        data.map((data, index) => (
          <Grid item md={4} sm={6} xs={12} key={index.toString()}>
            <ProfileCard
              cover={data.user.photo}
              avatar=""
              name={data.user.name}
              title={data.is_vip == true ? "VIP User" : "Normal User"}
              connection={data.user.stars}
              isVerified=""
              btnText="See Broadcast"
            />
          </Grid>
        ))
      }
    </Grid>
  );
}

Connection.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Connection);
