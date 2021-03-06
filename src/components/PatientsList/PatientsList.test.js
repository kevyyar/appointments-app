// import everything to create testing
import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import {PatientsList} from "./PatientsList";

describe('Header', () => {
    it('should render header title', () => {
            render(<PatientsList/>)
            const title = screen.getByRole('heading', /patients list/i);
            expect(title).toBeInTheDocument()
        }
    )
})