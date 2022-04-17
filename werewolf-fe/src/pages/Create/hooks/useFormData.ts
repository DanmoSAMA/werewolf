import { useState } from 'react'

export const useFormData = () => {
  const [nickname, setNickname] = useState('')
  const [passwd, setPasswd] = useState('')

  return {
    nickname,
    passwd,
    setNickname,
    setPasswd
  }
}
