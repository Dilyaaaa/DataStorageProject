import React, {Component} from 'react'
import { Navbar } from '..'
import { database } from './Firebase'

export default class Notification extends Component {
    // constructor(props){
    //     super(props)
    //     this.state={

    //     }
    // }
    // componentDidMount(){
    //     const messaging=database.messaging()
    //     messaging.requestPermission().then((token)=>{
    //         return messaging.getToken()

    //     }).then(token=>{
    //         console.log('Token : ',token)
    //     }).catch(()=>{
    //         console.log('error')
    //     })
    // }
    render(){
    
  return (
    <div>
        <Navbar/>
      
    </div>
  )
}
}
