import React, {createRef, useEffect} from "react";
import {useLocation} from "react-router";

const ScrollIntoView = ({children, top = true}) => {
    const location = useLocation()
    const itemRef = createRef()
    useEffect(() => {
        if (top) window.scrollTo(0, 0)
        else itemRef.current.scrollIntoView({behavior: 'smooth'})

        // eslint-disable-next-line
    }, [
        location
    ])
    return <div ref={itemRef}>
        {children}
    </div>
}

export default ScrollIntoView