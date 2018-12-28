import dom, { Fragment } from './render'

const MenuItem = ({ title, links }) => (
  <Fragment>
    <h3 className="gf_menu__title geograph-brand-bold--12">{title}</h3>
    <ul className="gf_menu__list">
      {links.map(link => (
        <li className="gf_menu__item">
          <a className="gf_menu__link geograph-edit-regular--12" href={link.href}>
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </Fragment>
)


export default MenuItem
