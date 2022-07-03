import React, { FC } from 'react';
import { Routing } from './routing';
import { useSelector } from 'react-redux';
import { RootState } from './store/reducers';
import { ErrorPopup } from './components/Popup/ErrorPopup';

const App: FC = () => {
  const error = useSelector((state: RootState) => {
    return {
      show: state.popupReducer.show,
      text: state.popupReducer.text,
    };
  });

  return (
    <>
      <ErrorPopup show={error.show} text={error.text} />
      <Routing />
    </>
  );
};

export default App;
