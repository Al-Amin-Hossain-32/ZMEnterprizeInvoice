import React from 'react'
import { Table } from 'reactstrap'
import Barcode from 'react-barcode'


export default function Header(props) {
  return (
    <div className='d-flex flex-row 
justify-content-between align-item-between '>
        <div className="heading ml-3 py-4  align-self-center ">
            <h2 >Retail Invoice</h2>
        </div>
        <div className="barcode ">
        <Barcode value={props.jobOrder} />
        </div>
    </div>
  )
}
