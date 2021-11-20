export function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === 'object' ? child : createTextElement(child)
      ),
    },
  }
}

function createTextElement(text) {
  console.log('createTextElement', text)

  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
      children: [],
    },
  }
}

export function render(element, container) {
  console.log(element)

  const dom =
    element.type == 'TEXT_ELEMENT'
      ? document.createTextNode(element.props.nodeValue)
      : document.createElement(element.type)

  const isProperty = (key) => key !== 'children'

  Object.keys(element.props || {})
    .filter(isProperty)
    .forEach((name) => {
      dom[name] = element.props[name]
    })

  if (element.props) {
    element.props.children.forEach((child) => render(child, dom))
  }

  container.appendChild(dom)
}
