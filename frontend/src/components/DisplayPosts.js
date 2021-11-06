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
    }
    async componentDidMount() {

        const option = {};
        const token = localStorage.getItem('datee');
        option.headers = {authorization : `Bearer ${token}`,   }
        const url = 'http://localhost:3004/posts';
        const response = await fetch(url, option);

        const data = await response.json();
        console.log(data);
        const arra =  data.map((user) => {

            return <Articles key={user.id.toString()} 
                    id={user.id}text={user.text}
                    updatedAt={user.updatedAt}
                    data={user.data}
                    PersonId={user.PersonId} 
                    createdAt={user.createdAt} />
        })
        this.setState({
            array: arra,
        })
    }
    // componentWillUnmount() {
    //     localStorage.clear()
    //  //    if(!localStorage.getItem('datee')) {
    //  //      this.props.history.push('/Login')
    //  //    }
    //  }

        render() {
        return (
            <div >
                <ul>
                {this.state.array}
                </ul>
                {/* <button onClick={this.logout}>
          LogOut
        </button> */}
            </div> 
        )
    }
}


export default DisplayPosts;