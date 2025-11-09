function List(props) {

    const itemlist = props.items;
    
    // const fruits = [{ id: 1, name: "apple", calories: 95 },
    // { id: 2, name: "orange", calories: 45 },
    // { id: 3, name: "banana", calories: 105 },
    // { id: 4, name: "coconut", calories: 159 },
    // { id: 5, name: "pineapple", calories: 37 }];

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); // localcompare does letter sorting
    //   fruits.sort((a, b) => b.name.localeCompare(a.name)); // reverse
    //  fruits.sort((a, b) => a.calories - b.calories); // Numeric order
    //    fruits.sort((a, b) => b.calories - a.calories); // reverse Numeric order

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

   // const HighCalFruits = fruits.filter(fruit => fruit.calories >= 100);

    const listItems = itemlist.map(item => <li key={item.id}>
        {item.name}:&nbsp;
        <b>{item.calories}</b></li>);

    return (<ol>{listItems}</ol>)   // ul noqte ile siralayir, ol reqemlerle
}

export default List