import React, { useState } from 'react';

const option = 
    [
        {
            id: 1,
            tab: "tab 1",
            value: "tab 1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        {
            id: 2,
            tab: "tab 2",
            value: "tab 2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        {
            id: 3,
            tab: "tab 3",
            value: "tab 3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
    ]


function Multitab() {
    const [getid, setGetid] = useState('1');
    const handletab = (e) => {
        setGetid(e.target.id)
    }
  return (
    <div>
    <div>
        <div>
            {option.map((opt, i)=> (
                <button key={i} id={opt.id} onClick={(handletab)} disabled={getid === `${opt.id}`}>{opt.tab}</button>
            ))}
        </div>
        <div>
            {option.map((opt, i)=>(
                <div key={i}>
                    {getid === `${opt.id}` && <div>{opt.value}</div>}
                </div>
            ))}
        </div>
    </div>

    </div>
  )
}

export default Multitab