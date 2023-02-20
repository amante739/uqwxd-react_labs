import React from 'react';
import MyButton from './MyButton';
import DivPanel from './DivPanel';

const MainPanel=()=>{
    return (
        <div>
            This is MainPanel <MyButton/>
            <DivPanel/>
        </div>
    );
}

export default MainPanel;