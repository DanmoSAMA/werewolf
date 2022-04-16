import './index.scss'

function Join() {
  return (
    <div className={'join'}>
      <h1 className={'join-title'}>加入房间</h1>
      <div className={'join-form'}>
        <div className={'join-form-room_id'}>
          房号：
          <input type="text" className={'join-form-input'} />
        </div>
        <div className={'join-form-passwd'}>
          密码：
          <input type="text" className={'join-form-input'} placeholder="可选" />
        </div>
        <div className={'join-form-nickname'}>
          昵称：
          <input type="text" className={'join-form-input'} />
        </div>
        <div className={'join-form-submit'}>确认加入</div>
      </div>
    </div>
  )
}

export default Join
