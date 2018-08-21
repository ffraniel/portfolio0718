import React from 'react';
import './Subtitle.css';

const Subtitle = (props) => {
    return(
        <div className="project-subtitle">
            {   
                props.blurb.split(" ").map((word, key)=>{
                    if(word[0]=== "*") {
                        return (
                            <SpanWord word={" " + word.slice(1)} key={key} />
                        )
                    }
                    return " " + word;
                })
            }
        </div>
    )
};

export default Subtitle;

const SpanWord = (props)=>{
    return (<span>{props.word}</span>)
}


// {splitBlurb.map((letter)=>{
//     if(letter === "*"){
//         return "<span>";
//     }
//     if(letter === "%"){
//         return "</span>"
//     }
//     return letter;
// })
// }