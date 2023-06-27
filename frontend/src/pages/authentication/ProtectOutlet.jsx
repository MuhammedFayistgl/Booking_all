import React from 'react'
import { Outlet } from 'react-router-dom'

const ProtectOutlet = () => {
  return (
    <> <Outlet/></>
  )
}

export default ProtectOutlet