import React from 'react';
import { fireEvent, render, screen } from '../../utils/test-utils';
import FavoriteButton from './FavoriteButton';
import Restaurant from '../../interfaces/restaurantInterface';
import {
  addToFavorites,
  deleteFromFavorites,
} from '../../redux/actions/actionCreators';
import actionTypes from '../../redux/actions/actionTypes';

jest.mock('../../redux/actions/actionCreators', () => ({
  ...jest.requireActual('../../redux/actions/actionCreators'),
  addToFavorites: jest.fn(),
  deleteFromFavorites: jest.fn(),
}));

describe('Given the FavButton component', () => {
  const initialState = {
    preloadedState: {
      favorites: [],
    },

  };
  const mockRestaurant: Restaurant = {
    id: 1,
    name: 'Restaurant for test',
    image_url: 'https://image.freepik.com/free-photo/delicious-vietnamese-food-including-pho-ga-noodles-spring-rolls-white-table_181624-34062.jpg',
    reviews: [{ score: 3, comment: 'hola' }],
    food_type: 'Cocktails & Surprises',
    address: [
      'C/ Gran Vía, 12',
      '28013, Madrid',
    ],
    visited: true,
    open_hours: [{
      open_time: '',
      close_time: '',
    }],
  };

  test('When rendered the heart icon should be rendered', () => {
    render(<FavoriteButton restaurant={mockRestaurant} />);
    expect(screen.getByAltText(/favorite-icon/i)).toBeInTheDocument();
  });
  describe('When the RestaurantCard component is rendered', () => {
    beforeEach(() => {
      addToFavorites.mockReturnValueOnce({
        type: actionTypes.ADD_TO_FAVORITES,
        newFavorite: {},
      });
      render(<FavoriteButton restaurant={mockRestaurant} />, initialState);
    });
    test('Then name of restaurant should be rendered', () => {
      const favouriteButton = screen.getByRole('button');
      fireEvent.click(favouriteButton);
      expect(addToFavorites).toHaveBeenCalled();
    });
  });
});
describe('Given the FavButton component', () => {
  const initialState = {
    preloadedState: {
      favorites: [{
        id: 1,
        name: 'Restaurant for test',
        image_url: 'https://image.freepik.com/free-photo/delicious-vietnamese-food-including-pho-ga-noodles-spring-rolls-white-table_181624-34062.jpg',
        reviews: [{ score: 3, comment: 'hola' }],
        food_type: 'Cocktails & Surprises',
        address: [
          'C/ Gran Vía, 12',
          '28013, Madrid',
        ],
        visited: true,
        open_hours: [{
          open_time: '',
          close_time: '',
        }],
      }],
    },

  };
  const mockRestaurant: Restaurant = {
    id: 1,
    name: 'Restaurant for test',
    image_url: 'https://image.freepik.com/free-photo/delicious-vietnamese-food-including-pho-ga-noodles-spring-rolls-white-table_181624-34062.jpg',
    reviews: [{ score: 3, comment: 'hola' }],
    food_type: 'Cocktails & Surprises',
    address: [
      'C/ Gran Vía, 12',
      '28013, Madrid',
    ],
    visited: true,
    open_hours: [{
      open_time: '',
      close_time: '',
    }],
  };
  describe('When the RestaurantCard component is rendered', () => {
    beforeEach(() => {
      const isFavorite = jest.fn().mockReturnValueOnce(true);
      deleteFromFavorites.mockReturnValueOnce({
        type: actionTypes.DELETE_FROM_FAVORITES,
        id: 1,
      });
      render(<FavoriteButton restaurant={mockRestaurant} />, initialState);
    });
    test('Then name of restaurant should be rendered', () => {
      const favouriteButton = screen.getByRole('button');
      fireEvent.click(favouriteButton);
      expect(deleteFromFavorites).toHaveBeenCalled();
    });
  });
});