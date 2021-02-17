class MyComponent extends React.component {
    constructor(props) {
        super(props);
    this.state = {
  
    counter: 0,
    items: [1,2]
    };
    }
  
  
    increase(this) {
        this.setState({counter: this.state.counter++});
        // need use setState
    }
    
    //same below
    addItem() {
        let newArr = this.state.items;
        newArr.push(this.state.items.length+1);
      this.setState({
         item: newArr
      })
      }
    
  
    render() {
      return(
     //Should be one main Div that open and close all component.
     //'return' needed in class component 
     // need use "className"; braces need use '' or ""   
      <div> 
    <div className ='data'>
    <div>{this.state.counter}</div>
    <ul>
    {this.state.items.map(item => (
    <li key={item}>element {item}</li>
    ))}
    </ul>
    </div>
    <div className='actions'>
    <button className='button' onclick={this.increase}>zwiększ</button>
    <button className='button' onclick={this.addItem}>dodaj</button>
    </div>
    </div>  
      )
    };
    }
    ReactDOM.render(<MyComponent>, document.querySelector("body"));
  