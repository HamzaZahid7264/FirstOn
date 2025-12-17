import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Componits/Card'
import { JobCards } from './Componits/JobCards'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='parent'>

      
      <JobCards/>
      
      <Card imge="https://www.bing.com/th/id/OIP.AfKMLf4rKX7EqOSAVpujIQHaEK?w=294&h=211&c=8&rs=1&qlt=90&r=0&o=6&cb=ucfimg1&dpr=1.3&pid=3.1&rm=2&ucfimg=1" Name="Google" Time="3Days ago" Job="Full Stack" WTime="Full Time" Level="Jonior" Price="$130/hr"/>
      <Card imge="https://www.bing.com/th/id/OIP.qI-czN7dQOdP3DpbxkzICQHaD4?w=269&h=211&c=8&rs=1&qlt=90&r=0&o=6&cb=ucfimg1&dpr=1.3&pid=3.1&rm=2&ucfimg=1" Name="Amazon" Time="5Days ago" Job="Front End" WTime="Part Time" Level="Senior" Price="$150/hr"/>
      <Card imge="https://www.bing.com/th/id/OIP.TJPPqgPkbIoECkGmtCrmIQHaHa?w=191&h=211&c=8&rs=1&qlt=90&r=0&o=6&cb=ucfimg1&dpr=1.3&pid=3.1&rm=2&ucfimg=1" Name="Facebook" Time="7Days ago" Job="Software" WTime="Full Time" Level="Jonior" Price="$110/hr"/>
      <Card imge="https://www.bing.com/th/id/OIP.qI-czN7dQOdP3DpbxkzICQHaD4?w=269&h=211&c=8&rs=1&qlt=90&r=0&o=6&cb=ucfimg1&dpr=1.3&pid=3.1&rm=2&ucfimg=1" Name="Amazon" Time="5Days ago" Job="Front End" WTime="Part Time" Level="Senior" Price="$150/hr"/>
     </div>
    </>
  )
}

export default App
