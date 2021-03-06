import React from "react";
import "./App.css";
import { useEffect, useState } from "react";
import fetch from "node-fetch";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
import SecondForm from "./components/SecondForm";

function App() {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      fetch("./form1.json")
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
              
        <Row>
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
                    <Form.File id="custom-file" label="" custom />
                    <p>{field.help}</p>
                  </Form>
                </Col>
              );
            }
          })}
              
        </Row>
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
        <SecondForm />
      </div>
    );
  }
}
export default App;
