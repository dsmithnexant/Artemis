import React, { useRef, useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { useHistory } from "react-router-dom";
import LoaderButton from "../components/LoaderButton";
import { onError } from "../libs/errorLib";
import config from "../config";
import "./NewNote.css";
import { s3Upload } from "../libs/awsLib";
import { API } from "aws-amplify";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Storage } from "aws-amplify";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function NewNote() {
  const file = useRef(null);
  const history = useHistory();
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = React.useState(true);
  const [riverInformation, setRiverInformation] = useState([{key: ''}]);
  //const [riverInformation2, setRiverInformation2] = useState([{key: ''}]);
  
  function handleFileChange(event) {
    file.current = event.target.files[0];
    console.log(file.current);
    if (file.current != undefined) {
        console.log(file.current.name.length > 1);
        setIsDisabled(false);
  }else{setIsDisabled(true)}}

  async function handleSubmit(event) {
    event.preventDefault();
    var val_filename = /^([0-9]+-[0-9]+)-\w*\.csv/.test(file.current.name);
    if (val_filename != true) {
      alert(' filename does not follow correct format specified.');
      return false;
    }
  
    if (file.current && file.current.size > config.MAX_ATTACHMENT_SIZE) {
      alert(
        `Please pick a file smaller than ${
          config.MAX_ATTACHMENT_SIZE / 1000000
        } MB.`
      );
      return;
    }
  
    setIsLoading(true);
  
    try {
      const attachment = file.current ? await s3Upload(file.current) : null;
      history.push("/success");
    } catch (e) {
      onError(e);
      setIsLoading(false);
    }
  }
  
//Display list of files uploaded by specific user
useEffect(() => {
  Storage.list('existing-project/', { level: 'private' })
  //Storage.list('')// { level: 'private' })
  .then(data =>
    setRiverInformation(data)
  );
  }, [])

console.log(riverInformation);


// useEffect(() => {
//   //Storage.list('', { level: 'private' })
//   Storage.list('')// { level: 'private' })
//   .then(data =>
//     setRiverInformation2(data)
//   );
//   }, [])
// const listItems2 = riverInformation2.map((link) =>  { 
//     if (link.key.length == 0) {
//         return null ;
//       } else if (link.key.length > 1) {
//         link.key = link.key.replace('_Cubist Model.rds', '');
//         link.key = link.key.replace(/.*_/, '');
//         return (<option value={link.key}>{link.key}</option>);
//       } 
//     });

/*   const listItems = riverInformation.map((link) =>
  <li key={link.key}>{link.key}</li>);   */ 

const listItems = riverInformation.map((link) =>  { 
  if (link.key.length == 0) {
      return null ;
    } else if (link.key.length > 1) {
      link.key = link.key.replace('existing-project/', '');;
      return (<ListItem key={link.key}>{link.key}</ListItem>);
    } 
  });


  function createNote(note) {
    return API.post("dev-Orion-REST-Api", "/uploads", {
      body: note
    });
  }


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
    <div className="NewNote">
      
      <div className="lander">
        <h1>Previous Project Data Uploads</h1>
     </div>
     <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}> <b>Uploads for Existing Projects</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Below is a list of all files uploaded by the current user. Each individual user can only see the files they have uploaded.
            If a model/project already exist in the system and you want to generate new predictions, upload data here.
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
          <Typography className={classes.heading}><b>Naming Your File</b></Typography>
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
             <b>DIGITS-DIGITS-CHARACTERS.csv</b>
            <br></br>
            <br></br>
             <i>Example: 18-0003-thisisanexample.csv</i>
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
        <Form.Group controlId="file">
        {/* <select> 
        <option>--Select a Program ID --</option>  
          {listItems2} 
        </select> */}
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
          Submit File to S3 for Processing
        </LoaderButton>
      </Form>
    </div>
  );
}