import React,{useState,Fragment} from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { PapperBlock,CounterIconsWidget } from 'dan-components';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ReactPlayer from 'react-player'
import AdvFilter from '../../Tables/demos/AdvFilter';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
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
  button: {
    margin: theme.spacing(1),
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

function viewBroadcast(props) {
  const title = brand.name + ' - Blank Page';
  const description = brand.desc;
  const { classes } = props;

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
      {/* <Grid
              container
              alignItems="flex-start"
              justify="flex-start"
              direction="row"
              spacing={3}
          >
              <Grid
              item
              md={6}
              sm={12}
              className={classes.demo}
              > */}
              <PapperBlock title="Live Braodcasting" icon="ion-ios-videocam" desc="Live Broadcasting">
                    <Button className={classes.button} variant="contained" color="primary">
                        Block
                        <Icon className={classes.rightIcon}>send</Icon>
                    </Button>
                    <Button className={classes.button} variant="contained" color="primary">
                        Unblock
                        <Icon className={classes.rightIcon}>send</Icon>
                    </Button>
                <div className={classes.container}>
                    {/* <CounterIconsWidget titleOne="Live Broadcasts" titleTwo="Total Blocked Broadcasts" titleThree="Total Active Broadcasts" titleFour="Total Active Users"/> */}
                    {/* <div className='player-wrapper'> */}
                        <ReactPlayer
                        className='react-player'
                        url='https://www.youtube.com/watch?v=t3sObLKyGWI&t=406s'
                        width='100%'
                        height='500px'
                        />
                    {/* </div> */}

                </div>
            </PapperBlock>
            {/* </Grid>
      </Grid> */}
    {/* <PapperBlock title="View Broadcast" icon="ion-ios-card-outline" desc="Braodcast Details">
           <AdvFilter pageRoute="/app/broadcasts/view-broadcast" />
    </PapperBlock> */}

    </div>
  );
}
viewBroadcast.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(viewBroadcast);