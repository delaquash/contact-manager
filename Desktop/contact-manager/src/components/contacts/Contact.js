import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Consumer } from '../../context';
import axios from 'axios';
import { domainToASCII } from 'url';


 class Contact extends Component {
    state = {
        showContactInfo: false
    };

  onDeleteClick =async (id, dispatch)  => {
      try {
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: "DELETE_CONTACT", payload: id });
      } catch (e) {
        dispatch({ type: "DELETE_CONTACT", payload: id });
      }
      };
      render() {
        const { id, name, email, phone } = this.props.contact;
        const { showContactInfo } = this.state;

        return (
                    <Consumer>
                        {value=>{
                           const { dispatch } = value;
                            return (
                    <div className="card card-body mb-3">
                        <h4>{name}
                                <i
                                onClick={() =>
                                this.setState({ showContactInfo: !this.state.showContactInfo })
                                }
                                className="fas fa-sort-down"
                                style={{cursor:'pointer', color:'indigo'}}
                                />
                                <i className="fas fa-times"
                                    style={{ cursor:'pointer',
                                    float:'right',
                                    color:'blue' }}
                                    onClick={this.onDeleteClick.bind(this,id, dispatch)}
                                />
                                <Link to={ `contact/edit/${id}`}>
                                    <i className="fas fa-pencil-alt"
                                    style={{
                                        cursor:"pointer",
                                        float:"right",
                                        color:"blue",
                                        marginRight:"1rem"
                                    }}
                                    />
                                </Link>
                                {showContactInfo ?(<ul className="list-group">
                                    <li className="list-group-item">
                                    Email: {email}
                                    </li>
                                    <li className="list-group-item">Phone: {phone}</li>
                                </ul>) : null}
                        </h4>
                    </div>
                            )
                        }}
         </Consumer>

        );
    }
}

Contact.propTypes = {
contact: PropTypes.object.isRequired
};

export default Contact;
