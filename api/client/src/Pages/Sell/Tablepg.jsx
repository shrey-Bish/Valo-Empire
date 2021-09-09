import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterListIcon from "@material-ui/icons/FilterList";
import { rows, headCells } from "./data";
import {
  Button,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import { radianiteP, valorantP } from "../../Assets/icons";
import axios from "axios";


function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}



function EnhancedTableHead(props) {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow style={{ backgroundColor: "#D8BFD8" }}>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all desserts" }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: "1 1 100%",
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} skins selected
        </Typography>
      ) : (
        <Typography
          className={classes.title}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Skins
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "white",
    paddingBottom: theme.spacing(4),
    position: "relative",
    zIndex: "2",
  },
  margin: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(3),
      width: 150,
    },
  },
  bottomstuff: {
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginTop: theme.spacing(-1),
    marginRight: theme.spacing(15),

    [theme.breakpoints.down("md")]: {
      marginLeft: theme.spacing(3),
      marginTop: theme.spacing(2),
    },
    [theme.breakpoints.down("sm")]: {
      width: 150,
    },
  },
  submit: {
    marginLeft: theme.spacing(10),
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(5),
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(3),
      width: 150,
    },
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
}));

export default function EnhancedTable({
  display,
  Name,
  DisplayName,
  email,
  Contact,
  Discord,
  State,
}) {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("Collection");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [price, setPrice] = React.useState(0);
  const [Radianite, setRadianite] = React.useState(0);
  const [ValorantP, setValorantP] = React.useState(0);
  const [rank, setrank] = React.useState("");

  const handleSubmit = async (e) => {
    const ffffffffffff = selected.map((eachoneS) => (eachoneS.name = "image"));
    console.log(ffffffffffff, "segesgeg");
    // console.log(selected, "gegg");
    e.preventDefault();
    try {
      const res = await axios.post(`/account/${DisplayName}`, {
        Radianite,
        selected,
        ValorantP,
        rank,
        price,
      });
      // console.log("erororrrr111");
      res.data && window.location.replace("/buy");
    } catch (err) {
      console.log(err, "aefeef");
    }
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <>
      {!display ? (
        <div className={classes.root}>
          <Paper className={classes.paper}>
            <EnhancedTableToolbar numSelected={selected.length} />
            <TableContainer>
              <Table
                className={classes.table}
                aria-labelledby="tableTitle"
                size={dense ? "small" : "medium"}
                aria-label="enhanced table"
              >
                <EnhancedTableHead
                  classes={classes}
                  numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  onSelectAllClick={handleSelectAllClick}
                  onRequestSort={handleRequestSort}
                  rowCount={rows.length}
                />
                <TableBody>
                  {stableSort(rows, getComparator(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      const isItemSelected = isSelected(row);
                      const labelId = `enhanced-table-checkbox-${index}`;

                      return (
                        <TableRow
                          hover
                          onClick={(event) => handleClick(event, row)}
                          role="checkbox"
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={row}
                          selected={isItemSelected}
                        >
                          <TableCell padding="checkbox">
                            <Checkbox
                              checked={isItemSelected}
                              inputProps={{ "aria-labelledby": labelId }}
                            />
                          </TableCell>
                          <TableCell
                            component="th"
                            id={labelId}
                            scope="row"
                            padding="none"
                          >
                            <img src={row.name} alt=""></img>
                          </TableCell>
                          <TableCell align="left">{row.Collection}</TableCell>
                          <TableCell align="left">{row.Weapon}</TableCell>
                          <TableCell align="left">{row.Source}</TableCell>
                        </TableRow>
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 20, 30]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
          <FormControlLabel
            control={<Switch checked={dense} onChange={handleChangeDense} />}
            label="Dense padding"
          />
          <div className={classes.bottomstuff}>
            <FormControl halfWidth className={classes.margin}>
              <InputLabel htmlFor="standard-adornment-amount">
                Set Price
              </InputLabel>
              <Input
                id="standard-adornment-amount"
                value={price}
                type="number"
                style={{ height: 30 }}
                onChange={(e) => setPrice(e.target.value)}
                startAdornment={
                  <InputAdornment position="start">₹</InputAdornment>
                }
              />
            </FormControl>

            <FormControl halfWidth className={classes.margin}>
              <InputLabel htmlFor="standard-adornment-amount">
                Radianite Points
              </InputLabel>
              <Input
                id="standard-adornment-amount"
                value={Radianite}
                type="number"
                style={{ height: 30 }}
                onChange={(e) => setRadianite(e.target.value)}
                startAdornment={
                  <InputAdornment position="start">
                    <img src={radianiteP} alt=""></img>
                  </InputAdornment>
                }
              />
            </FormControl>

            <FormControl halfWidth className={classes.margin}>
              <InputLabel htmlFor="standard-adornment-amount">
                Valorant Points
              </InputLabel>
              <Input
                id="standard-adornment-amount"
                value={ValorantP}
                style={{ height: 30 }}
                type="number"
                onChange={(e) => setValorantP(e.target.value)}
                startAdornment={
                  <InputAdornment position="start">
                    <img src={valorantP} alt=""></img>
                  </InputAdornment>
                }
              />
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Rank</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={rank}
                style={{ height: 40 }}
                onChange={(e) => setrank(e.target.value)}
              >
                <MenuItem value="Unranked">Unranked</MenuItem>
                <MenuItem value="Iron 1">Iron 1</MenuItem>
                <MenuItem value="Iron 2">Iron 2</MenuItem>
                <MenuItem value="Iron 3">Iron 3</MenuItem>
                <MenuItem value="Bronze 1">Bronze 1</MenuItem>
                <MenuItem value="Bronze 2">Bronze 2</MenuItem>
                <MenuItem value="Bronze 3">Bronze 3</MenuItem>
                <MenuItem value="Silver 1">Silver 1</MenuItem>
                <MenuItem value="Silver 2">Silver 2</MenuItem>
                <MenuItem value="Silver 3">Silver 3</MenuItem>
                <MenuItem value="Gold 1">Gold 1</MenuItem>
                <MenuItem value="Gold 2">Gold 2</MenuItem>
                <MenuItem value="Gold 3">Gold 3</MenuItem>
                <MenuItem value="Platinum 1">Platinum 1</MenuItem>
                <MenuItem value="Platinum 2">Platinum 2</MenuItem>
                <MenuItem value="Platinum 3">Platinum 3</MenuItem>
                <MenuItem value="Diamond 1">Diamond 1</MenuItem>
                <MenuItem value="Diamond 2">Diamond 2</MenuItem>
                <MenuItem value="Diamond 3">Diamond 3</MenuItem>
                <MenuItem value="Immortal1">Immortal1</MenuItem>
                <MenuItem value="Immortal2">Immortal2</MenuItem>
                <MenuItem value="Immortal3">Immortal3</MenuItem>
                <MenuItem value="Radiant">Radiant </MenuItem>
              </Select>
            </FormControl>

            {price &&
            selected.length !== 0 &&
            Radianite &&
            ValorantP &&
            rank ? (
              <Button
                type="submit"
                halfWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleSubmit}
              >
                Submit for Listing
              </Button>
            ) : (
              <Button
                type="submit"
                disabled
                halfWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Submit for Listing
              </Button>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
