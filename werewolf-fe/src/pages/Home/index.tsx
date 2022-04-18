import GameInfo from '@/components/GameInfo'
import { useNavigate } from 'react-router-dom'
import './index.scss'

function Home() {
  const navigate = useNavigate()

  return (
    <div className={'home'}>
      <GameInfo />
      <div className={'home-body'}>
        <div className={'home-body-join_room'} onClick={() => navigate('/join')}>
          加入房间
        </div>
        <div className={'home-body-create_room'} onClick={() => navigate('/create')}>
          创建房间
        </div>
        <div className={'home-body-user'} onClick={() => navigate('/user')}>
          个人主页
        </div>
        <div className="home-body-rule" onClick={() => navigate('/rule')}>
          查看规则
        </div>
      </div>
    </div>
  )
}

export default Home
