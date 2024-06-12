import React from 'react'
import { Table } from 'reactstrap'
import '../style/customerDetails.css'
export default function CustomerDetails(customer) {
  return (
    <div>
        <Table className='customerTable' borderless>
    <tbody>
    <tr>
      <td>
        Company Name :
      </td>
      <td>
        Z M Enterprise
      </td>
      <td>
        Jobsheet Order :
      </td>
      <td>
        {customer.jobOrder}
      </td>
    </tr>
    <tr>
      <td>
        Duty Paragraph:
      </td>
      <td>
        Masud Rana
      </td>
      <td>
        Jobsheet Date :
      </td>
      <td>
        {customer.jobDate}
      </td>
    </tr>
    <tr>
        <td colSpan={3}></td>
    </tr>
    <tr>
      
      <td>
        Business Registration No:
      </td>
      <td>
        1258741015
      </td>
      <td>
        Payment Date:
      </td>
      <td>
      {customer.payDate}
      </td>
    </tr>
    <tr>
      <td>
        Bank Account:
      </td>
      <td>
        1258741015
      </td>
      <td>
        Customer Name:
      </td>
      <td>
      {customer.customerName}
      </td>
    </tr>
    <tr>
      <td>
       Service Center Name :
      </td>
      <td>
        Z M Enterprise
      </td>
      <td>
        Customer Address:
      </td>
      <td>
      Pabna ,Rajshahi
      </td>
    </tr>
    <tr>
      <td>
       Service Center Address :
      </td>
      <td>
        2nd floor Muktijoddha
      </td>
      <td>
        Customer Mobile No:
      </td>
      <td>
      {customer.customerPhone}
      </td>
    </tr>
    <tr>
      <td>
       Service Center Contact :
      </td>
      <td>
      +880-1710767350
      </td>
      <td>
      E-Mail ID:
      </td>
      <td>
      {customer.customerEmail}
      </td>
    </tr>
  </tbody>
</Table>
    </div>
  )
}
