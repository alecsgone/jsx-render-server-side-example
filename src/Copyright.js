import dom, { Fragment } from './render'
import Logo from './Logo'

const Copyright = ({ logoLink, currentYear, copyright }) => (
  <Fragment>
    <hr className="gf_hr" />
    <div className="gf_container gf_copyright mt_row">
      <div className="mt_col-2">
        <a href={logoLink} className="gf_copyright__logoLink">
          <Logo />
        </a>
      </div>
      <div className="mt_col-md-10 mt_col-12">
        <p className="gf_copyright__text">
          <span className="gf_copyright__line geograph-edit-regular--12 gf_line-height">
            Copyright © 1996-2015 National Geographic Society
          </span>
          <span className="gf_copyright__pipe">|</span>
          <span className="gf_copyright__line geograph-edit-regular--12">
            {copyright}
          </span>
        </p>
      </div>
    </div>
  </Fragment>
)

Copyright.defaultProps = {
  currentYear: new Date().getFullYear(),
  copyright: `Copyright © 2015-${new Date().getFullYear()} National Geographic Partners, LLC. All rights reserved`
}

export default Copyright
