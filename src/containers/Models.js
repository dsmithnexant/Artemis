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


export default function Models() {
  const file = useRef(null);
  const history = useHistory();
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = React.useState(true);
  const [riverInformation, setRiverInformation] = useState([{key: ''}]);
  
  function handleFileChange(event) {
    file.current = event.target.files[0];
    console.log(file.current);
    if (file.current != undefined) {
        console.log(file.current.name.length > 1);
        setIsDisabled(false);
  }else{setIsDisabled(true)}}

  async function handleSubmit(event) {
    event.preventDefault();
    var val_filename = /^([0-9]+-[0-9]+).csv/.test(file.current.name);
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
      const attachment = file.current ? await s3UploadModel(file.current) : null;
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
  return (
    <div className="Models">
      <div className="lander">
        <h1>Project Artemis Models</h1>
        <p className="text-muted">Below is an up to date list of models that exist in the system.</p>
      <div className="list">
        <List style={{maxHeight: 200, overflow: 'auto'}}>
         {listItems} 
        </List>
      </div>
      </div>
      <div className="lander">
        <h4>If you would like to create a new model upload data here </h4>
        <h10 className="text-muted">File should be named <b>DIGITS-DIGITS.csv</b> </h10>
        <p className="text-muted">Select your training data to upload.</p>
        <Form onSubmit={handleSubmit}>
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
    </div>
  );
}