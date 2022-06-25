import PropsType from "prop-types";
import React from "react";
import { ListItem } from "../ListItem";

export class ContactList extends React.Component { 
    static protoType = {
    contacts: PropsType.arrayOf(PropsType.shape({
            id: PropsType.string.isRequired,
            name: PropsType.string.isRequired,
            number: PropsType.string.isRequired
        }
    )),
    onClick: PropsType.func.isRequired
    };
    
    render() { 
        const { contacts, onClick } = this.props;
        return (
            <ul>
                {
                    contacts.map(({ id, name, number }) => 
                        <ListItem onClick={onClick} key={id} id={id} name={name} number={number} />
                    )
                }
            </ul>
        );
    };
};