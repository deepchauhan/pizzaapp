import  { useState, useEffect, useCallback } from 'react';
import {Modal,Button,Card,Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart=(props)=> {
  const [arr,setarr]=useState(props.items)
  const add=useCallback((idx,x)=>{
    console.log(idx,x);
    if (x==="reg"){
    arr[idx].reg+=1}
    if(x==="med"){
      arr[idx].med+=1
    }
    if(x==="lar"){
      arr[idx].lar+=1
    }
    if (x==="redpep"){
      arr[idx].redpep+=1}
    if(x==="onions"){
        arr[idx].onions+=1
    }
    if(x==="grmush"){
        arr[idx].grmush+=1
    }
    if(x==="excheese"){
      arr[idx].excheese+=1
    }
    if(x==="blolive"){
        arr[idx].blolive+=1
    }

    
    setarr([...arr]);


  },[arr])

  const remove=(idx,x)=>{
    if(x==="reg"){
      if(arr[idx].reg!==0){
        arr[idx].reg-=1
      }
    }
    if(x==="med"){
      if(arr[idx].med!==0){
        arr[idx].med-=1
      }
    }
    if(x==="lar"){
      if(arr[idx].lar!==0){
        arr[idx].lar-=1
      }
    }
    if(x==="redpep"){
      if(arr[idx].redpep!==0){
        arr[idx].redpep-=1
      }
    }
    if(x==="onions"){
      if(arr[idx].onions!==0){
        arr[idx].onions-=1
      }
    }
    if(x==="grmush"){
      if(arr[idx].grmush!==0){
        arr[idx].grmush-=1
      }
    }
    if(x==="excheese"){
      if(arr[idx].excheese!==0){
        arr[idx].excheese-=1
      }
    }
    if(x==="blolive"){
      if(arr[idx].blolive!==0){
        arr[idx].blolive-=1
      }
    }
    setarr([...arr]);
  }




  return (
    <>
      <Modal show={props.show} fullscreen={true} onHide={props.onCancel} centered={true}>
        <Modal.Header closeButton>
          <Modal.Title>MY PIZZA CART</Modal.Title>
        </Modal.Header>
        
        <Modal.Body >
        <Row xs={1} md={2} className="g-4 justify-content-around">
        { arr.map((data,idx)=>{
          return(
          
          <Card border="light" className="mx-2" style={{ width: '18rem' }} key={data.id}>
            <Card.Body>
              <div className="min-h-500">
              <Card.Title>{data.id}</Card.Title>
              </div>
                <div>SIZE
                <p className="fz-20">REGULAR PIZZA {data.reg}</p>
                <Button id="regular" onClick={() => add(idx,"reg")}>ADD</Button>
                <Button id="regular" onClick={()=> remove(idx,"reg")} >REMOVE</Button>
                <h2>MEDIUM {data.med}</h2>
                <Button id="medium" onClick={() => add(idx,"med")}>ADD</Button>
                <Button id="medium" onClick={()=> remove(idx,"med")} >REMOVE</Button>
                <h2>LARGE {data.lar}</h2>
                <Button id="medium" onClick={() => add(idx,"lar")}>ADD</Button>
                <Button id="medium" onClick={()=> remove(idx,"lar")} >REMOVE</Button>

                </div>
                <div>TOPPINGS
                <h1>RED PEPPER {data.redpep}</h1>
                <Button id="redpep" onClick={() => add(idx,"redpep")}>ADD</Button>
                <Button id="redpep" onClick={()=> remove(idx,"redpep")} >REMOVE</Button>
                <h2>ONIONS {data.onions}</h2>
                <Button id="onions" onClick={() => add(idx,"onions")}>ADD</Button>
                <Button id="onions" onClick={()=> remove(idx,"onions")} >REMOVE</Button>
                <h2>GRILLED MUSHROOM {data.grmush}</h2>
                <Button id="mushroom" onClick={() => add(idx,"grmush")}>ADD</Button>
                <Button id="mushroom" onClick={()=> remove(idx,"grmush")} >REMOVE</Button>
                <h2>EXTRA CHEESE {data.excheese}</h2>
                <Button id="onions" onClick={() => add(idx,"excheese")}>ADD</Button>
                <Button id="onions" onClick={()=> remove(idx,"excheese")} >REMOVE</Button>
                <h2>BLACK OLIVE {data.blolive}</h2>
                <Button id="mushroom" onClick={() => add(idx,"blolive")}>ADD</Button>
                <Button id="mushroom" onClick={()=> remove(idx,"blolive")} >REMOVE</Button>

                </div>
            </Card.Body>
          </Card>)})}
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}


export default Cart