import * as React from 'react';

import { ColorSwatch } from './ColorSwatch';
import { ColorInputs } from './ColorInputs';
import { ColorSliders } from './ColorSliders';

import { toRGB } from './utilities';
import { reducer } from './reducer';
import { ThemeContext } from './theme-context';

const App = () => {
  const themes = React.useContext(ThemeContext);

  const [rgb, dispatch] = React.useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0,
  });

  return (
    <main style={{ borderColor: toRGB(rgb), ...themes.light }}>
      <ColorSwatch />
      {/* <ColorInputs {...rgb} /> */}
      <ColorSliders/>
    </main>
  );
};

export default App;
