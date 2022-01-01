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
            <div className="scontainer">
                <div className="sbox1">
                    <div className="sbox1-title">
                        <div className="text">
                            <div className="text-1">
                                <h3><i><b>
                                    <span className="text1">Shakes</span>
                                    <span className="text2">Journal</span>
                                </b></i></h3>
                            </div>
                            <div className="text-1 text-2">
                            </div>
                        </div>
                    </div>
                            <div className="sbox22">
                                
                                    <Tilt options={options}>
                                        <img src={pic} alt="" />
                                    </Tilt>
                            </div>
                    <div className="sbox1-content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptate commodi esse laborum voluptatibus assumenda, molestiae quaerat vero qui nulla.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, distinctio?
                    </div>
                </div>
                <div className="sbox2">
                    <div className="sbox2-image">
                        <Tilt options={options}>
                            <img class="journal-img" src={pic} alt="" />
                        </Tilt>
                    </div>
                </div>

            </div>

        </>

    );
}

export default About;