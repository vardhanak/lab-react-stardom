import React, { Component } from 'react'
import prostars from './prostars.json'
const style = {
    padding: "10px 15px",
    backgroundColor: "red",
    width: "20%",
    margin: "0 auto",
    color: "white",
    cursor: "pointer"
  };
  const styles = {
    padding: "10px 15px",
    backgroundColor: "red",
    width: "20%",
    margin: "0 auto",
    color: "white",
    cursor: "pointer"
  };
  export default class Stardom extends Component {
    constructor() {
      super();
      this.state = {
        prostarFive: prostars.slice(0, 5), // gettting 5 set of prostar from prostar json array data
      };
    }
  
    displayProstars = () => {
      return this.state.prostarFive.map((item) => {
        return (
          <tr>
            <td>
              <img src={item.pictureUrl} alt={item.name} />
            </td>
            <td>{item.name}</td>
            <td>{item.popularity}</td>
            <td>
              <div style={styles} onClick={() => this.deleteStar(item.name)}>
                Delete
              </div>
            </td>
          </tr>
        );
      });
    };
  
    displayRandomProStars = () => {
      const random_star =
        prostars[Math.floor(Math.random() * prostars.length + 1)]; // getting random prostar from prostars json data
      //  console.log(random_star)
      const stars = this.state.prostarFive; //holding the prostars of the state into the temporary array
      stars.push(random_star); // add random start in the set of 5 prostar which we have filtered above
      this.setState({ prostarFive: stars });
    };
  
    //Sort By Name
    sortByName = () => {
      let stars = this.state.prostarFive;
      stars.sort(function (a, b) {
        return a.name > b.name ? 1 : -1;
      });
      this.setState({ prostarFive: stars });
    };
  
    //Sort By Popularity
    sortByPopularity = () => {
      let stars = this.state.prostarFive; 
      stars.sort(function (a, b) {
        return a.popularity < b.popularity ? 1 : -1;
      });
      this.setState({ prostarFive: stars });
    };
  
    // Remove Prostars
    deleteStar = (name) => {
      const stars = this.state.prostarFive; 
      if (name === 0) {
        stars.shift();
      } else {
        stars.splice(name, 1);
      }
      this.setState({ prostarFive: stars });
    };
  
    render() {
      return (
        <React.Fragment>
          <div className="buttons">
            <div className="random" onClick={() => this.displayRandomProStars()}>
              Get Random Star
            </div>
            <div className="byName" onClick={() => this.sortByName()}>
              Get By Name
            </div>
            <div className="byPopularity" onClick={() => this.sortByPopularity()}>
              Get By Popularity
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <td>Picture</td>
                <td>Name</td>
                <td>Popularity</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>{this.displayProstars()}</tbody>
          </table>
        </React.Fragment>
      );
    }
  }