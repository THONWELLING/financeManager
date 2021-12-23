import ReactTooltip from "react-tooltip"

import { TableItem } from '../TableItem'
import { Item } from '../../types/Item'

import * as C from './styles'



type Props = {
    list: Item[]
    onEditItem: (item: Item) => void
    onDeleteItem: (str: string) => void
}

export const TableArea = ({ list, onEditItem, onDeleteItem }: Props) => {
    return (
        <C.table>
            <thead>
                <tr>
                    <C.theadColumn width={100}>Data</C.theadColumn>
                    <C.theadColumn width={140}>Categoria</C.theadColumn>
                    <C.theadColumn>Título</C.theadColumn>
                    <C.theadColumn width={150}>Valor</C.theadColumn>
                    <C.theadColumn width={50}>#</C.theadColumn>
                </tr>
            </thead>
            <tbody>
                {list.map((item, key) => (
                    <TableItem
                        key={key}
                        item={item} 
                        handleEditItem={onEditItem}
                        handleDeleteItem={onDeleteItem}
                    />
                ))}
            </tbody>
            <ReactTooltip
                id='tip-top'
                place='top'
                effect='solid'
            />
        </C.table>
    );
}