import dom from './render'
import MenuItem from './MenuItem'

const Menu = ({ social, menu }) => {
  const [ firstCol, secondCol, thridCol ] = menu
  return (
    <div className="gf_container gf_menu mt_row">
      <div className="mt_col-md-3 mt_col-6">
        <MenuItem {...firstCol} />
      </div>
      <div className="mt_col-lg-2 mt_col-md-3 mt_col-6">
        <MenuItem {...secondCol} />
      </div>
      {/* this empty div allows the grid separation on mobile */}
      <div className="mt_col-md-1 mt_col-12 gf_ghost--md">
        <br />
        <br />
      </div>

      <div className="mt_col-md-2 mt_col-6">
        <MenuItem {...thridCol} />
      </div>

      <div className="mt_col-md-4 mt_col-6">
        <div>
          <h3 className="gf_menu__title geograph-brand-bold--12">Follow Us</h3>
          <ul className="gf_menu__socialList">
            {social.map(item => (
              <li className="gf_menu__socialItem">
                <a className="gf_menu__socialLink" href={item.href}>
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

Menu.defaultProps = {
  social: [
    { icon: '#social-facebook', href: 'FACEBOOK_URL' },
    { icon: '#social-twitter', href: 'TWITTER_URL' },
    { icon: '#social-instagram', href: 'INSTAGRAM_URL' },
    { icon: '#social-snapchat-filled', href: 'SNAPCHAT_URL' },
  ],
  menu: [
    {
      title: 'Company',
      links: [
        { name: 'National Geographic Society', href: '/' },
        { name: 'Buy Photos', href: '/' },
        { name: 'Live Events', href: '/' },
        { name: 'Explore Our Maps', href: '/' },
        { name: 'Genographic', href: '/' },
        { name: 'Shop the Store', href: '/' },
        { name: 'For Kids', href: '/' },
        { name: 'Your Shot', href: '/' },
      ],
    },

    {
      title: 'About Nat Geo',
      links: [
        { name: 'Contact Us', href: '/' },
        { name: 'About', href: 'https://www.nationalgeographic.com/about/' },
        { name: 'Press', href: '/' },
        { name: 'Privacy Policy', href: '/' },
        { name: 'Ad Choises', href: '/' },
        { name: 'Terms of Service', href: '/' },
      ],
    },

    {
      title: 'Join Us',
      links: [
        { name: 'Subscribe', href: '/' },
        { name: 'Sign In', href: '/' },
        { name: 'Jobs', href: 'https://www.nationalgeographic.com/jobs/' },
      ],
    },
  ],
  activeCountry: 'United States',
}

export default Menu
