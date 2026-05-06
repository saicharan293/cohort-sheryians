import box from './app.js';
import circle from './circle.js';

const parent=()=> React.createElement('div', {id: 'parent'}, [box(), circle()]);

export default parent;