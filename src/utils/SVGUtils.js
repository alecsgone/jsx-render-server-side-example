export const SVG_NAMESPACE = 'http://www.w3.org/2000/svg'

export const isVectorial = tag => (
  tag === 'PATH' || tag === 'path' ||
  tag === 'SVG' || tag === 'svg' ||
  tag === 'G' || tag === 'g'
)

export function SVGattrsNamespace(tag, attr = null) {
  const XML_NAMESPACE = 'http://www.w3.org/2000/xmlns/'
  let namespace = tag === 'svg' ? SVG_NAMESPACE : null
  namespace = attr === 'xmlns' ? XML_NAMESPACE : namespace
  return namespace
}
