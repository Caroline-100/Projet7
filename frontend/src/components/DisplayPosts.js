import React from "react"
import Articles from './Articles'

class DisplayPosts extends React.Component {
    constructor() {
        super()
        this.state = {
            array: [],
            loading: true,
            post: {
                id:null,
                data:null,
                createdAt:null,
                updateAt:null,
            }
        }
        this.clickOnchange = this.clickOnchange.bind = this;
    }
    clickOnchange(event) {
        console.log('click');
    }

    async componentDidMount() {

        const option = {};
        const token = localStorage.getItem('datee');
        option.headers = {authorization : `Bearer ${token}`,   }
        const url = 'http://localhost:3004/post';
        const response = await fetch(url, option);

        const data = await response.json();
        console.log(data);
        const arra =  data.map((user) => {

            return <Articles key={user.id.toString()} 
                    onclick={this.clickOnchange} 
                    id={user.id}text={user.text}
                    updatedAt={user.updatedAt}
                    PersonId={user.PersonId} 
                    createdAt={user.createdAt} />
        })
        this.setState({
            array: arra,
        })
    }

        render() {
        return (
            <div className="displayPosts" >
                <ul>
                {this.state.array}
                </ul>
            </div> 
        )
    }
}

export default DisplayPosts;