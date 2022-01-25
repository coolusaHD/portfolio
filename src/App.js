import './App.css';

//import roboto font
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import routes from './routes';

function App() {
  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;
