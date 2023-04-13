import { Component } from "react";
import '../App.css'
import styles from './style.module.css'

class StylesComponent extends Component{
    render(){
        return (
            <div>
                <div className='sample'>Hi This is Jayanth</div>
                <div style={{backgroundColor:'blue',color:'white'}}>Hi This is Jayanth</div>
                <div className={styles.sample2}>Hi This is Jayanth</div>
            </div>
        )
    }
}

export default StylesComponent
