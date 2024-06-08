import { Card } from 'primereact/card'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import React, { useEffect, useState } from 'react'
import Income from '../Analytics/Income'
import StatusPie from '../Analytics/StatusPie'
import axios from 'axios'
import swal from 'sweetalert'
import { Skeleton } from 'primereact/skeleton'
import moment from 'moment'

function Dashboard() {

    const [AllData, setData] = useState({
        income: "",
        pending: "",
        design: "",
        alldata: "",
    })
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`/api/AllDataCustomer/${localStorage.getItem('auth_id')}`).then(res => {
            if (res.data.status === 200) {
                setData({
                    income: res.data.income,
                    pending: res.data.pending,
                    design: res.data.design,
                    alldata: res.data.customer,
                })
            }
            setLoading(false)
        }).catch((error) => {
            if (error.response.status === 500) {
                swal("Warning", error.response.statusText, 'warning')
            }
            else if (error.response.status === 404) {
                swal("Error", "Page Error", 'error')
            }
        })
    }, [])


    const dateformat = (rowData) => {
        return (
            <span>{moment(rowData.created_at).format('MMM DD YYYY hh:mm a')}</span>
        )
    }

    return (
        <div className='container-fluid'>
            <div className="row">
                {
                    loading ?
                        <React.Fragment>
                            <Skeleton className="mb-2" borderRadius="16px"></Skeleton>
                            <Skeleton width="10rem" className="mb-2" borderRadius="16px"></Skeleton>
                            <Skeleton width="5rem" borderRadius="16px" className="mb-2"></Skeleton>
                            <Skeleton height="2rem" className="mb-2" borderRadius="16px"></Skeleton>
                            <Skeleton width="10rem" height="4rem" borderRadius="16px"></Skeleton>
                        </React.Fragment>
                        :
                        <React.Fragment>

                            <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
                                <Card subTitle="Total Income" id='total'>
                                    <div className="d-flex justify-content-between">
                                        <span>Total</span>
                                        {
                                            AllData.alldata.length == 0 ?  "0.00" 
                                            :
                                            
                                        <span>₱{ AllData.income.total == null ? "0.00" :  AllData.income.total.toFixed(2)}</span>
                                            
                                        }
                                    </div>
                                </Card>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
                                <Card subTitle="Product Sold" id='sold'>
                                    <div className="d-flex justify-content-between">
                                        <span>Total</span>
                                        <span>{AllData.income.total_sold}</span>
                                    </div>
                                </Card>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
                                
                                <Card subTitle="Pending" id='pending'>
                                    <div className="d-flex justify-content-between">
                                        <span>Total</span>
                                        <span>{AllData.pending.total_pending}</span>
                                    </div>
                                </Card>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
                                <Card subTitle="Product Design" id='progress'>
                                    <div className="d-flex justify-content-between">
                                        <span>Total</span>
                                        <span>{AllData.design.total}</span>
                                    </div>
                                </Card>
                            </div>

                            <div className="mt-2">
                                <DataTable value={AllData.alldata} 
                                    size='small'
                                    selectionMode={'single'}
                                    groupRowsBy='name'
                                    rowGroupMode='rowspan'
                                header="All Customers" paginator rows={4} paginatorLeft >
                                    <Column body={(data,options) => options.rowIndex + 1} header="#"></Column>
                                    <Column field='name' header="Customer Name"></Column>
                                    <Column field='email' header="Email"></Column>
                                    <Column field='purchase_status' header="Status"></Column>
                                    <Column header="Date Order" body={dateformat}></Column>
                                </DataTable>
                            </div>

                            <div className="mt-2">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 mb-2">
                                        <Card subTitle="Total Income">
                                            <Income />
                                        </Card>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 mb-2">
                                        <Card subTitle="Total Income">
                                            <StatusPie />
                                        </Card>
                                    </div>

                                </div>
                            </div>
                        </React.Fragment>
                }

            </div>
        </div>
    )
}

export default Dashboard