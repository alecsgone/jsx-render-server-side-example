import dom from 'jsx-render'
import renderClient from 'jsx-render/renderClient'
import App from './entry'

function render(Component) {
  const content = document.querySelector('.app') || document.createElement('div')
  content.className = 'app'

  document.body.appendChild(content)
  try {
    content.replaceChild(renderClient(<Component />), content.childNodes[0])
  } catch (e) {
    content.appendChild(renderClient(<Component />))
  }
}

render(App)

if (module.hot) {
  module.hot.accept('./entry', () => {
    console.log('client render ok')
    render(App)
  })
}
