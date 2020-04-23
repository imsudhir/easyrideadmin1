import React, { Component } from 'react';
import {container, Table, Card, Row, Col, Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';

class FareUpdate extends Component {
   constructor(){
       super();
       this.state = {
           name:null,
           email:null,
           rating:null, 
           address:null
       }
   }
    componentDidMount(){
       fetch("http://localhost:3000/restaurant/"+this.props.match.params.id)
       .then((response) => { response.json()
       .then((result) => {
           console.log(result)
           this.setState({
               name:result.name,
               email:result.email,
               id:result.id,
               rating:result.rating,
               address:result.address
           })
       })
       })
    }
    handleUpdate = (e) =>{
        e.preventDefault();
       fetch("http://localhost:3000/restaurant/"+this.state.id,
       {
           method : "PUT",
           headers : {
               'Content-Type':'application/json'
           },
           body : JSON.stringify(this.state)
       })
       .then((result) => {result.json().then((res)=>{
       alert("Rrestaurant updated Successfully")
       this.props.history.push('/list');
       })
    })
   }
    render() {
        console.log(this.state)
        return (
           <div className="content-wrapper">

               <center><h1 className="mt-2"> Fare update</h1></center>
   <Form  onSubmit = {this.handleUpdate}>
     <Row form>
       <Col lg="6">
       <FormGroup>
           <Label for="Priceperkm">Price per km</Label>
           <Input type="text" name="Priceperkm" onChange={(e)=> this.setState({name:e.target.value})} id="Priceperkm" value ={this.state.name} placeholder="Price per km"  />
       </FormGroup>
         </Col>
       <Col lg="6">
       <FormGroup>
           <Label for="MinFixPrice">Min Fix Price</Label>
           <Input type="text" name="MinFixPrice" 
           onChange={(e)=> this.setState({email:e.target.value})}  id="MinFixPrice"  value ={this.state.email} placeholder="Min Fix Price" />
         </FormGroup>
       </Col>
     </Row>
     <Row form>
       <Col lg="6">
       <FormGroup>
           <Label for="MaxFixPrice">Max Fix Price</Label>
           <Input type="text" name="MaxFixPrice" onChange={(e)=> this.setState({name:e.target.value})} id="MaxFixPrice" value ={this.state.name} placeholder="Max Fix Price"  />
       </FormGroup>
         </Col>
       <Col lg="6">
       <FormGroup>
           <Label for="MindistanceforfixpriceKM">Min distance for fix price (KM)</Label>
           <Input type="email" name="MindistanceforfixpriceKM" 
           onChange={(e)=> this.setState({email:e.target.value})}  id="MindistanceforfixpriceKM"  value ={this.state.email} placeholder="Min distance for fix price (KM)" />
         </FormGroup>
       </Col>
     </Row>
     <Row form>
       <Col lg="6">
       <FormGroup>
           <Label for="Drivercommissionpercent">Driver commission percent	</Label>
           <Input type="text" name="Drivercommissionpercent" onChange={(e)=> this.setState({name:e.target.value})} id="MaxFixPrice" value ={this.state.name} placeholder="Commission percent"  />
       </FormGroup>
         </Col>
       <Col lg="6">
       <FormGroup>
           <Label for="MindistanceforfixpriceKM">Max distance allowed (KM)</Label>
           <Input type="email" name="MindistanceforfixpriceKM" 
           onChange={(e)=> this.setState({email:e.target.value})}  id="MindistanceforfixpriceKM"  value ={this.state.email} placeholder="Max distance allowed (KM)" />
         </FormGroup>
       </Col>
     </Row>
        <Row form>
        <Col lg="2">
        
        </Col>
        <Col lg="8">
        <FormGroup>
        <Button color="primary" size="md" block>Update</Button>
        </FormGroup>
        </Col>
        <Col lg="2">
         
        </Col>

        </Row>
   </Form>
   </div>
        );
    }
}

export default FareUpdate;