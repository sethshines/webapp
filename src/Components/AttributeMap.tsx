import { useEffect } from "react";

const AttributeList = ({ name, initialState, updateInitalState,modifier, updateModifier }) => {
    useEffect(()=>{
      updateModifier(initialState[name] > 10 ? parseInt((initialState[name] - 10) / 2 + ''): 0);
    }, [initialState, name, updateModifier])

    return <section className="App-section">
    <div>
      {name} {initialState[name]} Modifier({modifier[name]})
      <button onClick={()=>updateInitalState(name, '+')}>+</button>
      <button onClick={()=>updateInitalState(name, '-')}>-</button>
    </div>
  </section>
};

export default AttributeList;