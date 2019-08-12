import React from 'react';
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
var l =[];
var m = 0;

export default class App extends React.Component {

  constructor(props)
  {
    super(props);
    this.state =
    {
      txtshow: "",
      output: 0,
      temp:"",
      num:"",
      summ:0
    }

  }

  btnPress(n)
  {
    if(n=="AC"){
      this.setState({output:0});
      this.state.temp = "";
      l=[];
      this.state.num ="";
      this.state.summ = 0;}

    else if(n=="+/-"){
        this.state.temp *=(-1);
        this.setState({output:this.state.temp});
    }
    else if(n=="%"){
           this.state.summ = Number(this.state.temp)/100;
            this.setState({output:this.state.summ});
            this.state.temp = this.state.summ;
            //this.setState({output:this.state.temp});
        }
    else if(n=="="){
        for(var i=0;i<this.state.temp.length;i++)
        {
          if(this.state.temp[i] != "+" && this.state.temp[i] != "-" && this.state.temp[i] != "x" && this.state.temp[i] != "÷")
          {
            this.state.num = this.state.num+this.state.temp[i];
          }
          else{
            l.push(this.state.num);
            l.push(this.state.temp[i]);
            this.state.num ="";
          }
        }
        
        l.push(this.state.num);
        //this.setState({output:l});
        m = l.indexOf("x");
        //this.setState({output:m});
        while(m != -1){
        if( m != -1){
          this.state.summ = Number(l[m-1])*Number(l[m+1]);
          //this.setState({output:this.state.summ});
          delete(l[m-1]);
          delete(l[m]);
          delete(l[m+1]);
          l[m-1] = (this.state.summ.toString());
          m = l.indexOf("x",(this.state.summ.toString().length));

        }
        }
        
        //this.setState({output:l});
        for(var a=0;a<l.length;a++){
          if(a==0){
              this.state.summ = Number(l[a]);
              //this.setState({output:l+this.state.summ});
          }
          else{
            if(l[a]=="+"){
              this.state.summ+=Number(l[a+1]);
            }
            else if(l[a]=="-")
            {
              this.state.summ-=Number(l[a+1]);
            }
            else if(l[a]=="÷")
            {
              this.state.summ /= Number(l[a+1]);
            }
             
          }
        }
    //this.setState({output:l.indexOf("x")});
    this.setState({output:this.state.summ});
    l=[];
    //this.setState({output:l});
    this.state.temp = this.state.summ;
    this.state.num = "";
    }
    else{
      this.state.temp = this.state.temp+n;
    this.setState({output:this.state.temp});}}
  render() {
    return (

      <LinearGradient
        //https://uigradients.com/#Reef
        colors={['#000000', '#000000', '#000000']}
        style={{flex: 1}}
      >
        <View style={{flex: 1}}>
          <View style={{flex: 1}} />

          <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              <View style={{flex: 1,  backgroundColor: 'black'}} >
              <Text style={styles.txtShow} >
                  {this.state.output}</Text></View>
          </View>

           <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
             <View style={{flex:1}}>
             <TouchableOpacity style={styles.btn1}
              onPress = {()=>this.btnPress("AC")}><Text style={styles.txt3}>AC</Text></TouchableOpacity></View>
              <View style={{flex:1}}>
               <TouchableOpacity style={styles.btn1}
               onPress = {()=>this.btnPress("+/-")}><Text style={styles.txt3}>+/-</Text></TouchableOpacity></View>
              <View style={{flex:1}}>
              <TouchableOpacity style={styles.btn1}
              onPress = {()=>this.btnPress("%")}><Text style={styles.txt3}>%</Text></TouchableOpacity></View>
              <View style={{flex:1}}>
               <TouchableOpacity style={styles.btn2}
               onPress = {()=>this.btnPress("÷")}><Text style={styles.txt}>÷</Text></TouchableOpacity></View>
          </View>

           <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              
             <View style={{flex:1}}>
              <TouchableOpacity style={styles.btn3}
              onPress = {()=>this.btnPress("7")}><Text style={styles.txt2}>7</Text></TouchableOpacity></View>
              <View style={{flex:1}}>
              <TouchableOpacity style={styles.btn3}
              onPress = {()=>this.btnPress("8")}><Text style={styles.txt2}>8</Text></TouchableOpacity></View>
              <View style={{flex:1}}>
              <TouchableOpacity style={styles.btn3}
              onPress = {()=>this.btnPress("9")}><Text style={styles.txt2}>9</Text></TouchableOpacity></View>
              <View style={{flex:1}}>
               <TouchableOpacity style={styles.btn2}
               onPress = {()=>this.btnPress("x")}><Text style={styles.txt}>x</Text></TouchableOpacity></View>
          </View>
          
          <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              <View style={{flex:1}}>
              <TouchableOpacity style={styles.btn3}
              onPress = {()=>this.btnPress("4")}><Text style={styles.txt2}>4</Text></TouchableOpacity></View>
              <View style={{flex:1}}>
              <TouchableOpacity style={styles.btn3}
              onPress = {()=>this.btnPress("5")}><Text style={styles.txt2}>5</Text></TouchableOpacity></View>
              <View style={{flex:1}}>
             <TouchableOpacity style={styles.btn3}
             onPress = {()=>this.btnPress("6")}><Text style={styles.txt2}>6</Text></TouchableOpacity></View>
              <View style={{flex:1}}>
               <TouchableOpacity style={styles.btn2}
               onPress = {()=>this.btnPress("-")}><Text style={styles.txt}>-</Text></TouchableOpacity></View>
          </View>

          <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
             <View style={{flex:1}}>
              <TouchableOpacity style={styles.btn3}
              onPress = {()=>this.btnPress("1")}><Text style={styles.txt2}>1</Text></TouchableOpacity></View>
              <View style={{flex:1}}>
             <TouchableOpacity style={styles.btn3}
             onPress = {()=>this.btnPress("2")}><Text style={styles.txt2}>2</Text></TouchableOpacity></View>
              <View style={{flex:1}}>
              <TouchableOpacity style={styles.btn3}
              onPress = {()=>this.btnPress("3")}><Text style={styles.txt2}>3</Text></TouchableOpacity></View>
              <View style={{flex:1}}>
               <TouchableOpacity style={styles.btn2}
               onPress = {()=>this.btnPress("+")}><Text style={styles.txt}>+</Text></TouchableOpacity></View>
          </View>

          <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              
              <View style={{flex:2}}>
              <TouchableOpacity style={styles.btn4}
              onPress = {()=>this.btnPress("0")}><Text style={styles.txt}>  0</Text></TouchableOpacity></View>
              <View style={{flex:1}}>
              <TouchableOpacity style={styles.btn3}
              onPress = {()=>this.btnPress(".")}><Text style={styles.txt}>.</Text></TouchableOpacity></View>
              <View style={{flex:1}}>
              <TouchableOpacity style={styles.btn2}
              onPress = {()=>this.btnPress("=")}><Text style={styles.txt}>=</Text></TouchableOpacity></View>
          </View>



        
          
        </View>
      </LinearGradient>
    );
  }
}
  const styles = StyleSheet.create({
    btn1:{
      alignItems: 'center',
      height:78,
      width:78,
      backgroundColor: '#BEBEBE',
      padding: 20,
      margin: 5,
      borderRadius: 50
    },

    btn2:{
      alignItems: 'center',
      height:78,
      width:78,
      backgroundColor:'#ED8F03',
      padding: 15,
      margin: 5,
      borderRadius: 50
      },

      btn3:{
        alignItems: 'center',
        height:78,
        width:78,
        backgroundColor: '#363636',
        padding: 20,
        margin: 5,
        borderRadius: 50
      },

      btn4:{
        alignItems: 'left',
        height:78,
        width:170,
        backgroundColor: '#363636',
        padding: 15,
        margin: 5,
        borderRadius: 70
      },
      
      txt:{
        textAlign : 'center', 
        fontSize :40, 
        color:'white'
      },

      txt2:{
        textAlign : 'center', 
        fontSize :35, 
        color:'white'
      },

      txt3:{
        textAlign : 'center', 
        fontSize :30, 
        color:'black'
      },

      txtShow: {
      textAlign : 'right', 
        fontSize :40, 
        color:'white'
    }

  })
