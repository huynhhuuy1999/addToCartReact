import React, { Component } from 'react';
import { Container, Row, Col,Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import {ContextCart} from '../../context/contextCart';
import {Context} from '../../context/contextCart';

export default class product extends Component {
    constructor(){
        super();
        this.state = {
            product:[{
                "id": 1,
                "name": "Miso - Soy Bean Paste",
                "description": "pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
              }, {
                "id": 2,
                "name": "Bread - Wheat Baguette",
                "description": "ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
              }, {
                "id": 3,
                "name": "Salt - Seasoned",
                "description": "est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
              }, {
                "id": 4,
                "name": "Beans - Fine",
                "description": "nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
              }, {
                "id": 5,
                "name": "Asparagus - White, Fresh",
                "description": "sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
              }, {
                "id": 6,
                "name": "Chicken - Bones",
                "description": "felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
              }, {
                "id": 7,
                "name": "Wine - Sauvignon Blanc Oyster",
                "description": "vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
              }, {
                "id": 8,
                "name": "Wine - Ruffino Chianti",
                "description": "lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
              }, {
                "id": 9,
                "name": "Cake Circle, Foil, Scallop",
                "description": "accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
              }, {
                "id": 10,
                "name": "Teriyaki Sauce",
                "description": "est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
              }, {
                "id": 11,
                "name": "Tuna - Canned, Flaked, Light",
                "description": "accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
              }, {
                "id": 12,
                "name": "Wine - Jaboulet Cotes Du Rhone",
                "description": "rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
              }, {
                "id": 13,
                "name": "Sprouts - Brussel",
                "description": "lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
              }, {
                "id": 14,
                "name": "Duck - Fat",
                "description": "tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
              }, {
                "id": 15,
                "name": "Prunes - Pitted",
                "description": "molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
              }, {
                "id": 16,
                "name": "Creme De Menthe Green",
                "description": "nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
              }, {
                "id": 17,
                "name": "Mushroom - Trumpet, Dry",
                "description": "sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
              }, {
                "id": 18,
                "name": "Zucchini - Green",
                "description": "curae duis faucibus accumsan odio curabitur convallis duis consequat dui",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
              }, {
                "id": 19,
                "name": "Bagel - Sesame Seed Presliced",
                "description": "nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
              }, {
                "id": 20,
                "name": "Bread - Roll, Canadian Dinner",
                "description": "nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
              }]
        }
    }
    render() {
        return (
                <Container>
                    <Row>
                        {
                            this.state.product.map((item)=> 
                                <Col sm="4">
                                    {/* <ItemProduct 
                                        img={item.imageUrl} 
                                        name={item.name} 
                                        description={item.description}
                                        x ={item}

                                    /> */}
                                    <div>
                                        <Card>
                                            <CardImg top width="100%" src={item.imageUrl} alt="Card image cap" />
                                            <CardBody>
                                            <CardTitle>{item.name}</CardTitle>
                                            <CardSubtitle>{item.description}</CardSubtitle>
                                            <Context.Consumer>
                                                {
                                                (value) =><Button onClick={()=>value.addToCart(item)}>Add to cart</Button>
                                                }
                                            </Context.Consumer>
                                            </CardBody>
                                        </Card>
                                    </div>
                                </Col>)
                        }
                    </Row>
                </Container>
        )
    }
}
