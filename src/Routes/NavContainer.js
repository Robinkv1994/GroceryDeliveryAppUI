import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import App from "../../App";
import { Store } from "../Store/Store";

import { Provider } from "react-redux";

const NavContainer =()=>{
    return(
        <NavigationContainer>
            <Provider store={Store}>
            <App/>
            </Provider>
        </NavigationContainer>
    )
}
export default NavContainer