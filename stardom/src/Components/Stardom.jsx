import React, { Component } from 'react';
import "./Stardom.css";



class Prostar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prostars: [...this.props.data].splice(0, 5)
            
          
        }
         { console.log(this.state.prostars) }
    }


 
    getRandomContact = () => {
        let rand = [...this.props.data]
        let newStar = []
        for (let i = 0; i < 5; i++) {
            let num = Math.floor(Math.random() * 53) + 1; 
             console.log(num) 

            newStar.push(rand[num]);
            

        }
        this.setState({
            prostars: [...newStar]
        })
    }


    

    sortByName = () => {
        let oldStar = [...this.props.data]
        oldStar.sort((a, b) => {
            return (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0
        })
        this.setState({
            prostars: [...oldStar]
        })
    }


    sortByPopularity = () => {
        let oldStar = [...this.props.data]
        oldStar.sort((a, b) => {
            return b.popularity - a.popularity
        })
        this.setState({
            prostars: [...oldStar]
        })
    }
 

    DeletHandler = (pro) => {
        let stars = [...this.props.data]
        let tarStar = stars.filter((star) => {
            return star.id !== pro.target.value
        })
        this.setState({
            prostars: [...tarStar]
        })
    }


    render() {
    
        return (
            <div>
                <h1 className="head"> Pro Stars </h1>
                <div className="buttons">
                <span className="blue"><button onClick={this.getRandomContact}>Get Random Contact</button></span>
                <span className="gray"><button onClick={this.sortByName}>Sort By Name</button></span>
                <span className="lightblue"><button onClick={this.sortByPopularity}>Sort by Popularity</button></span>
                </div>
                
                <div className="table">
                    <table>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>popularity</th>
                        <th>Action</th>
                    </tr>
                {this.state.prostars.map((ele)=> 
                /*iterating the arr elements by .map  */
                {
                    return (
                        <tr key={ele.id}>
                            <td><img src={ele.pictureUrl} alt="" /></td>
                            <td><h3>{ele.name}</h3></td>
                            <td><h3>{ele.popularity}</h3></td>
                            <td><button value={ele.id} onClick={this.DeletHandler}>Delete</button></td>
                        </tr>
                    ) 
                })}
                </table>
                </div>
            </div>
        );
    }
}

export default Prostar;