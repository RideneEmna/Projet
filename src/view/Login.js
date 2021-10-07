import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { changeAuth } from '../redux/slice';
import Page1 from '../component/page1';


function Login() {
    const dispatch = useDispatch()

    const auth = useSelector(state => state.auth)
    return (
        <div  className="container" >
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                {!auth && <button className='btn btn-primary' onClick={() => dispatch(changeAuth(!auth))}>Login  </button>}
            </form>
        </div>
    )
}

export default Login