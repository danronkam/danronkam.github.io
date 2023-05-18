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
                    width: 300,
                    height: 300
            }}
            >
            <Cube size={300} index="front">
                <div>
                    <img style={{width: '280px', height: '300px'}} src="https://derailed-seed.s3.us-west-1.amazonaws.com/kamcube_11.png"></img>
                </div>
                <div>
                    <img style={{width: '280px', height: '300px'}} src="https://derailed-seed.s3.us-west-1.amazonaws.com/kamcube_11.png"></img>
                </div>
                <div>
                    <img style={{width: '280px', height: '300px'}} src="https://derailed-seed.s3.us-west-1.amazonaws.com/kamcube_11.png"></img>
                </div>
                <div>
                    <img style={{width: '280px', height: '300px'}} src="https://derailed-seed.s3.us-west-1.amazonaws.com/kamcube_11.png"></img>
                </div>
                <div>
                    <img style={{width: '280px', height: '300px'}} src="https://derailed-seed.s3.us-west-1.amazonaws.com/kamcube_11.png"></img>
                </div>
                <div>
                    <img style={{width: '280px', height: '300px'}} src="https://derailed-seed.s3.us-west-1.amazonaws.com/kamcube_11.png"></img>
                </div>
            </Cube>
            </div>
      </div>
    );
  }
}
export default LogoCube