import React from "react"
import Articles from './Articles'
import LogINorLogOUT from "./LogINorLogOUT";



class DisplayPosts extends React.Component {
    constructor() {
        super()
        this.state = {
            array: [],
            loading: true,
            post: {
                id: null,
                data: null,
                createdAt: null,
                updateAt: null,
            }
        }
    }
    async componentDidMount() {

        const option = {};
        const token = localStorage.getItem('datee');
        option.headers = { authorization: `Bearer ${token}`, }
        const url = 'http://localhost:3004/posts';
        const response = await fetch(url, option);

        const data = await response.json();
        console.log(data);
        const arra = data.map((user) => {

            return (

                // {/* key={user.id.toString() } */}
                <div key={user.id.toString()} >
                    <Articles
                        title={user.title}
                        id={user.id}
                        text={user.text}
                        updatedAt={user.updatedAt}
                        createdAt={user.createdAt}
                        data={user.data}
                        PersonId={user.PersonId} />
                </div >
            )
        })
        this.setState({
            array: arra,
        })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.array}
                </ul>
                <LogINorLogOUT />

            </div>
        )
    }
}


export default DisplayPosts;