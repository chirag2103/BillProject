import { useEffect, useState } from 'react';
import { useCustomer } from './useCustomer.js';
import { Header } from './Header.js';
import { useDispatch } from 'react-redux';
import '../style/tablestyle.css';

import {
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  DropDownListContainer,
  ListItem,
} from '../assets/StyledComponents.js';
import { setUser, setLastBillNo } from '../store/slices/UserSlice.js';
import { PrintComponent } from './PrintComponent.jsx';
import axios from 'axios';

export const Customers = () => {
  useEffect(() => {
    axios.get('http://localhost:4000/api/lastbill').then((res) => {
      console.log(res.data.bill.billNo);
      dispatch(setLastBillNo(res.data.bill.billNo));
    });
  }, []);

  // const BillNo = useSelector((state) => {
  //   return state.user.BillNo;
  // });
  // const Date = useSelector((state) => {
  //   return state.user.Date;
  // });
  // const productData = useSelector((state) => {
  //   return state.product;
  // });
  // const user = useSelector((state) => {
  //   return state.user.userDetail;
  // });
  // const handlePDF = async () => {
  //   try {
  //     axios
  //       .post(
  //         'http://localhost:4000/create-pdf',
  //         {
  //           productData,
  //           user,
  //           Date,
  //           BillNo,
  //         },
  //         { responseType: 'blob' }
  //       )
  //       .then((res) => {
  //         const blob = new Blob([res.data], { type: 'application/pdf' });
  //         saveAs(blob, `${user.name} ${BillNo}.pdf`);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const customers = useCustomer();
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  const dispatch = useDispatch();
  return (
    <>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>Choose Name</DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {customers.map((element, i) => (
                <ListItem
                  onClick={() => {
                    dispatch(setUser(element));
                    setIsOpen(!isOpen);
                  }}
                  key={i}
                  value={element.name}
                >
                  {element.name}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>

      <Header />
      {/* <AddItems /> */}
      <PrintComponent />

      {/* <button onClick={generatePDF}>Print</button> */}
    </>
  );
};
