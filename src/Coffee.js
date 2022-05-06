import { useState } from 'react';
import { data } from './data';
import Sorts from './Sorts';
import Buttons from './Buttons';

function Coffee() {


    const [coffee, setCoffee] = useState(data);
    const chosenCoffee = (searchTerm) => {
        const newCoffee = data.filter(element => element.searchTerm === searchTerm);
        setCoffee(newCoffee);
    }
    return(
        <div>
   <Buttons filtered={chosenCoffee} />
   <Sorts bean={coffee} />
        </div>
    )
}

export default Coffee;