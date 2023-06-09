import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import ScrollReveal from 'scrollreveal';

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
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
      .anime
    `,
      {
        opacity: 0,
        interval: 100,
      }
    );
}, [])

  return (
    <div className='page' id='billing'>
      <Row>
        <Col xl="8">
          <Row>
            <Col className='anime' xl="8" lg="12" md="12" sm="12">
              <DebitCard />
            </Col>
            <Col className='anime' xl="4" lg="12" md="12" sm="12">
                <BudgetCard />
            </Col>
          </Row>
        </Col>
        <Col className='anime' xl="4" lg="12" md="12" sm="12">
          <InvoiceCard />
        </Col>
        <Col className='anime' xl="8" lg="12" md="12" sm="12">
          <PaymentCard />
        </Col>
        <Col className='anime' xl="7" lg="12" md="12" sm="12">
          <BillingInfoCard  />
        </Col>
        <Col className='anime' xl="5" lg="12" md="12" sm="12">
          <Transactions />
        </Col>
        <Col className='anime' xl="12" lg="12" md="12" sm="12">
          <Footer />
        </Col>
      </Row>
    </div>
  )
}

export default Billing;