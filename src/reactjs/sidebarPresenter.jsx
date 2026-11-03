import { observer } from "mobx-react-lite";
import { SidebarView } from "../views/sidebarView";
const Sidebar = observer(             // needed for the presenter to update (its view) when relevant parts of the model change
    function SidebarRender(props){
        return <SidebarView 
                    onNumberChange={changePeopleNumberACB}
                    userPicksDish={pickDishACB}
                    removeDish={removeDishACB}
                    number={props.model.numberOfGuests}
                    dishes={props.model.dishes}/>;


        function changePeopleNumberACB(e){
            props.model.setNumberOfGuests(e);
        }
        function pickDishACB(e){
            props.model.setCurrentDishId(e.id);
        }
        function removeDishACB(e){
            props.model.removeFromMenu(e);
        }
    }
);

export { Sidebar };
