import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styled, {keyframes} from "styled-components";

const kf = keyframes`
50% {
  transform: scale(0.8);
}
100% {
  opacity: 1;
  transform: scale(1);
}
`
const StyledForm = styled.div`

  @media ${prop => prop.theme.breakpointMobile} {
      width: 100%;
    }

  h2 {
    color: ${props => props.theme.black};
  }

      button {
    background-color: ${prop => prop.theme.tertiaryColor};
    &:hover {
      transform: scale(1.1);
    }
  }

//   transition: all .2s ease-in-out;
//   &:hover {
//     background-color: ${pr => pr.theme.secondaryColor};
//     color: ${pr => pr.theme.primaryColor};
`

const PizzaForm = (props) =>{
    const {submit, formValues, change, errors} = props

 const onSubmit = event => {
    event.preventDefault()
    submit()
 }

 const onChange = event => {
    const { name, value, checked, type} = event.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse)
 }
 

    return(
        <>
            <StyledForm className='bottom-container'>
                <div className='build'>
                    <h2>Build Your Own Pizza</h2>
                </div>
                <form onSubmit={onSubmit} id='pizza-form'>
                <div className='formContainer'>
                    
                    <label className='nameContainer'>
                        <div className='name'>
                            <h3>Who is this order for?:</h3>
                        </div>
                        <input id='name-input'
                            type='text'
                            name='name'
                            placeholder='Enter Name'
                            onChange={onChange}
                            value={formValues.name}
                        />

                    </label>

                    <label className='sizeContainer'>
                        <div className='sizeText'>
                            <h3>Pick a size:</h3>
                        </div>
                        <select size={formValues.size} onChange={onChange} value={formValues.size} name='size' id='size-dropdown'>
                            <option className='dropdown'>--Select A Size--</option>
                            <option className='dropdown'>Small</option>
                            <option className='dropdown' value='medium'>Medium</option>
                            <option className='dropdown'>Large</option>
                        </select>
                    </label>

                    <div className='checkContainer'>
                        
                        <div className='checkboxTitle'>
                            <h3>Select your toppings:</h3>
                        </div>
                        
                        <label className='box box1'>Ham
                            <input
                            type='checkbox'
                            name='toppingOne'
                            checked={formValues.toppingOne}
                            onChange={onChange}
                            value={formValues.toppingOne}
                            />
                        </label>
                        <label className='box box2'>Pepperoni
                            <input
                            type='checkbox'
                            name='toppingTwo'
                            checked={formValues.toppingTwo}
                            onChange={onChange}
                            value={formValues.toppingTwo}
                            />
                        </label>
                        <label className='box box3'>Sausage
                            <input
                            type='checkbox'
                            name='toppingThree'
                            checked={formValues.toppingThree}
                            onChange={onChange}
                            value={formValues.toppingThree}
                            />
                        </label>
                        <label className='box box4'>Bacon
                            <input
                            type='checkbox'
                            name='toppingFour'
                            checked={formValues.toppingFour}
                            onChange={onChange}
                            value={formValues.toppingFour}
                            />
                        </label>
                    </div>

                    <label className='specialContainer'>
                        <div className='specialInstructions'>
                            <h3>Special Instructions:</h3>
                        </div>
                    <input id='special-text'
                        type ='text'
                        name='specialInstructions'
                        placeholder='Extra sauce, light cheese etc.'
                        onChange={onChange}
                        value={formValues.specialInstructions}
                    />
                    </label>
                    
                    <div className="error">
                        <p className='error'>{errors.name}</p>
                    </div>

                    <button className='form button' id='order-button'>
                        Submit your order
                    </button>
                </div>
                
                </form>
            </StyledForm>
        </>
    )


}
export default PizzaForm