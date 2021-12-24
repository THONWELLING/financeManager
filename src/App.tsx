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
import ThemeChanger from './components/ThemeChanger'
import ReactTooltip from "react-tooltip";
import Actions from './components/Actions';
import ModalAddItem from './components/ModalAddItem';



const App = () => {
  const [list, setList] = useState(items)
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [search, setSearch] = useState('')
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0)

  const [theme, setTheme] = usePersistedData('light', light)
  const [showModal, setShowModal] = useState(false)



  const handleShowModal = () => {
    setShowModal(!showModal);
  }

  const handleAddItem = (item: Item) => {

    let newlist: Item[] = [...list];

    newlist.push({
      date: new Date(),
      category: item.category,
      title: item.title,
      value: parseFloat(item.value.toFixed(2))
    });

    setList(newlist);

    handleShowModal();
  }

  const handleFilterByCategory = (category: string) => {    
    console.log("Categoria enviada: " + category);

    if (category !== "all") {

      setFilteredList(filterListByMonth(list, currentMonth));

      let newList = filteredList.filter((item) => {
        if (item.category === category) {
          return item;
        } else {
          return item;
        }
      });

      setFilteredList(newList);

    } else {
      setFilteredList(filterListByMonth(list, currentMonth));
    }

  }

  const handleFilterByTitle = () => {

    if (search !== '') {
      // eslint-disable-next-line array-callback-return
      let newList = filteredList.filter((item: Item) => {
        if (item.title.toLowerCase().indexOf(search.toLowerCase()) >= 0) 
          return item;
      });

      setFilteredList(newList);
    } else {
      setFilteredList(filterListByMonth(list, currentMonth));
    }
  }

  const handleEditItem = (item: Item) => {

  }

  const handleDeleteItem = (title: string) => {

    let newlist: Item[] = list.filter((item: Item) => {
      if (item.title !== title)
        return item;
    });

    setList(newlist);
  }

  useEffect(() => {

    handleFilterByTitle();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);


  useEffect(() => {
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


  const toggleTheme = () => {
    if (theme.title !== 'Dark') {
      setTheme(dark)
    } else {
      setTheme(light)
    }
  }


  return (
    <ThemeProvider theme={theme}>
      <C.Container>
        <C.Header>
          <C.HeaderText>Gerenciador Financeiro</C.HeaderText>
          <ThemeChanger
              data-tip='Mudar tema'
              data-for='tip-top'
              toogleTheme={toggleTheme} />
        </C.Header>
        <C.Body>
          <InfoArea
            currentMonth={currentMonth}
            onMonthChange={handleMonthChange}
            income={income}
            expense={expense}
          />
          <Actions
            onShowModal={handleShowModal}
            onSetCategory={handleFilterByCategory}
            onSearchText={setSearch}
          />
          <TableArea
            list={filteredList}
            onEditItem={handleEditItem}
            onDeleteItem={handleDeleteItem}
          />
        </C.Body>
        <ReactTooltip 
          id='tip-top'
          place='top'
          effect='solid' 
        />
      </C.Container>
      {showModal &&
        <ModalAddItem
          onShowModal={handleShowModal}
          onAddItem={handleAddItem}
        />
      }

      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App