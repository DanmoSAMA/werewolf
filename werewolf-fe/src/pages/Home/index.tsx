import SvgIcon from '@/components/SvgIcon/index'
import { useNavigate } from 'react-router-dom'
import './index.scss'

function Home() {
  const navigate = useNavigate()

  return (
    <div className={'home'}>
      <div className={'home-header'}>
        <div className={'home-header-icon'}>
          <SvgIcon name="werewolf" />
        </div>
        <div className={'home-header-title'}>狼人杀</div>
      </div>
      <div className={'home-body'}>
        <div className={'home-body-join_room'} onClick={() => navigate('/join')}>
          加入房间
        </div>
        <div className={'home-body-create_room'} onClick={() => navigate('/create')}>
          创建房间
        </div>
      </div>
    </div>
  )
}

export default Home
