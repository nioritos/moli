import { useState, navigate } from 'react';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import '../css/NavBar.css'


function NavBar() {
    const navigate = useNavigate();
    const [search, setSearch] = useState('');

    const onChangeConfig = (e) => {
        setSearch(e.target.value)
    }

    const onSubmitConfig = (e) => {
        e.preventDefault();
        navigate(`/search?q=${search}`)

    }
    return (
        <>
            <header>
                <Link to="/" className='logo'>
                    <BiCameraMovie size={32} />
                    <h1>MoviesLib</h1>
                </Link>
                <form onSubmit={onSubmitConfig} className="search-movie">
                    <input placeholder='search your movie here' type="text" name="" id="" onChange={onChangeConfig}/>
                    <button type='submit'><BiSearchAlt2 size={24} /></button>
                </form>
            </header>
        </>
    )
};

export default NavBar