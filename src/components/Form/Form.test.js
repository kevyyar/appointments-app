// import everything to create testing
import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import {Form} from "./Form";

describe('Header', () => {
    it('should render header title', () => {
            render(<Form/>)
            const title = screen.getByRole('heading', /Patient Follow-Up/i);
            expect(title).toBeInTheDocument()
        }
    )
})