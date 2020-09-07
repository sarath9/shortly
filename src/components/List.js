import React from 'react'

function List({data}) {
    return (
       
        <>
        {
            data.map(el => <li className="listContainer__card">
            <div className="listContainer__col d-flex-center">{el.url}</div>
            <div className="listContainer__col text-right d-flex-center content-right">
            <a href={`https://rel.ink/${el.hashid}`} target="_blank">https://rel.ink/{el.hashid} </a> <button className="copy"> Copy </button></div>
          </li>)
        }
         
        </>
    )
}

export default List
