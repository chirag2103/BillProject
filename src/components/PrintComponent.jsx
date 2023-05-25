import { useSelector } from 'react-redux';
import { DisplayProducts } from './DisplayProducts.js';
import { DisplayUser } from './DisplayUser.js';
import inr from 'inr-words';
import { useState } from 'react';
import { saveAs } from 'file-saver';
import axios from 'axios';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';

export const PrintComponent = () => {
  const BillNo = useSelector((state) => {
    return state.user.BillNo;
  });
  const Date = useSelector((state) => {
    return state.user.Date;
  });
  const productData = useSelector((state) => {
    return state.product;
  });
  const user = useSelector((state) => {
    return state.user.userDetail;
  });

  //   const generatePDF = () => {
  //     html2canvas(document.querySelector('#pdf')).then((canvas) => {
  //       const imgData = canvas.toDataURL('image/png', 1.0);
  //       const pdf = new jsPDF('p', 'px', 'a4');
  //       pdf.internal.scaleFactor = 1;
  //       // const imgProps = pdf.getImageProperties(imgData);
  //       const pdfWidth = pdf.internal.pageSize.getWidth();
  //       const pdfHeight = pdf.internal.pageSize.getHeight();

  //       const widthRatio = pdfWidth / canvas.width;
  //       const heightRatio = pdfHeight / canvas.height;
  //       const ratio = widthRatio > heightRatio ? heightRatio : widthRatio;

  //       const canvasWidth = canvas.width * ratio;
  //       const canvasHeight = canvas.height * ratio;

  //       pdf.addImage(imgData, 'PNG', 0, 0, canvasWidth, canvasHeight);
  //       pdf.save('invoice-001.pdf');
  //     });
  //   };
  const handleSaveBill = () => {
    axios
      .post('http://localhost:4000/api/bill/new', {
        customer: user,
        billNo: BillNo,
        billProducts: productData,
        billTotal: tt + Math.round((tt * 12) / 100),
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDownload = async () => {
    const response = await axios.post(
      'http://localhost:4000/create-pdf',
      {
        productData,
        user,
        Date,
        BillNo,
      },
      { responseType: 'blob' }
    );
    const blob = new Blob([response.data], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    saveAs(blob, `${user.name}_${BillNo}.pdf`);
  };
  const [toogle, setToggle] = useState(true);
  let tt = 0;
  const NumberToWords = () => {
    let i = GetTotal();
    let am = i + Math.round((i * 12) / 100);
    return inr(am);
  };
  const GetTotal = () => {
    let total = 0;
    productData.forEach((data) => {
      total += data.Amount;
    });
    tt = total;
    return total;
  };
  return (
    <div className='printing'>
      {toogle && (
        <div>
          <table id='table1'>
            <tbody>
              <DisplayUser />
            </tbody>
          </table>
          <table id='table2'>
            <thead>
              <tr>
                <th>Sr. No</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Per</th>
                <th>Type</th>
                <th>Rate</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <DisplayProducts />
              <tr>
                <td colSpan={3} rowSpan={4}>
                  {NumberToWords()}
                </td>
                <td colSpan={2}>Total</td>
                <td colSpan={2}>{GetTotal()}</td>
              </tr>
              <tr>
                <td>CGST</td>
                <td>6%</td>
                <td colSpan={2}>{Math.round((tt * 6) / 100)}</td>
              </tr>
              <tr>
                <td>SGST</td>
                <td>6%</td>
                <td colSpan={2}>{Math.round((tt * 6) / 100)}</td>
              </tr>
              <tr>
                <td colSpan={2}>G.Total</td>
                <td colSpan={2}>{tt + Math.round((tt * 12) / 100)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      <div className='print' id='pdf'>
        {!toogle && (
          <div>
            <table id='table1'>
              <tbody>
                <DisplayUser />
              </tbody>
            </table>
            <table id='table2'>
              <thead>
                <tr>
                  <th>Sr. No</th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Per</th>
                  <th>Type</th>
                  <th>Rate</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <DisplayProducts />
                <tr>
                  <td colSpan={3} rowSpan={4}>
                    {NumberToWords()}
                  </td>
                  <td colSpan={2}>Total</td>
                  <td colSpan={2}>{GetTotal()}</td>
                </tr>
                <tr>
                  <td>CGST</td>
                  <td>6%</td>
                  <td colSpan={2}>{Math.round((tt * 6) / 100)}</td>
                </tr>
                <tr>
                  <td>SGST</td>
                  <td>6%</td>
                  <td colSpan={2}>{Math.round((tt * 6) / 100)}</td>
                </tr>
                <tr>
                  <td colSpan={2}>G.Total</td>
                  <td colSpan={2}>{tt + Math.round((tt * 12) / 100)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
      {/* <button
        onClick={() => {
          setToggle(!toogle);
        }}
      >
        Review
      </button> */}
      <button
        onClick={() => {
          handleDownload();
          handleSaveBill();
        }}
      >
        Print
      </button>
    </div>
  );
};
