import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../feature/rick&morty/rickandmortySlice';

const Pagination = () => {
  const { isLoading, error , data } = useSelector(state => state.rickandmorty);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData({page:1,name:"", status:""}));
  }, [dispatch]);
  console.log("pagination: ", isLoading, error, data.characters);
  return (
    <div>Pagination</div>
  )
}

export default Pagination