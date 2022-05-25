import {useContext} from 'react';
import {Context} from '../contexts/BamFinanceProvider';

const useBamFinance = () => {
  const {bamFinance} = useContext(Context);
  return bamFinance;
};

export default useBamFinance;
