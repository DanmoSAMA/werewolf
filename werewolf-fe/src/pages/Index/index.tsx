import { useNavigate } from 'react-router-dom'
import GameInfo from '@/components/GameInfo'
import './index.scss'

function Index() {
  const navigate = useNavigate()

  return (
    <div className={'index'}>
      <GameInfo />
      <div className={'index-body'}>
        <div className={'index-body-register'} onClick={() => navigate('/register')}>
          注册
        </div>
        <div className={'index-body-login'} onClick={() => navigate('/login')}>
          登陆
        </div>
      </div>
    </div>
  )
}

export default Index
