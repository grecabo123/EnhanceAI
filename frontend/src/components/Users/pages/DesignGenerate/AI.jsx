import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Panel } from 'primereact/panel';
import React, { useState } from 'react';
import { Image } from 'primereact/image';
import { Dialog } from 'primereact/dialog';
import { InputTextarea } from 'primereact/inputtextarea';
import { Calendar } from 'primereact/calendar';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function AI() {
    const [input, setinput] = useState("");
    const [nameproduct, setProduct] = useState("")
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);
    const [uploadfile, setUpload] = useState([]);
    const history = useHistory();
    const [Data, setData] = useState({
        email: "",
        desc: "",
        error: [],
    });
    const [generateimg, setGenerateimg] = useState(1);
    const [btndis, setBtn] = useState(false);
    const [CollentDate, setDate] = useState("");

    const URL = 'https://api.unsplash.com/search/photos';
    const IMAGES_PER_PAGES = 21;

    const Search = async (e) => {
        e.preventDefault();
        setProduct(input)
        setBtn(true);
        const data_ = {
            name: input,
            width: 893,
            height: 1174,
            seed: 42,
            flower: "pollinations"
        };
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjRhOTQxMTUtYmQ5Ni00ZGRlLTk5NTYtZDEzNjM5YTRkMDY2IiwidHlwZSI6ImFwaV90b2tlbiJ9.qRnZZSVkmEtp-rfKBg1HimqH8-4HkQcS4DK4SuqdLJE",
            },
            body: JSON.stringify({
                providers: "amazon/titan-image-generator-v1_premium",
                text: data_.name,
                resolution: "512x512",
                num_images: 5
            }),
        };

        fetch("https://api.edenai.run/v2/image/generation", options)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setImages(data['amazon/titan-image-generator-v1_premium'].items || []);
                setGenerateimg(0);
                console.log(data);
                setBtn(false);
            })
            .catch((error) => {
                setBtn(false);
                console.error(error);
            });
    };

    const RequestForm = (e) => {
        history.push(`/customer/request/form/flower`);
    };

    const handleinput = (e) => {
        e.persist();
        setData({ ...Data, [e.target.name]: e.target.value });
    };

    const handleupload = (e) => {
        e.persist();
        setUpload({ file: e.target.files[0] });
    };

    const RequestFormData = (e) => {
        e.preventDefault();
        const form = new FormData();
    };

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
                        </div>
                        <div className="mt-2">
                            <Button loading={btndis} className='p-button-sm p-button-info w-100' label='Generate Design' />
                        </div>
                        {
                            generateimg === 1 ? "" :
                            <div className="container mt-4">
                                <div className="row">
                                    {images.map((item, index) => (
                                        <div key={index} className="col-md-4 mb-3">
                                            <Image
                                                src={item.image_resource_url}
                                                alt={`Generated Flower ${index + 1}`}
                                                className='img-fluid'
                                                width={'100%'}
                                                preview
                                                downloadIcon
                                                downloadable={true}
                                            />
                                            <p className='text-center'> { nameproduct == "" ? "" : nameproduct + ' '+ '#'+ `${index + 1}` }</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        }
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
                                    <span className='text-danger'>*</span>Description
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
    );
}

export default AI;
