import React from 'react';
import Tilt from './vanilla-tilt';
import pic from './assets/pic.jpg';
import './about.css'

const About = () => {
    const options = {
        scale: 1.05,
        speed: 1000,
        max: 10,
        glare: true,
        "max-glare": 0.1
    }
    return (
        <>
            <div className="j-scontainer">
                <div className="j-sbox1">
                    <div className="j-sbox1-title">
                        <div className="j-text">
                            <div className="j-text-1">
                                <h3><i><b>
                                    <span className="j-text1">Shakes</span>
                                    <span className="j-text2">Journal</span>
                                </b></i></h3>
                            </div>
                            <div className="j-text-1 j-text-2">
                            </div>
                        </div>
                    </div>
                    <div className="j-sbox22">
                        <Tilt options={options}>
                            <img src={pic} alt="" />
                        </Tilt>
                    </div>
                    <div className="j-sbox1-content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptate commodi esse laborum voluptatibus assumenda, molestiae quaerat vero qui nulla.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, distinctio?
                    </div>
                </div>
                <div className="j-sbox2">
                    <div className="j-sbox2-image">
                        <Tilt options={options}>
                            <img class="j-journal-img" src={pic} alt="" />
                        </Tilt>
                    </div>
                </div>
            </div>

        </>

    );
}

export default About;