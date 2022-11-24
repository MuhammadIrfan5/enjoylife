import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import dummy from 'dan-api/dummy/dummyContents';
import imgApi from 'dan-api/images/photos';
import {
  GeneralCard,
  NewsCard,
  Quote,
  IdentityCard
} from '../../../../components';
import { findLastIndex } from 'lodash';

const styles = theme => ({
  divider: {
    display: 'block',
    margin: `${theme.spacing(3)}px 0`,
  },
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  cardMedia: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  }
});

function PromotionCard(props) {
  const { classes,data } = props;
  // const bull = <span className={classes.bullet}>•</span>;
console.log("Banners here ==> ",data )

  return (
    <Grid
      container
      alignItems="flex-start"
      justify="flex-start"
      direction="row"
      spacing={2}
    >

      {data.map((promotion) => (
          <Grid item md={6}>
          {/* <Typography variant="button" className={classes.divider}>Media</Typography> */}
          <div>
            <NewsCard
              image={promotion.image_url}
              title={promotion.name}
            >
              <Typography gutterBottom variant="h5" component="h2">
                {promotion.name}
              </Typography>
              {/* <Typography component="p">
                Aliquam venenatis magna et odio lobortis maximus. Nullam in tortor ligula. Proin maximus risus nunc
              </Typography> */}
            </NewsCard>
          </div>
        </Grid>
      ))}
      
      {/* <Grid item md={6}>
        <div>
          <NewsCard
            image={imgApi[8]}
            title="Contemplative Reptile"
          >
            <Typography gutterBottom variant="h5" component="h2">
              Lorem ipsum
            </Typography>
            <Typography component="p">
              Aliquam venenatis magna et odio lobortis maximus. Nullam in tortor ligula. Proin maximus risus nunc
            </Typography>
          </NewsCard>
        </div>
      </Grid> */}

    </Grid>
  );
}

PromotionCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PromotionCard);
