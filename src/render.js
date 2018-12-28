import objectToStyle from './utils/objectToStyle'
import { isVectorial, SVGattrsNamespace, SVG_NAMESPACE } from './utils/SVGUtils'

export const Fragment = () => 'FRAGMENT'

export function renderApp(id, nodes) {
  const element = document.getElementById(id)
  element.appendChild(nodes)
}

const appendable = elem => elem instanceof HTMLElement || elem instanceof SVGElement

function mergeAttrs(element, attrs) {
  if (!attrs) {
    return
  }

  const tag = element.tagName

  if (isVectorial(tag)) {
    for (const attr in attrs) {
      if (attrs.hasOwnProperty(attr)) {
        const namespace = SVGattrsNamespace(tag, attr)
        element.setAttributeNS(namespace, attr, attrs[attr])
      }
    }
  } else {
    Object.assign(element, attrs)
  }

  if (attrs.style) {
    element.style = objectToStyle(attrs.style)
  }

  if (attrs.onClick && typeof attrs.onClick === 'function') {
    element.addEventListener('click', attrs.onClick)
  }

  if (attrs.ref && typeof attrs.ref === 'function') {
    attrs.ref(element)
  }
}

function handleDomArrays(children) {
  const fragment = document.createDocumentFragment()

  children.forEach(function appendArray(item) {
    if (appendable(item)) {
      fragment.appendChild(item)
    }

    // When a FRAGMENT is used this item is just the chilren itself
    if (item instanceof Array) {
      item.forEach(appendArray);
    }
  })

  return fragment
}

function dom (tag, attrs, ...children) {
  if (typeof tag === 'undefined') {
    throw new Error('Maybe you forgot to export the component')
  }

  if (typeof tag === 'function') {
    // Pass props to components
    const result = tag(Object.assign({}, tag.defaultProps, attrs))

    return result === 'FRAGMENT' ? children : result
  }

  const element = isVectorial(tag)
    ? document.createElementNS(SVG_NAMESPACE, tag)
    : document.createElement(tag)

  mergeAttrs(element, attrs)

  // How to append a node/text/array
  if (children.length === 1 && typeof children[0] === 'string') {
    // single items with text eg. <span>text</span>
    const textnode = document.createTextNode(children)
    element.appendChild(textnode)
  } else if ( children[0] instanceof Array) {
    // maps of elements e.g. array.map(<jsx />)
    element.appendChild(handleDomArrays(children[0]))
  } else if (appendable(children[0])) {
    // nested single items e.g. <li><ul></ul></li>
    element.appendChild(children[0])
  } else { /* Just empty objects e.g. <br /> or maybe containers or wrapper__list */ }

  // siblings e.g. <li>item1</li> <li>item2</li>
  if (children.length > 1) {
    element.appendChild(handleDomArrays(children))
  }

  return element
}

export default dom
