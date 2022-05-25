import {useEffect, useState} from 'react';
import useBamFinance from './useBamFinance';
import useRefresh from './useRefresh';

const useFetchBoardroomAPR = () => {
  const [apr, setApr] = useState<number>(0);
  const bamFinance = useBamFinance();
  const {slowRefresh} = useRefresh();

  useEffect(() => {
    async function fetchBoardroomAPR() {
      try {
        setApr(await bamFinance.getBoardroomAPR());
      } catch (err) {
        console.error(err);
      }
    }
    fetchBoardroomAPR();
  }, [setApr, bamFinance, slowRefresh]);

  return apr;
};

export default useFetchBoardroomAPR;
