import Square from './Square'
import React,{useState} from 'react'
import Info from './Info'
export default function Boxes(){
    let [squares,setsquares] = useState(Info)
    function Changecolor(id){
        setsquares(function(prev){
            return prev.map(function(square){                
                return square.id === id ? {...square, on : !square.on} : square
            })
        })
    }
    let divs = squares.map(function(e){
       return <Square  key = {e.id} id = {e.id} on = {e.on} toggle = {Changecolor}  />
    })
    return(
        <section className='container'>
            <main>
            {divs}
            </main>
        </section>
    )
}