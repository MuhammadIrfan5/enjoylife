import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
// import { PapperBlock } from 'dan-components';
import { AdvancedTable } from '../../pageListAsync';
import AdvFilter from '../../Tables/demos/AdvFilter';
import { PapperBlock } from 'dan-components';
function listUser(props) {
  const title = brand.name + ' - Blank Page';
  const description = brand.desc;
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
      {/* <PapperBlock title="Blank Page" desc="Some text description">
        List User
      </PapperBlock> */}
      {/* <AdvancedTable tbl_title="User List" /> */}
      <PapperBlock title="User List" icon="ion-ios-card-outline" desc="User Details">
           {/* <AdvancedTable tbl_title="Braodcasts List" /> */}
           <AdvFilter pageRoute="/dashboard/user/user-settings" />
    </PapperBlock>
    </div>
  );
}

export default listUser;
