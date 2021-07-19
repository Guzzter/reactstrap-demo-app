import React, { useState } from 'react'

import './App.css';
import { Button, Tooltip, Container, Jumbotron } from 'reactstrap';
import Navigation from './components/Navigation';

function App() {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
      <Container>
          <Navigation />
          <Jumbotron>
            
          <h1 className="display-4">Hello, Reactstrap!</h1>
          
        <p>
          Installed optional deps:
          npm install react-transition-group react-popper @popperjs/core
        </p>
          <p className="lead">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className="my-4" />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container. This is a <a href="#" id="TooltipExample">tooltip</a> example.
            <Tooltip target="TooltipExample" placement="top" isOpen={tooltipOpen} toggle={toggle}>
              This is just a tooltip
            </Tooltip>
          </p>
          <Button color="primary" href="https://reactstrap.github.io/">Docs reactstrap</Button>
        </Jumbotron>
      </Container>
  );
}

export default App;
