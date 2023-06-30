import './styles/bookingform.css'
import { useState } from "react";
import restaurant from '../Images/icons_assets/restaurant.jpg'

function BookingForm(props) {

    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [guests, setGuests] = useState('')
    const [occasion, setOccasion] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const [emailError, setEmailError] = useState('Required')
    const [guestsError, setGuestsError] = useState('Required')

    function changeDate(e) {
        setDate(e.target.value)
        props.dispatch({ date: new Date(e.target.value) })
    }

    function changeGuests(e) {
        setGuests(e.target.value)
        if(!e.target.value) {
            setGuestsError('Required')
        } else {
            setGuestsError('Must be 1-10')
        }
    }

    function changeEmail(e) {
        setEmail(e.target.value)
        if(!e.target.value) {
            setEmailError('Required')
        } else {
            setEmailError('Invalid email')
        }
    }

    function handleSubmit(e) {
        const formData = {
            date: date,
            time: time,
            guests: guests,
            occasion: occasion
        }
        e.preventDefault()
        props.submitForm(formData)
    }

    return (
        <div id='bookingform'>
            <div className='flexcontainer'>
                <section>
                    <h1>Reserve a Table</h1>
                    <img src={restaurant} alt='Little Lemon outdoor dining' />
                </section>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="res-date">Choose date</label>
                    <input
                        type="date"
                        id="res-date"
                        className='notfocused'
                        onFocus={() => document.activeElement.className='focused'}
                        aria-label='dateselector'
                        value={date}
                        onChange={changeDate}
                        required
                    />
                    <p data-testid='date-error'>Required</p>
                    <label htmlFor="res-time">Choose time</label>
                    <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} aria-label='timeselector'>
                        {
                            props.availableTimes.times.map(t => {
                                return <option key={t}>{t}</option>
                            })
                        }
                    </select>
                    <label htmlFor="guests">Number of guests</label>
                    <input
                        type="number"
                        className='notfocused'
                        onFocus={() => document.activeElement.className='focused'}
                        placeholder="1"
                        min="1"
                        max="10"
                        id="guests"
                        aria-label='guestsinput'
                        value={guests}
                        onChange={changeGuests}
                        required
                    />
                    <p data-testid='guests-error'>{guestsError}</p>
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} aria-label='occasionselector'>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>Other</option>
                    </select>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        className='notfocused'
                        onFocus={() => document.activeElement.className='focused'}
                        placeholder='Your name'
                        aria-label='nameinput'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <p data-testid='name-error'>Required</p>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        className='notfocused'
                        onFocus={() => document.activeElement.className='focused'}
                        placeholder='Your email'
                        aria-label='emailinput'
                        value={email}
                        onChange={changeEmail}
                        required
                    />
                    <p data-testid='email-error'>{emailError}</p>
                    <button type="submit" aria-label='submit'>Make Reservation</button>
                </form>
            </div>
        </div>
    )
}

export default BookingForm;