// import everything to create testing
import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import {Header} from "./Header";

describe('Header', () => {
    it('should render header title', () => {
            render(<Header/>)
            const title = screen.getByRole('heading', /patient follow-up veterinary/i);
            expect(title).toBeInTheDocument()
        }
    )
})