import React from "react";
import Cube from "../CubeComponent"

class TestCube extends React.Component {
    render() {
        return(
            <div>
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
        );
    }

}

export default TestCube