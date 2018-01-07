import React from "react";
import "./breathe.css";
import Nav from '../../Nav';
import Container from '../../Bootstrap/Container';
import Row from '../../Bootstrap/Row';
import Col from '../../Bootstrap/Col';


const animateBar = () => {
  const breatheIn = document.getElementById("breathIn");
  const breatheOut = document.getElementById("breathOut");
  const startButton = document.getElementById("startButton");
  const stopButton = document.getElementById("stopButton");
  const dynamic = document.getElementById("dynamic");
  startButton.disabled = true;
  stopButton.disabled = false;
  dynamic.style.visibility = "visible";
  let current_progress = 0;
  let barFull = false;
  const interval = setInterval(function() {
      if (barFull === false){
        current_progress += .5;
        breatheIn.style.fontWeight = "bolder"
        breatheOut.style.color = "white"
        breatheOut.style.fontWeight = "normal"
        breatheOut.style.color = "#706e96"

        if (current_progress === 100) {
          barFull = true;
        }
      }
      else {
        current_progress -= .5;
        breatheIn.style.fontWeight = "normal"
        breatheIn.style.color = "#706e96"
        breatheOut.style.fontWeight = "bolder"
        breatheOut.style.color = "white"

        if (current_progress === 0) {
          barFull = false;
        }
      }
      dynamic.style.width = current_progress + "%";
  }, 25);
  stopButton.addEventListener("click", function(){
    clearInterval(interval);
    stopButton.disabled = true;
    dynamic.style.visibility = "hidden";
    startButton.disabled = false;
  });
};



const Breathe = () => (
  <div>
  <Nav/>
  <br/>
  <br/>
  <Container>
    <Row>
      <Col size="lg-4">
        <h2 id="breathIn">Breathe In</h2>
      </Col>
      <Col size="lg-4">
        <div className="progDiv">
          <div className="progress">
              <div className="progress-bar progress-bar-custom" id="dynamic"></div>
          </div>
        </div>
      </Col>
      <Col size="lg-4">
          <h2 id="breathOut">Breathe Out</h2>
      </Col>
    </Row>
    <Row>
      <Col size="lg-4 offset-lg-4">
        <div id="startStop">
        <button
          type="button"
          id="startButton"
          class="btn btn-secondary btn-lg leftRow"
          onClick={animateBar}    >
          Start
        </button>
        <button
          type="button"
          id="stopButton"
          class="btn btn-secondary btn-lg leftRow"
        >
        Stop
        </button>
        </div>
      </Col>
    </Row>
  </Container>
  </div>  
);

export default Breathe;