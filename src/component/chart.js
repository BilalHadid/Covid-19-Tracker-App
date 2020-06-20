import React from 'react'
import {Pie,Line} from 'react-chartjs-2'

export const Chart = ({finalize}) => {
    const state = {
        charData:{
            labels:['New Confirmed','New Death','New recovered','Total Confirmed','Total Deaths','Total Recovered'],
            datasets:[
                {
                    label: 'Population',
                    data:[
                        finalize.NewConfirmed,
                        finalize.NewDeaths,
                        finalize.NewRecovered,
                        finalize.TotalConfirmed,
                        finalize.TotalDeaths,
                        finalize.TotalRecovered

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
            {/* <Bar
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
                }} /> */}
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
