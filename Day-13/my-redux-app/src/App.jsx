import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Todo from './components/Todo/Todo';
import TodoItem from './components/Todo/TodoItem';
import Login from './components/User/login';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Todo />} />
        <Route exact path='/todo/:id' element={<TodoItem />} />
        <Route exact path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
