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
import { makeStyles } from '@material-ui/core/styles';
import { Storage } from "aws-amplify";

export default function NewNote() {
  const file = useRef(null);
  const history = useHistory();
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = React.useState(true);
  const [riverInformation, setRiverInformation] = useState([{key: ''}]);
  const [riverInformation2, setRiverInformation2] = useState([{key: ''}]);
  
  function handleFileChange(event) {
    file.current = event.target.files[0];
    console.log(file.current);
    if (file.current != undefined) {
        console.log(file.current.name.length > 1);
        setIsDisabled(false);
  }else{setIsDisabled(true)}}

  async function handleSubmit(event) {
    event.preventDefault();
  
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


useEffect(() => {
  //Storage.list('', { level: 'private' })
  Storage.list('')// { level: 'private' })
  .then(data =>
    setRiverInformation2(data)
  );
  }, [])
const listItems2 = riverInformation2.map((link) =>  { 
    if (link.key.length == 0) {
        return null ;
      } else if (link.key.length > 1) {
        link.key = link.key.replace('_Cubist Model.rds', '');
        link.key = link.key.replace(/.*_/, '');
        return (<option value={link.key}>{link.key}</option>);
      } 
    });

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

  return (
    <div className="NewNote">
      
      <div className="lander">
        <h1>Previous Project Data Uploads</h1>
        <p className="text-muted">Below is a list of all files uploaded by the current user.</p>
     </div>
      <div className="list">
        <List style={{maxHeight: 200, overflow: 'auto'}}>
         {listItems} 
        </List>
      </div>
     
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="file">
        <select> 
        <option>--Select a Program ID --</option>  
          {listItems2} 
        </select>
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