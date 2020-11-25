
import Stepper from 'components/Stepper/Stepper'
import Main from 'pages/Main'
import routes from './routes'
import { Route, Switch, useHistory } from "react-router-dom";
import PublicLayout from 'shared/layout/PublicLayout'
import Error from 'pages/Error'

const pages = [
  {
    exact: true,
    path: routes.home,
    component: Main,
    layout: PublicLayout,
    
  },
  {
    exact: true,
    path: routes.details,
    component: Stepper,
    layout: PublicLayout,
   
  }]


function App() {
  const history = useHistory();

 
  return (
    <div className="app">
       <Switch>
        {pages.map(
          ({ exact, path, component: Component, layout: Layout }, index) => (
            <Route
              key={index}
              exact={exact}
              path={path}
              render={(props) => (
                <Layout history={history}>
                  <Component {...props} />
                </Layout>
              )}
            />
          )
        )}
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
