import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <haeader>
                    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                        <div>
                            <a href="https://javaguides.net" className='navbar-brand'>Employee Management App</a>
                        </div>
                    </nav>
                </haeader>
            </div>
        );
    }
}

export default HeaderComponent;