import { Card } from 'primereact/card'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import React from 'react'
import Income from '../Analytics/Income'
import StatusPie from '../Analytics/StatusPie'

function Dashboard() {
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
                    <Card subTitle="Total Income">
                        <div className="d-flex justify-content-between">
                            <span>Total</span>
                            <span>₱53,313.00</span>
                        </div>
                    </Card>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
                    <Card subTitle="Product Sold">
                        <div className="d-flex justify-content-between">
                            <span>Total</span>
                            <span>29</span>
                        </div>
                    </Card>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
                    <Card subTitle="On Progress">
                        <div className="d-flex justify-content-between">
                            <span>Total</span>
                            <span>9</span>
                        </div>
                    </Card>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
                    <Card subTitle="Pending">
                        <div className="d-flex justify-content-between">
                            <span>Total</span>
                            <span>18</span>
                        </div>
                    </Card>
                </div>

                <div className="mt-2">
                    <DataTable header="All Data" paginator rows={10} paginatorLeft >
                        <Column header></Column>
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

            </div>
        </div>
    )
}

export default Dashboard