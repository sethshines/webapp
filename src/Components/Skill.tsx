import { useEffect, useState } from "react";

const Skill = ({
    skillName,
    modifierName,
    modifier,
}) =>{
    const [total, setTotal] = useState(0);
    const [skillValue, setSkillValue] = useState(0);

    useEffect(()=>{
        setTotal(skillValue + modifier[modifierName]);
    }, [skillValue, modifier, modifierName])

return <div>
      {skillName}: {skillValue} (Modifier: {modifierName}): {modifier[modifierName]} 
      <button onClick={()=>setSkillValue(p=>p+1)}>+</button>
      <button onClick={()=>setSkillValue(p=>p-1)}>-</button>
      total: {total}
      </div>
}

export default Skill;