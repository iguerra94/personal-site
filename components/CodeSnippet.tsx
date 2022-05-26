import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

function CodeSnippet() {
  return (
    <SyntaxHighlighter
      language="javascript"
      showInlineLineNumbers={true}
      showLineNumbers={true}
      wrapLines={true}
      wrapLongLines={true}
      style={dracula}
    >
      {`const doStuff = () => {
  return console.log('hey')
}`}
    </SyntaxHighlighter>
  )
}

export default CodeSnippet
