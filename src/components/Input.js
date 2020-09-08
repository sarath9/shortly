import React from 'react'

function Input({fetVal , handleChange, error}) {
    return (
        <>
            <input type="text" value={fetVal} onChange={handleChange} autoFocus placeholder="Enter a valid URL"/>
            {
                error ? <div className="error">{error}</div> : ''
            }
                  </>
    )
}

export default Input
