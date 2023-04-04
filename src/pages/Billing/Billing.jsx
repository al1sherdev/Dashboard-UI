import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';

// components
import BillingInfoCard from '../../components/BillingsCompo/BillingInfoCard';
import BudgetCard from '../../components/BillingsCompo/BudgetCard';
import DebitCard from '../../components/BillingsCompo/DebitCard';
import InvoiceCard from '../../components/BillingsCompo/InvoiceCard';
import PaymentCard from '../../components/BillingsCompo/PaymentCard';
import Transactions from '../../components/BillingsCompo/Transactions';
import Footer from "../../pages/Footer/Footer";

const Billing = () => {
  useEffect(() => {
    window.scroll(0, 0)
}, [])
  return (
    <div className='page' id='billing'>
      <Row>
        <Col xl="8">
          <Row>
            <Col xl="8">
              <DebitCard />
            </Col>
            <Col xl="4">
                <BudgetCard />
            </Col>
          </Row>
        </Col>
        <Col xl="4">
          <InvoiceCard />
        </Col>
        <Col xl="8">
          <PaymentCard />
        </Col>
        <Col xl="7">
          <BillingInfoCard  />
        </Col>
        <Col xl="5">
          <Transactions />
        </Col>
        <Col xl="12">
          <Footer />
        </Col>
      </Row>
    </div>
  )
}

export default Billing
