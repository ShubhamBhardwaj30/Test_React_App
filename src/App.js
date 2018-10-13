import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person"

class App extends Component {
  state={
    person:[
      {id:1,name:'Max',age:21},
      {id:2,name:'John',age:22},
      {id:3,name:'Steph',age:23},]
  }

deletePersonHandler =(personIndex)=>{
const persons =[...this.state.person];
persons.splice(personIndex,1);
this.setState({person:persons})

}

  nameChangedHandler=(event,id) =>{
    debugger;
        const personIndex = this.state.person.findIndex(p => {
              return p.id === id;
        });
const person = {...this.state.person[personIndex]};
person.name = event.target.value;
const persons =[...this.state.person];
persons[personIndex] =person;
      this.setState({person : persons});

  }

  togglePersonsHandler = (event) =>{
        const doesShow = this.state.showPersons;
      this.setState(
        {showPersons:!doesShow});
  }

  render() {
    const style ={
      backgroundColor :"green",
      font :'inherit',
      border :'1px solid blue',
      padding :'8px',
      cursor : 'pointer',
      margin :'10px',

    }

    let persons = null;
    if(this.state.showPersons)
    {
          persons = (
                    <div>
                    {this.state.person.map( (e,index) => {
                        return <Person click = {this.deletePersonHandler.bind(this,index)}
                        name = {e.name}
                        age = {e.age} key ={e.id}
                        changed ={(event) => this.nameChangedHandler(event,e.id)}
                        />

                    })}

              </div> );
                style.backgroundColor = 'Red'

    }
    let classes = [];
    if(this.state.person.length<=2)
      classes.push('red');
      if(this.state.person.length<=1)
        classes.push('bold');
    return (

      <div className="App">
        <h1>Hi im a react app</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button style={style} onClick = {this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>

    );
  }
}

export default App;
