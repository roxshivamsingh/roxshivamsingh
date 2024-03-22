import React from "react";
import NavBar from "./navbar/navbar";

interface IProps {
    children: React.ReactNode;
}
export function Layout(props: IProps) {

    return (<div>
        <NavBar />
        <main>
            {props.children}
        </main>
    </div>)
}