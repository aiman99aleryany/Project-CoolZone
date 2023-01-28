import React from 'react';
import Welcome from '../components/welcome/Welcome';
import NavBar from '../components/navbar/NavBar';
import Footer from '../components/footer/Footer';

function Home() {
    return (
        <>
            <header>
                <NavBar />
            </header>

            <main>
                <Welcome />
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default Home;
