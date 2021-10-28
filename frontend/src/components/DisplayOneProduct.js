import React from "react";
import Articles from './Articles';
class DisplayOneProduct extends React.Component {
    constructor() {
        super();
        this.state={
            value:'test',
            // array:null,
        }
    }
    async componentDidMount() {
        
        const option = {};
        const id = localStorage.getItem('value')
        const token = localStorage.getItem('datee');
        option.headers = {
            authorization : `Bearer ${token}`,
        }
        const url = `http://localhost:3004/post/${id}`;
        const response = await fetch(url,option);
        const data = await response.json();
        
        console.log("data", data.id);

        // const arra = data.map((user) => {
            const element  = 
             <Articles key={data.id.toString()} 
                    onclick={this.clickOnchange} 
                    id={data.id}text={data.text}
                    updatedAt={data.updatedAt}
                    PersonId={data.PersonId} 
                    createdAt={data.createdAt} />;
        // })
        console.log(element);
        this.setState({
            array: element ,
        })
        
    }
    render() {
        return (
            <div>
                <h1>
                    DisplayOneProduct : 
                    {this.state.array}
                </h1>
                   
            </div>
        )
    }

}

export default DisplayOneProduct;