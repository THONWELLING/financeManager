import * as C from './styles'
import { Item } from '../../types/Item'
import { formatDate } from '../../helpers/dateFilter'
import { categories } from '../../data/categories'


import { BiEdit } from 'react-icons/bi'
import { BsTrash } from 'react-icons/bs'

import { FaUtensils } from 'react-icons/fa'
import { GiTakeMyMoney } from 'react-icons/gi'
import { IoIosHome } from 'react-icons/io'



type Props = {
    item: Item
    handleEditItem: (item: Item) => void;
    handleDeleteItem: (str: string) => void;
}

export const TableItem = ({ item, handleEditItem ,handleDeleteItem }: Props) => {

    const SetIcon = (category: string) => {
        switch (category) {
            case 'alimentação':
                return <FaUtensils data-tip='Alimentação' data-for='tip-top' />
            case 'Aluguel':
                return <IoIosHome data-tip='Moradia' data-for='tip-top' />
            case 'Salário':
                return <GiTakeMyMoney data-tip='Salário' data-for='tip-top' />
            default:
                break;
        }
    }

    const onEditItem = (item: Item) => {

    }

    const onDeleteItem = ({title} : Item) => {
        handleDeleteItem(title);
    }

    return (
        <C.TableLine>
            <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
            <C.TableColumn>
                <C.Category
                    bgcolor={categories[item.category].color}
                >
                    {SetIcon(categories[item.category].title)}
                    {`    ${categories[item.category].title}`}
                </C.Category>
            </C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>
                <C.Value
                    color={categories[item.category].expense ? '#dc3545' : '#28a745'}
                >
                    R$ {item.value}
                </C.Value>
            </C.TableColumn>
            <C.TableColumn>
                <C.IconArea>
                    <C.IconItem
                        data-tip="Editar"
                        data-for="tip-top"
                    >
                        <BiEdit
                            onClick={() => onEditItem(item)}
                        />
                    </C.IconItem>
                    <C.IconItem
                        data-tip="Excluir"
                        data-for="tip-top"
                    >
                        <BsTrash
                            onClick={() => onDeleteItem(item)}
                        />
                    </C.IconItem>
                </C.IconArea>
            </C.TableColumn>
        </C.TableLine>
    );
}