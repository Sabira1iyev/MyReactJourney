
/*
import Button from './Button.jsx'

function App() {

  return (
    <Button/>
  );

 
}
export default App

-----------------------
*/


// props

// props = read-only propersties that are shared between components.
//      A parent component can send to a child component.
//     < Component key=value />


/*
import Student from './4-Student.jsx'

function App() {
  return (
    <>
      <Student name="Spongebob" age={30} isStudent={true} />
      <Student name="Patrick" age={30} isStudent={false} />
      <Student name="Squidward" age={50} isStudent={false} />
      <Student name="Sandy" age={27} isStudent={true} />
      <Student name= "Larry" />
    </>
  );


}

-----------------------------------

 
// UserGreeding  - If mentiqinin reacte kecmis hali

 
import UserGreeting from './UserGreeting.jsx'

function App() {

  return (
    <>

      <UserGreeting isLoggedIn={true} username="Sabir" />
    
    </>
  );

}

export default App

*/

import List from './List.jsx'

function App() {

  const fruits = [{ id: 1, name: "apple", calories: 95 },
                   { id: 2, name: "orange", calories: 45 },
                   { id: 3, name: "banana", calories: 105 },
                  { id: 4, name: "coconut", calories: 159 },
                  { id: 5, name: "pineapple", calories: 37 }];

      
  return (<List items={fruits} category="Fruits" />)
}


export default App