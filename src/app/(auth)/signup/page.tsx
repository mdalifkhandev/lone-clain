import React from 'react';

const page = () => {
    return (
        <div>
            <h1>Sign Up</h1>
            <form>
                <label>
                    Email:
                    <input type="email" name="email" required />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" required />
                </label>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default page;