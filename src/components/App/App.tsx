import './styles.css';
import React from 'react';
import InputField from '../InputField/InputField';

const App: React.FC = () => {
return(
    <div className='App'>
        <span className="heading">Meteor</span>
        <InputField/>
    </div>
);
}

export default App;
