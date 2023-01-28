// Use this route to test your components and see how they look.
import React from 'react';
import NavBar from '../components/navbar/NavBar';
import Welcome from '../components/welcome/Welcome';
import Footer from '../components/footer/Footer';
import Example from '../components/example/Example';

function Test() {
    return (
        <div>
            <header>
                <NavBar />
            </header>

            <main>
                <Welcome />
                <Example />
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Test;
