import * as React from 'react';
import './Cube.css'
import Cube from 'react-3d-cube';
import "./Cube.css"


class LogoCube extends React.Component {
  render() {
    return (
      <div>
            <div
                style={{
                    width: 400,
                    height: 400
            }}
            >
            <Cube size={400} index="front" id="kamCube" className="testingCube">
                <div>
                    <img alt="Dan Kam" style={{width: '400px', height: '400px'}} src="https://derailed-seed.s3.us-west-1.amazonaws.com/kamcube_11.png"></img>
                </div>
                <div>
                    <img alt="Dan Kam" style={{width: '400px', height: '400px'}} src="https://derailed-seed.s3.us-west-1.amazonaws.com/kamcube_11.png"></img>
                </div>
                <div>
                    <img alt="Dan Kam" style={{width: '400px', height: '400px'}} src="https://derailed-seed.s3.us-west-1.amazonaws.com/kamcube_11.png"></img>
                </div>
                <div>
                    <img alt="Dan Kam" style={{width: '400px', height: '400px'}} src="https://derailed-seed.s3.us-west-1.amazonaws.com/kamcube_11.png"></img>
                </div>
                <div>
                    <img alt="Dan Kam" style={{width: '400px', height: '400px'}} src="https://derailed-seed.s3.us-west-1.amazonaws.com/kamcube_11.png"></img>
                </div>
                <div>
                    <img alt="Dan Kam" style={{width: '400px', height: '400px'}} src="https://derailed-seed.s3.us-west-1.amazonaws.com/kamcube_11.png"></img>
                </div>
            </Cube>
            </div>
      </div>
    );
  }
}
export default LogoCube