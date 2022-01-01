import { useEffect, useRef } from 'react'
import VanillaTilt from "vanilla-tilt";

const Tilt = ({ options, ...rest }) => {
    const tilt = useRef(null);
    useEffect(() =>{        
        VanillaTilt.init(tilt.current, options)
    });
    return <div ref={tilt} {...rest} />;
}
export default Tilt;