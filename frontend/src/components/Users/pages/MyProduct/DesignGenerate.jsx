import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Panel } from 'primereact/panel';
import React, { useRef, useState } from 'react';
import { Image } from 'primereact/image';
import { Dialog } from 'primereact/dialog';
import { InputTextarea } from 'primereact/inputtextarea';
import { Calendar } from 'primereact/calendar';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { InputNumber } from 'primereact/inputnumber';
import axios from 'axios';
import { Toast } from 'primereact/toast';

function DesignGenerate() {
    const [input, setinput] = useState("");
  
    const [pricedata, setPrice] = useState("")
    const [product_img, setimg] = useState([]);
    const [images, setImages] = useState([]);
    const [visible, setVisible] = useState(false);
    const history = useHistory();
    const [product, setDataProduct] = useState({
        name: "",
        desc: "",
        error: [],
    });
    const toast = useRef(null)
    const [visibleAdd, setAddVisible] = useState(false)
    const [generateimg, setGenerateimg] = useState(1);
    const [btndis, setBtn] = useState(false);
    const [btndisadd, setBtnadd] = useState(false)
    const [title, setProduct] = useState("")
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
        setAddVisible(true)
    };

    const handleinput = (e) => {
        e.persist();
        setDataProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleupload = (e) => {
        e.persist();
        setimg({ file: e.target.files[0] });
    };
    const AddProduct = (e) => {
        e.preventDefault();
        setBtnadd(true)

        const data = new FormData;

        data.append('name', product.name)
        data.append('desc', product.desc)
        data.append('file', product_img.file === undefined ? "" : product_img.file)
        data.append('pricedata', pricedata)
        data.append('user_fk', localStorage.getItem('auth_id'))

        axios.post(`/api/AddProductDesign`, data).then(res => {
            if (res.data.status === 200) {
                toast.current.show({
                    severity: "success",
                    summary: "Product Added",
                    detail: "Successfully",
                });
                document.getElementById('form_reset').reset();
                setAddVisible(false)
                setBtnadd(false)
                setDataProduct({
                    name: "",
                    desc: "",
                    error: [],
                })
                setPrice("")
                setimg([])

            }
            else {
                setDataProduct({ ...product, error: res.data.error });
                setBtnadd(false)

            }
        }).catch((error) => {
            if (error.response.status === 500) {
                swal("Warning", error.response.statusText, 'warning')
                setBtnadd(false)

            }
            else if (error.response.status === 404) {
                swal("Error", "Page Not Found", 'error')
                setBtnadd(false)

            }
        })
    }

    const ReturnPage = () => {
        history.push(`/customer/product/design`)
    }

    return (
        <div className='container'>
                <Toast ref={toast} />
            <div className="row">
                <Panel header="Generate Design By AI">
                    <div className="d-flex justify-content-end mb-2">
                        <Button className='p-button-info p-button-sm m-1' label='Add Design' onClick={RequestForm} />
                        <Button className='p-button-info p-button-sm m-1' label='Return Product' onClick={ReturnPage} />
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
                                                <p className='text-center'> {title == "" ? "" : title + ' ' + '#' + `${index + 1}`}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                        }
                    </form>
                </Panel>
            </div>
            <Dialog header="Adding Form Design" visible={visibleAdd} position='top' draggable={false}
                onHide={() => setAddVisible(false)}
                style={{ width: '50vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}
            >
                <form onSubmit={AddProduct} id='form_reset'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mb-2">
                                <label htmlFor="" className="form-label">
                                    <span className='text-danger'>*</span>Product Name
                                </label>
                                <InputText className={`w-100 p-inputtext-sm  ${product.error.name ? 'p-invalid' : ''}`} name='name' onChange={handleinput} />
                                <small className='text-danger'>{product.error.name}</small>
                            </div>
                            <div className="col-lg-12 mb-2">
                                <label htmlFor="" className="form-label">
                                    <span className='text-danger'>*</span>Product Price
                                </label>
                                <InputNumber prefix='₱' name='pricedata' onValueChange={(e) => setPrice(e.value)} className={`w-100 p-inputtext-sm ${product.error.pricedata ? 'p-invalid' : ''}`} minFractionDigits={2} mode='decimal' />
                                <small className='text-danger'>{product.error.pricedata}</small>
                            </div>
                            <div className="col-lg-12 mb-2">
                                <label htmlFor="" className="form-label">
                                    Description <small>(optional)</small>
                                </label>
                                <InputTextarea className={`w-100 ${product.error.desc ? 'p-invalid' : ''}`} rows={5} cols={5} name='desc' onChange={handleinput} />
                                <small className='text-danger'>{product.error.desc}</small>
                            </div>
                            <div className="col-lg-12 mb-2">
                                <label htmlFor="" className="form-label">
                                    <span className='text-danger'>*</span>Product Image
                                </label>
                                <InputText type='file' className={`w-100 p-inputtext-sm ${product.error.file ? 'p-invalid' : ''} `} name='file' onChange={handleupload} />
                                <small className='text-danger'>{product.error.file}</small>
                            </div>
                            <div className="mt-2">
                                <Button loading={btndisadd} label='Add Product' className='w-100 p-button-sm p-button-info' />
                            </div>
                        </div>
                    </div>
                </form>
            </Dialog>
        </div>
    );
}

export default DesignGenerate;
