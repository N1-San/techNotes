import { Link } from "react-router-dom";

import React from 'react'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Tech Notes</span></h1>
            </header>
            <main className="public__main">
                <p>Create, Assign and Manage Tech Notes for and by trained staff ready to meet your tech repair needs.</p>
                <br/>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>
    )
    return content
}

export default Public
