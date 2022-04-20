//路由
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.scss';
import Login from './pages/Login';
import Layout from './pages/Layout';

import { AuthRoute } from '@/components/AuthRoute'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch> {/* switch组件用来管理路由模糊匹配的穿透问题，从而实现精准匹配 */}
          <Route path={'/login'} component={Login}></Route>
          <AuthRoute path={'/'} component={Layout}></AuthRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
