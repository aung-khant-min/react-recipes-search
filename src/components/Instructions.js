import React from 'react';
import axios from 'axios';

var apiKey = process.env.REACT_APP_API_KEY;

class Instructions extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            instructions : []
        }
    }
    
    componentDidMount(){
        axios.get('https://api.spoonacular.com/recipes/'+this.props.recipeId+'/analyzedInstructions?apiKey='+apiKey)
        .then(res=>{
          this.setState({
            instructions: res.data[0].steps
          })
        })
        .catch( err => console.log(err))
      }

      render(){
        return(
          <details>
              <summary>Instructions</summary>
              <ul>
              {
                  this.state.instructions.map(
                      (instruction) =>  
                      <li key={instruction.number}>{instruction.step}</li>
                  )
              }
              </ul>
          </details>
        )
    }

}

export default Instructions;