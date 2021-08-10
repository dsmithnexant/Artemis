import React, { useRef, useState, useEffect } from "react";
import "./Models.css";
import Form from "react-bootstrap/Form";
import { useHistory } from "react-router-dom";
import LoaderButton from "../components/LoaderButton";
import { onError } from "../libs/errorLib";
import config from "../config";
import { s3UploadModel } from "../libs/awsLib";
import { API } from "aws-amplify";
import { Storage } from "aws-amplify";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { withStyles,makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DatePicker from 'react-date-picker';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

export default function Models() {
  const file = useRef(null);
  const history = useHistory();
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = React.useState(true);
  const [riverInformation, setRiverInformation] = useState([{key: ''}]);
  const [date1, onChange] = useState('');
  const [date2, onChange2] = useState('');

  
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


const columns = [
  { id: 'model', label: 'Model', minWidth: 5 }
];

function createData(model) {

  return { model };
}
  
// const rows = [
//   createData('India', 'IN', 1324171354, 3287263),
//   createData('China', 'CN', 1403500365, 9596961),
//   createData('Italy', 'IT', 60483973, 301340),
//   createData('United States', 'US', 327167434, 9833520),
//   createData('Canada', 'CA', 37602103, 9984670),
//   createData('Australia', 'AU', 25475400, 7692024),
//   createData('Germany', 'DE', 83019200, 357578),
//   createData('Ireland', 'IE', 4857000, 70273),
//   createData('Mexico', 'MX', 126577691, 1972550),
//   createData('Japan', 'JP', 126317000, 377973),
//   createData('France', 'FR', 67022000, 640679),
//   createData('United Kingdom', 'GB', 67545757, 242495),
//   createData('Russia', 'RU', 146793744, 17098246),
//   createData('Nigeria', 'NG', 200962417, 923768),
//   createData('Brazil', 'BR', 210147125, 8515767),
// ];
  
const useStyles2 = makeStyles({
  root: {
    width: '50%',
    justifyContent: 'center',
    textAlign: 'center',
  },
  container: {
    maxHeight: 440,
    justifyContent: 'center',
  },
});
  
const classes2 = useStyles2();

  function handleFileChange(event) {
    file.current = event.target.files[0];
    if (file.current != undefined) {
        console.log(file.current.name.length > 1);
        setIsDisabled(false);
  }else{setIsDisabled(true)}}

  async function handleSubmit(event) {
    event.preventDefault();
    var val_filename = /^([0-9]+-[0-9]+).csv/.test(file.current.name);
    if ((date1 == '') || (date2 == '')) {
      alert('Please specify a start and end date below.');
      return false;
    }
    if (val_filename != true) {
      alert(' filename does not follow correct format specified.');
      return false;
    }

    if (file.current && file.current.size > config.MAX_ATTACHMENT_SIZE) {
      alert(
        `Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE / 1000000
        } MB.`
      );
      return;
    }

    setIsLoading(true);

    try {
      const attachment = file.current ? await s3UploadModel(file.current,date1,date2) : null;
      history.push("/success");
    } catch (e) {
      onError(e);
      setIsLoading(false);
    }
  }

  // Models will be stored in the public folder. Each individual upload is linked
  // With the user id from cognito under private
  useEffect(() => {
    //Storage.list('', { level: 'private' })
    Storage.list('')// { level: 'private' })
    .then(data =>
      setRiverInformation(data)
    );
    }, [])

  console.log(riverInformation);
  

/*   const listItems = riverInformation.map((link) =>
    <li key={link.key}>{link.key}</li>);   */ 
  
  const listItems = riverInformation.map((link) =>  { 
    if (link.key.length == 0) {
        return null ;
      } else if (link.key.length > 1) {
        link.key = link.key.replace('_Cubist Model.rds', '');;
        return (<ListItem key={link.key}>{link.key}</ListItem>);
      } 
    });

  const rows = riverInformation.map((link) =>  { 
    if (link.key.length == 0) {
        return createData() ;
      } else if (link.key.length > 1) {
        link.key = link.key.replace('_Cubist Model.rds', '');;
        return createData(link.key)
      } 
    });

  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));
    
  const classes = useStyles();

  return (
    <div className="Models">

      <div className="lander">
        <h1>Project Artemis Models</h1>
      </div>
      <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}> <b>Creating New Models</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Below is a list of all the models that exist in the Project Artemis ecosystem. If you would like to create a 
            new model for a new project follow the directions below.
            <br></br>
            <br></br>
            {/* <div className="list">
              <List style={{maxHeight: 200, overflow: 'auto'}}>
              {listItems} 
              </List>
            </div> */}

            <div className="list">
                  <Paper className={classes2.root}>
            <TableContainer className={classes2.container}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <StyledTableRow>
                    {columns.map((column) => (
                      <StyledTableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </StyledTableCell>
                    ))}
                  </StyledTableRow>
                </TableHead>
                <TableBody>
                  {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    return (
                      <StyledTableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <StyledTableCell key={column.id} align={column.align}>
                              {column.format && typeof value === 'number' ? column.format(value) : value}
                            </StyledTableCell>
                          );
                        })}
                      </StyledTableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100,5000]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><b>Naming Your Training Data</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The project Artemis data pipeline is developed to only accept file uploads following a specific nomenclature.
            First, all files uploaded must have the extension type <b>.csv</b>. 
            <br></br>
            <br></br>
            Files should be named using the following convention where DIGITS refers to any numeric value <b>[0-9]</b> and CHARACTERS refers to <b>[a-z]</b>.
            <br></br>
            <br></br>
             <b>DIGITS-DIGITS.csv</b>
            <br></br>
            <br></br>
             <i>Example: 18-0003.csv</i>
            <br></br>
            <br></br>
            Also be sure to select an <b>Intervention Start Date</b> and <b>Persistence Start Date</b> below using the date selectors.
            <br></br>
            <br></br>
            If any of these rules are not followed you will recieve an alert message and will <b>NOT</b> be able to upload
            your file.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><b>Questions?</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            If you have any questions or suggestions regarding project Artemis reach out to
             <b> dsmith@nexant.com </b>for further detail.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    <br></br>
    <br></br>
    <Form onSubmit={handleSubmit}>
      <h5><b>Intervention Start Date:</b>&nbsp; &nbsp;<DatePicker
          onChange={onChange}
          value={date1}
          format="MM/d/y"
          required = {true}
          maxDate = {date2}
        /></h5>
        <br></br>
        <br></br>
       <h5><b>Persistence Start Date:</b> &nbsp; &nbsp; <DatePicker
          onChange={onChange2}
          value={date2}
          format="MM/d/y"
          required = {true}
          minDate = {date1}
        /></h5>
        <br></br>
        <br></br>
      <Form.Group controlId="file">
        <Form.Control onChange={handleFileChange} type="file" />
      </Form.Group>
      <LoaderButton
        block
        type="submit"
        size="lg"
        variant="primary"
        isLoading={isLoading}
        disabled={isDisabled}
      >
        Submit Training Data to Generate A New Model for A New Project
      </LoaderButton>
    </Form> 
    </div>
  );
}