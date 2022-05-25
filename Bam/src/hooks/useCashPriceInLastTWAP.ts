import {useCallback, useEffect, useState} from 'react';
import useBamFinance from './useBamFinance';
import config from '../config';
import {BigNumber} from 'ethers';

const useCashPriceInLastTWAP = () => {
  const [price, setPrice] = useState<BigNumber>(BigNumber.from(0));
  const bamFinance = useBamFinance();

  const fetchCashPrice = useCallback(async () => {
    setPrice(await bamFinance.getBamPriceInLastTWAP());
  }, [bamFinance]);

  useEffect(() => {
    fetchCashPrice().catch((err) => console.error(`Failed to fetch BAM price: ${err.stack}`));
    const refreshInterval = setInterval(fetchCashPrice, config.refreshInterval);
    return () => clearInterval(refreshInterval);
  }, [setPrice, bamFinance, fetchCashPrice]);

  return price;
};

export default useCashPriceInLastTWAP;
