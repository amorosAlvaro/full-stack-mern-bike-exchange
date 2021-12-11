/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import './Search.scss';
import { useSelector, useDispatch } from 'react-redux';
import backgroundImage from '../../assets/img/img.jpg';
import searchIcon from '../../assets/icons/magnifying-glass.svg';

const Search = function () {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (ev) => {
    ev.preventDefault();

    console.log('Submit button');
  };
  const handleChange = (ev) => {
    setInput(ev.target.value);
  };

  return (
    <section className="search-container">
      <h2 className="search-container__header">
        Search
      </h2>
      <img
        className="search-container__background"
        src={backgroundImage}
        alt="A bike"
      />
      <form
        onSubmit={(ev) => handleSubmit(ev, input)}
        className="search-container-form"
      >
        <label
          className="search-container-form__label"
          htmlFor="search-container-form__input"
        >
          Search
        </label>
        <input
          value={input}
          autoComplete="off"
          onChange={(ev) => handleChange(ev, 'input')}
          className="search-container-form__input"
          id="search-container-form__input"
        />
        {input.length > 0 && (
          <button
            onClick={() => setInput('')}
            type="button"
            className="search-container-form__delete"
          >
            X
          </button>
        )}
        <button className="search-container-form__submit">
          <img
            src={searchIcon}
            className="search-container-form__icon"
            alt="Magnifying glass icon"
          />
        </button>
      </form>
    </section>
  );
};

export default Search;
