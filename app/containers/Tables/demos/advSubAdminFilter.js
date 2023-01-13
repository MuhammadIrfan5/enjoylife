import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import LinearProgress from "@material-ui/core/LinearProgress";
import Chip from "@material-ui/core/Chip";
import MUIDataTable from "mui-datatables";
import { Link, useHistory } from "react-router-dom";

const styles = (theme) => ({
  table: {
    "& > div": {
      overflow: "auto",
    },
    "& table": {
      "& td": {
        wordBreak: "keep-all",
      },
      [theme.breakpoints.down("md")]: {
        "& td": {
          height: 60,
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
      },
    },
  },
});
/*
  It uses npm mui-datatables. It's easy to use, you just describe columns and data collection.
  Checkout full documentation here :
  https://github.com/gregnb/mui-datatables/blob/master/README.md
*/
function AdvFilter(props) {
  console.log("propsss", props.data);
  const familyData = props.data;
  const family = [];
  familyData
    ? familyData.map((user, index) => {
        family.push({
          id: user._id,
          key: index,
          name: user.name,
          email: user.email,
          role: user.role
        });
      })
    : null;
  console.log("users", family);

  const history = useHistory();
  const columns = [
    {
      name: "name",
      label: "Name",
      options: {
        filter: true,
      },
    },
    {
        name: "email",
        label: "Email",
        options: {
          filter: true,
        },
    },
    {
        name: "role",
        label: "Role",
        options: {
          filter: true,
        },
    }
  ];

  const handleRowClick = (rowData, rowMeta) => {
    console.log("row meta => ", rowMeta);
    console.log(rowData, "row");
    rowData.push(props.data[rowMeta.rowIndex].name);
    
    localStorage.setItem("UserData", JSON.stringify(rowData));
    history.push({
      pathname: props.pageRoute,
      state: {
        data: {
          newData: rowData,
        },
      },
    });
  };

  const options = {
    filterType: "dropdown",
    responsive: "vertical",
    print: true,
    rowsPerPage: 10,
    page: 0,
    selectableRowsHideCheckboxes:true
    // onRowClick: handleRowClick,

  };

  const { classes } = props;

  return (
    <div className={classes.table}>
      <MUIDataTable
        title={props.tbl_title}
        data={family}
        columns={columns}
        options={options}
      />
    </div>
  );
}

AdvFilter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdvFilter);
