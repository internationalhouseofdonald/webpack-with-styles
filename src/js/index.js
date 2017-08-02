import _ from 'lodash';
// import 'file-loader';
// import './flat-ui/js/flat-ui.js';
import '../css/index.css';
// import '../flat-ui/css/flat-ui.css';

function component() {
  var container, jumbotron, heading, button;
  container = document.createElement('div');
  jumbotron = document.createElement('div');
  heading = document.createElement('h1');
  button = document.createElement('button');

  // Bootstrap - V4 Alpha
  container.classList.add("container-fluid", "p-0");
  jumbotron.classList.add("jumbotron",
  "jumbotron-fluid", 
  "text-center", 
  "bg-info");
  button.classList.add("btn",
  "btn-block",
  "btn-lg",
  "btn-inverse");
  
  // Lodash, currently included via a script, is required for this line to work
  heading.innerHTML = _.join(['Hello', 'webpack'], ' ');
  heading.classList.add('hello');

  button.innerHTML = "My Button";

  container.appendChild(jumbotron);
  jumbotron.appendChild(heading);
  document.body.appendChild(button);


  return container;
}

document.body.appendChild(component());