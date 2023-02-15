import * as React from 'react';

import { ColorSwatch } from './ColorSwatch';
import { ColorInputs } from './ColorInputs';
import { ColorSliders } from './ColorSliders';

import { toRGB } from './utilities';
import { reducer } from './reducer';
import { ThemeContext } from './theme-context';
import { useState } from 'react';

import { ColorAdjustment } from './colorAdjustment';
import { ColorSlider } from './ColorSlider';
import { ColorInput } from './ColorInput';



const App = () => {
  const themes = React.useContext(ThemeContext);

  const [theme, toggleTheme] = useState(true)

  const [rgb, dispatch] = React.useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0,
  });
  return (
    <main style={theme ? { borderColor: toRGB(rgb), ...themes.light}: { borderColor: toRGB(rgb), ...themes.dark}}>
      <ColorSwatch />
      {/* <ColorInputs {...rgb} /> */}
      {/* <ColorSliders/> */}
      <ColorAdjustment Adjustment={ColorSlider}/>
      <ColorAdjustment Adjustment={ColorInput}/>
      <button  onClick={() => toggleTheme(!theme)} className="btn">toggle theme</button>
    </main>
  );
};

export default App;
