import {useEffect, useState} from 'react';
import {BigNumber} from 'ethers';
import useBamFinance from './useBamFinance';

const useTreasuryAmount = () => {
  const [amount, setAmount] = useState(BigNumber.from(0));
  const bamFinance = useBamFinance();

  useEffect(() => {
    if (bamFinance) {
      const {Treasury} = bamFinance.contracts;
      bamFinance.BAM.balanceOf(Treasury.address).then(setAmount);
    }
  }, [bamFinance]);
  return amount;
};

export default useTreasuryAmount;
