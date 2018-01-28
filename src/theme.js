import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

injectTapEventPlugin();

const pokedexBlue = '#337ab7';
const pokedexTheme = {
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: pokedexBlue,
  },
  raisedButton: {
    color: pokedexBlue,
    textColor: '#FFFFFF',
  },
};

export const theme = getMuiTheme(pokedexTheme);

