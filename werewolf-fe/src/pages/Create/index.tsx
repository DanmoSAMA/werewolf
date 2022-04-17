import { useFormData } from './hooks/useFormData'
import { useNavigate } from 'react-router-dom'
import Role from './components/Role'
import './index.scss'

function Create() {
  const navigate = useNavigate()
  const iconNameArr = ['defender', 'hunter', 'prophet', 'villager', 'wolf', 'witch']
  const { nickname, setNickname, setPasswd } = useFormData()

  function createRoom() {
    if (nickname === '') {
      alert('请填写昵称')
      return
    }
    navigate('/lounge')
  }

  return (
    <div className={'create'}>
      <h1 className={'create-title'}>角色设置</h1>
      <div className={'create-role'}>
        {iconNameArr.map((item) => {
          return <Role iconName={item} key={item} />
        })}
      </div>
      <div className={'create-form'}>
        <div className={'create-form-nickname'}>
          你的昵称：
          <input
            type="text"
            className={'create-form-input'}
            placeholder="请输入昵称"
            onChange={(e) => {
              setNickname(e.target.value)
            }}
          />
        </div>
        <div className={'create-form-passwd'}>
          房间密码：
          <input
            type="text"
            className={'create-form-input'}
            placeholder="可选"
            onChange={(e) => {
              setPasswd(e.target.value)
            }}
          />
        </div>
        <div className={'create-form-submit'} onClick={createRoom}>
          确认创建
        </div>
      </div>
    </div>
  )
}

export default Create
