import * as React from 'react';
import './Cube.css'
import Cube from 'react-3d-cube';
import "./Cube.css"

class LogoCube extends React.Component {
  render() {
    return (
      <div>
        <center>
            <div
            style={{
                width: 300,
                height: 300
            }}
            >
            <Cube size={300} index="front" />
            </div>
            <div
            style={{
                width: 300,
                height: 300
            }}
            >
            <Cube size={300} index="front">
                <div>front</div>
                <div>right</div>
                <div>back</div>
                <div>left</div>
                <div>top</div>
                <div>bottom</div>
            </Cube>
            </div>
        </center>
      </div>
    );
  }
}
export default LogoCube