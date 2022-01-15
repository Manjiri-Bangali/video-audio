import { render, screen } from '@testing-library/react';
import App from './App';

describe('App.js', ()=>{
  it('should render the component', () => {
    const ele = render(<App />);
    expect(ele).toMatchSnapshot();
  });
});
