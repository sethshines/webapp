import { SKILL_LIST } from '../consts';
import Skill from './Skill';

const SkillModifierList = ({ modifier }) => {

    return <section >
    <div>
      Total Skills Available : {10 + 4 * modifier['Intelligence']}
    </div>
    {SKILL_LIST.map((v)=><Skill skillName={v.name} modifierName={v.attributeModifier} modifier={modifier} />)}
  </section>
};

export default SkillModifierList;