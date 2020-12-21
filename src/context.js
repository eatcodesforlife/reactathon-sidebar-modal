import React, { useState, useContext } from 'react'


const AppContext = React.createContext()

const AppProvider = ({children}) => {

    const [ isShowModal, setIsShowModal ] = useState(false)
    const [ isSideBarOpen, setIsSideBarOpen ] = useState(false)

    const openSideBar = () => {
        setIsSideBarOpen(!isSideBarOpen)
    } 

    const openModal = () => {
        setIsShowModal(!isShowModal)
    }
    
    return <AppContext.Provider 
            value={{isShowModal, isSideBarOpen, openModal, openSideBar}}
        >
            {children}
        </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }