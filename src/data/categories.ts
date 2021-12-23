import { Category } from '../types/Category';

export const categories: Category = {
    food: { title: 'Alimentação', color: 'blue', expense: true },
    rent: { title: 'Aluguel', color: '#D2691E', expense: true },
    salary: { title: 'Salário', color: 'chartreuse', expense: false },
    bills: { title: 'Contas', color: '#4B0082', expense: true },
    extras: { title: 'Extra', color: '#00FF00', expense: false }
}