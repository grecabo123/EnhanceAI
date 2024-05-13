import { PrimeIcons } from 'primereact/api';
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { Panel } from 'primereact/panel';
import React, { useState } from 'react'
import { FaRobot } from 'react-icons/fa';
import { Chips } from 'primereact/chips';


function AI() {

    const [input, setinput] = useState("")
    const [Results, setResult] = useState([]);
    const [value, setValue] = useState([])
    const [loading ,setLoading] = useState(true)

    const Search = async (e) => {
        e.preventDefault();
        setLoading(true)
        const response = await fetch(
            'https://api.edenai.run/v2/image/generation',
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjRhOTQxMTUtYmQ5Ni00ZGRlLTk5NTYtZDEzNjM5YTRkMDY2IiwidHlwZSI6ImFwaV90b2tlbiJ9.qRnZZSVkmEtp-rfKBg1HimqH8-4HkQcS4DK4SuqdLJE",
                    "User-Agent": "Chrome",
                },
                body: JSON.stringify({
                    "providers": "openai,deepai,stabilityai",
                    "text": input,
                    "resolution": "512x512",
                }),
            }
        );

        const result = await response.json();
        setLoading(false)
        setResult(result);

    }

    return (
        <div className='container'>
            <form onSubmit={Search}>
                <div className="row">
                    <Panel header="Generate Design By AI">
                        <div className="p-inputgroup flex-1">
                            <Button icon={<FaRobot />} />
                            <Chips value={value} onChange={(e) => setValue(e.value)}></Chips>
                        </div>
                    </Panel>
                </div>
            </form>
        </div>
    )
}

export default AI