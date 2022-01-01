import React, { useState } from 'react'

function HoneyBlock(props) {
    const [show, setShow] = useState(false);
    console.log({ props })
    return (
        <div className=""
            style={{
                display: "flex",
                alignItems: "center",
                position:"relative"
            }}
        >
            <div className="item"
                onMouseEnter={
                    e => {
                        setShow(true);
                    }
                }
                onMouseLeave={
                    e => {
                        setShow(false);
                    }
                } >
                <img
                    style={{
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        width: "100%"
                    }}
                    src={props.image}
                    alt="" />
            </div>
            <p className={show ? "honeyDiv" : "notHoneyDiv"} >
                <h1> {props.name} </h1>
                <p> {props.position} </p>
            </p>
        </div>
    )
}

export default HoneyBlock