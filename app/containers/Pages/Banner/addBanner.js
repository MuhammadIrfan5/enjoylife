import React,{useState,Fragment} from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { PapperBlock } from 'dan-components';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import { MaterialDropZone } from 'dan-components';
import MaterialDropZone from '../../../components/Forms/MaterialDropZone';
import { AdvancedTable } from '../../pageListAsync';
import Save from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import AdvFilter from '../../Tables/demos/AdvFilter';

const styles = theme => ({
  demo: {
    height: 'auto',
  },
  divider: {
    margin: `${theme.spacing(3)}px 0`,
  },
  input: {
    margin: theme.spacing(3),
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1),
  },
  inputUpload: {
    display: 'none',
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
  const title = brand.name + ' - Blank Page';
  const description = brand.desc;
//   const [name, setName] = useState('Title');
const [bannerTitle, setBannerTitle] = useState('');
const [files] = useState([]);
  const { classes } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(bannerTitle, 'Banner');
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
      <PapperBlock title="Add Banner" icon="ion-ios-card-outline" desc="Add Banner Details">
      <form onSubmit={handleSubmit}>
        <Fragment>
        <Grid
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
            >
                <Typography variant="button" className={classes.divider}>Banner Title</Typography>
                <div className={classes.container}>
                        <TextField
                            required
                            id="bannerTitle"
                            name="bannerTitle"
                            label="Banner Title"
                            fullWidth
                            autoComplete="Title"
                    />
                </div>
            </Grid>
        </Grid>
        </Fragment>
        <Typography variant="button" className={classes.divider}>Banner Image</Typography>
            <Fragment>
                <div>
                    <MaterialDropZone
                    acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
                    files={files}
                    showPreviews
                    maxSize={5000000}
                    filesLimit={5}
                    text="Drag and drop image(s) here or click"
                    />
                </div>
            </Fragment>

        <Button className={classes.button} variant="contained" size="small">
            <Save className={classNames(classes.leftIcon, classes.iconSmall)} />
                Save
        </Button>
    </form>
    </PapperBlock>
    <PapperBlock title="Banners List" icon="ion-ios-card-outline" desc="Banner Details">
        {/* <AdvancedTable tbl_title="Banner List" /> */}
        <AdvFilter  />
    </PapperBlock>
    </div>
  );
}

addBanner.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(addBanner);
