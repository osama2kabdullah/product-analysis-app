import React from 'react';
import useChartdata from '../hooks/useChartdata';
import PieChart from './PieChart';

export const ChartdataContext = React.createContext('hello')

const Dashboard = () => {
    
    const [datas, setDatas] = useChartdata();
    
    
    return (
        <ChartdataContext.Provider value={datas}>
        <div className='m-16 grid grid-cols-2 gap-10'>
            <PieChart></PieChart>
        </div>
        </ChartdataContext.Provider>
    );
};

export default Dashboard;