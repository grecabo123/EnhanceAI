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
import { InputTextarea } from 'primereact/inputtextarea';
import { Calendar } from 'primereact/calendar';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';



function AI() {

    const [input, setinput] = useState("")
    const [images, setImages] = useState("");
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false)
    const [uploadfile, setUpload] = useState([])
    const history = useHistory();
    const [Data, setData] = useState({
        email: "",
        desc: "",
        error: [],
    })
    const [CollentDate, setDate] = useState("")

    const URL = 'https://api.unsplash.com/search/photos';

    const IMAGES_PER_PAGES = 21;
    const Search = async (e) => {
        e.preventDefault();
        const data_ = {
            name: input,
            width: 893,
            height: 1174,
            seed: 42,
            flower: "pollinations"
        }

        const options = {
            method: "POST",
            url: "https://api.edenai.run/v2/image/generation",
            headers: {
                authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjRhOTQxMTUtYmQ5Ni00ZGRlLTk5NTYtZDEzNjM5YTRkMDY2IiwidHlwZSI6ImFwaV90b2tlbiJ9.qRnZZSVkmEtp-rfKBg1HimqH8-4HkQcS4DK4SuqdLJE",
            },
            data: {
                providers: "openai/dall-e-3",
                text: data_.name,
                resolution: "1024x1024",
            },
        };

        axios
            .request(options)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });

        // const response = await fetch(
        //     'https://api.edenai.run/v2/image/generation',
        //     {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //             "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjRhOTQxMTUtYmQ5Ni00ZGRlLTk5NTYtZDEzNjM5YTRkMDY2IiwidHlwZSI6ImFwaV90b2tlbiJ9.qRnZZSVkmEtp-rfKBg1HimqH8-4HkQcS4DK4SuqdLJE",
        //             "User-Agent": "Chrome",
        //         },
        //         body: JSON.stringify({
        //             "providers": "openai,deepai,stabilityai",
        //             "text": data_.name,
        //             "resolution": "512x512",
        //         }),
        //     }
        // );



        // const data = await response.json();
        // setImages(data.deepai.items[0].image_resource_url)
        // console.log(data);
        // const resp = await fetch(
        //   `https://api.limewire.com/api/image/generation`,
        //   {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json',
        //       'X-Api-Version': 'v1',
        //       Accept: 'application/json',
        //       Authorization: `Bearer ${import.meta.env.VITE_API_IMAGE_GENERATE}`
        //     },
        //     body: JSON.stringify({
        //       prompt: 'A cute baby sea otter',
        //       aspect_ratio: '1:1'
        //     })
        //   }
        // );

        // const data = await resp.json();
        // console.log(data);


        // const imageUrl = `https://pollinations.ai/p/${encodeURIComponent(data_.name)}?width=${data_.width}&height=${data_.height}&seed=${data_.seed}&model=${data_.flower}`;

        // try {
        //     const response = await fetch(imageUrl);
        //     const result = await response.buffer();
        //     console.log(result);
        //     setLoading(false);
        // } catch (error) {
        //     console.log(error);
        //     setLoading(false);
        // }
    }



    const RequestForm = (e) => {

        history.push(`/customer/request/form/flower`)
        // setVisible(true)
    }

    const handleinput = (e) => {
        e.persist();
        setData({ ...Data, [e.target.name]: e.target.value });
    }

    const handleupload = (e) => {
        e.persist();
        setUpload({ file: e.target.files[0] })
    }

    const RequestFormData = (e) => {
        e.preventDefault();

        const form = new FormData;




    }


    return (
        <div className='container'>
            <div className="row">
                <Panel header="Generate Design By AI" footer="Upload Generate You must download the file and attach it to the form request">
                    <div className="d-flex justify-content-end mb-2">
                        <Button className='p-button-info p-button-sm' label='Request Form' onClick={RequestForm} />
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




                        {/* {
                            images.length === 0 ? ""
                                :
                            } */}

                        <Image
                            src={images}
                            // src={`https://api.deepai.org/job-view-file/29534bfc-d4e4-42ba-8c7f-dca8357db1fd/outputs/output.jpg?art-image=true`}
                            alt={"Flower"}
                            className='img-fluid mt-5 mr-4'
                            width={250}
                            preview
                            downloadIcon
                            downloadable={true}
                        />
                        {/* {loading ? (
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
                        )} */}
                    </form>

                </Panel>
            </div>

            <Dialog header="Request Form" visible={visible} position='top' draggable={false}
                onHide={() => setVisible(false)}
                style={{ width: '50vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}
            >
                <form onSubmit={RequestFormData} id='form_reset'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mb-2">
                                <label htmlFor="" className="form-label">
                                    <span className='text-danger'>*</span>Seller Email
                                </label>
                                <InputText onChange={handleinput} name='email' className='w-100 p-inputtext-sm' />
                            </div>
                            <div className="col-lg-12 mb-2">
                                <label htmlFor="" className="form-label">
                                    <span className='text-danger'>*</span>Attach Image
                                </label>
                                <InputText onChange={handleupload} name='file' type='file' className='w-100 p-inputtext-sm' />
                            </div>
                            <div className="col-lg-12 mb-2">
                                <label htmlFor="" className="form-label">
                                    Date
                                </label>
                                <Calendar className='w-100 p-inputtext-sm' showIcon showTime hourFormat='12' />
                            </div>
                            <div className="col-lg-12 mb-2">
                                <label htmlFor="" className="form-label">
                                    <span className='text-danger'>*</span>Desctiption
                                </label>
                                <InputTextarea name='desc' onChange={handleinput} className='w-100' rows={5} cols={5} style={{ resize: "none" }} />
                            </div>
                            <div className="mt-2">
                                <Button className='w-100 p-button-info' label='Submit' />
                            </div>
                        </div>
                    </div>
                </form>

            </Dialog>
        </div>
    )
}

export default AI