import { useState } from 'react'
import ReactMarkdown from 'react-markdown'

const inicialState = `# Header 1
## Sub Header 2
[Link](https://www.example.com)
\`inline code\`
\`\`\`
// Code block
const code = "Hello, world!";
\`\`\`
- List item 1
- List item 2
> Blockquote
![Image](https://via.placeholder.com/150)
**Bolded Text**`


function App() {
  const [text, setText] = useState(inicialState)

  // generic handleChange function
  const handleChange = (e) => {
    const newText = e.target.value;
    setText(newText);
  }

  return (
    <>
    <p>Editor</p>
    <textarea value={text} id='editor' onChange={handleChange}></textarea>
    <p>Previewer</p>
    <div id='preview'>
        <ReactMarkdown>{text}</ReactMarkdown>
    </div>
    </>
  )
}

export default App
