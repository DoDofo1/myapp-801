import React,{Component} from 'react'
import{View,Text,Image} from 'react-native'
class Cat extends Component{
  constructor(props){
    super(props)
    this.state={message:'Hello I am your cat!'}
  }
  render(){
    return (
      <View>
        <Text>{this.state.message}</Text>
        <Image
        style={{width:450,height:450}}
        source={{uri:'https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'}}
        />
      </View>
    )
  }
}
export default Cat;