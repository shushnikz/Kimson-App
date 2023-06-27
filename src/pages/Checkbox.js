import React, { useState } from 'react'
import DefaultLayout from '../components/DefaultLayout'
import { RetweetOutlined } from '@ant-design/icons'

function Checkbox() {

    const [checkbox, setCheckBox] = useState([
        {
            id: 1,
            name: 'Apple',
            inStock: 1920,
            check: false
        },
        {
            id: 2,
            name: 'Samsung',
            inStock: 1980,
            check: true
        },
        {
            id: 3,
            name: 'Vivo',
            inStock: 2000,
            check: false
        },
        {
            id: 4,
            name: 'Laptop',
            inStock: 122,
            check: false
        }
    ])

    const handleChangeCheckbox = id => {
        setCheckBox((prev) => {
            return prev.map((item) => {
                if (item.id === id) {
                    return { ...item, check: !item.check }
                } else {
                    return { ...item }
                }
            })
        })
    }

    const renderFilter = () => {
        return checkbox.map((item) => {
            if (item.check) {
                return <span className='option' key={item.id}>{item.name}</span>
            } else {
                return null
            }
        })
    }

    const renderCheckboxes = () => {
        return checkbox.map((item) => (
            <div className='product' key={item.id}>
                <div className='productInput' onClick={() => handleChangeCheckbox(item.id)}>
                    <input type='checkbox' id={item.id} />
                    {item.check && (
                        <>
                            <div className='productInputBefoe'></div>
                            <div className='productInputAfter'>✔</div></>
                    )}

                </div>
                <label htmlFor="apple">
                    {item.name}
                    <span>{item.inStock}</span>
                </label>
            </div>
        ))
    }

    return (
        <div>
            <DefaultLayout>
                <div className='filters'>{renderFilter()}</div>
                <div className='products'>
                    {renderCheckboxes()}
                </div>
            </DefaultLayout>
        </div>
    )
}

export default Checkbox

