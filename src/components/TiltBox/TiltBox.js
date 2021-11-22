import React,{useEffect,useRef} from 'react';
import VanillaTilt from 'vanilla-tilt';
import './TiltBox.css';

export default function TiltBox({options,children,...rest}) {

    const tilt = useRef(null);

    useEffect(() => {
        VanillaTilt.init(tilt.current, options);
      }, [options]);

    return (
        <div ref={tilt} {...rest}>
            {children}
        </div>
    );
}
