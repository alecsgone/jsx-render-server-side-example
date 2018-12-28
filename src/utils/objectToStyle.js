const objectToStyle = style => (
  JSON.stringify(style)
    // , colon is the key value separator on OBJ and css uses ;
    .replace(/,/g, ';')
    // inital and final {} should be removed as css dont use those
    .replace(/^{|}$/g, '')
    // json stringify returns "" to keys and values useless to css
    .replace(/"/g, '')
    // replace : after the class definition e.g.
    // ".someCssClass {"
    // INSTEAD OF
    // ".someCssClass : {"
    .replace(/:{/g, '{')
    // css classes cannot be separated with ;
    .replace(/};/g, '}')
)

export default objectToStyle
