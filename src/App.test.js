import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('App.js', ()=>{
  it('should render the component', () => {
    const ele = render(<BrowserRouter><App/></BrowserRouter>);
    expect(ele).toMatchSnapshot();
  });
});
