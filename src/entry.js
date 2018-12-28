import dom from 'jsx-render'

const websites = ['foo', 'bar', 'baz', 'quex']

function handleClick(node) {
  node.addEventListener('click', event => {
    alert('chimulla')
  })
}

const Headline = () => (
  <div>
    <h2 className="css">Title</h2>
    <p>
      Lorem <br /> Ipsum dolor sit amet. fasas chi fassasa, fa hjgjkhgjhg
    </p>
    <hr />
    <img
      src="https://ih1.redbubble.net/image.10212890.8041/fc,550x550,white_brown.jpg"
      width="150"
      height="150"
    />
    <ul>
      {websites.map(web => (
        <li>
          <a href="http://google.com">{web}</a>
        </li>
      ))}
    </ul>
    <button ref={handleClick}>Click me!</button>
  </div>
)

export default Headline
