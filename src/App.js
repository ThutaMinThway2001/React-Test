import React from 'react';

const MyContext = React.createContext('Hello React');
const App = (props) => {
  let [items, setItems] = React.useState([
    {
      id: 1,
      fruit: 'Orange',
      price: 0.09
    },
    {
      id: 2,
      fruit: 'Apple',
      price: 1.21
    }
  ])

  let add = (fruit, price) => {
    let id = items.length + 1;

    setItems([
        ...items,
        {id, fruit, price}
    ])    
  } 

  return(
    <div>
        <Header />

      <ul>
        {items.map((item) => {
          return(
            <Item key={item.id} fruit={item.fruit} price={item.price}></Item>
          )
        })}
      </ul>
        <AddForm add={add}></AddForm>
    </div>
  )
}

const Header = props => {
  return <Title />
 }

 const Title = props => {
   const name = React.useContext(MyContext);
    return(
      <div>
        <h1>
          {name}
        </h1>
      </div>
    )
 }
 
 

// ES6 Arrow Function 
const Item = (props) => <div><li>{props.fruit}, ${props.price}</li></div>

const AddForm = (props) => {
  let fruitRef = React.createRef();
  let priceRef = React.createRef();

  let add = () => {
    let fruit = fruitRef.current.value;
    let price = priceRef.current.value;

    props.add(fruit, price);
  }

    return(
      <div>
        <label>Please Put Fruit Name</label><br />
        <input type="text" ref={fruitRef}/> <br />
        <label>Please Put Price</label><br />
        <input type="text" ref={priceRef}/><br />
        <button onClick={add}>ADD</button>
      </div>
    )
}
export default App;