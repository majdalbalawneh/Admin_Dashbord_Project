import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUsers } from './store/actions/usersAction'
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import "./pages/home/home.scss";
import "./style/card.css"

class Users extends Component {
    constructor(props) {
        super(props);
        this.state =
            { deleteButton: true };
        this.handleButton = this.handleButton.bind(this)
    }
    componentDidMount() {
        this.props.getUsers()

    }
    handleButton(id) {
        // event.preventDefault();

        document.getElementById(id).style.display = "none";
    }
    render() {
        const { users } = this.props.users
        console.log(this.props.users)


        return (
            <>
                {/* <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        </div>
        </div> */}
                    <div className='container-fluid'>
                        <div className='row'>
                            <Navbar />
                        </div>
                        <div className='row'>
                            <div className='col-md-2'>
                                <Sidebar />
                            </div>
                            <div className='col-md-10'>
                          
                                {/* {users.map(u => 
                     <div key={u.id} style={{display:this.state.deleteButton?'block':'none'}} id={u.id}>
                         <h6 >{u.name}</h6> 
                         <button onClick={() => this.handleButton(u.id)} className="btn btn-danger">Delete</button> 
                     </div>
                     
                  
                )} */}          <div className='row'>
                                {users.map(u =>
                                    <section className="movie-details" key={u.id} style={{ display: this.state.deleteButton ? 'block' : 'none' }} id={u.id}>

                                        <div className="movie-img">
                                            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhIAs3qwayOpnKkfuq59oZ0e7IiUh7zDyOFzZ6d9OMfxBLhp2tpEatzclv6xkB01mRodGuC--EvX_zA72u-gFDXF8VAGWhhASV-xmv-3-z0g9T5dPgVwGzs3-wMHxbPfnQwj5DSwWmmWt_wewaniivHqCgDZpQnAJxuyPMR7nlrqszwLUxQei1byWn3fg/s1350/IMG-20220719-WA0000.jpg" />
                                        </div>
                                        <div className="movie-info">
                                            <span className="movie-name">&nbsp;Brahmāstra : Shiva </span> (2021)
                                            <div className="about-movie post-line">
                                                {u.name}
                                            </div>
                                            <div className="post-line">
                                                <span>IMDB Rating :</span>&nbsp;9.2 / 10 from 216k users,
                                                <span>Metascore : </span> 86
                                            </div>
                                            <div className="post-line">
                                                <span>Director:</span>&nbsp; Ayan Mukerji
                                                <br />
                                                <span>Actor:</span>&nbsp; Amitabh Bachchan, Ranbir Kapoor, Alia Bhatt,
                                                Mouni Roy <br />
                                                <span>Official Site :</span>&nbsp; N/A <br />
                                            </div>
                                            <br />
                                            <button onClick={() => this.handleButton(u.id)} className="btn btn-danger bttn">Delete</button>
                                        </div>
                                        </section>
                                  
                                   
                                )}
                            </div>
                        </div></div>
                        </div>
                    </>
                    )
    }
}

const mapStateToProps = (state) => ({users: state.users })

  export default connect(mapStateToProps, {getUsers})(Users)