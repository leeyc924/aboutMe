'use client'

import { useEffect, useState } from "react";

export interface SkillProps {
}

const Skill = ({}: SkillProps) => {
  const [a, setA] = useState();
  useEffect(() => {
    return () => {
      
    }
  }, []);
  return (
    <div className='skill'>
      React
    </div>
  )
};

export default Skill; 