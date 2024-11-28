import { Checkbox, Dropdown, Label, RangeSlider } from 'flowbite-react'
import React, { useState } from 'react'
import SimpleDropdown from '../DropDown/SimpleDropdown'

const data = ["Batting Gloves", "Cricket Bat", "Hockey Stick", "Football", "Badminton"]
const title = ['STYLE', 'AVAILABILITY', 'BRAND', 'SIZE']

type sibebarType={
    filterData:(price:string)=>void
}

const Sidebar = ({filterData}:sibebarType) => {
    const [rangeValue,setRangeValue]=useState('0')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setRangeValue(e.target.value);
        filterData(e.target.value);
    }

    return (
        <div className='w-52 h-[80vh] overflow-y-auto sticky top-20  border-gray-200 border-2 ml-2 mt-5'>
            <SimpleDropdown>
                <span className='mx-auto'>{rangeValue=='10000'?'10000+':rangeValue}</span>
                <input type="range" value={rangeValue} step={500} onChange={handleChange} min={0} max={10000} />
                <div className='flex justify-between'>
                    <span>0</span>
                    <span>10000+</span>
                </div>
            </SimpleDropdown>
            {
                title.map((element, i) => (
                    <SimpleDropdown title={element}>
                        {
                            data.map((ele, i) => (
                                <div className="flex items-center gap-4">
                                    <Checkbox id="promotion" className='' />
                                    <Label htmlFor="promotion" className='font-thin'>{ele}</Label>
                                </div>
                            ))
                        }
                    </SimpleDropdown>
                ))
            }

        </div>
    )
}

export default Sidebar