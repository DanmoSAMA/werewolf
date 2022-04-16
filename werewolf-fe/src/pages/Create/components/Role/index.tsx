import SvgIcon from '@/components/SvgIcon/index'
import './index.scss'

type Props = {
  iconName: string
}

function Role(props: Props) {
  return (
    <div className={'create-role-item'}>
      <SvgIcon name={props.iconName} />
      <div className={'create-role-item-counter'}>
        <SvgIcon name="left" />
        <span className={'create-role-item-counter-num'}>0</span>
        <SvgIcon name="right" />
      </div>
    </div>
  )
}

export default Role
