import React from 'react'
import { Link } from 'react-router-dom'



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
            <div className="error">
                <p>{errors.name}</p>
            </div>
            <form onSubmit={onSubmit} id='pizza-form'>
            <div className='formContainer'>
                
                <label>
                    <div className='name'>
                        Please enter order name: 
                    </div>
                    <input id='name-input'
                        type='text'
                        name='name'
                        placeholder='Enter Name'
                        onChange={onChange}
                        value={formValues.name}
                    />

                </label>

                <label className='size'>
                    <div className='sizeText'>
                        Pick a size, any size
                    </div>
                    <select size={formValues.size} onChange={onChange} name='size' id='size-dropdown'>
                        <option className='dropdown'>--Select A Size--</option>
                        <option className='dropdown'>Small</option>
                        <option className='dropdown' value='medium'>Medium</option>
                        <option className='dropdown'>Large</option>
                    </select>
                </label>

                <div className='checkboxTitle'>
                    Select your toppings
                </div>
                <div className='checkContainer'>
                    
                    <label className='box box1'>Cheese
                        <input
                        type='checkbox'
                        name='toppingOne'
                        value={formValues.toppingOne}
                        onChange={onChange}
                        />
                    </label>
                    <label className='box box2'>Pepperoni
                        <input
                        type='checkbox'
                        name='toppingTwo'
                        onChange={onChange}
                        value={formValues.toppingTwo}
                        />
                    </label>
                    <label className='box box3'>Sausage
                        <input
                        type='checkbox'
                        name='toppingThree'
                        onChange={onChange}
                        value={formValues.toppingThree}
                        />
                    </label>
                    <label className='box box4'>Bacon
                        <input
                        type='checkbox'
                        name='toppingFour'
                        onChange={onChange}
                        value={formValues.toppingFour}
                        />
                    </label>
                </div>

                <label>
                    <div className='specialInstructions'>
                        Special Instructions:
                    </div>
                <input id='special-text'
                    type ='text'
                    name='specialInstructions'
                    placeholder='Extra sauce, light cheese etc.'
                    onChange={onChange}
                    value={formValues.specialInstructions}
                />
                </label>
                
                <button className='formButton' id='order-button'>
                    Submit your order
                </button>
            </div>
            </form>
        </>
    )


}
export default PizzaForm