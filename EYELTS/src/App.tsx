import './index.css'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './components/HomePage'
import { ReadingTips } from './components/tips/ReadingTips'
import { WritingTips } from './components/tips/WritingTips'
import { ListeningTips } from './components/tips/ListeningTips'
import { SpeakingTips } from './components/tips/SpeakingTips'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/reading/tips" element={<ReadingTips />} />
      <Route path="/writing/tips" element={<WritingTips />} />
      <Route path="/listening/tips" element={<ListeningTips />} />
      <Route path="/speaking/tips" element={<SpeakingTips />} />
    </Routes>
  )
}

export default App