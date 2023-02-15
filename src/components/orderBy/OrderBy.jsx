import React from 'react'
import { useDispatch } from 'react-redux'
import { orderBy } from '../../redux/actions/actions';


export default function OrderBy() {
    const dispatch = useDispatch();
    const handleOrder = (e) => {
        dispatch(orderBy(e.target.value));
    }
    return (
        <div>
            <select onChange={handleOrder}>
                <option value="ascendence">Ascendence</option>
                <option value="descendences">Descendences</option>
            </select>
        </div>
    )
}
