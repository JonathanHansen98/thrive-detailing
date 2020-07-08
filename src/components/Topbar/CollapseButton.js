import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

export const CollapseButton = ({ aria, isExpanded, setExpanded }) => {
    const Button = styled.button`
    padding: .25rem .75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: .25rem;
    `
    return (
            <Button onClick={() => {
                setExpanded(!isExpanded)
            }} aria-controls={aria} className='float-right d-lg-none'>
                <FontAwesomeIcon icon={faBars} color='#14ffec' />
            </Button>
    )
}


