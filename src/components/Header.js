import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button.js'


const Header = ({ title, onAdd, showAdd }) => {
    const Location = useLocation()
    
    return (
        <header className='header'>
            <h1>{title}</h1>
            {Location.pathname === '/' && (<Button color={showAdd ? 'Red' : 'Green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>)}
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.protoTypes = {
    title:PropTypes.string.isRequired,
}

export default Header
