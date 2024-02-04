import {Outlet} from 'react-router-dom'
import React from 'react'

function layout() {
  return (
    <main>
        <Outlet/>
    </main>
  )
}

export default layout