import React, {useState} from "react";

const useNextStay = () => {

    const [screen, setScreen] = useState('first')

    const onPressNext = () =>{
        screen === 'first' ?
        setScreen('second') :  screen === 'second' ? setScreen('third') : null
    }
    
    return{
        onPressNext,
        screen,
        setScreen
    }
}

export default useNextStay