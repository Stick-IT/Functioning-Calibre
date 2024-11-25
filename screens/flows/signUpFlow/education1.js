import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TextInput, Text, StatusBar, KeyboardAvoidingView, TouchableOpacity, Keyboard, TouchableWithoutFeedback} from 'react-native';
import * as Animatable from 'react-native-animatable';
// import GoconInput from '../../../components/GoconInput';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Ionicons';

import { signUp } from "./style";

import { NeuView, NeuInput, NeuButton } from '../../../components/neu-element';
import {BACKGROUND, RADIUS, COLOR, PLACEHOLDER, Neumorphism, NeumorphismInput,Container, ActionContainer, HeroContainer, ProgressBar, DropDown} from "../../../components/Style";

import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default ({ navigation, route }) => {
    
  

    const handlePress = (educated) => {
       
        console.log("\nBday: "+route.params.bday)
        console.log("Gender: "+ route.params.gender)
        console.log("Name: "+ route.params.firstname + " " + route.params.lastname)
        console.log("Language: "+ route.params.language)
        console.log("Country: "+ route.params.country)
        console.log("City: "+ route.params.city)
        console.log("City lat: "+ route.params.cityLat)
        console.log("City lng :"+ route.params.cityLng)
        console.log("Email: "+ route.params.email)
        console.log("Pass: "+ route.params.password)
        console.log("Under education: "+ educated)

        navigation.navigate('Education2', {
            bday: route.params.bday,
            gender: route.params.gender,
            firstname: route.params.firstname,
            lastname: route.params.lastname,
            language: route.params.language,
            country: route.params.country,
            city: route.params.city,
            cityLat: route.params.cityLat,
            cityLng: route.params.cityLng,
            email: route.params.email,
            password: route.params.password,
            underEducation: educated,
        });
    }
    
    const fadeIn = {
        from: {
          opacity: 0,
        },
        to: {
          opacity: 1,
        },
      };
    const progress = {
        from: {
          width: '63%',
        },
        to:{
          width: '72%',
        }
      };

    
    return(
        <Container>
            
            <NeuView style={ProgressBar.progressBar} color={BACKGROUND} borderRadius={RADIUS} width={windowWidth-80} height={15}>
              <Animatable.View animation={progress} style={ProgressBar.progress}></Animatable.View>
            </NeuView>

            <Animatable.View animation={fadeIn} duration={2000} style={HeroContainer.container}>              
              <Text style={HeroContainer.text}>Are you under <Text style={HeroContainer.greenText}>education</Text>?</Text>
            </Animatable.View>



            <View style={[NeumorphismInput.container, {height: '30%', top: '37%'}]}>

              <NeuButton onPress={() => handlePress("yes")} width={windowWidth-80} height={50} color={BACKGROUND} borderRadius={RADIUS}>
                  <Text>Yes</Text>
              </NeuButton>
              <NeuButton onPress={() => handlePress("no")} width={windowWidth-80} height={50} color={BACKGROUND} borderRadius={RADIUS}>
                  <Text>No</Text>
              </NeuButton>
              <NeuButton onPress={() => handlePress("sab")} width={windowWidth-80} height={50} color={BACKGROUND} borderRadius={RADIUS}>
                  <Text>No, I have a sabbatical year</Text>
              </NeuButton>
              
            </View>

            
          </Container>
    // <View style={{marginTop: 300, marginLeft: '10%', width: '80%'}}>
        
      //  <DropDownPicker
      //           placeholder={"Are you under education?"}
      //           items={[
      //               {label: 'Yes', value: 'yes',  icon: () => <Icon name="md-school" size={18} color="green" />},
      //               {label: 'No', value: 'no',  icon: () => <Icon name="md-school" size={18} color="green" />},
      //               {label: 'No, I have a sabbatical year', value: 'sab',  icon: () => <Icon name="md-school" size={18} color="green" />},
      //           ]}
      //           containerStyle={{height: 40}}
      //           style={{backgroundColor: '#fafafa'}}
      //           itemStyle={{
      //               justifyContent: 'flex-start'
      //           }}
      //           dropDownStyle={{backgroundColor: '#fafafa'}}
      //           onChangeItem={item =>{
      //               console.log(item)
      //               setEducatedState(true)
      //           }}
      //       />
            // <View style={ (educatedState ? "" : {display: 'none'} )}>
             
            //     <DropDownPicker
            //         placeholder={"What is your higest level of education?"}
            //         items={[
            //             {label: 'Universitet - kandiat', value: 'kandiat', icon: () => <Icon name="md-school" size={18} color="green" />},
            //             {label: 'Universitet - bachelor', value: 'bachelor', icon: () => <Icon name="md-school" size={18} color="green" />},
            //             {label: 'Gymnasie', value: 'gymnasie', icon: () => <Icon name="md-school" size={18} color="green" />},
            //             {label: 'Folke skole', value: 'folke skole', icon: () => <Icon name="md-school" size={18} color="green" />},
            //         ]}
            //         containerStyle={{height: 40}}
            //         style={{backgroundColor: '#fafafa'}}
            //         itemStyle={{
            //             justifyContent: 'flex-start'
            //         }}
            //         dropDownStyle={{backgroundColor: '#fafafa'}}
            //         onChangeItem={item =>{
            //             console.log(item)
            //             setEducationState(true)
            //             setEducation(item.value)
            //             if(item.value == "folke skole" || item.value == "gymnasie"){
            //                 setEducationPlaceholder("Where did you go to "+item.value+"?")
            //             }else{
            //                 setEducationPlaceholder("Where did you take your "+item.value+"?")
            //             }                                               
            //         }}
            //     />
            // </View>
            // <View style={ (educationState ? "" : {display: 'none'} )}>
             
            //     <TextInput
            //         style={[signUp.Input,{marginTop: 20,}]}
            //         onChangeText={(value) => {
            //             if (value === "") {
            //                 setName(value);
            //                 setButtonState(true);
            //             } else {
            //                 let isLegal = checkName(value); 
            //                 console.log(isLegal)
            //                 if(isLegal == false){
            //                 alert("This name is not allowed!")
            //                 setButtonState(true);
            //                 }else{
            //                 setName(value)
            //                 setButtonState(false);
            //                 }
            //             }
            //             }
            //         }
            //         autoCorrect={false}
            //         value={name}
                    
            //         placeholder={educationPlaceholder}
            //     />    
               
            // </View>
    //         <KeyboardAvoidingView 
    //       style={{position:'absolute',width:'100%', marginTop:300,}}
    //       behavior={ Platform.OS === 'ios'? 'padding': null}
    //     >
    //         <TouchableOpacity 
    //             disabled={buttonState}
    //             style={[signUp.action, buttonStateStyle]}
    //             onPress={() => handlePress()}
    //         >
    //             <Text style={signUp.actionText}>
    //               CONTINUE
    //             </Text>
    //         </TouchableOpacity> 
    //     </KeyboardAvoidingView>
    //   </View>
    );
  }
