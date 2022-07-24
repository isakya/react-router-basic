// 引入两个组件
import Home from "./Home"
import About from "./About"

// 导入路由依赖项
import { HashRouter, BrowserRouter, Link, Routes, Route } from 'react-router-dom'

// 进行路由配置
function App() {
  return (
    // HashRouter声明当前要用一个hash模式的路由
    <HashRouter>
      {/* Link 指定跳转的组件 to用来配置路由地址 */}
      <Link to="/">首页</Link>
      <Link to="/about">关于</Link>
      {/* Routes 路由出口，路由对应的组件会在这里进行渲染 */}
      <Routes>
        {/* Route 指定路径和组件的对应关系 path代表路径，element代表组件，成对出现 */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </HashRouter>
  )
}

export default App
