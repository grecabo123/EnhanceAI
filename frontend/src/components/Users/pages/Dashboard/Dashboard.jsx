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
import { Calendar, momentLocalizer } from 'react-big-calendar'
import { Dialog } from 'primereact/dialog'
import { Divider } from 'primereact/divider'

function Dashboard() {

    const [AllData, setData] = useState({
        income: "",
        pending: "",
        design: "",
        alldata: "",
        order_data: [],
    })
    const [loading, setLoading] = useState(true)
    const localizer = momentLocalizer(moment)
    const [selectedEvent, setSelectedEvent] = useState([]);
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        axios.get(`/api/AllDataCustomer/${localStorage.getItem('auth_id')}`).then(res => {
            if (res.data.status === 200) {
                setData({
                    income: res.data.income,
                    pending: res.data.pending,
                    design: res.data.design,
                    alldata: res.data.customer,
                    order_data: res.data.order,
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

    const handleSelectEvent = (event) => {
        setSelectedEvent(event);
        setVisible(true)
    };

    const handleCloseDetails = () => {
        setSelectedEvent(null);
    };



    const dateformat = (rowData) => {
        return (
            <span>{moment(rowData.created_at).format('MMM DD YYYY hh:mm a')}</span>
        )
    }

    const event = AllData.order_data.map((data) => {
        return (
            {
                title: data.product_name,
                start: data.order_date,
                end: data.order_date,
                desc: data.message,
                to_name: data.to_name,
                to_address: data.to_address,
                to_contact: data.to_contact,
                from_user: data.name,
                invoice: data.invoice_id,
            }
        )
    })

    // console.log(selectedEvent.decription);

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
                                            AllData.alldata.length == 0 ? "0.00"
                                                :

                                                <span>₱{AllData.income.total == null ? "0.00" : AllData.income.total.toFixed(2)}</span>

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
                                    <Column body={(data, options) => options.rowIndex + 1} header="#"></Column>
                                    <Column field='name' header="Customer Name"></Column>
                                    <Column field='email' header="Email"></Column>
                                    {/* <Column field='purchase_status' header="Status"></Column> */}
                                    <Column header="Date Order" body={dateformat}></Column>
                                </DataTable>
                            </div>

                            <div className="mt-2">
                                <div className="row">
                                    {/* <div className="col-lg-6 col-md-6 col-sm-12 mb-2">
                                        <Card subTitle="Total Income">
                                            <Income />
                                        </Card>
                                    </div> */}
                                    <div className="col-lg-12 col-md-12 col-sm-12 mb-2">
                                        <Card subTitle="Total Income">
                                            <Calendar
                                                localizer={localizer}
                                                style={{ height: 700 }}
                                                events={event}
                                                onSelectEvent={handleSelectEvent}
                                                views={['month', 'agenda']}
                                            />
                                        </Card>
                                    </div>

                                </div>
                            </div>
                        </React.Fragment>
                }


                <Dialog header="Order Details Note" visible={visible} onHide={() => { if (!visible) return; setVisible(false); }}
                    style={{ width: '50vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}
                    draggable={false}
                    position='top'
                >
                    <ul className="list-group">
                        <li className="list-group-item border-0 d-flex justify-content-between align-items-center">
                            Order ID
                            <span className='text-secondary'>{selectedEvent.invoice}</span>
                        </li>
                        <li className="list-group-item border-0 d-flex justify-content-between align-items-center">
                            Buyer Name
                            <span className='text-secondary'>{selectedEvent.from_user}</span>
                        </li>
                        <li className="list-group-item border-0 d-flex justify-content-between align-items-center">
                            Product Name
                            <span className='text-secondary'>{selectedEvent.title}</span>
                        </li>
                        <li className="list-group-item border-0 d-flex justify-content-between align-items-center">
                            Time & Date Deliver
                            <span className='text-secondary'>{moment(selectedEvent.start).format('MMMM DD YYYY hh:mm a')}</span>
                        </li>
                        <Divider>
                            <span>Special Person Received</span>
                        </Divider>
                        <li className="list-group-item border-0 d-flex justify-content-between align-items-center">
                            Name
                            <span className='text-secondary'>{selectedEvent.to_name == null ? "None" : selectedEvent.to_name}</span>
                        </li>
                        <li className="list-group-item border-0 d-flex justify-content-between align-items-center">
                            Contact
                            <span className='text-secondary'>{selectedEvent.to_contact == null ? "None" : selectedEvent.to_contact}</span>
                        </li>
                        <li className="list-group-item border-0 d-flex justify-content-between align-items-center">
                            Address
                            <span className='text-secondary'>{selectedEvent.to_address == null ? "None" : selectedEvent.to_address}</span>
                        </li>
                    </ul>
                </Dialog>

            </div>
        </div>
    )
}

export default Dashboard