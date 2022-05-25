import {useCallback} from 'react';
import useBamFinance from '../useBamFinance';
import useHandleTransactionReceipt from '../useHandleTransactionReceipt';
// import { BigNumber } from "ethers";
import {parseUnits} from 'ethers/lib/utils';

const useSwapBBondToBdao = () => {
  const bamFinance = useBamFinance();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleSwapBdao = useCallback(
    (bbondAmount: string) => {
      const bbondAmountBn = parseUnits(bbondAmount, 18);
      handleTransactionReceipt(bamFinance.swapBBondToBdao(bbondAmountBn), `Swap ${bbondAmount} BBond to Bdao`);
    },
    [bamFinance, handleTransactionReceipt],
  );
  return {onSwapBdao: handleSwapBdao};
};

export default useSwapBBondToBdao;
