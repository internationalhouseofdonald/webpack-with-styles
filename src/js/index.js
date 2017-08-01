import _ from 'lodash';
// import 'designmodo-flat-ui';
import '../css/index.css';

function component() {
  var container, jumbotron, heading;
  container = document.createElement('div');
  jumbotron = document.createElement('div');
  heading = document.createElement('h1');

  // Bootstrap - V4 Alpha
  container.classList.add("container-fluid", "p-0");
  jumbotron.classList.add("jumbotron",
  "jumbotron-fluid", 
  "text-center", 
  "bg-info");
  
  // Lodash, currently included via a script, is required for this line to work
  heading.innerHTML = _.join(['Hello', 'webpack'], ' ');
  heading.classList.add('hello');
  container.appendChild(jumbotron);
  jumbotron.appendChild(heading);


  return container;
}

document.body.appendChild(component());