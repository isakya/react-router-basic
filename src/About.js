import { useSearchParams } from 'react-router-dom'
function About() {
  const [params] = useSearchParams()
  // params 是一个对象 对象里面有一个get方法
  // 用来获取对应的参数
  // 把参数的名称作为get方法的实参传过来
  const id = params.get('id')
  const name = params.get('name')
  return (
    <div>about得到的参id值为{id},name值为{name}</div>
  )
}

export default About