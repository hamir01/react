import React,{Component} from "react";




class listaTareas extends Component{
    constructor(props){
        super(props);      
        
        this.state={
            userName:"Hamir",
            todoItems:[{
                accion:"Endulzar mi amigo secreto",
                done: false,
            },
            {
                accion: "Comprar Almuerzo",
                done: true,

            }],
            newItemText:"",

        }
    
    }
    UpdateNewTextValue = (event)=>{
        this.setState( {newItemText: event.target.value});
    }


    CreateNewTodo = ()=>{
        if (!this.state.todoItems
            .find(item => item.accion === this.state.newItemText)){
                this.setState({
                    todoItems:[...this.state.todoItems,
                        {
                            accion: this.state.newItemText, 
                            done: false 

                        }],
                });
            }
    }
    ToggleTodo = (todo)=> this.setState({todoItems:
                     this.state.todoItems.map(item => item.accion === todo.accion
                        ?{...item, done: !item.done} : item) });

    
    TodoTableRows =() =>this.state.todoItems.map(item =>
                     
                    <tr key={item.accion}>
                        <td>{item.accion}</td>
                        <td>
                            <input type='checkbox' checked={item.done} onChange = {() => this.ToggleTodo(item)}></input>
                        </td>

                    </tr>);


    render(){
        return(
            <div>
                <h4 className="bg-primary text-white text-center p-2">
                   lista tarea de { this.state.userName} <span> - </span>
                   {this.state.todoItems.filter(t => !t.done).length}  Cosa(s) por hacer 
                </h4>
                <div className="container-fluid">
                    <div className="my-1">
                        <input className="form-control" value={this.state.newItemText} 
                        onChange={this.UpdateNewTextValue} >

                        </input>
                        <button className="btn btn-primary mt-1"
                                onClick={this.CreateNewTodo}>
                            Add
                        </button>
                    </div>
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr><th>Descripcion</th></tr>
                        </thead>
                        <tbody > {this.TodoTableRows()} </tbody>

                    </table>

                </div>
            </div>
        );
    }
}

export default listaTareas;





