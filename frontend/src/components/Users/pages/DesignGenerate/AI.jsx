import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import React, { useState } from 'react'

function AI() {

    const [input, setinput] = useState("")

    const Search = async (e) => {
        e.preventDefault();

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
        console.log(result);


    }


    return (
        <div className='container'>
            <form onSubmit={Search}>
                <div className="row">
                    <div className="d-flex justify-content-center">
                        <div className="col-lg-9">
                            <InputText onChange={(e) => setinput(e.target.value)} className='w-100' />
                            <Button className='w-100' label='Search' />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AI