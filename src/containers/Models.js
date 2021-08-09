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
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DatePicker from 'react-date-picker';


export default function Models() {
  const file = useRef(null);
  const history = useHistory();
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = React.useState(true);
  const [riverInformation, setRiverInformation] = useState([{key: ''}]);
  const [date1, onChange] = useState('');
  const [date2, onChange2] = useState('');
  
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
            <div className="list">
              <List style={{maxHeight: 200, overflow: 'auto'}}>
              {listItems} 
              </List>
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
      <h5><b>Start Date:</b>&nbsp; &nbsp;<DatePicker
          onChange={onChange}
          value={date1}
          format="MM/d/y"
          required = {true}
          maxDate = {date2}
        /></h5>
        <br></br>
        <br></br>
       <h5><b>End Date:</b> &nbsp; &nbsp; <DatePicker
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