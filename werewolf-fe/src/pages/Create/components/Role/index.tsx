import SvgIcon from '@/components/SvgIcon/index'
import './index.scss'
import { useRoleCount } from '../../hooks/useRoleCount'

type Props = {
  iconName: string
}

function Role(props: Props) {
  const { iconName } = props
  const {
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
  } = useRoleCount()

  function increase(iconName: string) {
    switch (iconName) {
      case 'defender':
        if (defenderCount < 1) {
          setDefenderCount(1)
        }
        break
      case 'hunter':
        if (hunterCount < 1) {
          setHunterCount(1)
        }
        break
      case 'prophet':
        if (prophetCount < 1) {
          setProphetCount(1)
        }
        break
      case 'villager':
        setVillagerCount(villagerCount + 1)
        break
      case 'wolf':
        setWolfCount(wolfCount + 1)
        break
      case 'witch':
        if (witchCount < 1) {
          setWitchCount(1)
        }
    }
  }

  function decrease(iconName: string) {
    switch (iconName) {
      case 'defender':
        if (defenderCount === 1) {
          setDefenderCount(0)
        }
        break
      case 'hunter':
        if (hunterCount === 1) {
          setHunterCount(0)
        }
        break
      case 'prophet':
        if (prophetCount === 1) {
          setProphetCount(0)
        }
        break
      case 'villager':
        if (villagerCount > 0) {
          setVillagerCount(villagerCount - 1)
        }
        break
      case 'wolf':
        if (wolfCount > 0) {
          setWolfCount(wolfCount - 1)
        }
        break
      case 'witch':
        if (witchCount === 1) {
          setWitchCount(0)
        }
    }
  }

  return (
    <div className={'create-role-item'}>
      <SvgIcon name={iconName} />
      <div className={'create-role-item-counter'}>
        <div
          className={'create-role-item-counter-left'}
          onClick={() => {
            decrease(iconName)
          }}
        >
          <SvgIcon name="left" />
        </div>
        <span className={'create-role-item-counter-num'}>
          {iconName === 'defender'
            ? defenderCount
            : iconName === 'hunter'
            ? hunterCount
            : iconName === 'prophet'
            ? prophetCount
            : iconName === 'villager'
            ? villagerCount
            : iconName === 'wolf'
            ? wolfCount
            : witchCount}
        </span>
        <div
          className={'create-role-item-counter-right'}
          onClick={() => {
            increase(props.iconName)
          }}
        >
          <SvgIcon name="right" />
        </div>
      </div>
    </div>
  )
}

export default Role
