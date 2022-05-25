import {useCallback} from 'react';
import useBamFinance from './useBamFinance';
import {Bank} from '../bam-finance';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';

const useRedeem = (bank: Bank) => {
  const bamFinance = useBamFinance();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleRedeem = useCallback(() => {
    handleTransactionReceipt(bamFinance.exit(bank.contract, bank.poolId), `Redeem ${bank.contract}`);
  }, [bank, bamFinance, handleTransactionReceipt]);

  return {onRedeem: handleRedeem};
};

export default useRedeem;
