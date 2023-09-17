import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Home } from './component/Home'
import { SeoAudit } from './component/SeoAudit'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/*' element={<SeoAudit/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App