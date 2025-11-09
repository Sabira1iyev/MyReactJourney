function List(){

    const fruits = ["apple", "orange", "banana", "coconut", "pineapple"];

    fruits.sort();
    const listItems = fruits.map(fruit => <li>{fruit}</li>)
    return(<ol>{listItems}</ol>)   // ul noqte ile siralayir, ol reqemlerle
}

export default List