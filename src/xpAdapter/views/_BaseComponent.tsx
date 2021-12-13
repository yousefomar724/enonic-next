import React from "react";

import { PORTAL_COMPONENT_ATTRIBUTE } from "../enonic-connection-config";

import componentSelector from "../../customXp/componentSelector";
import {PageComponent} from "../../customXp/queries/_getMetaData";



export type BaseComponentProps = {
    component: PageComponent,

    content?: any;                  // Content is passed down for optional consumption in componentviews.
    // TODO: pass more than content? Meta? Headers?
    // TODO: Use a react contextprovider instead of "manually" passing everything down
}

const BaseComponent = ({component, content}: BaseComponentProps) => {
    const {type} = component;
    const cmpAttrs: { [key: string]: string } = {
        [PORTAL_COMPONENT_ATTRIBUTE]: type
    };

    // @ts-ignore
    const ComponentView: React = componentSelector[type]?.view || <p>I am a {type}</p>;

    return (
        <div {...cmpAttrs}>
            <ComponentView component={component[component.type]} content={content}/>
        </div>
    )
}
export default BaseComponent;