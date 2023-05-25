import React, { useState } from 'react';

export function useSelectCustomer() {
  const [data, setData] = useState(null);

  return data, setData;
}
