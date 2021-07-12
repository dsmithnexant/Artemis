import React, { useRef, useState, useEffect } from "react";
import "./Models.css";
import Form from "react-bootstrap/Form";
import { useHistory } from "react-router-dom";
import LoaderButton from "../components/LoaderButton";
import { onError } from "../libs/errorLib";
import config from "../config";
import { s3Upload } from "../libs/awsLib";
import { API } from "aws-amplify";
import { Storage } from "aws-amplify";

export default function Models() {
  const file = useRef(null);
  const history = useHistory();
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = React.useState(true);
  const [riverInformation, setRiverInformation] = useState([{key: 'No Models Found'}]);
  
  

  function handleFileChange(event) {
    file.current = event.target.files[0];
    setIsDisabled(!isDisabled);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (file.current && file.current.size > config.MAX_ATTACHMENT_SIZE) {
      alert(
        `Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE / 1000000
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

 /*  var bucketlist = Storage.list('', { level: 'private' })
    .then((result) => {return result})
    .catch(err => console.log(err)); */

  useEffect(() => {
    Storage.list('', { level: 'private' })
    .then(data =>
      setRiverInformation(data)
    );
    }, [])

  /* bucketlist is returning as Promise<pending>. Need to extract value from asynchronous 
     Promise, then map that to list items 
  */

  console.log(riverInformation.length);
  

  const listItems = riverInformation.map((link) =>
    <li key={link.key}>{link.key}</li>);  

  var items = [{ key: "key1", eTag: "value1" }, { key: "key2", eTag: "value2" }];

  return (
    <div className="Models">
      <div className="lander">
        <h1>Project Artemis Models</h1>
        <p className="text-muted">Below is an up to date list of models that exist.</p>
      <div className="list">
        <ol>
         {listItems} 
        </ol>
      </div>
      </div>
      <div className="lander">
        <h4>If you would like to create a new model upload data here </h4>
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
            Submit File to generate a new Model for a New Project
          </LoaderButton>
        </Form>
      </div>
    </div>
  );
}