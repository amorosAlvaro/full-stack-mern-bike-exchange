import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import { loadBikes, loadFavoriteBikes } from '../../redux/action.creators';
import Card from '../common/Card/Card';
import './AllBikesList.scss';

const AllBikesList = function AllBikesList() {
  const dispatch = useDispatch();

  const [input, setInput] = useState('');
  const [list, setList] = useState([]);

  const bikes = useSelector((store) => store.bikes);
  const token = useSelector((store) => store.login);
  useEffect(() => {
    setList(bikes);
  }, [bikes]);

  const headers = {
    headers: {
      'auth-token': token
    }
  };
  useEffect(() => {
    dispatch(loadBikes());
    if (token) {
      dispatch(loadFavoriteBikes(headers));
    }
  }, [dispatch]);

  useEffect(() => {
    if (input.length) {
      const newList = list.filter(
        (el) => el.make.toLowerCase().includes(input.trim().toLowerCase())
      );
      setList(newList);
    } else {
      setList(bikes);
    }
  }, [input]);

  return (
    <>
      <section className="sub-header">
        <h2>All Bikes</h2>
        <div className="search">
          <TextField
            id="outlined-required"
            label="Search by brand..."
            onChange={(event) => setInput(event.target.value)}
          />
        </div>
      </section>
      <Card list={list} type="allBikes" />

    </>

  );
};

export default AllBikesList;
