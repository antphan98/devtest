import React from "react";
import { useEffect, useState } from "react";
import fetch from "node-fetch";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, InputGroup, Col, Row, Container } from "react-bootstrap";

function SecondForm() {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      fetch("./form2.json")
        .then((res) => res.json())
        .then(
          (response) => {
            setResults(response);
            console.log(response);
          },
          (error) => {
            setError(error);
          }
        );
    }
    fetchData();
  }, []);

  const createMarkup = (result) => {
    return (
      <Container>
              
        <div dangerouslySetInnerHTML={{ __html: result.content }} />
        <div className="input-group">
               
          {result.fields.map((field) => {
            let colSize;
            if (field.colSize === "Auto") {
              colSize = undefined;
            } else {
              colSize = Number(field.colSize);
            }
            if (field.type === "FormText") {
              return (
                <Col key={field.key} xs={colSize}>
                  <Form>
                    <Form.Label>{field.label}</Form.Label>
                    <Form.Control
                      type={field.type}
                      placeholder={field.placeholder}
                    />
                  </Form>
                </Col>
              );
            }

            if (field.type === "FormEmail") {
              return (
                <Col key={field.key} xs={colSize}>
                  <Form>
                    <Form.Label>{field.label}</Form.Label>
                    <Form.Control
                      type={field.type}
                      placeholder={field.placeholder}
                    />
                  </Form>
                </Col>
              );
            }

            if (field.type === "FormPhone") {
              return (
                <Col key={field.key} xs={colSize}>
                  <Form>
                    <Form.Label>{field.label}</Form.Label>
                    <Form.Control
                      type={field.type}
                      placeholder={field.placeholder}
                    />
                  </Form>
                </Col>
              );
            }

            if (field.type === "FormFile") {
              return (
                <Col key={field.key} xs={colSize}>
                  <Form>
                    <Form.Label>{field.label}</Form.Label>
                    <Form.File id="custom-file" custom />
                    <p>{field.help}</p>
                  </Form>
                </Col>
              );
            }
            if (field.type === "FormDate") {
              return (
                <Col key={field.key} xs={colSize}>
                  <Form>
                    <Form.Label>{field.label}</Form.Label>
                    <Form.Control
                      type={field.type}
                      placeholder={field.placeholder}
                    />
                  </Form>
                </Col>
              );
            }

            if (field.type === "FormTextarea") {
              return (
                <Col key={field.key} xs={colSize}>
                  <Form>
                    <Form.Label>{field.label}</Form.Label>
                    <Form.Control
                      type={field.type}
                      placeholder={field.placeholder}
                    />
                    <p>{field.help}</p>
                  </Form>
                </Col>
              );
            }
            if (field.type === "FormRadio") {
              return (
                <Col key={field.key} xs={colSize}>
                  <Form.Label>{field.label}</Form.Label>
                  <InputGroup>
                    <InputGroup.Radio name="button" />
                    {field.options[0].name}
                    <InputGroup.Radio name="button" />
                    {field.options[1].name}
                  </InputGroup>
                  <p>{field.help}</p>
                </Col>
              );
            }
          })}
              
        </div>
         
      </Container>
    );
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <div className="App">
        {results.map((result) => (
          <>{createMarkup(result)}</>
        ))}

        <Button>Submit</Button>
      </div>
    );
  }
}
export default SecondForm;
