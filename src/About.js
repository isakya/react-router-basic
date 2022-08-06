import { useSearchParams, useParams } from 'react-router-dom'
function About() {
  /**
   * searchParams参数获取
   * */
  // const [params] = useSearchParams()
  // params 是一个对象 对象里面有一个get方法
  // 用来获取对应的参数
  // 把参数的名称作为get方法的实参传过来
  // const id = params.get('id')
  // const name = params.get('name')

  /**
   * Params传参
   */
  const params = useParams()


  return (
    // <div>about得到的参id值为{id},name值为{name}</div>
    <div>about得到的参id值为{params.id}</div>
  )
}

export default About