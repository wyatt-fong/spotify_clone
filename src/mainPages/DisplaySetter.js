import { createContext, useContext, useState } from "react";
import Home from "./components/main_screen/ms_components/ms_body_types/home/Home";

const DisplaySetter = createContext();

export const DisplaySetterProvider = ({children}) => {
    const [display, setDisplay] = useState(<Home/>);

    const chooseDisplay = (item) => {
        setDisplay(item);
    }

    return (
        <DisplaySetter.Provider value={{display, chooseDisplay}}>
            {children}
        </DisplaySetter.Provider>
    );
}

export const useDisplaySetter = () => useContext(DisplaySetter);