import React from 'react'

function Input({fetVal , handleChange}) {
    return (
        <>
            <input type="text" value={fetVal} onChange={handleChange} autoFocus />
        </>
    )
}

export default Input
