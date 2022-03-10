import  { useState, useEffect, useCallback } from 'react';
import {Modal,Button,Card,Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cart.css';

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
      {props.items?(
              <Modal show={props.show} fullscreen={true} onHide={props.onCancel} centered={true}>
              <Modal.Header closeButton>
                <Modal.Title>MY PIZZA CART</Modal.Title>
              </Modal.Header>
              
              <Modal.Body className="bgg">
              <Row xs={1} md={2} className="g-4 justify-content-around">
              { arr.map((data,idx)=>{
                return(
                
                <Card border="dark" className="mx-2 shadow-lg" style={{ width: '18rem' }} key={data.id}>
                  <Card.Body>
                    <div className='bg-warning rounded pt-2 pb-2'>
                    <Card.Title className='text-light '><b>{data.id}</b></Card.Title>
                    </div>
                    <hr/>
                      <div><h6><i>AVAILAIBLE SIZE IF ANY</i></h6>
      
                        {data.reg?(<div className='border rounded py-2 px-1'>                
                          <span>REGULAR PIZZA {data.reg}</span>
                          <span style={{float:'right'}}>
                           <Button id="regular" className='mx-2 pt-0 pb-0' variant="outline-success" size='sm' onClick={() => add(idx,"reg")}><b>+</b></Button>
                           <Button id="regular" className='mx-2 pt-0 pb-0' variant="outline-danger" size='sm' onClick={()=> remove(idx,"reg")} ><b>-</b></Button>
                           </span>
                          </div>):(<div></div>)}
      
                          {data.med?(<div className='border rounded py-2 px-1'> 
                            <span>MEDIUM {data.med}</span>
                            <span style={{float:'right'}}>
                            <Button id="medium" className='mx-2 pt-0 pb-0' variant="outline-success" size='sm' onClick={() => add(idx,"med")}><b>+</b></Button>
                            <Button id="medium" className='mx-2 pt-0 pb-0' variant="outline-danger" size='sm' onClick={()=> remove(idx,"med")} ><b>-</b></Button>
                            </span>
                            </div>):(<div></div>)}
      
                          {data.lar?(<div className='border rounded py-2 px-1'>
                            <span>LARGE {data.lar}</span>
                            <span style={{float:'right'}}>
                            <Button id="medium" className='mx-2 pt-0 pb-0' variant="outline-success" size='sm' onClick={() => add(idx,"lar")}><b>+</b></Button>
                            <Button id="medium" className='mx-2 pt-0 pb-0' variant="outline-danger" size='sm' onClick={()=> remove(idx,"lar")} ><b>-</b></Button>
                            </span>
                          </div>):(<div></div>)}
                      </div>
                      <hr/>
                      <div><h6><i>TOPPINGS AVAILAIBLE IF ANY</i></h6>
                      {data.redpep?(<div className='border rounded py-2 px-1'>
                      <span>RED PEPPER {data.redpep}</span>
                      <span style={{float:'right'}}>
                      <Button id="redpep" className='mx-2 pt-0 pb-0' variant="outline-success" size='sm' onClick={() => add(idx,"redpep")}><b>+</b></Button>
                      <Button id="redpep" className='mx-2 pt-0 pb-0' variant="outline-danger" size='sm' onClick={()=> remove(idx,"redpep")} ><b>-</b></Button>
                      </span>
                      </div>):(<div></div>)}
      
                      {data.onions?(<div className='border rounded py-2 px-1'> 
                      <span>ONIONS {data.onions}</span>
                      <span style={{float:'right'}}>
                      <Button id="onions" className='mx-2 pt-0 pb-0' variant="outline-success" size='sm' onClick={() => add(idx,"onions")}><b>+</b></Button>
                      <Button id="onions" className='mx-2 pt-0 pb-0' variant="outline-danger" size='sm' onClick={()=> remove(idx,"onions")} ><b>-</b></Button>
                      </span>
                      </div>):(<div></div>)}
      
                      {data.grmush?(<div className='border rounded py-2 px-1'> 
                      <span>GRILLED MUSHROOM {data.grmush}</span>
                      <span style={{float:'right'}}>
                      <Button id="mushroom" className='mx-2 pt-0 pb-0' variant="outline-success" size='sm' onClick={() => add(idx,"grmush")}><b>+</b></Button>
                      <Button id="mushroom" className='mx-2 pt-0 pb-0' variant="outline-danger" size='sm' onClick={()=> remove(idx,"grmush")} ><b>-</b></Button>
                      </span>
                      </div>):(<div></div>)}
      
                      {data.excheese?(<div className='border rounded py-2 px-1'> 
                      <span>EXTRA CHEESE {data.excheese}</span>
                      <span style={{float:'right'}}>
                      <Button id="onions" className='mx-2 pt-0 pb-0' variant="outline-success" size='sm' onClick={() => add(idx,"excheese")}><b>+</b></Button>
                      <Button id="onions" className='mx-2 pt-0 pb-0' variant="outline-danger" size='sm' onClick={()=> remove(idx,"excheese")} ><b>-</b></Button>
                      </span>
                      </div>):(<div></div>)}
      
                      {data.blolive?(<div className='border rounded py-2 px-1'> 
                        <span>BLACK OLIVE {data.blolive}</span>
                      <span style={{float:'right'}}>
                      <Button id="mushroom" className='mx-2 pt-0 pb-0' variant="outline-success" size='sm' onClick={() => add(idx,"blolive")}><b>+</b></Button>
                      <Button id="mushroom" className='mx-2 pt-0 pb-0' variant="outline-danger" size='sm' onClick={()=> remove(idx,"blolive")} ><b>-</b></Button>
                      </span>
                      </div>):(<div></div>)}
                      </div>
                  </Card.Body>
                </Card>)})}
                </Row>
              </Modal.Body>
            </Modal>
      ):(<h1>NO ITEMS IN CART</h1>)}

    </>
  );
}


export default Cart