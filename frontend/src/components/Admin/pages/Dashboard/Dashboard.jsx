import { Card } from 'primereact/card'
import { DataTable } from 'primereact/datatable'
import { Panel } from 'primereact/panel'
import React from 'react'
import BarChartData from '../Chart/BarChartData'

function Dashboard() {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-12 mb-2">
                    <Card subTitle="All Accounts">
                        <div className="d-flex justify-content-between">
                            <span>Total</span>
                            <span>d</span>
                        </div>
                    </Card>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-12 mb-2">
                    <Card subTitle="Active Accounts">
                        <div className="d-flex justify-content-between">
                            <span>Total</span>
                            <span>d</span>
                        </div>
                    </Card>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-12 mb-2">
                    <Card subTitle="Not Active">
                        <div className="d-flex justify-content-between">
                            <span>Total</span>
                            <span>d</span>
                        </div>
                    </Card>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-12 mb-2">
                    <Card subTitle="Shops">
                        <div className="d-flex justify-content-between">
                            <span>Total</span>
                            <span>d</span>
                        </div>
                    </Card>
                </div>

                <div className="col-lg-12">
                    <Panel header="Records">
                        <div className="row">
                            <div className="col-lg-12 mb-2">
                                <DataTable>

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
                    </Panel>
                </div>
            </div>
        </div>
    )
}

export default Dashboard