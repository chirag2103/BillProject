import axios from 'axios';
import React, { useEffect } from 'react';

export default function Dashboard() {
  useEffect(() => {
    axios.get('http://localhost/api/bills').then((res) => {
      const bills = res.data;
    });
  }, []);
  const getAllBillsTotal = () => {
    let t = 0;
    bills.forEach((element) => {
      t += element.billTotal;
    });
  };
  return <div>Dashboard</div>;
}
