import axios from 'axios'
import { Button } from 'primereact/button'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { Image } from 'primereact/image'
import { Panel } from 'primereact/panel'
import React, { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import swal from 'sweetalert'
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext'
import { Calendar } from 'primereact/calendar'
import { InputTextarea } from 'primereact/inputtextarea'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import { PrimeIcons } from 'primereact/api'


function ShopProduct(props) {
    
    const [loading, setLoading] = useState(true)
    const [Product, setProduct] = useState([])
    const history = useHistory();
    const [visible, setVisible] = useState(false)
    const [btndis, setBtn] = useState(false)
    const [PurchaseData, setPurchase] = useState({
        name: "",
        contact: "",
        to_address: "",
        message: "",
        error: [],
    });
    const [productdetails, setProductData] = useState({
        name: "",
        id: "",
    })
    const [DateData, setData] = useState(null)
    const toast = useRef(null)



    useEffect(() => {
        axios.get(`/api/ProductList/${props.match.params.id}`).then(res => {
            if (res.data.status === 200) {
                setProduct(res.data.data)
            }
            setLoading(false)
        }).catch((error) => {
            if (error.response.status === 500) {
                swal("Warning", error.response.statusText, 'warning')
            }
            else if (error.response.status === 404) {
                swal("Warning", error.response.statusText, 'warning')

            }
        })
    }, [])

    const imgfile = (rowData) => {
        return (
            <Image src={`${import.meta.env.VITE_API_BASE_URL}/${rowData.file_product_design}`} width='80' />
        )
    }

    const ActionButton = (rowData) => {
        return (
            <div>
                <Button onClick={OrderNow} data-name={rowData.product_name} data-id={rowData.id} className='p-button-sm p-button-info' label='Order Now' />
            </div>
        )
    }

    const OrderNow = (e) => {
        history.push(`/customer/order/form/${e.currentTarget.getAttribute('data-id')}`)        
    }

    console.log(props.match.params.name);

    return (
        <div>
            <Panel header={`${props.match.params.name} - Product List`}>
                <div className="d-flex justify-content-end mb-2">
                    
                    <Button className='p-button-sm p-button-info m-1' label='Design AI' onClick={() => history.push(`/customer/purchase/generate/design/${props.match.params.name}/${props.match.params.id}`)} icon={PrimeIcons.ANDROID} />
                    <Button className='p-button-sm p-button-info m-1' label='Return Page' onClick={() => history.push('/customer/visit/shop')} />
                </div>
                <DataTable
                    paginator
                    paginatorLeft
                    rows={10}
                    size='small'
                    selectionMode={'single'}
                    loading={loading}
                    value={Product}
                >
                    <Column header="#" body={(data, options) => options.rowIndex + 1}></Column>
                    <Column body={imgfile} header="Product Image"></Column>
                    <Column field='product_name' header="Product Name"></Column>
                    <Column body={(Product) => <span>₱{Product.price.toFixed(2)}</span>} header="Product Price"></Column>
                    <Column body={ActionButton} header="Actions"></Column>
                </DataTable>
            </Panel>

          
        </div>
    )
}

export default ShopProduct