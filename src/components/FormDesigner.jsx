import { useState } from "react";

export default function FormDesigner(){

    const [label, setLabel] = useState('')
    const [type, setType]  = useState('')
    const [isReq,setIsReq] = useState(false)

    const [fields, setFields] = useState([])

    function handleForm(){

    }

    return(
        <>
        <header>
            <h1>Form Designer</h1>
        </header>
        <main>
            <div className="dynamicBuilder"> 
            <div className="FieldSettings">
                <h3>Field Settings</h3>

                <form action={handleForm}>

                    <label htmlFor="Label">
                        Label 
                        <input
                        id="Label"
                        type="text"
                        value={label}
                        name="Label"
                        placeholder="eg..,Name"
                        onChange={(e) => setLabel(e.currentTarget.value)}
                        />
                    </label>

                    <label htmlFor="type">
                        Field Type
                       <select id="type"
                        value={type}
                        onChange={(e) => setType(e.currentTarget.value)}>
                            <option value="">Select Type</option>
                            <option value="text">Text</option>
                            <option value="number">Number</option>
                            <option value="email">Email</option>
                            <option value="password">Password</option>
                       </select>
                    </label>

                    <input
                    id='req'
                    type="checkbox"
                    value={isReq} 
                    onChange={(e) => setIsReq(e.target.value)}
                    />
                    <label htmlFor="req">Required</label>
                </form>

                <button>+ Add Field</button>
                </div>
            </div>
        </main>
        </>
    )
}