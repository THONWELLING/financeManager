import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import * as C from './styles'
import { formatCurrentMonth } from '../../helpers/dateFilter'
import { ResumeItem } from '../ResumeItem'

import { FaHandPointRight } from 'react-icons/fa'
import { FaHandPointLeft } from 'react-icons/fa'


type Props = {
    currentMonth: string
    onMonthChange: (newMonth: string) => void
    income: number
    expense: number
}

export const InfoArea = ({ currentMonth, onMonthChange, income, expense }: Props) => {
    
    const theme = useContext(ThemeContext)

    const handlePrevMonth = () => {
        let [year, month] = currentMonth.split('-')
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1)
        currentDate.setMonth( currentDate.getMonth() - 1 )
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }

    const handleNextMonth = () => {
        let [year, month] = currentMonth.split('-')
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1)
        currentDate.setMonth( currentDate.getMonth() + 1 )
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }

    return (
        <C.Container>
            <C.MonthArea>
                <C.MonthArrow 
                    onClick={handlePrevMonth}
                    data-tip='Diminuir Mês'
                    data-for='tip-top'
                >
                    <FaHandPointLeft
                        color={theme.background.secundary}
                    />
                </C.MonthArrow>
                <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
                <C.MonthArrow
                    onClick={handleNextMonth}
                    data-tip='Avançar Mês'
                    data-for='tip-top'
                >
                    <FaHandPointRight
                        color={theme.background.secundary}
                    />
                </C.MonthArrow>
            </C.MonthArea>
            <C.ResumeArea>
                <ResumeItem
                    title='Total Entradas'
                    value={parseFloat(income.toFixed(2))}  
                />
                <ResumeItem               
                    title='Total De Saídas'
                    value={parseFloat(expense.toFixed(2))}
                />
                <ResumeItem
                    title='Saldo Total'
                    value={parseFloat((income - expense).toFixed(2))}
                    color={(income-expense) < 0 ? '#dc3545' : '#28a745'}
                />
            </C.ResumeArea>
        </C.Container>
    );
}
