import { Routes, Route} from 'react-router-dom'
import { FormsStep1 } from './pages/FormStep1'
import { FormStep2 } from './pages/FormStep2'
import { FormStep3 } from './pages/FormStep3'
import { Home } from './pages/Home'


export const Router = ()=> {
  return (
    <Routes>
      <Route path='/'  element={ <Home /> }/>
      <Route path='/Step1'  element={ <FormsStep1 /> } />
      <Route path='/Step2'  element={ <FormStep2 /> } />
      <Route path='/Step3'  element={ <FormStep3 /> } />
    </Routes>
  )
}