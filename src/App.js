import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonGroup>
          
          <Button 
            startIcon={<SaveIcon/>}
            size="large"
            style={{
              fontSize:24
            }}
            onClick={() => alert('hello')} variant="contained" color="primary">
            Save
          </Button>

          <Button 
            startIcon={<SaveIcon/>}
            size="large"
            style={{
              fontSize:24
            }}
            onClick={() => alert('hello')} variant="contained" color="secondary">
            Discard
          </Button>

        </ButtonGroup>

        <img src={logo} className="App-logo" alt="logo" />       
      </header>
    </div>
  );
}

export default App;
