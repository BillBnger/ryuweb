import {useCallback, useEffect, useState} from 'react';
import useBamFinance from '../useBamFinance';
import {useWallet} from 'use-wallet';
import {BigNumber} from 'ethers';
import {parseUnits} from 'ethers/lib/utils';

const useEstimateBdao = (bbondAmount: string) => {
  const [estimateAmount, setEstimateAmount] = useState<string>('');
  const {account} = useWallet();
  const bamFinance = useBamFinance();

  const estimateAmountOfBdao = useCallback(async () => {
    const bbondAmountBn = parseUnits(bbondAmount);
    const amount = await bamFinance.estimateAmountOfBdao(bbondAmountBn.toString());
    setEstimateAmount(amount);
  }, [account]);

  useEffect(() => {
    if (account) {
      estimateAmountOfBdao().catch((err) => console.error(`Failed to get estimateAmountOfBdao: ${err.stack}`));
    }
  }, [account, estimateAmountOfBdao]);

  return estimateAmount;
};

export default useEstimateBdao;
