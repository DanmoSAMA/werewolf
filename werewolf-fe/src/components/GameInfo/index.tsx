import SvgIcon from '@/components/SvgIcon/index'
import './index.scss'

function GameInfo() {
  return (
    <div className={'game_info'}>
      <div className={'game_info-icon'}>
        <SvgIcon name="werewolf" />
      </div>
      <div className={'game_info-title'}>狼人杀</div>
    </div>
  )
}

export default GameInfo
