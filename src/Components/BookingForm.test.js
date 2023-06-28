import { render, screen } from '@testing-library/react'
import BookingForm from './BookingForm.js'

test('Renders the BookingForm Occasion label', () => {
    const availableTimes = { times: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'] }
    const dispatch = jest.fn()
    render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />)
    const labelElement = screen.getByText("Occasion")
    expect(labelElement).toBeInTheDocument()
})