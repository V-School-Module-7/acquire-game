import React from 'react';

function chat() {

    <title>Acquire Board Game</title>

    <div class='chat-container'>
        <header class='chat-header'>
            <h1><i class='fas fa-smiler'></i>Acquire</h1>
        </header>

        <main class='chat-main'>
            <div class='chat-sidebar'>
                <h3><i class='fas fa-comments'></i> Room Name:</h3>
                <h2 id='room-name'></h2>
                <h3><i class='fas fa-users'></i> Users</h3>
                <ul id='users'></ul>
            </div>
        </main>

        <div class='chat-form-container'>
            <form id='chat-form'>
                 <input
                     id='msg'
                    type='text'
                    placeholder='Enter Message'
                    required
                    autocomplete='off'
                />
                
                <button class='btn'><i class='fas fa-paper'></i> Send</button>
            </form>
        </div>
    </div>

}

export default chat;