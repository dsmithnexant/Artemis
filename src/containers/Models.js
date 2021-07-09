import React, { useRef, useState } from "react";
import "./Models.css";
import Form from "react-bootstrap/Form";
import { useHistory } from "react-router-dom";
import LoaderButton from "../components/LoaderButton";
import { onError } from "../libs/errorLib";
import config from "../config";
import { s3Upload } from "../libs/awsLib";
import { API } from "aws-amplify";

export default function Models() {
  const file = useRef(null);
  const history = useHistory();
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function validateForm() {
    return content.length < 1;
  }

  function handleFileChange(event) {
    file.current = event.target.files[0];
  }

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
  return (
    <div className="Models">
      <div className="lander">
        <h1>Project Artemis Models</h1>
        <p className="text-muted">Below is an up to date list of models that exist.</p>
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
          disabled={!validateForm()}
        >
          Submit File to generate a new Model for a New Project
        </LoaderButton>
        </Form>
      </div>
    </div>
  );
}