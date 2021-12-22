import { useEffect, useState } from 'react'
import * as C from './App.styles'
import Main from './components/Main'
import Header from './components/Header'
import { Item } from './types/Item'
import { Category } from './types/Category'
import { items } from './data/items'
import { categories } from './data/categories'
import { getCurrentMonth, FilterByMonth } from './helpers/dateFilter'



const App = () => {
  const [list, setList] = useState(items)
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())

  useEffect(() => {
    setFilteredList(FilterByMonth(list, currentMonth))
  }, [list, currentMonth])

  return (
    <C.Container>
      <Header />
      <Main />
    </C.Container>
    
  )
}

export default App

