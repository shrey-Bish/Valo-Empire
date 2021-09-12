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
import MuiAlert from "@material-ui/lab/Alert";
import {
  Button,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
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

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
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
  value,
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
  const [open, setOpen] = React.useState(false);
  // const [activeStep1, setActiveStep1] = React.useState(activeStep);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleSubmit = async (e) => {

    const ffffffffffff = selected.forEach((eachoneS) => {
        if(eachoneS.Collection === 'Aristocrat'&& eachoneS.Weapon==='Vandal'){
  eachoneS.name="v1"
        }else if(eachoneS.Collection === 'Avalanche'&& eachoneS.Weapon==='Vandal'){
          eachoneS.name="v2"
        }else if(eachoneS.Collection === 'Cavalier'&& eachoneS.Weapon==='Vandal'){
          eachoneS.name="v3"
        }else if(eachoneS.Collection === 'Depths'&& eachoneS.Weapon==='Vandal'){
          eachoneS.name="v4"
        }else if(eachoneS.Collection === 'DOT EXE'&& eachoneS.Weapon==='Vandal'){
          eachoneS.name="v5"
        }else if(eachoneS.Collection === 'Ego'&& eachoneS.Weapon==='Vandal'){
          eachoneS.name="v6"
        }else if(eachoneS.Collection === 'Elderflame'&& eachoneS.Weapon==='Vandal'){
          eachoneS.name="v7"
        }else if(eachoneS.Collection === 'Forsaken'&& eachoneS.Weapon==='Vandal'){
          eachoneS.name="v8"
        }
        else if(eachoneS.Collection === 'Glitchpop'&& eachoneS.Weapon==='Vandal'){
          eachoneS.name="v9"
        }else if(eachoneS.Collection === 'Hivemind'&& eachoneS.Weapon==='Vandal'){
          eachoneS.name="v10"
        }else if(eachoneS.Collection === 'Horizon'&& eachoneS.Weapon==='Vandal'){
          eachoneS.name="v11"
        }else if(eachoneS.Collection === 'K/TAC'&& eachoneS.Weapon==='Vandal'){
          eachoneS.name="v12"
        }else if(eachoneS.Collection === 'Luxe'&& eachoneS.Weapon==='Vandal'){
          eachoneS.name="v13"
        }else if(eachoneS.Collection === 'Origin'&& eachoneS.Weapon==='Vandal'){
          eachoneS.name="v14"
        }else if(eachoneS.Collection === 'Prime'&& eachoneS.Weapon==='Vandal'){
          eachoneS.name="v15"
        }else if(eachoneS.Collection === 'Prism II'&& eachoneS.Weapon==='Vandal'){
          eachoneS.name="v16"
        }
        else if(eachoneS.Collection === 'Reaver'&& eachoneS.Weapon==='Vandal'){
          eachoneS.name="v17"
        }else if(eachoneS.Collection === 'Ruin'&& eachoneS.Weapon==='Vandal'){
          eachoneS.name="v18"
        }else if(eachoneS.Collection === 'Sakura'&& eachoneS.Weapon==='Vandal'){
          eachoneS.name="v19"
        }else if(eachoneS.Collection === 'Sensation'&& eachoneS.Weapon==='Vandal'){
          eachoneS.name="v20"
        }else if(eachoneS.Collection === 'Sentinels of Light'&& eachoneS.Weapon==='Vandal'){
          eachoneS.name="v21"
        }else if(eachoneS.Collection === 'Silvanus'&& eachoneS.Weapon==='Vandal'){
          eachoneS.name="v22"
        }else if(eachoneS.Collection === 'Tethered Realms'&& eachoneS.Weapon==='Vandal'){
          eachoneS.name="v23"
        }else if(eachoneS.Collection === 'Wasteland'&& eachoneS.Weapon==='Vandal'){
          eachoneS.name="v24"
        }else if(eachoneS.Collection === 'Winterwunderland'&& eachoneS.Weapon==='Vandal'){
          eachoneS.name="v25"
        }else if(eachoneS.Collection === 'Nitro'&& eachoneS.Weapon==='Vandal'){
          eachoneS.name="v26"
        }

else if(eachoneS.Collection === 'Avalanche'&& eachoneS.Weapon==='Phantom'){
          eachoneS.name="p1"
        }else if(eachoneS.Collection === 'BlastX'&& eachoneS.Weapon==='Phantom'){
          eachoneS.name="p2"
        }
else if(eachoneS.Collection === 'Celestial'&& eachoneS.Weapon==='Phantom'){
          eachoneS.name="p3"
        }
else if(eachoneS.Collection === 'Galleria'&& eachoneS.Weapon==='Phantom'){
          eachoneS.name="p4"
        }
else if(eachoneS.Collection === 'Glitchpop'&& eachoneS.Weapon==='Phantom'){
          eachoneS.name="p5"
        }
else if(eachoneS.Collection === 'Infinity'&& eachoneS.Weapon==='Phantom'){
          eachoneS.name="p6"
        }
else if(eachoneS.Collection === 'Ion'&& eachoneS.Weapon==='Phantom'){
          eachoneS.name="p7"
        }
else if(eachoneS.Collection === 'Kingdom'&& eachoneS.Weapon==='Phantom'){
          eachoneS.name="p8"
        }
else if(eachoneS.Collection === 'Lightwave'&& eachoneS.Weapon==='Phantom'){
          eachoneS.name="p9"
        }
else if(eachoneS.Collection === 'Minima'&& eachoneS.Weapon==='Phantom'){
          eachoneS.name="p10"
        }
else if(eachoneS.Collection === 'Nebula'&& eachoneS.Weapon==='Phantom'){
          eachoneS.name="p11"
        }
else if(eachoneS.Collection === 'Oni'&& eachoneS.Weapon==='Phantom'){
          eachoneS.name="p12"
        }
else if(eachoneS.Collection === 'Prime//2.0'&& eachoneS.Weapon==='Phantom'){
          eachoneS.name="p13"
        }
else if(eachoneS.Collection === 'Prism'&& eachoneS.Weapon==='Phantom'){
          eachoneS.name="p14"
        }
else if(eachoneS.Collection === 'Recon'&& eachoneS.Weapon==='Phantom'){
          eachoneS.name="p15"
        }
else if(eachoneS.Collection === 'Ruination'&& eachoneS.Weapon==='Phantom'){
          eachoneS.name="p16"
        }
else if(eachoneS.Collection === 'Rush'&& eachoneS.Weapon==='Phantom'){
          eachoneS.name="p17"
        }
else if(eachoneS.Collection === 'Serenity'&& eachoneS.Weapon==='Phantom'){
          eachoneS.name="p18"
        }
else if(eachoneS.Collection === 'Silvanus'&& eachoneS.Weapon==='Phantom'){
          eachoneS.name="p19"
        }
else if(eachoneS.Collection === 'Singularity'&& eachoneS.Weapon==='Phantom'){
          eachoneS.name="p20"
        }
else if(eachoneS.Collection === 'Smite'&& eachoneS.Weapon==='Phantom'){
          eachoneS.name="p21"
        }
else if(eachoneS.Collection === 'Spline'&& eachoneS.Weapon==='Phantom'){
          eachoneS.name="p22"
        }
else if(eachoneS.Collection === 'VALORANT Go! Vol. 1'&& eachoneS.Weapon==='Phantom'){
          eachoneS.name="p23"
        }
else if(eachoneS.Collection === 'Winterwunderland'&& eachoneS.Weapon==='Phantom'){
          eachoneS.name="p24"
        }
else if(eachoneS.Collection === 'Artisan'&& eachoneS.Weapon==='Phantom'){
          eachoneS.name="p25"
        }
else if(eachoneS.Collection === 'Spectrum'&& eachoneS.Weapon==='Phantom'){
          eachoneS.name="p26"
        }

else if(eachoneS.Collection === 'Avalanche'&& eachoneS.Weapon==='Marshal'){
          eachoneS.name="m1"
        }
        else if(eachoneS.Collection === 'Couture'&& eachoneS.Weapon==='Marshal'){
          eachoneS.name="m2"
        }else if(eachoneS.Collection === 'Galleria'&& eachoneS.Weapon==='Marshal'){
          eachoneS.name="m3"
        }else if(eachoneS.Collection === 'Magepunk'&& eachoneS.Weapon==='Marshal'){
          eachoneS.name="m4"
        }else if(eachoneS.Collection === 'Monarch'&& eachoneS.Weapon==='Marshal'){
          eachoneS.name="m5"
        }else if(eachoneS.Collection === 'Polyfrog'&& eachoneS.Weapon==='Marshal'){
          eachoneS.name="m6"
        }else if(eachoneS.Collection === 'Ruin'&& eachoneS.Weapon==='Marshal'){
          eachoneS.name="m7"
        }else if(eachoneS.Collection === 'Songsteel'&& eachoneS.Weapon==='Marshal'){
          eachoneS.name="m8"
        }else if(eachoneS.Collection === 'Sovereign'&& eachoneS.Weapon==='Marshal'){
          eachoneS.name="m9"
        }else if(eachoneS.Collection === 'Wasteland'&& eachoneS.Weapon==='Marshal'){
          eachoneS.name="m10"
        }else if(eachoneS.Collection === 'Winterwunderland'&& eachoneS.Weapon==='Marshal'){
          eachoneS.name="m11"
        }else if(eachoneS.Collection === 'Artisan'&& eachoneS.Weapon==='Marshal'){
          eachoneS.name="m12"
        }


else if(eachoneS.Collection === 'Aerosol'&& eachoneS.Weapon==='Operator'){
          eachoneS.name="o1"
        }
        else if(eachoneS.Collection === 'Cavalier'&& eachoneS.Weapon==='Operator'){
          eachoneS.name="o2"
        }else if(eachoneS.Collection === 'Convex'&& eachoneS.Weapon==='Operator'){
          eachoneS.name="o3"
        }else if(eachoneS.Collection === 'Elderflame'&& eachoneS.Weapon==='Operator'){
          eachoneS.name="o4"
        }else if(eachoneS.Collection === 'Forsaken'&& eachoneS.Weapon==='Operator'){
          eachoneS.name="o5"
        }else if(eachoneS.Collection === 'Glitchpop'&& eachoneS.Weapon==='Operator'){
          eachoneS.name="o6"
        }else if(eachoneS.Collection === 'Gravitational Uranium Neuroblaster'&& eachoneS.Weapon==='Operator'){
          eachoneS.name="o7"
        }else if(eachoneS.Collection === 'Infantry'&& eachoneS.Weapon==='Operator'){
          eachoneS.name="o8"
        }else if(eachoneS.Collection === 'Ion'&& eachoneS.Weapon==='Operator'){
          eachoneS.name="o9"
        }else if(eachoneS.Collection === 'K/TAC'&& eachoneS.Weapon==='Operator'){
          eachoneS.name="o10"
        }else if(eachoneS.Collection === 'Luxe'&& eachoneS.Weapon==='Operator'){
          eachoneS.name="o11"
        }else if(eachoneS.Collection === 'Minima'&& eachoneS.Weapon==='Operator'){
          eachoneS.name="o12"
        }else if(eachoneS.Collection === 'Origin'&& eachoneS.Weapon==='Operator'){
          eachoneS.name="o13"
        }else if(eachoneS.Collection === 'Prism'&& eachoneS.Weapon==='Operator'){
          eachoneS.name="o14"
        }else if(eachoneS.Collection === 'Reaver'&& eachoneS.Weapon==='Operator'){
          eachoneS.name="o15"
        }else if(eachoneS.Collection === 'Red Alert'&& eachoneS.Weapon==='Operator'){
          eachoneS.name="o16"
        }else if(eachoneS.Collection === 'Sentinels of Light'&& eachoneS.Weapon==='Operator'){
          eachoneS.name="o17"
        }else if(eachoneS.Collection === 'Silvanus'&& eachoneS.Weapon==='Operator'){
          eachoneS.name="o18"
        }else if(eachoneS.Collection === 'Spline'&& eachoneS.Weapon==='Operator'){
          eachoneS.name="o19"
        }else if(eachoneS.Collection === 'Tethered Realms'&& eachoneS.Weapon==='Operator'){
          eachoneS.name="o20"
        }else if(eachoneS.Collection === 'Nitro'&& eachoneS.Weapon==='Operator'){
          eachoneS.name="o21"
        }


else if(eachoneS.Collection === 'Aerosol'&& eachoneS.Weapon==='Odin'){
          eachoneS.name="od1"
        }else if(eachoneS.Collection === 'BlastX'&& eachoneS.Weapon==='Odin'){
          eachoneS.name="od2"
        }
else if(eachoneS.Collection === 'DOT EXE'&& eachoneS.Weapon==='Odin'){
          eachoneS.name="od3"
        }
else if(eachoneS.Collection === 'Glitchpop'&& eachoneS.Weapon==='Odin'){
          eachoneS.name="od4"
        }
else if(eachoneS.Collection === 'Lightwave'&& eachoneS.Weapon==='Odin'){
          eachoneS.name="od5"
        }
else if(eachoneS.Collection === 'Prime//2.0'&& eachoneS.Weapon==='Odin'){
          eachoneS.name="od6"
        }
else if(eachoneS.Collection === 'Prism III'&& eachoneS.Weapon==='Odin'){
          eachoneS.name="od7"
        }
else if(eachoneS.Collection === 'Sensation'&& eachoneS.Weapon==='Odin'){
          eachoneS.name="od8"
        }
else if(eachoneS.Collection === 'Smite'&& eachoneS.Weapon==='Odin'){
          eachoneS.name="od9"
        }
else if(eachoneS.Collection === 'Nitro'&& eachoneS.Weapon==='Odin'){
          eachoneS.name="od10"
        }


else if(eachoneS.Collection === 'Aristocrat'&& eachoneS.Weapon==='Ares'){
          eachoneS.name="a1"
        }else if(eachoneS.Collection === 'Celestial'&& eachoneS.Weapon==='Ares'){
          eachoneS.name="a2"
        }else if(eachoneS.Collection === 'Hivemind'&& eachoneS.Weapon==='Ares'){
          eachoneS.name="a3"
        }else if(eachoneS.Collection === 'Infantry'&& eachoneS.Weapon==='Ares'){
          eachoneS.name="a4"
        }else if(eachoneS.Collection === 'Jigsaw'&& eachoneS.Weapon==='Ares'){
          eachoneS.name="a5"
        }else if(eachoneS.Collection === 'Minima'&& eachoneS.Weapon==='Ares'){
          eachoneS.name="a6"
        }else if(eachoneS.Collection === 'Nebula'&& eachoneS.Weapon==='Ares'){
          eachoneS.name="a7"
        }else if(eachoneS.Collection === 'Outpost'&& eachoneS.Weapon==='Ares'){
          eachoneS.name="a8"
        }else if(eachoneS.Collection === 'Polyfrog'&& eachoneS.Weapon==='Ares'){
          eachoneS.name="a9"
        }else if(eachoneS.Collection === 'Prism'&& eachoneS.Weapon==='Ares'){
          eachoneS.name="a10"
        }else if(eachoneS.Collection === 'Rush'&& eachoneS.Weapon==='Ares'){
          eachoneS.name="a11"
        }else if(eachoneS.Collection === 'Sakura'&& eachoneS.Weapon==='Ares'){
          eachoneS.name="a12"
        }else if(eachoneS.Collection === 'Sentinels of Light'&& eachoneS.Weapon==='Ares'){
          eachoneS.name="a13"
        }else if(eachoneS.Collection === 'Singularity'&& eachoneS.Weapon==='Ares'){
          eachoneS.name="a14"
        }


else if(eachoneS.Collection === 'Aristocrat'&& eachoneS.Weapon==='Bulldog'){
          eachoneS.name="b1"
        }else if(eachoneS.Collection === 'Convex'&& eachoneS.Weapon==='Bulldog'){
          eachoneS.name="b2"
        }else if(eachoneS.Collection === 'Couture'&& eachoneS.Weapon==='Bulldog'){
          eachoneS.name="b3"
        }else if(eachoneS.Collection === 'Depths'&& eachoneS.Weapon==='Bulldog'){
          eachoneS.name="b4"
        }else if(eachoneS.Collection === 'Glitchpop'&& eachoneS.Weapon==='Bulldog'){
          eachoneS.name="b5"
        }else if(eachoneS.Collection === 'Horizon'&& eachoneS.Weapon==='Bulldog'){
          eachoneS.name="b6"
        }else if(eachoneS.Collection === 'Infinity'&& eachoneS.Weapon==='Bulldog'){
          eachoneS.name="b7"
        }else if(eachoneS.Collection === 'K/TAC'&& eachoneS.Weapon==='Bulldog'){
          eachoneS.name="b8"
        }else if(eachoneS.Collection === 'Polyfox'&& eachoneS.Weapon==='Bulldog'){
          eachoneS.name="b9"
        }else if(eachoneS.Collection === 'Rush'&& eachoneS.Weapon==='Bulldog'){
          eachoneS.name="b10"
        }else if(eachoneS.Collection === 'Varnish'&& eachoneS.Weapon==='Bulldog'){
          eachoneS.name="b11"
        }else if(eachoneS.Collection === 'Spectrum'&& eachoneS.Weapon==='Bulldog'){
          eachoneS.name="b12"
        }

else if(eachoneS.Collection === 'Ego' && eachoneS.Weapon==='Guardian'){
          eachoneS.name="g1"
        }
else if(eachoneS.Collection === 'Galleria' && eachoneS.Weapon==='Guardian'){
          eachoneS.name="g2"
        }
else if(eachoneS.Collection === 'Infantry' && eachoneS.Weapon==='Guardian'){
          eachoneS.name="g3"
        }
else if(eachoneS.Collection === 'Infinity' && eachoneS.Weapon==='Guardian'){
          eachoneS.name="g4"
        }
else if(eachoneS.Collection === 'Jigsaw' && eachoneS.Weapon==='Guardian'){
          eachoneS.name="g5"
        }
else if(eachoneS.Collection === 'Nebula' && eachoneS.Weapon==='Guardian'){
          eachoneS.name="g6"
        }
else if(eachoneS.Collection === 'Oni' && eachoneS.Weapon==='Guardian'){
          eachoneS.name="g7"
        }
else if(eachoneS.Collection === 'Polyfox' && eachoneS.Weapon==='Guardian'){
          eachoneS.name="g8"
        }
else if(eachoneS.Collection === 'Prime' && eachoneS.Weapon==='Guardian'){
          eachoneS.name="g9"
        }
else if(eachoneS.Collection === 'Reaver' && eachoneS.Weapon==='Guardian'){
          eachoneS.name="g10"
        }
else if(eachoneS.Collection === 'Recon' && eachoneS.Weapon==='Guardian'){
          eachoneS.name="g11"
        }
else if(eachoneS.Collection === 'Ruin' && eachoneS.Weapon==='Guardian'){
          eachoneS.name="g12"
        }
else if(eachoneS.Collection === 'Ruination' && eachoneS.Weapon==='Guardian'){
          eachoneS.name="g13"
        }
else if(eachoneS.Collection === 'Songsteel' && eachoneS.Weapon==='Guardian'){
          eachoneS.name="g14"
        }
else if(eachoneS.Collection === 'Sovereign' && eachoneS.Weapon==='Guardian'){
          eachoneS.name="g15"
        }
else if(eachoneS.Collection === 'Tethered Realms' && eachoneS.Weapon==='Guardian'){
          eachoneS.name="g16"
        }
else if(eachoneS.Collection === 'VALORANT Go! Vol. 1' && eachoneS.Weapon==='Guardian'){
          eachoneS.name="g17"
        }
else if(eachoneS.Collection === 'Nitro' && eachoneS.Weapon==='Guardian'){
          eachoneS.name="g18"
        }
else if(eachoneS.Collection === 'Spectrum' && eachoneS.Weapon==='Guardian'){
          eachoneS.name="g19"
        }


else if(eachoneS.Collection === 'Celestial' && eachoneS.Weapon==='Judge'){
          eachoneS.name="j1"
        }else if(eachoneS.Collection === 'Convex' && eachoneS.Weapon==='Judge'){
          eachoneS.name="j2"
        }
else if(eachoneS.Collection === 'DOT EXE' && eachoneS.Weapon==='Judge'){
          eachoneS.name="j3"
        }
else if(eachoneS.Collection === 'Elderflame' && eachoneS.Weapon==='Judge'){
          eachoneS.name="j4"
        }
else if(eachoneS.Collection === 'Glitchpop' && eachoneS.Weapon==='Judge'){
          eachoneS.name="j5"
        }
else if(eachoneS.Collection === 'Jigsaw' && eachoneS.Weapon==='Judge'){
          eachoneS.name="j6"
        }
else if(eachoneS.Collection === 'Luxe' && eachoneS.Weapon==='Judge'){
          eachoneS.name="j7"
        }
else if(eachoneS.Collection === 'Outpost' && eachoneS.Weapon==='Judge'){
          eachoneS.name="j8"
        }
else if(eachoneS.Collection === 'Polyfox' && eachoneS.Weapon==='Judge'){
          eachoneS.name="j9"
        }
else if(eachoneS.Collection === 'Prism III' && eachoneS.Weapon==='Judge'){
          eachoneS.name="j10"
        }
else if(eachoneS.Collection === 'Rush' && eachoneS.Weapon==='Judge'){
          eachoneS.name="j11"
        }
else if(eachoneS.Collection === 'Sensation' && eachoneS.Weapon==='Judge'){
          eachoneS.name="j12"
        }
else if(eachoneS.Collection === 'Serenity' && eachoneS.Weapon==='Judge'){
          eachoneS.name="j13"
        }
else if(eachoneS.Collection === 'Smite' && eachoneS.Weapon==='Judge'){
          eachoneS.name="j14"
        }
else if(eachoneS.Collection === 'Varnish' && eachoneS.Weapon==='Judge'){
          eachoneS.name="j15"
        }



else if(eachoneS.Collection === 'Aerosol' && eachoneS.Weapon==='Bucky'){
          eachoneS.name="bu1"
        }else if(eachoneS.Collection === 'Cavalier' && eachoneS.Weapon==='Bucky'){
          eachoneS.name="bu2"
        }else if(eachoneS.Collection === 'Galleria' && eachoneS.Weapon==='Bucky'){
          eachoneS.name="bu3"
        }else if(eachoneS.Collection === 'Gravitational Uranium Neuroblaster' && eachoneS.Weapon==='Bucky'){
          eachoneS.name="bu4"
        }else if(eachoneS.Collection === 'Horizon' && eachoneS.Weapon==='Bucky'){
          eachoneS.name="bu5"
        }else if(eachoneS.Collection === 'Ion' && eachoneS.Weapon==='Bucky'){
          eachoneS.name="bu6"
        }else if(eachoneS.Collection === 'Kingdom' && eachoneS.Weapon==='Bucky'){
          eachoneS.name="bu7"
        }else if(eachoneS.Collection === 'Lightwave' && eachoneS.Weapon==='Bucky'){
          eachoneS.name="bu8"
        }else if(eachoneS.Collection === 'Magepunk' && eachoneS.Weapon==='Bucky'){
          eachoneS.name="bu9"
        }else if(eachoneS.Collection === 'Monarch' && eachoneS.Weapon==='Bucky'){
          eachoneS.name="bu10"
        }else if(eachoneS.Collection === 'Oni' && eachoneS.Weapon==='Bucky'){
          eachoneS.name="bu11"
        }else if(eachoneS.Collection === 'Origin' && eachoneS.Weapon==='Bucky'){
          eachoneS.name="bu12"
        }else if(eachoneS.Collection === 'Prime//2.0' && eachoneS.Weapon==='Bucky'){
          eachoneS.name="bu13"
        }else if(eachoneS.Collection === 'Prism II' && eachoneS.Weapon==='Bucky'){
          eachoneS.name="bu14"
        }else if(eachoneS.Collection === 'Red Alert' && eachoneS.Weapon==='Bucky'){
          eachoneS.name="bu15"
        }else if(eachoneS.Collection === 'Surge' && eachoneS.Weapon==='Bucky'){
          eachoneS.name="bu16"
        }else if(eachoneS.Collection === 'Artisan' && eachoneS.Weapon==='Bucky'){
          eachoneS.name="bu17"
        }

else if(eachoneS.Collection === 'Aristocrat' && eachoneS.Weapon==='Stinger'){
          eachoneS.name="st1"
        }else if(eachoneS.Collection === 'Cavalier' && eachoneS.Weapon==='Stinger'){
          eachoneS.name="st2"
        }else if(eachoneS.Collection === 'Couture' && eachoneS.Weapon==='Stinger'){
          eachoneS.name="st3"
        }else if(eachoneS.Collection === 'Depths' && eachoneS.Weapon==='Stinger'){
          eachoneS.name="st4"
        }else if(eachoneS.Collection === 'Ego' && eachoneS.Weapon==='Stinger'){
          eachoneS.name="st5"
        }else if(eachoneS.Collection === 'Prism II' && eachoneS.Weapon==='Stinger'){
          eachoneS.name="st6"
        }else if(eachoneS.Collection === 'Red Alert' && eachoneS.Weapon==='Stinger'){
          eachoneS.name="st7"
        }else if(eachoneS.Collection === 'Sakura' && eachoneS.Weapon==='Stinger'){
          eachoneS.name="st8"
        }else if(eachoneS.Collection === 'Sensation' && eachoneS.Weapon==='Stinger'){
          eachoneS.name="st9"
        }else if(eachoneS.Collection === 'Silvanus' && eachoneS.Weapon==='Stinger'){
          eachoneS.name="st10"
        }else if(eachoneS.Collection === 'Sovereign' && eachoneS.Weapon==='Stinger'){
          eachoneS.name="st11"
        }else if(eachoneS.Collection === 'Surge' && eachoneS.Weapon==='Stinger'){
          eachoneS.name="st12"
        }else if(eachoneS.Collection === 'Varnish' && eachoneS.Weapon==='Stinger'){
          eachoneS.name="st13"
        }

else if(eachoneS.Collection === 'Avalanche' && eachoneS.Weapon==='Spectre'){
          eachoneS.name="s1"
        }else if(eachoneS.Collection === 'BlastX' && eachoneS.Weapon==='Spectre'){
          eachoneS.name="s2"
        }else if(eachoneS.Collection === 'Convex' && eachoneS.Weapon==='Spectre'){
          eachoneS.name="s3"
        }else if(eachoneS.Collection === 'Forsaken' && eachoneS.Weapon==='Spectre'){
          eachoneS.name="s4"
        }else if(eachoneS.Collection === 'Gravitational Uranium Neuroblaster' && eachoneS.Weapon==='Spectre'){
          eachoneS.name="s5"
        }else if(eachoneS.Collection === 'Hivemind' && eachoneS.Weapon==='Spectre'){
          eachoneS.name="s6"
        }else if(eachoneS.Collection === 'Horizon' && eachoneS.Weapon==='Spectre'){
          eachoneS.name="s7"
        }else if(eachoneS.Collection === 'Infantry' && eachoneS.Weapon==='Spectre'){
          eachoneS.name="s8"
        }else if(eachoneS.Collection === 'Infinity' && eachoneS.Weapon==='Spectre'){
          eachoneS.name="s9"
        }else if(eachoneS.Collection === 'Kingdom' && eachoneS.Weapon==='Spectre'){
          eachoneS.name="s10"
        }else if(eachoneS.Collection === 'Luxe' && eachoneS.Weapon==='Spectre'){
          eachoneS.name="s11"
        }else if(eachoneS.Collection === 'Magepunk' && eachoneS.Weapon==='Spectre'){
          eachoneS.name="s12"
        }else if(eachoneS.Collection === 'Minima' && eachoneS.Weapon==='Spectre'){
          eachoneS.name="s13"
        }else if(eachoneS.Collection === 'Polyfrog' && eachoneS.Weapon==='Spectre'){
          eachoneS.name="s14"
        }else if(eachoneS.Collection === 'Prime' && eachoneS.Weapon==='Spectre'){
          eachoneS.name="s15"
        }else if(eachoneS.Collection === 'Prism' && eachoneS.Weapon==='Spectre'){
          eachoneS.name="s16"
        }else if(eachoneS.Collection === 'Recon' && eachoneS.Weapon==='Spectre'){
          eachoneS.name="s17"
        }else if(eachoneS.Collection === 'Ruination' && eachoneS.Weapon==='Spectre'){
          eachoneS.name="s18"
        }else if(eachoneS.Collection === 'Serenity' && eachoneS.Weapon==='Spectre'){
          eachoneS.name="s19"
        }else if(eachoneS.Collection === 'Singularity' && eachoneS.Weapon==='Spectre'){
          eachoneS.name="s20"
        }else if(eachoneS.Collection === 'Spline' && eachoneS.Weapon==='Spectre'){
          eachoneS.name="s21"
        }else if(eachoneS.Collection === 'VALORANT Go! Vol. 1' && eachoneS.Weapon==='Spectre'){
          eachoneS.name="s22"
        }
        else if(eachoneS.Collection === 'Wasteland' && eachoneS.Weapon==='Spectre'){
          eachoneS.name="s23"
        }
        

        else if(eachoneS.Collection === 'Aerosol' && eachoneS.Weapon==='Shorty'){
          eachoneS.name="sh1"
        }  else if(eachoneS.Collection === 'Hivemind' && eachoneS.Weapon==='Shorty'){
          eachoneS.name="sh2"
        }
  else if(eachoneS.Collection === 'Monarch' && eachoneS.Weapon==='Shorty'){
          eachoneS.name="sh3"
        }
  else if(eachoneS.Collection === 'Oni' && eachoneS.Weapon==='Shorty'){
          eachoneS.name="sh4"
        }
  else if(eachoneS.Collection === 'Prism II' && eachoneS.Weapon==='Shorty'){
          eachoneS.name="sh5"
        }
  else if(eachoneS.Collection === 'Ruin' && eachoneS.Weapon==='Shorty'){
          eachoneS.name="sh6"
        }
  else if(eachoneS.Collection === 'Snakebite' && eachoneS.Weapon==='Shorty'){
          eachoneS.name="sh7"
        }
  else if(eachoneS.Collection === 'Wasteland' && eachoneS.Weapon==='Shorty'){
          eachoneS.name="sh8"
        }
  else if(eachoneS.Collection === 'Wunderkind' && eachoneS.Weapon==='Shorty'){
          eachoneS.name="sh9"
        }


        else if(eachoneS.Collection === 'BlastX' && eachoneS.Weapon==='Frenzy'){
          eachoneS.name="f1"
        } else if(eachoneS.Collection === 'Celestial' && eachoneS.Weapon==='Frenzy'){
          eachoneS.name="f2"
        } else if(eachoneS.Collection === 'Couture' && eachoneS.Weapon==='Frenzy'){
          eachoneS.name="f3"
        } else if(eachoneS.Collection === 'Elderflame' && eachoneS.Weapon==='Frenzy'){
          eachoneS.name="f4"
        } else if(eachoneS.Collection === 'Glitchpop' && eachoneS.Weapon==='Frenzy'){
          eachoneS.name="f5"
        } else if(eachoneS.Collection === 'Horizon' && eachoneS.Weapon==='Frenzy'){
          eachoneS.name="f6"
        } else if(eachoneS.Collection === 'Lightwave' && eachoneS.Weapon==='Frenzy'){
          eachoneS.name="f7"
        } else if(eachoneS.Collection === 'Monarch' && eachoneS.Weapon==='Frenzy'){
          eachoneS.name="f8"
        } else if(eachoneS.Collection === 'Origin' && eachoneS.Weapon==='Frenzy'){
          eachoneS.name="f9"
        } else if(eachoneS.Collection === 'Prime//2.0' && eachoneS.Weapon==='Frenzy'){
          eachoneS.name="f10"
        } else if(eachoneS.Collection === 'Ragnarocker' && eachoneS.Weapon==='Frenzy'){
          eachoneS.name="f11"
        } else if(eachoneS.Collection === 'Rush' && eachoneS.Weapon==='Frenzy'){
          eachoneS.name="f12"
        } else if(eachoneS.Collection === 'Sensation' && eachoneS.Weapon==='Frenzy'){
          eachoneS.name="f13"
        } else if(eachoneS.Collection === 'Spitfire' && eachoneS.Weapon==='Frenzy'){
          eachoneS.name="f14"
        } else if(eachoneS.Collection === 'Swooping' && eachoneS.Weapon==='Frenzy'){
          eachoneS.name="f15"
        }



else if(eachoneS.Collection === 'Avalanche' && eachoneS.Weapon==='Classic'){
          eachoneS.name="c1"
        }else if(eachoneS.Collection === 'Final Chamber' && eachoneS.Weapon==='Classic'){
          eachoneS.name="c2"
        }else if(eachoneS.Collection === 'FIRE/arm' && eachoneS.Weapon==='Classic'){
          eachoneS.name="c3"
        }else if(eachoneS.Collection === 'Forsaken' && eachoneS.Weapon==='Classic'){
          eachoneS.name="c4"
        }else if(eachoneS.Collection === 'Galleria' && eachoneS.Weapon==='Classic'){
          eachoneS.name="c5"
        }else if(eachoneS.Collection === 'Glitchpop' && eachoneS.Weapon==='Classic'){
          eachoneS.name="c6"
        }else if(eachoneS.Collection === 'Gravitational Uranium Neuroblaster' && eachoneS.Weapon==='Classic'){
          eachoneS.name="c7"
        }else if(eachoneS.Collection === 'Infinity' && eachoneS.Weapon==='Classic'){
          eachoneS.name="c8"
        }else if(eachoneS.Collection === 'Kingdom' && eachoneS.Weapon==='Classic'){
          eachoneS.name="c9"
        }else if(eachoneS.Collection === 'Pistolinha' && eachoneS.Weapon==='Classic'){
          eachoneS.name="c10"
        }else if(eachoneS.Collection === 'Prime' && eachoneS.Weapon==='Classic'){
          eachoneS.name="c11"
        }else if(eachoneS.Collection === 'Prism III' && eachoneS.Weapon==='Classic'){
          eachoneS.name="c12"
        }else if(eachoneS.Collection === 'Red Alert' && eachoneS.Weapon==='Classic'){
          eachoneS.name="c13"
        }else if(eachoneS.Collection === 'Sakura' && eachoneS.Weapon==='Classic'){
          eachoneS.name="c14"
        }else if(eachoneS.Collection === 'Smite' && eachoneS.Weapon==='Classic'){
          eachoneS.name="c15"
        }else if(eachoneS.Collection === 'Songsteel' && eachoneS.Weapon==='Classic'){
          eachoneS.name="c16"
        }else if(eachoneS.Collection === 'Spline' && eachoneS.Weapon==='Classic'){
          eachoneS.name="c17"
        }else if(eachoneS.Collection === 'Surge' && eachoneS.Weapon==='Classic'){
          eachoneS.name="c18"
        }else if(eachoneS.Collection === 'Spectrum' && eachoneS.Weapon==='Classic'){
          eachoneS.name="c19"
        }


else if(eachoneS.Collection === 'Cavalier' && eachoneS.Weapon==='Ghost'){
          eachoneS.name="t1"
        }else if(eachoneS.Collection === 'Depths' && eachoneS.Weapon==='Ghost'){
          eachoneS.name="t2"
        }else if(eachoneS.Collection === 'DOT EXE' && eachoneS.Weapon==='Ghost'){
          eachoneS.name="t3"
        }else if(eachoneS.Collection === 'Eclipse' && eachoneS.Weapon==='Ghost'){
          eachoneS.name="t4"
        }else if(eachoneS.Collection === 'Ego' && eachoneS.Weapon==='Ghost'){
          eachoneS.name="t5"
        }else if(eachoneS.Collection === 'Hush' && eachoneS.Weapon==='Ghost'){
          eachoneS.name="t6"
        }else if(eachoneS.Collection === 'Infantry' && eachoneS.Weapon==='Ghost'){
          eachoneS.name="t7"
        }else if(eachoneS.Collection === 'Jigsaw' && eachoneS.Weapon==='Ghost'){
          eachoneS.name="t8"
        }else if(eachoneS.Collection === 'Luxe' && eachoneS.Weapon==='Ghost'){
          eachoneS.name="t9"
        }else if(eachoneS.Collection === 'Magepunk' && eachoneS.Weapon==='Ghost'){
          eachoneS.name="t10"
        }else if(eachoneS.Collection === 'Outpost' && eachoneS.Weapon==='Ghost'){
          eachoneS.name="t11"
        }else if(eachoneS.Collection === 'Prism' && eachoneS.Weapon==='Ghost'){
          eachoneS.name="t12"
        }else if(eachoneS.Collection === 'Recon' && eachoneS.Weapon==='Ghost'){
          eachoneS.name="t13"
        }else if(eachoneS.Collection === 'Ruination' && eachoneS.Weapon==='Ghost'){
          eachoneS.name="t14"
        }else if(eachoneS.Collection === 'Serenity' && eachoneS.Weapon==='Ghost'){
          eachoneS.name="t15"
        }else if(eachoneS.Collection === 'Soul Silencer' && eachoneS.Weapon==='Ghost'){
          eachoneS.name="t16"
        }else if(eachoneS.Collection === 'Sovereign' && eachoneS.Weapon==='Ghost'){
          eachoneS.name="t17"
        }else if(eachoneS.Collection === 'Tethered Realms' && eachoneS.Weapon==='Ghost'){
          eachoneS.name="t18"
        }else if(eachoneS.Collection === 'VALORANT Go! Vol. 1' && eachoneS.Weapon==='Ghost'){
          eachoneS.name="t19"
        }else if(eachoneS.Collection === 'Vendetta' && eachoneS.Weapon==='Ghost'){
          eachoneS.name="t20"
        }else if(eachoneS.Collection === 'Winterwunderland' && eachoneS.Weapon==='Ghost'){
          eachoneS.name="t21"
        }else if(eachoneS.Collection === 'Artisan' && eachoneS.Weapon==='Ghost'){
          eachoneS.name="t22"
        }

else if(eachoneS.Collection === 'Aristocrat' && eachoneS.Weapon==='Sheriff'){
          eachoneS.name="h1"
        }else if(eachoneS.Collection === 'Convex' && eachoneS.Weapon==='Sheriff'){
          eachoneS.name="h2"
        }else if(eachoneS.Collection === 'Death Wish' && eachoneS.Weapon==='Sheriff'){
          eachoneS.name="h3"
        }else if(eachoneS.Collection === 'Game Over' && eachoneS.Weapon==='Sheriff'){
          eachoneS.name="h4"
        }else if(eachoneS.Collection === 'Ion' && eachoneS.Weapon==='Sheriff'){
          eachoneS.name="h5"
        }else if(eachoneS.Collection === 'K/TAC' && eachoneS.Weapon==='Sheriff'){
          eachoneS.name="h6"
        }else if(eachoneS.Collection === 'Lightwave' && eachoneS.Weapon==='Sheriff'){
          eachoneS.name="h7"
        }else if(eachoneS.Collection === 'Minima' && eachoneS.Weapon==='Sheriff'){
          eachoneS.name="h8"
        }else if(eachoneS.Collection === 'Nebula' && eachoneS.Weapon==='Sheriff'){
          eachoneS.name="h9"
        }else if(eachoneS.Collection === 'Peacekeeper' && eachoneS.Weapon==='Sheriff'){
          eachoneS.name="h10"
        }else if(eachoneS.Collection === 'Polyfox' && eachoneS.Weapon==='Sheriff'){
          eachoneS.name="h11"
        }else if(eachoneS.Collection === 'Polyfrog' && eachoneS.Weapon==='Sheriff'){
          eachoneS.name="h12"
        }else if(eachoneS.Collection === 'Prism II' && eachoneS.Weapon==='Sheriff'){
          eachoneS.name="h13"
        }else if(eachoneS.Collection === 'Protektor' && eachoneS.Weapon==='Sheriff'){
          eachoneS.name="h14"
        }else if(eachoneS.Collection === 'Reaver' && eachoneS.Weapon==='Sheriff'){
          eachoneS.name="h15"
        }else if(eachoneS.Collection === 'Sakura' && eachoneS.Weapon==='Sheriff'){
          eachoneS.name="h16"
        }else if(eachoneS.Collection === 'Sentinels of Light' && eachoneS.Weapon==='Sheriff'){
          eachoneS.name="h17"
        }else if(eachoneS.Collection === 'Silvanus' && eachoneS.Weapon==='Sheriff'){
          eachoneS.name="h18"
        }else if(eachoneS.Collection === 'Singularity' && eachoneS.Weapon==='Sheriff'){
          eachoneS.name="h19"
        }else if(eachoneS.Collection === 'Surge' && eachoneS.Weapon==='Sheriff'){
          eachoneS.name="h20"
        }else if(eachoneS.Collection === 'Wasteland' && eachoneS.Weapon==='Sheriff'){
          eachoneS.name="h21"
        }else if(eachoneS.Collection === 'Varnish' && eachoneS.Weapon==='Sheriff'){
          eachoneS.name="h22"
        }



else if(eachoneS.Collection === 'Hivemind' && eachoneS.Weapon==='Knife'){
          eachoneS.name="x1"
        }else if(eachoneS.Collection === 'Sovereign' && eachoneS.Weapon==='Knife'){
          eachoneS.name="x2"
        }
else if(eachoneS.Collection === 'Forsaken' && eachoneS.Weapon==='Knife'){
          eachoneS.name="x3"
        }
else if(eachoneS.Collection === 'Sentinels of Light' && eachoneS.Weapon==='Knife'){
          eachoneS.name="x4"
        }
else if(eachoneS.Collection === 'Tethered Realms' && eachoneS.Weapon==='Knife'){
          eachoneS.name="x5"
        }
else if(eachoneS.Collection === 'BlastX' && eachoneS.Weapon==='Knife'){
          eachoneS.name="x6"
        }
else if(eachoneS.Collection === 'Outpost' && eachoneS.Weapon==='Knife'){
          eachoneS.name="x7"
        }
else if(eachoneS.Collection === 'Songsteel' && eachoneS.Weapon==='Knife'){
          eachoneS.name="x8"
        }
else if(eachoneS.Collection === 'Ego' && eachoneS.Weapon==='Knife'){
          eachoneS.name="x9"
        }
else if(eachoneS.Collection === 'Kingdom' && eachoneS.Weapon==='Knife'){
          eachoneS.name="x10"
        }
else if(eachoneS.Collection === 'Luxe' && eachoneS.Weapon==='Knife'){
          eachoneS.name="x11"
        }
else if(eachoneS.Collection === 'Nebula' && eachoneS.Weapon==='Knife'){
          eachoneS.name="x12"
        }
else if(eachoneS.Collection === 'Prism' && eachoneS.Weapon==='Knife'){
          eachoneS.name="x13"
        }
else if(eachoneS.Collection === 'Reaver' && eachoneS.Weapon==='Knife'){
          eachoneS.name="x14"
        }
else if(eachoneS.Collection === 'Singularity' && eachoneS.Weapon==='Knife'){
          eachoneS.name="x15"
        }
else if(eachoneS.Collection === 'Smite' && eachoneS.Weapon==='Knife'){
          eachoneS.name="x16"
        }
else if(eachoneS.Collection === 'VALORANT Go! Vol. 1' && eachoneS.Weapon==='Knife'){
          eachoneS.name="x17"
        }
else if(eachoneS.Collection === 'Prime//2.0' && eachoneS.Weapon==='Knife'){
          eachoneS.name="x18"
        }
else if(eachoneS.Collection === 'Celestial' && eachoneS.Weapon==='Knife'){
          eachoneS.name="x19"
        }
else if(eachoneS.Collection === 'Ion' && eachoneS.Weapon==='Knife'){
          eachoneS.name="x20"
        }
else if(eachoneS.Collection === 'Magepunk' && eachoneS.Weapon==='Knife'){
          eachoneS.name="x21"
        }
else if(eachoneS.Collection === 'Elderflame' && eachoneS.Weapon==='Knife'){
          eachoneS.name="x22"
        }
else if(eachoneS.Collection === 'Glitchpop' && eachoneS.Weapon==='Knife'){
          eachoneS.name="x23"
        }
else if(eachoneS.Collection === 'Ruin' && eachoneS.Weapon==='Knife'){
          eachoneS.name="x24"
        }
else if(eachoneS.Collection === 'Spline' && eachoneS.Weapon==='Knife'){
          eachoneS.name="x25"
        }
else if(eachoneS.Collection === 'Origin' && eachoneS.Weapon==='Knife'){
          eachoneS.name="x26"
        }
else if(eachoneS.Collection === 'Oni' && eachoneS.Weapon==='Knife'){
          eachoneS.name="x27"
        }
else if(eachoneS.Collection === 'Winterwunderland' && eachoneS.Weapon==='Knife'){
          eachoneS.name="x28"
        }
else if(eachoneS.Collection === 'Ruination' && eachoneS.Weapon==='Knife'){
          eachoneS.name="x29"
        }
else if(eachoneS.Collection === 'K/TAC' && eachoneS.Weapon==='Knife'){
          eachoneS.name="x30"
        }
else if(eachoneS.Collection === 'Gravitational Uranium Neuroblaster' && eachoneS.Weapon==='Knife'){
          eachoneS.name="x31"
        }
else if(eachoneS.Collection === 'Recon' && eachoneS.Weapon==='Knife'){
          eachoneS.name="x32"
        }
else if(eachoneS.Collection === 'Glitchpop' && eachoneS.Weapon==='Knife'){
          eachoneS.name="x33"
        }
else if(eachoneS.Collection === 'Prime' && eachoneS.Weapon==='Knife'){
          eachoneS.name="x34"
        }
else if(eachoneS.Collection === 'Prism III' && eachoneS.Weapon==='Knife'){
          eachoneS.name="x35"
        }
else if(eachoneS.Collection === 'Artisan' && eachoneS.Weapon==='Knife'){
          eachoneS.name="x36"
        }
else if(eachoneS.Collection === 'Spectrum' && eachoneS.Weapon==='Knife'){
          eachoneS.name="x37"
        }
      

      }
    );
    // const ffffffffffff = selected.map((eachoneS) => (eachoneS.name = "image"));
    console.log(ffffffffffff, "segesgeg");
    // setActiveStep1((prevActiveStep) => prevActiveStep + 1);
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
      setOpen(true);
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
      {!display && value === "Yes" ? (
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
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success">
                Your Account has been successfully Listed !
              </Alert>
            </Snackbar>
          </div>
        </div>
      ) : (
        ""
      )}
      {!display && value === "No" ? (
        <div className={classes.root}>
          <div style={{ height: "800px" }} className={classes.bottomstuff}>
            <FormControl
              halfWidth
              style={{ marginTop: "100px" }}
              className={classes.margin}
            >
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

            <FormControl
              halfWidth
              style={{ marginTop: "100px" }}
              className={classes.margin}
            >
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

            <FormControl
              halfWidth
              style={{ marginTop: "100px" }}
              className={classes.margin}
            >
              <InputLabel htmlFor="standard-adornment-amount">
                Valorant Points
              </InputLabel>
              <Input
                id="standard-adornment-amount"
                value="0"
                style={{ height: 30 }}
                type="number"
                disabled
                onChange={(e) => setValorantP(e.target.value)}
                startAdornment={
                  <InputAdornment position="start">
                    <img src={valorantP} alt=""></img>
                  </InputAdornment>
                }
              />
            </FormControl>

            <FormControl
              style={{ marginTop: "90px" }}
              className={classes.formControl}
            >
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

            {price && Radianite && rank ? (
              <Button
                type="submit"
                halfWidth
                variant="contained"
                color="primary"
                style={{ marginTop: "100px" }}
                className={classes.submit}
                onClick={handleSubmit}
              >
                Submit for Listing
              </Button>
            ) : (
              <Button
                style={{ marginTop: "100px" }}
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
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success">
                Your Account has been successfully Listed !
              </Alert>
            </Snackbar>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
