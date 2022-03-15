# About this project

You can see the full demo on https://dynamic-add-item.vercel.app/

This demonstrates a way to create and delete JSX elements dynamically.

It also showcases a toggle system to display a different set of data on icon click.

## Available Scripts

To install dependancies:

### `yarn`

In the project directory, you can run:

### `yarn start`

## The solution explained

To dynamically create elements, we need to use a state which holds an array of objects and we need to map those objects in the JSX part of the code.

It can be as simple as:

 `const [itemsArray,setItemsArray] = useState({
      id: uuid(),
      name:'',
})`

We used uuid to create dynamic keys for our objects as we would also do the same for the add item function.

To add a new element in our array, we just take the previous state of the array and add another empty array with a dynamic id to the items array.

 `const handleAddNewLine = () => {
    setItemsArray([
      ...itemsArray,
      {
        id: uuid(),
        name: 'New line item',
      },
    ]);  
  };`
  
To delete an item from the array, we just filter the item using the key which is the id

`const handleDeleteLineItem = (id) => {
    if (id) {   
      let newItems = itemsArray.filter((item) => item.id !== id);
      setItemsArray(newItems);
    }
  };`
  
  
  
  

