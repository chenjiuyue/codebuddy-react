import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <header className="header">
        <h1>🚀 CodeBuddy React</h1>
        <p className="subtitle">一个简单而现代的 React 应用</p>
      </header>

      <main className="main">
        <div className="card">
          <h2>计数器示例</h2>
          <div className="counter">
            <button onClick={() => setCount(count - 1)} className="btn btn-secondary">
              -
            </button>
            <span className="count">{count}</span>
            <button onClick={() => setCount(count + 1)} className="btn btn-primary">
              +
            </button>
          </div>
          <button onClick={() => setCount(0)} className="btn btn-reset">
            重置
          </button>
        </div>

        <div className="features">
          <div className="feature-card">
            <div className="icon">⚡</div>
            <h3>快速开发</h3>
            <p>使用 Vite 构建，享受极速的热更新体验</p>
          </div>
          <div className="feature-card">
            <div className="icon">🎨</div>
            <h3>现代化 UI</h3>
            <p>美观的界面设计，良好的用户体验</p>
          </div>
          <div className="feature-card">
            <div className="icon">🔧</div>
            <h3>易于扩展</h3>
            <p>简洁的项目结构，方便添加新功能</p>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>使用 React + Vite 构建</p>
      </footer>
    </div>
  )
}

export default App
