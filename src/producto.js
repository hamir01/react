import React,{Component} from 'react';
import './producto.css'

const list=[
    {

 
    id: 1,
    descripcion: 'jarron Las Americas N. 5',
    precio: 17000,
},
{
    
    id: 2,
    descripcion: 'escultura Dobke N. 3',
    precio: 12000,

},
{
    id: 3,
    descripcion: 'Morral quinchana  N. 1',
    precio:200000,

},
];

function buscar(descripcionLibro){
    return function(item){
        return item.descripcion.toLowerCase().includes(descripcionLibro.toLowerCase())
    }
}

class Productos extends Component{
    constructor(props){
        super(props);      
        
        this.state={
            list,
        descripcionLibro:'',
        };
        this.Eliminar = 
        this.Eliminar.bind(this);

        this.onSearchChange = this.onSearchChange.bind(this);
    }


    Eliminar(id){
        const isNotId = item => item.id !== id;
        const listActualizada =
        this.state.list.filter(isNotId);
        this.setState({list: listActualizada});

    }

    onSearchChange(event){
        this.setState({descripcionLibro: event.target.value});
    }


    render(){
        return(
        <div>
            <h2 className='main-title'>Artesanias Las Americas Colombia</h2>
            <from>
                <input type="text" onChange={this.onSearchChange} placeholder=" Buscar..."></input>
            </from>
          
            <div className='content-style'>
             <table className='table-style'>
                <tr className='tr1'><th>Descripcion</th><th>Precio</th> <th>Acciones</th></tr>



            {this.state.list.filter(buscar(this.state.descripcionLibro)).map(item=>{
                    return  <tr key={item.id}>
                        <td>{item.descripcion }</td>  
                        <td>{item.precio }</td> 
                        <td><button onClick={() => this.Eliminar(item.id)}>Eliminar</button></td>
                        <td><button>Actualizar</button></td>
                          </tr>
                    
                })
            }
            </table>
            </div>
    </div>
            

        );

    }
}
export default Productos;
