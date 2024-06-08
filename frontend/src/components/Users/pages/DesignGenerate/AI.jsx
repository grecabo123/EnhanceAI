import { PrimeIcons } from 'primereact/api';
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { Panel } from 'primereact/panel';
import React, { useState } from 'react'
import { FaRobot } from 'react-icons/fa';
import { Chips } from 'primereact/chips';
import axios from 'axios';
import { Image } from 'primereact/image';
import { Dialog } from 'primereact/dialog';


function AI() {

    const [input, setinput] = useState("")
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false)


    const URL = 'https://api.unsplash.com/search/photos';

    const IMAGES_PER_PAGES = 30;

    const Search = async (e) => {
        e.preventDefault();

        const data_ = {
            name: input,
        }
        try {
            const data = await fetch(
                `${URL}?query=${data_.name
                }&page=${3}&per_page=${IMAGES_PER_PAGES}&client_id=${import.meta.env.VITE_API_ACCESS
                }`
            )
            const result = await data.json();
            setImages(result.results);
            setTotalPages(result.total_pages);
            setLoading(false);
        } catch (error) {
            console.log(error)
        }




        // setLoading(true)
        // const response = await fetch(
        //     'https://api.edenai.run/v2/image/generation',
        //     {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //             Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjRhOTQxMTUtYmQ5Ni00ZGRlLTk5NTYtZDEzNjM5YTRkMDY2IiwidHlwZSI6ImFwaV90b2tlbiJ9.qRnZZSVkmEtp-rfKBg1HimqH8-4HkQcS4DK4SuqdLJE",
        //             "User-Agent": "Chrome",
        //         },
        //         body: JSON.stringify({
        //             "providers": "openai,deepai,stabilityai",
        //             "text": data_.name,
        //             "resolution": "512x512",
        //         }),
        //     }
        // );

        const result = await response.json();
        console.log(result);
        // setLoading(false)
        // setResult(result);

    }

    const RequestForm = (e) => {
        setVisible(true)
    }


    return (
        <div className='container'>
                <div className="row">
                    <Panel header="Generate Design By AI">
                        <div className="d-flex justify-content-end mb-2">
                            <Button className='p-button-info p-button-sm' label='Request' onClick={RequestForm} />
                        </div>
            <form onSubmit={Search}>
                        <div className="p-inputgroup flex-1">
                            <InputText className='p-inputtext-sm' name='name' onChange={(e) => setinput(e.target.value)} />
                            {/* <Chips value={value} onChange={(e) => setValue(e.value)}></Chips> */}
                        </div>
                        <div className="mt-2">
                            <Button className='p-button-sm p-button-info w-100' label='Generate Design' />
                        </div>

                        <div className="container">
                            <div className="row">

                            </div>
                        </div>

                        {loading ? (
                            <p className='loading'>Loading...</p>
                        ) : (
                            <>
                                <div className='col-12'>
                                    {images.map((image) => (
                                        <Image
                                            key={image.id}
                                            src={image.urls.small}
                                            alt={image.alt_description}
                                            className='img-fluid m-2'
                                            width={150}
                                            preview
                                            downloadIcon
                                            downloadable={true}
                                            
                                        />
                                    ))}
                                </div>

                            </>
                        )}
                        </form>

                    </Panel>
                </div>

            <Dialog header="Request Form" visible={visible} position='top' draggable={false}
                onHide={() => setVisible(false)}
                style={{ width: '50vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}
            >
                <form>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mb-2">
                                <label htmlFor="" className="form-label">
                                    Seller Email
                                </label>
                                <InputText className='w-100 p-inputtext-sm' />
                            </div>
                        </div>
                    </div>
                </form>

            </Dialog>
        </div>
    )
}

export default AI