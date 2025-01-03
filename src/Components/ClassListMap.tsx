const ClassList = ({ name, minValues, initialState, setSelectedClass }) => {

  const isMinCriteriaMet = ()=>{
    let attributeKeys = Object.keys(minValues);
    for(let i=0;i<attributeKeys.length;i++){
      if(initialState[attributeKeys[i]] < minValues[attributeKeys[i]]){
        return false;
      }
    }

    return true;
  }

    return <section className={`${isMinCriteriaMet()? 'criteria-met' :''}`}>
    <div onClick={()=>setSelectedClass({
      name,
      minValues
    })}>
      {name}
    </div>
  </section>
};

export default ClassList;