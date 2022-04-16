import { useState } from 'react'

export const setRoleCount = () => {
  const [defenderCount, setDefenderCount] = useState(1)
  const [hunterCount, setHunterCount] = useState(1)
  const [prophetCount, setProphetCount] = useState(1)
  const [villagerCount, setVillagerCount] = useState(2)
  const [wolfCount, setWolfCount] = useState(3)
  const [witchCount, setWitchCount] = useState(1)

  return {
    defenderCount,
    hunterCount,
    prophetCount,
    villagerCount,
    wolfCount,
    witchCount,
    setDefenderCount,
    setHunterCount,
    setProphetCount,
    setVillagerCount,
    setWolfCount,
    setWitchCount
  }
}
