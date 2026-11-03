import { sortDishes, menuPrice, dishType } from "../utilities"
import "/src/style.css"



export function SidebarView(props){
    return (
    
    <div className="debug">
        <button onClick={decreasePeopleACB}  disabled={props.number <= 1}>-</button>
        <span>{props.number}</span>
        <button onClick={increasePeopleACB}>+</button>

        <table>
            <tbody>
                {sortDishes(props.dishes).map(dishRowCB)}
                <tr>
                    <td></td>
                    <td>Total:</td>
                    <td></td>
                    <td className="align-right">
                        {(props.number * menuPrice(props.dishes)).toFixed(2)}
                    </td>

                </tr>


            </tbody>

        </table>

    </div>
    );
    function decreasePeopleACB(){
        props.onNumberChange(props.number-1);
    }
    function increasePeopleACB(){
        props.onNumberChange(props.number+1);
    }

    
    function dishRowCB(dish){
        return (
            <tr key={dish.id}>
                <td><button onClick={userRemovesItemACB}>x</button></td>
                <td><a onClick={showDishACB} href={"#" + dish.id}>{dish.title}</a></td>
                <td>{dishType(dish)}</td>
                <td className="align-right">
                    {(dish.pricePerServing * props.number).toFixed(2)}
                </td>

            </tr>
        )

        function userRemovesItemACB(){
            props.removeDish(dish);
        }
        function showDishACB(){
            props.userPicksDish(dish);
        }

    }
}
