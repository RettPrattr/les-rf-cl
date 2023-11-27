import React from 'react';
import { Context } from '../context/Context';

export default function Layout({children}) {

        return (
            <Context>
                <main>
                    {children}
                </main>
            </Context>
        )
}