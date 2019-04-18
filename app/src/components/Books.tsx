import * as React from 'react'

export class Books extends React.Component<{},IState>{

    constructor(props: {}){
        super(props);

        this.state = {
            currentBook: "",
            books: []

        };
    }
    handleSubmit(e: any){
        e.preventDefault();
        this.setState({
            currentBook: "",
            books:[
                ...this.state.books,
                this.state.currentBook
            ]
        });
    }

    render(){
        console.log(this.state);
        return (
            <div>
                <h1>New Book Page</h1>
		<a href="/">Go to home</a>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input 
                        type="text" 
                        placeholder="Add a book" 
                        value= { this.state.currentBook }
                        onChange={e => this.setState({currentBook: e.target.value})}
                    /> 
                    <button type="submit">Add new Book</button>
                </form>
            </div>
        );
    }
}

interface IState{
    currentBook : string;
    books : Array<string>;
}
