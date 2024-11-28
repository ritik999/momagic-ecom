import React from 'react'
import { Dropdown } from 'flowbite-react';
import { IoPersonOutline } from 'react-icons/io5';
import { HiCog, HiCurrencyDollar, HiLogout, HiViewGrid } from 'react-icons/hi';

const DropdownLable = () => {
    return (
      <>
        <div className='flex items-center gap-1'>
          <IoPersonOutline />
          <span>Account</span>
        </div>
      </>
    )
  }

export const DropdownComp = () => {
    return (
        <>
            <Dropdown label={<DropdownLable />} inline>
                <Dropdown.Header>
                    <span className="block text-sm">Bonnie Green</span>
                    <span className="block truncate text-sm font-medium">bonnie@flowbite.com</span>
                </Dropdown.Header>
                <Dropdown.Item icon={HiViewGrid}>Dashboard</Dropdown.Item>
                <Dropdown.Item icon={HiCog}>Settings</Dropdown.Item>
                <Dropdown.Item icon={HiCurrencyDollar}>Earnings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item icon={HiLogout}>Sign out</Dropdown.Item>
            </Dropdown>
        </>
    )
}
