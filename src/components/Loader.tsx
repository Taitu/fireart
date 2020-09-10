
import * as React from 'react'

const Loader: React.SFC = () => 
  <div className='preloader'>
    <div className='lds-ellipsis'>
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>

export default Loader;