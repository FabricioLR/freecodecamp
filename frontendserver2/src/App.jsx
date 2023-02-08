import { useState } from 'react'
import MDEditor from '@uiw/react-md-editor';

function App() {
  const [text, setText] = useState("")
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MDEditor id="editor"
        value={text}
        onChange={setText}
      />
      <MDEditor.Markdown id="preview" source={text} style={{ whiteSpace: 'pre-wrap' }} />
    </div>
  )
}

export default App
