// import { useNavigate } from 'react-router-dom'
import './index.scss'

function Lounge() {
  // const navigate = useNavigate()

  return (
    <div className={'lounge'}>
      <div className={'lounge-players'}>
        <div className={'lounge-players-grid'}>player</div>
        <div className={'lounge-players-grid'}>player</div>
        <div className={'lounge-players-grid'}>player</div>
        <div className={'lounge-players-grid'}>player</div>
        <div className={'lounge-players-grid'}>player</div>
        <div className={'lounge-players-grid'}>player</div>
        <div className={'lounge-players-grid'}>player</div>
        <div className={'lounge-players-grid'}>player</div>
        <div className={'lounge-players-grid'}>player</div>
      </div>
      <div className={'lounge-id'}>123456</div>
      <div className={'lounge-btn'}>
        <div className={'lounge-btn-start'}>开始游戏</div>
        <div className={'lounge-btn-rule'}>查看规则</div>
      </div>
    </div>
  )
}

export default Lounge
