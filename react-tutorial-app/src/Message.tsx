//can use a function or a class component to make a react component
//function is more popular rn

//we use pascal case for component names: PascalCase
function Message() {
    //this is not html in js, this is JSX: Jabvascript XML
    //so this code is going to be compiled to javascript
    const name = 'alex';
    return <h1>Hello {name}</h1>;
}

export default Message;