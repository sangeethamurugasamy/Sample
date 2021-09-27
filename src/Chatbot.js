import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';

import ChatBot from 'react-simple-chatbot';


export class Chatbot extends React.Component{
   
    render(){
        
        return  (      
             <div id="chatbot">
             <ChatBot 
             headerTitle="Chatbot"
             recognitionEnable={true}
             speechSynthesis={{ enable: true, lang: 'en' }}

             steps={[
                {
                    id:'1', 
                    message:'Hello People, I am here to help you!!', 
                    trigger:'2',
                   },
                   {
                    id:'2', 
                    user:true, 
                    trigger:'3',
                   },
                   {
                   id:'3',
                   message:'{previousValue}, What is your name?',
                   trigger:'4',
                   },
                   {
                    id:'4',
                    user:true,
                    validator: (value) => {
                        if (/^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/.test(value))
                          {
                            return true;
                          }
                        else
                          {
                            return'Please input alphabet characters only.';
                          }
                     },
                    trigger:'5',
                   },
                   {
                    id:'5',
                    message:'Nice name {previousValue}!!!, How can I help you?',
                    trigger:'6',
                   },
                  {
                    id:'6',
                    options: [
                      { value: 1, label: 'How to buy products?', trigger: '7' },
                      { value: 2, label: 'How to Register?', trigger: '8' },
                      { value: 3, label: 'I dont want any help', trigger: '9'},
                      
                    ],
                  },
                  {
                    id:'7',
                    message:'You can buy products using ADD TO CART option',
                    trigger: '6',
                  },
                  {
                    id : '8',
                    message: 'You can register with the email id and password using register button which is present in the top right corner',
                    trigger: '6',
                  },
                  {
                    id: '9',
                    message: 'Okay fine. Thank You!!!',
                    end: true,
                  },
                  
                ]}
            />
        </div>
        );
    }
                    
       
}


