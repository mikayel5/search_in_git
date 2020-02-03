import React, { useContext } from 'react'
import { AlertContext } from '../context/alert/alerContext'


const Search = () => {
    const { show } = useContext(AlertContext)

    const onSubmit = event => {
        if (event.key === 'Enter') {
            show('This is alert')
        }
    }

    return (
        <div className='form-group'>
            <input
                type='text'
                className='form-control'
                placeholder='write nik User...'
                onKeyPress={onSubmit}
            />
        </div>
    )
}
export default Search