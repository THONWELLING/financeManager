import { useState } from 'react'
import * as C from './App.styles'
import Main from './components/Main'
import Header from './components/Header'
import { Item } from './types/Item'
import { Categories } from './types/Category'
import { items } from './data/items'
import { Categories } from './data/categories'
import { getCurrentMonth } from './helpers/dateFilter'



const App = () => {
  const [list, setList] = useState(items)
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())

  return (
    <C.Container>
      <Header />
      <Main />
    </C.Container>
    
  )
}

export default App

