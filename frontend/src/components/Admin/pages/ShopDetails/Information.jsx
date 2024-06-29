import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Skeleton } from 'primereact/skeleton';
import { Panel } from 'primereact/panel';
import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import moment from 'moment';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { TabView, TabPanel } from 'primereact/tabview';



function Information(props) {

    const [loading, setLoading] = useState(true)
    const history = useHistory();
    const [InformationData, setData] = useState({
        owner_detail: "",
        shop_detail: "",
        income: "",
        product: "",
        design: "",
        design_list: [],
        product_list: [],
    })
    useEffect(() => {
        axios.get(`/api/ShopInformation/${props.match.params.id}`).then(res => {
            if (res.data.status === 200) {
                setData({
                    owner_detail: res.data.data,
                    shop_detail: res.data.shop,
                    income: res.data.income,
                    product: res.data.product,
                    design: res.data.design,
                    design_list: res.data.list_design,
                    product_list: res.data.list_product,
                })
            }
            else {

            }
            setLoading(false)
        }).catch((error) => {
            if (error.response.status === 500) {

            }
            else if (error.response.status === 404) {

            }
        })
    }, [])

    const date_time = (rowData) => {
        return (
            <span>{moment(rowData.created_at).format('MMM DD YYYY')}</span>
        )
    }

    const FileImageProduct = (rowData) => {
        return (
            <Image src={`${import.meta.env.VITE_API_BASE_URL}/${rowData.file_product}`} width='50' />
        )
    }
    const DesignImage = (rowData) => {
        return (
            <Image src={`${import.meta.env.VITE_API_BASE_URL}/${rowData.file_product_design}`} width='50' />
        )
    }

    const PriceFormatDesign = (rowData) => {
        return (
            <span>₱{rowData.price.toFixed(2)}</span>
        )
    }
    const product_price_format = (rowData) => {
        return (
            <span>₱{rowData.price.toFixed(2)}</span>
        )
    }

    const ReturnPage = () => {
        history.push(`/admin/shop/accounts`)
    }

    return (
        <div>
            {
                loading ?
                    <React.Fragment>
                        <Skeleton className="mb-2"></Skeleton>
                        <Skeleton width="10rem" className="mb-2"></Skeleton>
                        <Skeleton width="5rem" className="mb-2"></Skeleton>
                        <Skeleton height="2rem" className="mb-2"></Skeleton>
                        <Skeleton width="10rem" height="4rem"></Skeleton>
                    </React.Fragment>

                    :
                    <React.Fragment>



                        <Panel header={` Details - ${InformationData.shop_detail.shop_name}`}>
                            <div className="d-flex justify-content-end">
                                <Button className='p-button-sm p-button-info' label='Return Page' onClick={ReturnPage} />
                            </div>

                            <TabView>
                                <TabPanel header="Owner Details">
                                    <ul className="list-group">
                                        <li className="list-group-item border-0 d-flex justify-content-between align-items-center">
                                            Name
                                            <span className='text-secondary'>{InformationData.owner_detail.name}</span>
                                        </li>
                                        <li className="list-group-item border-0 d-flex justify-content-between align-items-center">
                                            Email
                                            <span className='text-secondary'>{InformationData.owner_detail.email}</span>
                                        </li>
                                        <li className="list-group-item border-0 d-flex justify-content-between align-items-center">
                                            Contact
                                            <span className='text-secondary'>{InformationData.owner_detail.contact}</span>
                                        </li>
                                        <li className="list-group-item border-0 d-flex justify-content-between align-items-center">
                                            City
                                            <span className='text-secondary'>{InformationData.owner_detail.city}</span>
                                        </li>
                                        <li className="list-group-item border-0 d-flex justify-content-between align-items-center">
                                            Adddress
                                            <span className='text-secondary'>{InformationData.owner_detail.address}</span>
                                        </li>

                                    </ul>
                                </TabPanel>
                                <TabPanel header="Shp Details">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-sm-12 mb-2">
                                            <Card subTitle="Total Income" id='total'>
                                                <div className="d-flex justify-content-between">
                                                    <span>Amount</span>
                                                    <span>₱{InformationData.income.total_amt == null ? 0.00 : InformationData.income.total_amt.toFixed(2)}</span>
                                                </div>
                                            </Card>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 mb-2">
                                            <Card subTitle="Product" id='sold'>
                                                <div className="d-flex justify-content-between">
                                                    <span>Total</span>
                                                    <span>{InformationData.product.total_product}</span>
                                                </div>
                                            </Card>
                                        </div>
                                        <div className="col-lg-4 col-md-12 col-sm-12 mb-2">
                                            <Card subTitle="Design" id="pending">
                                                <div className="d-flex justify-content-between">
                                                    <span>Total</span>
                                                    <span>{InformationData.design.total_design}</span>
                                                </div>
                                            </Card>
                                        </div>

                                        <div className="mt-3">
                                            <DataTable header="List of Product"
                                                paginator
                                                paginatorLeft
                                                rows={10}
                                                size='small'
                                                selectionMode={'single'}
                                                value={InformationData.product_list}
                                            >
                                                <Column header="#" body={(data, options) => options.rowIndex + 1}></Column>
                                                <Column body={FileImageProduct} header="Product Image"></Column>
                                                <Column field='product_name' header="Product Name"></Column>
                                                <Column field='price' body={product_price_format} header="Product Price"></Column>
                                                <Column field='number_pcs' header="Stock"></Column>
                                                <Column body={date_time} header="Product Created"></Column>
                                            </DataTable>
                                        </div>

                                        <div className="mt-3">
                                            <DataTable header="List of Design"
                                                paginator
                                                paginatorLeft
                                                rows={10}
                                                size='small'
                                                selectionMode={'single'}
                                                value={InformationData.design_list}
                                            >
                                                <Column header="#" body={(data, options) => options.rowIndex + 1}></Column>
                                                <Column body={DesignImage} header="Product Image"></Column>
                                                <Column field='product_name' header="Product Name"></Column>
                                                <Column field='price' body={PriceFormatDesign} header="Product Price"></Column>
                                                <Column body={date_time} header="Product Created"></Column>
                                            </DataTable>
                                        </div>
                                    </div>
                                </TabPanel>

                            </TabView>




                        </Panel>
                    </React.Fragment>
            }
        </div>
    )
}

export default Information