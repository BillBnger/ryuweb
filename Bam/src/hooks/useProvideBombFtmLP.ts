import {useCallback} from 'react';
import useBamFinance from './useBamFinance';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';
import {parseUnits} from 'ethers/lib/utils';
import {TAX_OFFICE_ADDR} from '../utils/constants';

const useProvideBamFtmLP = () => {
  const bamFinance = useBamFinance();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleProvideBamFtmLP = useCallback(
    (ftmAmount: string, bamAmount: string) => {
      const bamAmountBn = parseUnits(bamAmount);
      handleTransactionReceipt(
        bamFinance.provideBamFtmLP(ftmAmount, bamAmountBn),
        `Provide BAM-USDC LP ${bamAmount} ${ftmAmount} using ${TAX_OFFICE_ADDR}`,
      );
    },
    [bamFinance, handleTransactionReceipt],
  );
  return {onProvideBamFtmLP: handleProvideBamFtmLP};
};

export default useProvideBamFtmLP;
