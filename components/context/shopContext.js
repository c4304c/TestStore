import { createContext, useState, useEffect } from 'react'
import { useMoralis, useMoralisQuery } from 'react-moralis'

export const shopContext = createContext()

export const shopProvider = ({children}) => {

    return(
        <shopContext.Provider>
            value{{

            }}
            {children}
        </shopContext.Provider>
    )

}