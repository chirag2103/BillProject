import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../store/slices/ProductSlice';
import '../style/Header.css';
import { useDropDown } from './useDropDown.js';
import { setBillNo } from '../store/slices/UserSlice';
export const Header = () => {
  const productNames = useDropDown('productNames');
  const [Od, setOd] = useState('');
  const [Id, setId] = useState('');
  const [StepOd, setStepOd] = useState('');
  const [StepId, setStepId] = useState('');
  const [Name, setName] = useState('');
  const [Bore, setBore] = useState('');
  const [BoreType, setBoreType] = useState('');
  const [Length, setLength] = useState('');
  const [Quantity, setQuantity] = useState(1);
  const [Rate, setRate] = useState(0);
  const [RateFrom, setRateFrom] = useState(0);
  const dispatch = useDispatch();
  const LastBillNo = useSelector((state) => {
    return state.user.LastBillNo;
  });

  const storeItem = () => {
    dispatch(
      addProduct({
        name: Name,
        Od: Od,
        Id: Id,
        StepOd: StepOd,
        StepId: StepId,
        Bore: Bore,
        BoreType: BoreType,
        Length: Length,
        Quantity: Quantity,
        Rate: Rate,
        RateFrom: RateFrom,
        Amount: Rate * RateFrom * Quantity,
      })
    );
  };
  return (
    <div>
      <div className='container flex flex-wrap'>
        <div>
          <h4>last bill:{LastBillNo}</h4>
          <label>BillNo</label>
          <input
            type='text'
            name='bill'
            onChange={(e) => {
              dispatch(setBillNo(e.target.value));
            }}
          />
        </div>
        <div className='productList'>
          <select
            defaultValue={null}
            onChange={(e) => {
              setName(e.target.value);
            }}
          >
            <option value={null} hidden>
              Choose Name
            </option>
            {productNames.map((element) => (
              <option key={element.name} value={element.name}>
                {element.name}
              </option>
            ))}
          </select>
        </div>

        <input
          type='text'
          name='od'
          onChange={(e) => {
            setOd(e.target.value);
          }}
          placeholder='Enter OD'
        />
        <input
          type='text'
          name='id'
          onChange={(e) => {
            setId(e.target.value);
          }}
          placeholder='Enter ID'
        />
        <input
          type='text'
          name='stepOd'
          onChange={(e) => {
            setStepOd(e.target.value);
          }}
          placeholder='Enter Step OD'
        />
        <input
          type='text'
          name='stepId'
          onChange={(e) => {
            setStepId(e.target.value);
          }}
          placeholder='Enter Step ID'
        />
        <input
          type='text'
          name='bore'
          onChange={(e) => {
            setBore(e.target.value);
          }}
          placeholder='Enter Bore'
        />
        <input
          type='text'
          name='boreType'
          onChange={(e) => {
            setBoreType(e.target.value);
          }}
          placeholder='Enter Bore Size'
        />
        <input
          type='text'
          name='length'
          onChange={(e) => {
            setLength(e.target.value);
          }}
          placeholder='Enter Length'
        />
        <input
          type='text'
          name='quantity'
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
          placeholder='Enter Quantity'
        />
        <input
          type='text'
          name='rate'
          onChange={(e) => {
            setRate(e.target.value);
          }}
          placeholder='Enter Rate'
        />
        <input
          type='text'
          name='rateFrom'
          onChange={(e) => {
            setRateFrom(e.target.value);
          }}
          placeholder='Enter Rate From'
        />
      </div>
      <button onClick={storeItem}>Add</button>
    </div>
  );
};
