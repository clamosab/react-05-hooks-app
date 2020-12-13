import React from 'react'

export const Small = React.memo(({value}) => {

    console.log('Ejecuto small');

    return (
        <small>{value}</small>
    )
})
