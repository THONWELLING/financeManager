import { useState, useEffect } from 'react'

//importação de estilos
import * as C from './App.styles'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import { dark } from "./styles/themes/dark"
import { light } from "./styles/themes/light"

//importação de dados 
import { Item } from './types/Item'
import { categories } from './data/categories'
import { items } from './data/items'

//importação de funções auxiliares/ajudadoras(Helpers)
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter'
import usePersistedData from './utils/usePersistedData'

//importação de componentes
import { TableArea } from './components/TableArea'
import { InfoArea } from './components/InfoArea'
import { InputArea } from './components/InputArea'



const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const [theme, setTheme] = usePersistedData('light', light);

  useEffect(()=>{
    setFilteredList( filterListByMonth(list, currentMonth) )
  }, [list, currentMonth]);

  useEffect(()=>{
    let incomeCount = 0
    let expenseCount = 0

    for(let i in filteredList) {
      if(categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value
      } else {
        incomeCount += filteredList[i].value
      }
    }

    setIncome(incomeCount)
    setExpense(expenseCount)
  }, [filteredList])

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth)
  }

  const handleAddItem = (item: Item) => {
    let newList = [...list]
    newList.push(item)
    setList(newList)
  }

  return (
    <ThemeProvider theme={theme}>
      <C.Container>
      <C.Header>
        <C.HeaderText>Gerenciador Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />

        <InputArea onAdd={handleAddItem} />

        <TableArea list={filteredList} />

      </C.Body>
    </C.Container>
    </ThemeProvider>
  );
}

export default App