import React from 'react'
import Highlight, {defaultProps} from 'prism-react-renderer'
import themeLight from 'prism-react-renderer/themes/github'
import themeDark from 'prism-react-renderer/themes/vsDark'
import {ThemeConsumer} from './ThemeContext'

const Code = (props) => {
  const className = props.children.props.className || ''
  const matches = className.match(/language-(?<lang>.*)/)

  return (
    <ThemeConsumer>
      {(state) => (
        <Highlight {...defaultProps} code={props.children.props.children.trim()} language={
          matches && matches.groups && matches.groups.lang ?
            matches.groups.lang :
            ''
        }
        theme={state && state.theme === 'dark' ? themeDark : themeLight}>
          {({className, style, tokens, getLineProps, getTokenProps}) => (
            <pre className={className} style={{...style, padding: '20px'}}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({line, key: i})}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({token, key})} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      )}
    </ThemeConsumer>
  )
}

export default Code
