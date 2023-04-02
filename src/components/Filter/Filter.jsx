import { useDispatch } from "react-redux"
import { setFilter } from "redux/filterSlice";
import {InputSearch} from './Filter.styled';

export const Filter = () => {
    const dispatch = useDispatch();



    return (
        <>
        <InputSearch type="text" placeholder="Find ToDo" onChange={(e) => dispatch(setFilter(e.target.value))}/>
        </>
    )
}