import './App.css';
import { ATTRIBUTE_LIST, CLASS_LIST } from './consts';
import AttributeList from './Components/AttributeMap';
import {  useState } from 'react';
import ClassList from './Components/ClassListMap';
import DisplayMinAttribute from './Components/DisplayMinAttribute';
import SkillModifierList from './Components/SkillModifierList';

function App() {
  const [selectedClass, setSelectedClass] = useState({
    name:'',
    minValues: {}
  });
  const [initialState, setInitialState] = useState({
    'Strength': 0,
    'Dexterity': 0,
    'Constitution': 0,
    'Intelligence': 0,
    'Wisdom': 0,
    'Charisma': 0
  })

  const [modifierState, setModifierState] = useState({
    'Strength': 0,
    'Dexterity': 0,
    'Constitution': 0,
    'Intelligence': 0,
    'Wisdom': 0,
    'Charisma': 0
  })

  const updateInitalState = (attribute, opp) => {
    if((initialState.Charisma + initialState.Constitution + initialState.Dexterity + initialState.Intelligence + initialState.Strength + initialState.Wisdom) >= 70){
      alert("Characters can have only 70 attr.");
      return;
    }
    setInitialState({
      ...initialState,
      [attribute]: opp === '+' ? initialState[attribute]+ 1 : initialState[attribute]-1
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <div style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
        gap: 50
      }}>
        <div>
          <h1>Attributes</h1>
          {ATTRIBUTE_LIST.map((el)=><AttributeList key={el} name={el} initialState={initialState} updateInitalState={updateInitalState} modifier={modifierState} updateModifier={(v)=>setModifierState(p=>({...p, [el]: v}))} />)}
        </div>
        <div>
          <h1>Classes</h1>
          {Object.keys(CLASS_LIST).map((el)=><ClassList key={el} name={el} minValues={CLASS_LIST[el]}  initialState={initialState} setSelectedClass={setSelectedClass} />)}
        </div>
        {selectedClass.name ? <div>
          <h1>  {selectedClass.name} Minimum Requirements</h1>
          <DisplayMinAttribute minValues={selectedClass.minValues} reset={()=>setSelectedClass({
            name: '',
            minValues: {}
          })} />
        </div> : <></>}
          <div>
          <h1>Skills</h1>
            <SkillModifierList modifier={modifierState} />
          </div>
      </div>
    </div>
  );
}

export default App;
