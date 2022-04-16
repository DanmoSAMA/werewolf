import Role from './components/Role'
import './index.scss'

function Create() {
  const iconNameArr = ['defender', 'hunter', 'prophet', 'villager', 'wolf', 'witch']

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
          <input type="text" className={'create-form-input'} placeholder="请输入昵称" />
        </div>
        <div className={'create-form-passwd'}>
          房间密码：
          <input type="text" className={'create-form-input'} placeholder="可选" />
        </div>
        <div className={'create-form-submit'}>确认创建</div>
      </div>
    </div>
  )
}

export default Create
