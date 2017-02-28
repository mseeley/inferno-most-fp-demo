// Use JSX
import Inferno from 'inferno'

const Textbox = ({ label, onKeyDown }) =>
  <div className='measure'>
    <label
      htmlFor='name'
      className='f6 b db mb2'>
      {label}
    </label>
    <input
      id='name'
      className='input-reset ba b--black-20 pa2 mb2 db w-100'
      type='text'
      aria-describedby='name-desc'
      onKeyDown={onKeyDown}
    />
  </div>

export default Textbox
