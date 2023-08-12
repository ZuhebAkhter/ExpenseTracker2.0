import React,{useEffect,useState} from 'react'
import Authentication from './Components/AuthenticationFolder/Authentication'
import Navbar from './Components/NavbarItems/Navbar'
import {Routes,Route} from 'react-router-dom'
import Main from './Components/MainBody/Main'
import ProfileUpdate from './Components/MainBody/ProfileUpdate'
import ExpensesInput from './Components/MainBody/ExpensesInput'
const App = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const response = await fetch('https://expensetracker011-default-rtdb.firebaseio.com/expenses.json');
      const data = await response.json();
      const expensesArray = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      setExpenses(expensesArray);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
    
  };
  console.log(expenses)
  return (
    <div>
    <header>
      <Navbar/>
    </header>
    <Routes>
      <Route path='/'  element={<Authentication/>}></Route>
     <Route path='/welcome' element={<Main/>}></Route>
     <Route path='/welcome/profile' element={<ProfileUpdate/>}></Route>
     <Route path='/expenses' element={<ExpensesInput ApiExpenses={expenses}/>}></Route>
     </Routes>
     </div>
  )
}

export default App
