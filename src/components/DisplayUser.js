import { useDispatch, useSelector } from 'react-redux';
import { setDate } from '../store/slices/UserSlice';

export const DisplayUser = () => {
  const user = useSelector((state) => {
    return state.user.userDetail;
  });
  const BillNo = useSelector((state) => {
    return state.user.BillNo;
  });
  const Date = useSelector((state) => {
    return state.user.Date;
  });

  const dispatch = useDispatch();
  return (
    <>
      <tr>
        <td>M/S. {user?.name}</td>
        <td>Bill No :{BillNo}</td>
      </tr>
      <tr>
        <td>V.U Nagar , Anand</td>
        <td>
          Date:
          <input
            defaultValue={Date}
            type='date'
            onChange={(e) => {
              dispatch(setDate(e.target.value));
            }}
          />
        </td>
      </tr>
    </>
  );
};
