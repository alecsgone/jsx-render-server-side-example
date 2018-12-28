import dom, { renderApp } from './render'
import Menu from './Menu'
import Copyright from './Copyright'
import Logo from './Logo'

const TLD = "http://nationalgeographic.com"

function handleButton(node) {
  node.addEventListener('click', () => { alert('fuck')})
}

const Footer = ({ logoLink }) => (
  <div className="gf">
    <div className="gf_container gf_logoMobile">
      <a href={logoLink}>
        <Logo />
      </a>
      <button ref={node => { handleButton(node) }}>
        click
      </button>
    </div>
    <Menu />
    <Copyright logoLink={logoLink} />
  </div>
)


renderApp('GlobalFooter', <Footer logoLink={TLD} />)
