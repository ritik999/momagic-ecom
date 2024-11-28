import React, { useEffect, useRef, useState } from 'react'
import { data } from '../../data/dropDown'
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { filterData } from '../../utils/filterData';


type selectType = {
    noOfCategories: number
}

const Select = ({ noOfCategories }: selectType) => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState('All Categories');
    const [list, setList] = useState(data);
    const listRef = useRef<HTMLDivElement | null>(null);

    const handleElementClick=(e:MouseEvent | any )=>{
        console.log(e?.target);

        if(listRef.current && !listRef.current.contains(e?.target)){
            setIsOpen(false);      
        }
    }

    useEffect(()=>{
        document.addEventListener('click',handleElementClick,true);
        return ()=>{
            document.removeEventListener('click',handleElementClick,false);
        }
    },[])



    const handleIsOpen = () => {
        setIsOpen(!isOpen);
    }

    const handleSelectItem = (name: string) => {
        setSelectedItem(name)
        setIsOpen(false)
    }

    const handleDataFiltering = (e: React.ChangeEvent<HTMLInputElement>) => {
        let keyword = e?.target?.value.toLocaleLowerCase();
        const filteredList = filterData(keyword, data)
        setList(filteredList)
    }

    return (
        <>
            <div className='w-[30%] border-r-2 px-2 relative'>
                <div className='flex items-center justify-between'>
                    <span className='cursor-pointer' onClick={handleIsOpen}>{selectedItem.length>15?`${selectedItem.substring(0,15)} ...`:selectedItem}</span>
                    {isOpen ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}
                </div>

                {isOpen && (
                    <div ref={listRef} className='h-[350px] overflow-auto w-[130%] pt-4 pb-2 px-1 absolute top-8 border-2 border-t-0 bg-white left-1'>
                        <div>
                            <div>
                                <input type="text" onChange={handleDataFiltering} className='w-full h-8 border-2 border-sky-200 outline-none' placeholder='search...' />
                            </div>
                            <div className='mt-2'>
                                <ul className='gap-5 px-1'>
                                    <li onClick={() => handleSelectItem('All Categories')} className={`hover:bg-slate-200 cursor-pointer p-2 ${selectedItem == 'All Categories' ? 'bg-slate-200' : 'bg-white'}`}>All Categories</li>
                                    {list.map((e, i) => (
                                        <li onClick={() => handleSelectItem(e)} className={`hover:bg-slate-200 cursor-pointer p-2 ${selectedItem == e ? 'bg-slate-200' : 'bg-white'}`}>{e}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </>
    )
}

export default Select