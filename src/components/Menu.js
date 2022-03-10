import  { useState, useEffect, useCallback } from 'react';
import './Menu.scss';
import './Menu.css';
import Header from './Header';
import Popup from './Popup';
import Cart from './Cart';
import ReactStars from "react-rating-stars-component";
import React from 'react';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import './PlaceItem.css';
import './PlaceList.css';
import Axios from 'axios';
import {Button} from 'react-bootstrap';
import { BsCartFill } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Grid,

} from '@material-ui/core/';
const Menu=()=>{
    const url="https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68";
    const [data,setData] = useState([]);
    const [disabledd,setdisabledd] = useState(false);
    const [radio,setRadio] = useState(true);
    const [modal, setModal] = useState(false);
    const [id, setid] = useState('');
    const [cart,setCart]=useState([]);
    const [regular,setregular] = useState(0);
    const [medium,setmedium] = useState(0);
    const [redpepper,setredpepper] = useState(0);
    const [onion,setonion] = useState(0);
    const [mushroom,setmushroom] = useState(0);
    const [cheese,setcheese] = useState(0);
    const [olive,setolive] = useState(0);
    const [large,setlarge] = useState(0);
    const [name,curname]=useState('');
    const [value, setValue] = useState(false);
    const [vegValue,setVegValue] = useState(false);
    const [cartModal,setCartModal] = useState(false);
    const [price,setPrice] = useState(false);
    const [rating,setRating] = useState(false);
    

    const toggleModal = (e) => {
        const ii = e.currentTarget.id;
        console.log(e.currentTarget.id);
        const result= data.filter(item => {
          return item.id == e.currentTarget.id
        })
        curname(result[0].name);
        setRadio(result[0].toppings[0].isRadio);
        setModal(!modal);
        setid(ii);
    };

    const cartMod = ()=>{
        setCartModal(!cartModal);
    }

    const add=(e)=>{

        

        if (e.target.id==="regular"){
            setregular(regular+1);
        }
        if(e.target.id==="medium"){
            setmedium(medium+1);
        }
        if(e.target.id==="medium"){
            setlarge(large+1);
        }



    }

    const addToppings=(e)=>{
        if (!radio){
        setdisabledd(true);}
        if (e.target.id==="redpep"){
            setredpepper(redpepper+1);
        }
        if(e.target.id==="onions"){
            setonion(onion+1);
        }
        if(e.target.id==="grmush"){
            setmushroom(mushroom+1);
        }
        if(e.target.id==="excheese"){
            setcheese(cheese+1);
        }
        if(e.target.id==="blolive"){
            setolive(olive+1);
        }


    }




    const tt=(e)=>{

        const obj = {id:name , reg:regular , med:medium , lar:large ,redpep:redpepper, onions:onion, grmush:mushroom, excheese:cheese, blolive:olive }

        setCart([...cart,obj]);

        setModal(!modal);

        setregular(0);
        setmedium(0);
        setlarge(0);
        setredpepper(0);
        setonion(0);
        setmushroom(0);
        setcheese(0);
        setolive(0);
        setdisabledd(false);

    }

    useEffect( ()=>{
        Axios.get(url).then((
            response)=>{
                setData(response.data);

            }
        )
    },[url])

    const [filter,setFilter] = useState(data);
    const [search, setSearch] = useState('');


    
    const changePrice=(e)=>{
        const eitherSort = (arr = []) => {
            const sorter = (a, b) => {
               return +a.price - +b.price;
            };
            arr.sort(sorter);
         };
         eitherSort(data);
         setFilter(data);
         setPrice(!price);

    }

    const changeRating=()=>{
        const eitherSort = (arr = []) => {
            const sorter = (a, b) => {
               return +b.rating - +a.rating;
            };
            arr.sort(sorter);
         };
         eitherSort(data);
         setFilter(data);
         setRating(!rating);
    }

    const veg=()=>{
        if(value){
            const result=data.filter((user)=>{
                return user.isVeg
            });
        
        setFilter(result)
        }
        else{
            setFilter(data);
        }

        setValue(!value);
    }

    const nonVeg=()=>{
        if(vegValue){
            const result=data.filter((user)=>{
                return !user.isVeg
            });
        
        setFilter(result)
        }
        else{
            setFilter(data);
        }

        setVegValue(!vegValue);
    }

    

    if (data){
        return(<React.Fragment>
              <style type="text/css">
    {`
    .btn-flat {
        color: #0a0808;
        background-color: #f5f5f5;
        border-color: #f7d205;
    }
    .btn-flat:hover {
        color: white;
        background-color: #f8722a;
        border-color: #5b288e;
    }

    `}</style>
          <Header cart={<Button variant="flat" onClick={cartMod} ><BsCartFill/>CART</Button>} />
            <div>
            <div>
          <FormGroup>
            <FormControlLabel control={            
                <Switch
                checked={rating}
                onChange={changeRating}
                inputProps={{ 'aria-label': 'controlled' }}
                />} label="SORT BY RATING" />
        </FormGroup>
        </div>
            <div>
          <FormGroup>
            <FormControlLabel control={            
                <Switch
                checked={price}
                onChange={changePrice}
                inputProps={{ 'aria-label': 'controlled' }}
                />} label="SORT BY PRICE" />
        </FormGroup>
        </div>
      <div>
          <FormGroup>
            <FormControlLabel control={            
                <Switch
                checked={value}
                onChange={veg}
                inputProps={{ 'aria-label': 'controlled' }}
                />} label="VEG" />
        </FormGroup>
        </div>
        <div>
          <FormGroup>
            <FormControlLabel control={            
                <Switch
                checked={vegValue}
                onChange={nonVeg}
                inputProps={{ 'aria-label': 'controlled' }}
                />} label="NON-VEG" />
        </FormGroup>
        </div>

      <div >
      {cartModal &&(<Cart
                      items={cart}
                      show={cartModal}
                      onCancel={cartMod}
      
      
      />)}

      </div>
            </div>
            <div  >
            <div className="wrapper">
                    {(search==='')&&(!value) ?(data.map(dataa => (
                        
                                <div className="card">

                                    <img src={dataa.img_url} className="card__img" />
                                    <div className="card__body" id={dataa.id}>
                                    <h2 className="card__title">{dataa.name}</h2>
                                    <p className="card__description">{dataa.description}</p>
                                    <h3 className="card__price">{dataa.price}</h3>
                                    <div className="card__title">
                                    <div className="card__stars">
                                    <ReactStars
                                           count={6}                                         
                                           size={20}
                                           value={dataa.rating}
                                           isHalf={true}
                                           edit={false}
                                           emptyIcon={<i className="far fa-star"></i>}
                                           halfIcon={<i className="fa fa-star-half-alt"></i>}
                                           fullIcon={<i className="fa fa-star"></i>}
                                           activeColor="#ffd700"
                                        
                                    />
                                    </div>
                                    </div>
                                        <Button  variant="flat" id={dataa.id} onClick={toggleModal}> + ADD ADDONS + </Button>
                                        {modal && (<Popup 
                                            id={id}
                                            modal={modal}
                                            size={ <div >
                                                <Button className="mx-3 my-2" variant="outline-primary" size='sm' id="regular"  onClick={add}    >ADD REGULAR</Button>
                                                <Button className="mx-3 my-2" variant="outline-primary" size='sm' id="medium"   onClick={add}   >ADD MEDIUM</Button>
                                                <Button className="mx-3 my-2" variant="outline-primary" size='sm' id="large"    onClick={add}    >ADD LARGE</Button>
                                                </div>}
                                            onCancel={tt}
                                            footer={<Button id={dataa.id} onClick={tt}>CLOSE</Button>}
                                            toppings={ <div style={{width:"100%"}}>
                                                <Button id="redpep" onClick={addToppings} className="mx-3 my-2 text-center" variant="outline-success" size='sm'   disabled={disabledd} style={{width:"90%"}}>ADD RED PEPPER</Button>
                                                <br></br>
                                                <Button id="onions"       onClick={addToppings} className="mx-3 my-2" variant="outline-success" size='sm'  disabled={disabledd} style={{width:"90%"}}>ADD ONIONS</Button>
                                                <br></br>
                                                <Button id="grmush"      onClick={addToppings} className="mx-3 my-2" variant="outline-success" size='sm'    disabled={disabledd} style={{width:"90%"}}>ADD GRILLED MUSHROOMS</Button>
                                                <br></br>
                                                <Button id="excheese"    onClick={addToppings} className="mx-3 my-2" variant="outline-success" size='sm'    disabled={disabledd} style={{width:"90%"}} >ADD EXTRA CHEESE</Button><br></br>
                                                <Button id="blolive"     onClick={addToppings} className="mx-3 my-2" variant="outline-success" size='sm'    disabled={disabledd} style={{width:"90%"}}>ADD BLACK OLIVE</Button>
                                                </div>}                                     
                                        />)}
                                        
                                    </div>
                                </div>

                            



                        
                    ))):(filter.map(user => (
                        <Grid item xs={12} sm={6} md={4} key={user.id}>
                            <h1>filtered result</h1>
                        </Grid>
                    )))}
                </div>
</div>
    




</React.Fragment>
)

    }
    return (<div></div>)

};

export default Menu;