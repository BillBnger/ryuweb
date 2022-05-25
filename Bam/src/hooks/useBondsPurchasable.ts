import {useCallback, useEffect, useState} from 'react';
import {BigNumber} from 'ethers';
import ERC20 from '../bam-finance/ERC20';
import useBamFinance from './useBamFinance';
import config from '../config';

const useBondsPurchasable = () => {
  const [balance, setBalance] = useState(BigNumber.from(0));
  const bamFinance = useBamFinance();

  useEffect(() => {
    async function fetchBondsPurchasable() {
      try {
        setBalance(await bamFinance.getBondsPurchasable());
      } catch (err) {
        console.error(err);
      }
    }
    fetchBondsPurchasable();
  }, [setBalance, bamFinance]);

  return balance;
};

export default useBondsPurchasable;
