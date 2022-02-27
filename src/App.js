import React, { Component } from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown';


//  これのPathを確認したいやつに書き換える ***************
import file from "./projects/ETH-dApp/ja/section-1/Lesson_1_ローカル環境でイーサリアムネットワークを立ち上げよう.md"
// *************************************************


class App extends Component {
    
    constructor() {
        super();
        this.state = { 
            section: 0,
            markdown: '' 
        };
    }
    
    componentWillMount() {     


        fetch(file).then(
            res => res.text()
        ).then(
            text => this.setState({ markdown: text })
        );
    }

    render(){

        const { markdown } = this.state;
        
        return (
            <div className="mt-2 bg-neutral-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* <div>{project} -- Section {section}</div> */}
                    <ReactMarkdown>{markdown}</ReactMarkdown>
                </div>
            </div>
            
        );
    }
}

export default App;
