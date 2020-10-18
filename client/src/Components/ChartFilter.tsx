import React, { ChangeEvent } from 'react';
//import { isPropertySignature } from 'typescript';

const filterValuesData = [
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018"
]

// Test

export type ChartFilterProps = {
    filterValue: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}


const ChartFilter = ({ filterValue, onChange }: ChartFilterProps) => {

    return (
        <div>
            <input type="range"
                id="yearSelector"
                min={filterValuesData[0]}
                max={filterValuesData.slice(-1)[0]}
                value={filterValue}
                onChange={onChange}>
            </input>
        </div>
    )

}

export default ChartFilter;