import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { quiz } from 'reducers/quiz';
import { CurrentQuestion } from 'components/CurrentQuestion';
import { Welcome } from 'components/Welcome';
import { Summary } from 'components/Summary';
// import { Footer } from 'components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const reducer = combineReducers({
  quiz: quiz.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/quizflix" element={<CurrentQuestion />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
