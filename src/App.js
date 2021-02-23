import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
 
function App() {

  const products = [
    {name:'photoshop',price:'$45'},
    {name:'Illustrator',price:'$45'},
    {name:'Adobe Reader',price:'$45'},
    {name:'photoshop',price:'$45'},
    {name:'Ai',price:'$445'},
    {name:'Dm',price:'$445'}
  ]
 
  const friends = ['Ahsan','Shamim','Sakib','sudat',]

  return (
		<div className="App">
			<header className="App-header">
        <p> My first react app </p>


        <Counter></Counter>

        <Users></Users> 

        <ul>
          <h2>Friends Name:</h2>
          {friends.map(friend => <li>{friend}</li>)}
          <h3>Product:</h3>
          {products.map(product => <li>{product.name}</li>)}
        </ul>

        {
           products.map(pd => <Products product = {pd}></Products>)
         
 
        }

				{/* <Products product={products[0]}></Products>
				<Products product={products[1]}></Products>
				<Products product={products[2]}></Products>
				<Products product={products[3]}></Products> */}
				


        <Person name="Ahsan" wife='Amatullah'></Person>
        <Person name="Sakib" wife='Baicha ache'></Person>
        <Person name="Ahsan" wife='Jani na'></Person>
			</header>
		</div>
  );
}

export default App;




function Counter() {
  
  const [count,setCount] = useState(0);
 

  return (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={() =>setCount(count - 1)}>Decrease</button>
			<button onClick={() =>setCount(count + 1)}>Increase</button>
		</div>
  );
}

function Users() { 
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setUsers(data));
    
  },[])
	return (
		<div>
      <h3>Dynamic Users: {users.length}</h3>
      {console.log(users)}
      <ul>
        {
          users.map(user => <li>{ user.email}</li>
            )
        }
      </ul>
		</div>
	);
}

function Products(props) {
 const productStyle = {
		color: "salmon",
		border: "1px solid red",
		borderRadius: "20px",
		height: "200px",
		width: "200px",
		margin: "20px",
		float: "left",
		padding: "10px",
 };
  
  const { name, price } = props.product;

  return (
		<div style={productStyle}>
			<h2>Name:{ name}</h2>
			<h3>Price:{ price}</h3>
			<button>Buy Now</button>
		</div>
  );
  
}


function Person(props) {
  const personStyle = {
    color: 'white',
    backgroundColor: 'gray',
    border: ' solid 3px yellow',
    margin: '10px',
    padding: '10px'
  }

  return (
		<div style={personStyle}>
			<h2>Name:{props.name}</h2>
			<h3>Wife:{props.wife}</h3>
		</div>
  );
  
}