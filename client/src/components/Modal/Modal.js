//Modal needs to know about QuestionButton and/or get data from question button
import React from "react";
import Modal from "react-bootstrap/Modal";

import Button from "react-bootstrap/Button";

function JeopardyModal(props) {
  if (props.question == null) {
    return null
  }

  console.log(props);
  console.log(props.question);
  console.log(props.question.category);

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
            ></h5>
          </Modal.Header>
          <Modal.Body>
            {JSON.stringify(props.question)}
            {/* close the modal out if user selects correct or wrong answer...will also have this happen if alotted time for question runs out as well */}
            {/* {props.question.choices.map((answer) => (
              <Button
                className="answer-button"
                key={answer.correctAnswer}
                data-dismiss={
                  answer === props.question.correctAnswer ||
                  answer !== props.question.correctAnswer
                    ? "modal"
                    : null
                }
                aria-label={
                  answer === props.question.correctAnswer ||
                  answer !== props.question.correctAnswer
                    ? "modal"
                    : null
                }
                //when you click an answer it will check whether it is correct or not
                //if it is then add to the score, if not subtract from the score
                onClick={(event) => {
                  console.log(event);
                  //counts the questions, once all have been selected it would then push the suer to the highscores page/ end the game

                  //i want to change it to just end the game.
                  //   setCount(questionCount + 1);
                  //   if (questionCount === questions.length) {
                  //     history.push("/highscores");
                  //   }
                  //after a user has selected an answer no matter right or wrong id like to disable the modal
                  //this way they can not select the same question again
                  //so if the variable is data-target, after clicking it you could check it and change to data-bs-target
                }}
              >
                {answer}
              </Button>
            ))} */}
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal.Dialog>
      </Modal>
    </>
  );
}
export default JeopardyModal;