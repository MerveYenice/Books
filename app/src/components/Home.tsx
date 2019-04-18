import * as React from 'react'

export class Home extends React.Component<{},IState>{

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
                <h1>Home</h1>
                <h2>Burada Kitaplar Listelenecek ve Sayfalama olacak</h2>
                <ul>
                    <li>Beetroot</li>
                    <li>Ginger</li>
                    <li>Potato</li>
                    <li>Radish</li>
                </ul>
		<a href="/create">Go to Create New Book</a>
            </div>
        );
    }
}

interface IState{
    currentBook : string;
    books : Array<string>;
}
