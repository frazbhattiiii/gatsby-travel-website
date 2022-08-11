import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';

export const Button = styled(Link)`
    background-color:${({primary}) => (primary ? '#F26A2E' : 'blueviolet')};
    white-space: nowrap;
        cursor: pointer;
    padding:${({big}) => big ? '1rem 2.5rem' : '0.75rem 2rem'};
    color:#fff;
    font-size:${({big}) => big ? '1.25rem' : '1rem'};
    outline:none;
    border:none;
    min-width:6rem;
    text-decoration:none;
    transition:0.3s !important;
    border-radius:${({round}) => round ? '3.125rem' : 'none'};
    &:hover{
        background:${({primary}) => primary ? 'blueviolet' :  '#F26A2E'};
        transform: translateY(-0.125);
        }
        `