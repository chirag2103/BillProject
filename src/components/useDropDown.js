import axios from 'axios';
import { useEffect, useState } from 'react';

export function useDropDown(option) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/product/${option}`)
      .then((res) => {
        const items = res.data.products;
        setData(items);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return data;
}
