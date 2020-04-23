
import React, { Component } from 'react';
import {container, Table, Card, CardBody, CardTitle, Row, Col, Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link
  } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEdit, faDelet, faTrash } from '@fortawesome/free-solid-svg-icons'


class FareManagement extends Component {
    constructor(){
        super();
        this.state = {
            list:null,
        }
    }

    handleListing = () => {
        fetch("http://3.22.163.24:3001/api/pricemanagement/getPricingDetail")
        .then((res) => res.json()
        .then((result) => {
            console.log(result)  
            this.setState({list:result})
        })
        )
    }

    componentDidMount(){

        this.handleListing();
    
    }


    render() {
        return (
           <React.Fragment>
           <div className="content-wrapper">
        <Card style={{"marginLeft":"25px", "display":"-webkit-inline-box","maxHeight":"524px"}}>   
           <CardBody>
           <CardTitle><center><h2>Fare Management</h2></center></CardTitle>
            <Table striped hover bordered responsive>
                <thead>
                    <tr>
                    <th>Price per km</th>
                    <th>Min Fix Price</th>
                    <th>Max Fix Price</th>
                    <th>Min distance for fix price (KM)</th>
                    <th>Max distance allowed (KM)</th>
                    <th>Driver commission percent</th>
                    <th>Operation</th>
                    </tr>
                </thead>
                <tbody>                    
                            {
                this.state.list ? (
                        <tr>
                        <td>{this.state.list.price_per_km}</td>
                        <td>{this.state.list.min_price_till_5km}</td>
                        <td>{this.state.list.max_price}</td>
                        <td>{this.state.list.min_distance_fix_price}</td>
                        <td>{this.state.list.max_allowed_distance}</td>
                        <td>{this.state.list.driver_commision_percent}</td>
                        <td>
                        <NavLink tag={Link}to={"/update/"+1} > <FontAwesomeIcon icon = {faEdit}/></NavLink> 
                        </td>

                        </tr>
                    )
                    :'Please wait...'
                }
                </tbody>
            </Table>
            </CardBody>
            </Card>
            </div>
            </React.Fragment>
        ); 
    }
}

export default FareManagement;