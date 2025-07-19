import React from 'react';
import Bottombar from '../../Components/Bottombar';
import Topbar from '../../Components/Topbar';
import Formsell from './Formsell';

import './sell.scss'
const Sell = () => {
    return (
        <div style={{  backgroundColor: "#353535",}}>
           <Topbar/>
      
                <Formsell/>

           

           <Bottombar/>
        </div>
    );
}

export default Sell;
