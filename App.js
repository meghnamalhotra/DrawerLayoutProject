/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View ,DrawerLayoutAndroid,StyleSheet,SectionList,Image,TouchableOpacity,FlatList} from 'react-native';




export default class App extends Component{
  constructor(props)
  {
    super(props);
    this.Array_Items=require('./data.json')
    this.state={
    hide:true,
    type:'',
    selType:'',
   
    }
  }
  listData=[
    {title: 'Inbox', data: ['primary', 'social','promotional']},
    {title: 'Sent', data:[]}, 
    {title: 'Outbox' ,data:[]},

];
  openDrawer=()=>{
    this.DrawerLayoutRef.openDrawer()
  }
  render() {
    var navigationView=(
     <View>
       <View>
         <Image source={require('./user.png')} style={{height:70,width:70,marginTop:10,marginLeft:60}} />
         <Text style={{textAlign:'center'}}>Meghna Malhotra</Text>
       </View>
     <SectionList 
     
     keyExtractor={(item, index) => item + index}
     sections={this.listData}
     extraData={this.state}
     renderItem={({item, index,section}) => {
    if(section.title==this.state.selType){
      if(this.state.hide){
        return null
      }
      else{
      return(
      
         <TouchableOpacity onPress={()=>{this.setState({type:item})
         this.DrawerLayoutRef.closeDrawer()}}>
         
        <Text style={styles.textStyle} key={index}>{item} </Text>
       
   
        </TouchableOpacity>
           )}}
          else return null
   
    
  }
}
    renderSectionHeader={({section: {title}}) => (
     
      <TouchableOpacity onPress={()=>{
     
      this.setState({hide:!this.state.hide,selType:title })}}>
      <Text style={styles.textHeadingStyle} >{title}</Text>
     
      
      </TouchableOpacity>
    )}
     >
    
     </SectionList>
       <View><Text style={{fontSize:20,marginTop:20,marginLeft:30}}>SignOut</Text></View>
     </View>
    )
    
    return (
     <DrawerLayoutAndroid
       ref={ref=>(this.DrawerLayoutRef=ref)}
       drawerWidth={200}
       drawerPosition={DrawerLayoutAndroid.positions.Left}     
       renderNavigationView={()=>navigationView } >
       <View style={styles.container}>
       <Image source={require('./grad.png')} style={{height:100,position:'absolute'}}/>
       
       <Text style={{fontSize:40,textAlign:'center',marginTop:20}}>Email</Text>
       <TouchableOpacity style={{position:'absolute',marginLeft:20}} onPress={()=>{this.openDrawer()}}>
       <Image source={require('./ham.png')} style={{height:60,width:30,marginTop:20}}/>
       </TouchableOpacity>
       <FlatList style={styles.section}
       extraData={this.state}
       data={this.Array_Items}
            renderItem={({item})=>{
         
              return(
               <FlatList 
               data={(item.type==this.state.type)?item.mail:""} 
               renderItem={({item})=>{
                 return(
                  <View style={{padding:20}}>
                  <Image source={require('./user1.png')} style={{height:40,width:40,position:'absolute',marginTop:30,marginLeft:20}} />
                 <Text style={{fontSize:20,paddingLeft:70,fontWeight:'bold'}}>{item.name}</Text>
                 <Text style={{fontSize:16,paddingLeft:70}}>{item.subject}</Text>
                 <Text style={{paddingLeft:70}}>{item.content}</Text>
                 <Text style={{borderBottomColor:'gray',borderBottomWidth:2,paddingLeft:300}}>{item.time}</Text>
                 </View>
                 )
               }}
               ></FlatList>
              
            
              )}}>
       
       </FlatList>
      
       </View>
       <TouchableOpacity style={{width:100,height:50,marginLeft:312}}>
       <Image source={require('./filter.png')} style={{height:50,width:50,marginLeft:30}}/>
       </TouchableOpacity>
     </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    },
  textHeadingStyle:{
  fontSize:20,
  marginLeft: 20,
  padding: 10,
  marginTop:20
  },
  textStyle:{
  fontSize:20,
  marginLeft: 20,
  padding:10
  },
    section:{
    width:'100%',
    backgroundColor:'white',
   
  },
  
  
});
