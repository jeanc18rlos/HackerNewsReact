import React from 'react';

const Search = ({
    value,
    onChange,
    onSubmit,
    children
    }) =><form className="searchForNews" onSubmit={onSubmit}>
    <input
    style={{width: '90%', border: 'none', fontWeight: 700, background: '#191919', color: '#00f900'}} 
    type="text"
    value={value}
    onChange={onChange}
    />
    <button style={{textAlign: 'center',width:"10%", background: '#0aff00', border: 'none', borderRadius: 5, padding: '1% 2%'}} type="submit">
    {children}
    </button>
    </form>
export default Search;