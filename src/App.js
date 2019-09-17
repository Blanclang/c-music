import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style';

import { renderRoutes } from 'react-router-config';//renderRoutes读取路由配置转化为Route标签
import store from './store/index';
import routes from './routes/index.js';
import { HashRouter } from 'react-router-dom';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <GlobalStyle></GlobalStyle>
//         是的发个
//       </div>
//     );
//   }
// }

function App() {
  return (
    <Provider store = { store }>
      <HashRouter>
        <GlobalStyle></GlobalStyle>
        { renderRoutes(routes) }
      </HashRouter>
    </Provider>
  )
}

export default App;




