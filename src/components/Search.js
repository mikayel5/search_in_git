import React, { useContext, useState } from 'react'
import { AlertContext } from '../context/alert/alerContext'


const Search = () => {
    const [value, setValue] = useState('')
    const { show } = useContext(AlertContext)

    const onSubmit = event => {
        if (event.key !== 'Enter') {
            return
        }
        if (value.trim()) {
            console.log('make request with', value)
        }
        else {
            show('Write some one')
        }

    }

    return (
        <div className='form-group'>
            <input
                type='text'
                className='form-control'
                placeholder='write nik User...'
                value={value}
                onChange={event => setValue(event.target.value)}
                onKeyPress={onSubmit}
            />
        </div>
    )
}
export default Search