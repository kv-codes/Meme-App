import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome to the Meme Generator</h1>
                <h2>Create | Laugh | Enjoy</h2>
                <h3>Click the 'start' to begin, have fun! </h3>
                <button onclick = 'start button' >Start!</button>
            </div>
        )
    }
}

export default Home;