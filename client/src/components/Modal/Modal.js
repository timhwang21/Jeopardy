//Modal needs to know about QuestionButton and/or get data from question button
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Timer from "../Timer";
import questions from "../../Json/questions.json";

function JeopardyModal(props) {
  // Flag to change contents of modal after timer expires
  const [isExpired, setIsExpired] = useState(false);

  if (props.question == null) {
    return null;
  }

  return (
    <>
      <Modal
        show={props.show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Dialog>
          <Modal.Header>
            <h5
              className="modal-title"
              id={"categoryModal-" + props.question.category}
            >
              {" "}
              <Timer onTimeEnd={() => setIsExpired(true)} />
              {isExpired
                ? "Oops, no more time"
                : JSON.stringify(props.question.question)}
            </h5>
            <Button onClick={props.onClose}>Close</Button>
          </Modal.Header>
          <Modal.Body>
            {/* <Timer onTimeEnd={() => setIsExpired(true)} />
            {isExpired ? 'Oops, no more time' : JSON.stringify(props.question)} */}
            {/* close the modal out if user selects correct or wrong answer...will also have this happen if alotted time for question runs out as well */}
            {props.question.choices.map((answer) => (
              <Button
                className="answer-button"
                //when you click an answer it will check whether it is correct or not
                //if it is then add to the score, if not subtract from the score
                onClick={() => {
                  if (answer === props.question.correctAnswer) {
                    props.onClose();

                    alert("Correct!");
                  } else {
                    props.onClose();
                    alert("Sorry! Wrong answer!");
                  }
                }}
              >
                {JSON.stringify(answer)}
              </Button>
            ))}
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal.Dialog>
      </Modal>
    </>
  );
}
export default JeopardyModal;
