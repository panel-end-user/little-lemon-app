import { render, screen, fireEvent } from '@testing-library/react'
import BookingForm from '../BookingForm.js'

const availableTimes = { times: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'] }
const dispatch = jest.fn()
const submitForm = jest.fn()

describe('tests of BookingForm', () => {
    test('Renders the BookingForm Occasion label', () => {
        render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />)

        const labelElement = screen.getByText('Occasion')
        expect(labelElement).toBeInTheDocument()
    })

    test('date validation left empty', () => {
        render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />)

        const dateInput = screen.getByLabelText(/Choose date/)
        fireEvent.change(dateInput, { target: { value: '' } })

        const validationElement = screen.getByTestId('date-error')
        expect(validationElement).toBeVisible()
    })

    test('date validation valid input', () => {
        render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />)

        const dateInput = screen.getByLabelText(/Choose date/)
        fireEvent.change(dateInput, { target: { value: '2023-06-29' } })

        expect(dateInput).not.toBeInvalid()
    })

    test('guests validation left empty', () => {
        render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />)

        const guestsInput = screen.getByLabelText(/Number of guests/)
        fireEvent.change(guestsInput, { target: { value: '' } })

        const validationElement = screen.getByTestId('guests-error')
        expect(validationElement).toBeVisible()
    })

    test('guests validation invalid input', () => {
        render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />)

        const guestsInput = screen.getByLabelText(/Number of guests/)
        fireEvent.change(guestsInput, { target: { value: '0' } })

        const validationElement = screen.getByTestId('guests-error')
        expect(validationElement).toBeVisible()
    })

    test('guests validation valid input', () => {
        render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />)

        const guestsInput = screen.getByLabelText(/Number of guests/)
        fireEvent.change(guestsInput, { target: { value: '2' } })

        expect(guestsInput).not.toBeInvalid()
    })

    test('name validation left empty', () => {
        render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />)

        const nameInput = screen.getByLabelText(/Name/)
        fireEvent.change(nameInput, { target: { value: '' } })

        const validationElement = screen.getByTestId('name-error')
        expect(validationElement).toBeVisible()
    })

    test('name validation valid input', () => {
        render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />)

        const nameInput = screen.getByLabelText(/Name/)
        fireEvent.change(nameInput, { target: { value: 'testname' } })

        expect(nameInput).not.toBeInvalid()
    })

    test('email validation left empty', () => {
        render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />)

        const emailInput = screen.getByLabelText(/Email/)
        fireEvent.change(emailInput, { target: { value: '' } })

        const validationElement = screen.getByTestId('email-error')
        expect(validationElement).toBeVisible()
    })

    test('email validation invalid input', () => {
        render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />)

        const emailInput = screen.getByLabelText(/Email/)
        fireEvent.change(emailInput, { target: { value: 'testemail' } })

        const validationElement = screen.getByTestId('email-error')
        expect(validationElement).toBeVisible()
    })

    test('email validation valid input', () => {
        render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />)

        const emailInput = screen.getByLabelText(/Email/)
        fireEvent.change(emailInput, { target: { value: 'testemail@mail.com' } })

        expect(emailInput).not.toBeInvalid()
    })
})