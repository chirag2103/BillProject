import { useSelector } from 'react-redux';

export const DisplayProducts = () => {
  const productData = useSelector((state) => {
    return state.product;
  });
  return (
    <>
      {productData.map((data, i) => {
        return (
          <>
            <tr key={productData.indexOf(data) + 1}>
              <td>{productData.indexOf(data) + 1}</td>
              <td>
                {data.name} {data.Od && `${data.Od} Od `}
                {data.Id && `${data.Id} Id `}{' '}
                {data.StepOd && data.StepId
                  ? `${data.StepOd}/${data.StepId} step Od/Id `
                  : `${data.StepOd && `${data.StepOd}`} ${
                      data.StepId && `${data.StepId}`
                    } `}{' '}
                {data.Bore}
                {data.BoreType && `${data.BoreType} Bore `}
                {data.Length && `${data.Length} Length`}
              </td>
              <td>{data.Quantity}</td>
              <td>{1}</td>
              <td>pcs</td>
              <td>{data.Rate * data.RateFrom}</td>
              <td>{data.Amount}</td>
            </tr>
          </>
        );
      })}
    </>
  );
};
