import axios from 'axios';
import { useEffect, useState } from 'react';

export function useCustomer() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/customers`)
      .then((res) => {
        const items = res.data.users;
        setData(items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return data;
}
