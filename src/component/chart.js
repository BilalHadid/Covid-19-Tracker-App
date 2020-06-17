import React from 'react'
import {Bar, Line, Pie} from 'react-chartjs-2'

export const Chart = () => {
    const state = {
        charData:{
            labels:['Bilal','hadid','Fajruddin','Qasim','usama','suhaib'],
            datasets:[
                {
                    label: 'Population',
                    data:[
                        617594,
                        184145,
                        389256,
                        867523,
                        124586,
                        856758

                    ],
                    backgroundColor:[
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 253, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                        'rgba(255, 99, 132, 0.6)',
                    ]
                }
            ]
        }
    }
    return(
        <div className="chart">
            <Bar
                data={state.charData}
                
                options={{
                    title:{
                        display:true,
                        text: 'Largest Population are effected covid 19',
                        fontSize: 25
                    },
                    legend:{
                        display: true,
                        position: 'bottom'
                    }
                }} />
            <Line
                data={state.charData}
                
                options={{
                    title:{
                        display:true,
                        text: 'Largest Population are effected covid 19',
                        fontSize: 25
                    },
                    legend:{
                        display: true,
                        position: 'right'
                    }
                }} />
            <Pie
                data={state.charData}
                
                options={{
                    title:{
                        display:true,
                        text: 'Largest Population are effected covid 19',
                        fontSize: 25
                    },
                    legend:{
                        display: true,
                        position: 'right'
                    }
                }} />

        </div>
    )
}
