import { Switch, Route } from 'react-router';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import TodoList from './Pages/Todo';
import TodoListProvider from './context/todoList';
import CommentListProvider from './context/comments';
import Comments from './Pages/Comments';



function App() {
  return (
    <Router>
      <Link to="/Todo">Todos</Link>
      <Link to="/comments">Comments</Link>
      <Switch>
        <Route path="/comments">
          <CommentListProvider>
            <Comments />
          </CommentListProvider>
        </Route>
        <Route path="/">
          <TodoListProvider>
            <TodoList />
          </TodoListProvider>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;