import { Card } from 'primereact/card'
import { DataTable } from 'primereact/datatable'
import { Panel } from 'primereact/panel'
import React, { useEffect, useState } from 'react'
import BarChartData from '../Chart/BarChartData'
import { Column } from 'primereact/column'
import axios from 'axios'
import swal from 'sweetalert'
import { Skeleton } from 'primereact/skeleton'
import moment from 'moment'

function Dashboard() {

    const [loading, setLoading] = useState(true)
    const [AllData, setAllData] = useState({
        all_data: "",
        shop: "",
        status_account: "",
        shop_list: ""
    });

    useEffect(() => {
        axios.get(`/api/Dashboaradmin/${localStorage.getItem('auth_id')}`).then(res => {
            if (res.data.status === 200) {
                setAllData({
                    all_data: res.data.all,
                    shop: res.data.shop,
                    status_account: res.data.user_count,
                    shop_list: res.data.shope,
                });
            }
            setLoading(false)
        }).catch((error) => {
            if (error.response.status === 500) {
                swal("Warning", error.response.statusText, 'warning');
            }
            else if (error.response.status === 404) {
                swal("Error", "Server Error", 'error')
            }
        })
    }, [])


    const DateFormat = (rowData) => {
        return (
            <span>{moment(rowData.created_at).format('MMM DD YYYY')}</span>
        )
    }

    return (
        <div className='container-fluid'>
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
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-sm-12 mb-2">
                                <Card subTitle="All Users" id='total'>
                                    <div className="d-flex justify-content-between">
                                        <span>Total</span>
                                        <span>{AllData.all_data}</span>
                                    </div>
                                </Card>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-12 mb-2">
                                <Card subTitle="Active Accounts" id='sold'>
                                    <div className="d-flex justify-content-between">
                                        <span>Total</span>
                                        <span>{AllData.status_account.active}</span>
                                    </div>
                                </Card>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-12 mb-2">
                                <Card subTitle="Not Active" id='pending'>
                                    <div className="d-flex justify-content-between">
                                        <span>Total</span>
                                        <span>{AllData.status_account.pending}</span>
                                    </div>
                                </Card>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-12 mb-2">
                                <Card subTitle="Shops" id='progress'>
                                    <div className="d-flex justify-content-between">
                                        <span>Total</span>
                                        <span>{AllData.shop}</span>
                                    </div>
                                </Card>
                            </div>

                            <div className="col-lg-12 mt-2">
                                {/* <Panel header="Records"> */}
                                <div className="row">
                                    <div className="col-lg-12 mb-2">
                                        <DataTable header="All Shop List"
                                            paginator
                                            paginatorLeft
                                            rows={10}
                                            value={AllData.shop_list}
                                            size='small'
                                            selectionMode={'single'}
                                        >
                                            <Column header="#" body={(data,options) => options.rowIndex + 1 } ></Column>
                                            <Column field='shop_name' header="Shop Name"></Column>
                                            <Column field='email' header="Shop Email"></Column>
                                            <Column field='shop_city' header="Shop City"></Column>
                                            <Column body={DateFormat} header="Shop Created"></Column>
                                        </DataTable>
                                    </div>
                                    <div className="col-lg-8 col-md-8 col-sm-12 mb-2">
                                        <BarChartData />
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 mb-2">
                                        <Card>

                                        </Card>
                                    </div>
                                </div>
                                {/* </Panel> */}
                            </div>
                        </div>
                    </React.Fragment>
            }
        </div>
    )
}

export default Dashboard