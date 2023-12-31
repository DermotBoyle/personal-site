'use client'
import SideMenu from '@/app/common/components/sidemenu/sidemenu';
import React, { createContext, useState } from 'react';


const SideMenuContext = createContext({
    isOpen: false,
    setIsOpen: (isOpen: boolean) => { }
})

const SideMenuProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <SideMenuContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
           <SideMenu />
        </SideMenuContext.Provider>
    )
}

export { SideMenuProvider, SideMenuContext }