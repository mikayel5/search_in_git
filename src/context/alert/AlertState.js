import React from 'react'
import { AlertContext } from './alerContext'


const AlertState = ({ children }) => {
    return (
        <AlertContext.Provider>
            {children}
        </AlertContext.Provider>
    )
}

export default AlertState