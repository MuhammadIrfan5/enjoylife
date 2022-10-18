import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { withStyles } from '@material-ui/core/styles';
// import { SourceReader, PapperBlock } from 'dan-components';
import { PapperBlock } from 'dan-components';

// import { AdvTableDemo, AdvFilter } from './demos';
import { AdvFilter } from './demos';

const styles = {
  root: {
    flexGrow: 1,
  },
};

function AdvancedTable(props) {
  const title = brand.name + ' - Table';
  const description = brand.desc;
  // const docSrc = "containers/Tables/demos/";
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
      {/* <PapperBlock whiteBg icon="ion-ios-clipboard-outline" title="Basic Data Table" desc="This is default example from Material UI. It Demonstrates the use of Checkbox and clickable rows for selection, with a custom Toolbar. It uses the TableSortLabel component to help style column headings.">
        <div>
          <AdvTableDemo />
          <SourceReader componentName={docSrc + 'AdvTableDemo.js'} />
        </div>
      </PapperBlock> */}
      <PapperBlock
        whiteBg
        icon="ion-ios-clipboard-outline"
        title={props.tbl_title}
        desc=""
      >
        <div>
          <AdvFilter tbl_title={props.tbl_title} />
          {/* <SourceReader componentName={docSrc + "AdvFilter.js"} /> */}
        </div>
      </PapperBlock>
    </div>
  );
}

export default withStyles(styles)(AdvancedTable);
