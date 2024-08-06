import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Coma from './componets-in/cared/insect.jsx'
import ComponetClassA from './componets-in/classcomA/ClasscomA.jsx'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div className="d-flex">
          <ComponetClassA name="kartik" age="20" />          
          <Coma name = " Jay kalathiya" age ="20" email=" kalathiyajay020@gmail.com" add=" 1,panchavati.soi ,amroli ,surat" hod=" read , traveling , play-criket" field="MASTER IN FONT ANS DEV." />
          </div>
     
      </div>
      
    </>
  )
}

export default App
