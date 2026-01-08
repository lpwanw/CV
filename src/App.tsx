import { Route, Switch } from 'wouter'
import { HomePage, CVPage } from '@/pages'

function App() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/cv" component={CVPage} />
      <Route>
        <HomePage />
      </Route>
    </Switch>
  )
}

export default App
