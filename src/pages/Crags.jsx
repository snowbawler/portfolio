import React from "react"
import { useNavigate } from "react-router-dom"

const Crags = () => {
    const navigate = useNavigate();
    return(
        <>
            <h1>Placeholder</h1>
            <button onClick={() => navigate(-1)}>back</button>
        </>
    )
}

export default Crags