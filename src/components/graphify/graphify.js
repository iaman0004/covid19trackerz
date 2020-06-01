import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';

const Graphify = ({data}) =>{
    return(
        <div className="state-graph">
            <HorizontalBar
                data={data}
                options={{
                    legend : {
                        display : false,
                        position : 'right'
                    }
                }}
            />
        </div>
    );
}

export default Graphify;