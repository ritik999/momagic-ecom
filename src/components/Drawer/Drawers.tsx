import { Drawer } from 'flowbite-react'
import React from 'react'

type drawerType={
    isOpen:boolean,
    handleDrawer:()=>void
}

const Drawers = ({isOpen,handleDrawer}:drawerType) => {
    return (
        <Drawer open={isOpen} onClose={()=>handleDrawer()} position="right">
            <Drawer.Header title="Drawer" />
            <Drawer.Items>
                <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio culpa delectus ad excepturi quia ipsa nulla, molestiae itaque dolorem, enim, sint ipsam accusamus explicabo quos beatae facere eius tempora maxime laborum. Tenetur ea quos pariatur exercitationem cumque totam reprehenderit explicabo.
                </p>
            </Drawer.Items>
        </Drawer>
    )
}

export default Drawers