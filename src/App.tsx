
import {  Outlet, redirect } from 'react-router-dom';
import '@fontsource/montserrat';  
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';
function App() {
redirect('./characters')
  return (


      <main className='main'>
        <Outlet/>
      </main>

  )
}

export default App
