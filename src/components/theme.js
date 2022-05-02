import React from 'react'

const Theme = () =>  {
  // var root = document.querySelector(':root');
function light() {
  // root.style.setProperty('--bg-color', 'lightblue');

}
const dark = (e) => {
  
};
const green = () => {

};
const yellow = () => {

};


  return (
    <div className='theme' id='switcher-id'>Theme: 
      <select>
  <option value="light" onClick={light()}>light </option>
  <option value="dark"  onClick={dark}>dark</option>
  <option selected value="green" onClick={green}>green</option>
  <option value="yellow" onClick={yellow}>yellow</option>
</select>
    </div>
  )
}

export default Theme

