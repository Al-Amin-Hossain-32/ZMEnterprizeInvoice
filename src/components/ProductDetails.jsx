import React from 'react'
import { Table } from 'reactstrap'
export default function ProductDetails({amount,payDate}) {
  return (
    <div>

        <Table bordered  >
            <tbody>
            <tr  className="text-center table-info">
                <th>Payment Date</th>
                <th>Service Fee</th>
                <th>Amount</th>
            </tr>
            <tr className='text-center' >
                <th>{payDate}</th>
                <th>Cash</th>
                <th>{amount}</th>
            </tr>
            <tr className="text-center table-info">
                <th>Subtotal</th>
                <th></th>
                <th>{amount}</th>
            </tr>
            </tbody>
        </Table>
    </div>
  )
}
