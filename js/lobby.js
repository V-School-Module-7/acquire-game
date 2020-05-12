import React from 'react';


function lobby() {

    <div class='join-container'>

        <header class='join-header'>
            <h1><i class='fas fa-smile'></i>Acquire</h1>
        </header>

        <main class='join-main'>
            <form action='chat.js'>

                <div class='form-control'>
                
                    <label for='username'>Username</label>
                    <input
                        type='text'
                        name='username'
                        id='username'
                        placeholder='Enter username...'
                        required
                    />
                </div>

                <div class='form-control'>
                    <label for='room'>Room</label>
                    <select name='room' id='room'>
                        <option value='Lobby'>Lobby</option>
                        <option value='Waiting=Room 1'>Waiting Room 1</option>
                        <option value='Waiting-Room 2'>Waiting Room 2</option>
                        <option value='Team-Chat'>Team Chat</option>
                    </select>
                </div>
                <button type='submit' class='btn'>Join Chat</button>
            </form>
        </main>
    </div>
}

export default lobby;