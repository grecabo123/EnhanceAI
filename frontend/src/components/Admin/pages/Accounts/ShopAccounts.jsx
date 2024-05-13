import axios from 'axios'
import moment from 'moment'
import { PrimeIcons } from 'primereact/api'
import { Button } from 'primereact/button'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { Image } from 'primereact/image'
import { Panel } from 'primereact/panel'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import swal from 'sweetalert'

function ShopAccounts() {

    const [loading, setLoading] = useState(true)
    const [formdata, setForm] = useState([])
    const history = useHistory();

    useEffect(() => {
        axios.get(`/api/ShopAccount`).then(res => {
            if(res.data.status === 200) {
                setForm(res.data.data)
            }
            setLoading(false)
        }).catch((error) => {
            if(error.response.status === 500) {
                swal("Warning",error.response.statusText,'warning')
            }
        })
    },[])

    const image_logo = (formdata) => {
        return (
            <>
                <Image preview width='80' src={`http://127.0.0.1:8000/${formdata.shop_logo}`} />
            </>
        )
    }

    const date_format = (formdata) => {
        return (
            <span>{moment(formdata.created_at).format('MMM DD YYYY')}</span>
        )
    }

    const action_btn = (formdata) => {
        return (
            <>
                <Button onClick={Details} data-id={formdata.id} className='p-button-sm p-button-info' label='Details' icon={PrimeIcons.EYE} />
            </>
        )
    }

    const Details = (e) => {
        history.push(`/admin/account/request/refid=${e.currentTarget.getAttribute('data-id')}`)
    }

    return (
        <div className='container'>
            <div className="row">
                <Panel header="List of Business Account">
                    <DataTable value={formdata} paginator paginatorLeft rows={10} loading={loading}>
                        <Column field='shop_logo' body={image_logo} header="Shop Logo"></Column>
                        <Column field='shop_name' header="Shop Name"></Column>
                        <Column field='shop_city' header="Shop City"></Column>
                        <Column field='shop_address' header="Shop Address"></Column>
                        {/* <Column field='created_at' body={date_format} header="Date Request"></Column> */}
                        <Column field='id' body={action_btn} header="Action"></Column>
                    </DataTable>
                </Panel>
            </div>
        </div>
    )
}

export default ShopAccounts