import * as React from 'react'

export class Books extends React.Component<{},IState>{

    constructor(props: {}){
        super(props);

        this.state = {
            bookId: "",
            bookName: "",
            bookAuthor: ""
        };
    }
    

    render(){
        console.log(this.state);
        return (
            <div>
                <h1>Book Detail Page</h1>
		        <a href="/">Go to home</a>
                
            </div>
        );
    }
}

interface IState{
    currentBook : string;
    books : Array<string>;
}
