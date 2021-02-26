import { Fragment } from 'react';
import Header from './Header';

function App() {
  return (
    <Fragment>
	  <Header />
      <button>Add</button>
      <div>
        <span> Name </span>
        <span> Phone </span>
      </div>
  </Fragment>
  );
}

export default App;
