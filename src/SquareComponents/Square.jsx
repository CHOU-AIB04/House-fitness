import Info from "./Info";
import './square.css';

export default function Box(props){
    let styles = {
        backgroundColor : props.on ? "black" : "transparent"
    }
    // function handleclick(){
    //     props.toggle(props.id)
    // }
    return <div id={props.id} style={styles} className="effect" onClick={()=>props.toggle(props.id)}  ></div>
   
}