import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { Panel } from 'primereact/panel'
import React from 'react'

function Stocks() {
    return (
        <div className='container'>
            <div className="row">
                <Panel header="Product Stock">
                    <DataTable paginator paginatorLeft rows={10}>
                        <Column header="Product Name"></Column>
                        <Column header="Number of Stocks"></Column>
                        <Column header="Status"></Column>
                        <Column header="Actions"></Column>
                    </DataTable>
                </Panel>
            </div>
        </div>
    )
}

export default Stocks