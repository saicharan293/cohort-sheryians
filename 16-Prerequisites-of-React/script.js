var h1 = React.createElement('h1', null, 'Hello from React');
var h2 = React.createElement('h1', null, 'this is second elemenet');

var div = React.createElement('div', {id: 'parent', class: 'elem'}, [h1, h2])
var root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(div);