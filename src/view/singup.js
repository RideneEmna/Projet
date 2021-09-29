import React from 'react'
import { useForm } from "react-hook-form";
import { Col, Row, Container, Form ,Button} from 'react-bootstrap';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {signup} from '../redux/slice'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

const schema = yup.object().shape({
    firstName: yup.string().required().min(2),
    LastName:yup.string().required().min(2),
    Age: yup.number().positive().integer().required().min(18),
    Email:yup.string().required().email(),
   Password:yup.string().required()
  });

function Singup() {

     const dispatch = useDispatch()
     const history=useHistory()
   
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema)});
    
    console.log(watch("example")); // watch input value by passing the name of it

    const onSubmit=data => {
        const value={
            email:data.Email,password:data.Password,age:data.Age,firsName:data.firsName,lastName:data.LastName,gendre:data.gender
        } 
        dispatch(signup(value));
        history.push('/profile');

    }

    return (
        <Container>
            <Row>
                <Col sm='10' md='8' lg='6' className='mx-auto'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>First Name</Form.Label>
                            <input className='form-control'  {...register("firstName", {required:true,maxLength:20})} />
                            {/* errors will return when field validation fails  */}
                            {/* {errors.firstName?.type === 'required' && <span className='text-danger'>This field is required</span>}   */}
                            {/* {errors.firstName?.type === 'maxLength' && <span className='text-danger'>This field is must max length less then 20</span>} */}
                            <p>{errors.firstName?.message}</p>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Last Name</Form.Label>
                            <input className='form-control' {...register("LastName", {required:true, pattern: /^[A-Za-z]+$/i })} />
                            {/* errors will return when field validation fails  */}
                            <span className='text-danger'>{errors.LastName?.message}</span> 
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Age</Form.Label>
                            <input type='number' defaultValue={18} className='form-control'  {...register("Age", {required:true, min:18,max:99 })} />
                            {/* errors will return when field validation fails  */}
                             <span className='text-danger'> {errors.Age?.message}</span>  
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>E-mail</Form.Label>
                            <input className='form-control'  {...register("Email", {required:true})} />
                            {/* errors will return when field validation fails  */}
                            <span className='text-danger'>{errors.Email?.message}</span> 
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Password</Form.Label>
                            <input type='passWord' className='form-control'  {...register("Password", {required:true})} />
                            {/* errors will return when field validation fails  */}
                            <span className='text-danger'>{errors.Password?.message}</span>  
                        </Form.Group>



                        {/* register your input into the hook by invoking the "register" function */}
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Gender</Form.Label>
                            <Form.Select {...register("gender")}>
                                <option value="female">female</option>
                                <option value="male">male</option>
                                <option value="other">other</option>
                            </Form.Select>
                            {/* <input className='form-control' defaultValue="test" {...register("FirstName", {required:true})} />
                            {/* errors will return when field validation fails  */}
                            {/* {errors.FirstName && <span>This field is required</span>}   */}
                        </Form.Group>


                        <Button variant="primary" type="submit" >Save  </Button>
                    </form>
                </Col>

            </Row>

        </Container>


    )
}

export default Singup