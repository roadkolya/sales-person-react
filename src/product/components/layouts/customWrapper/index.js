import React from "react";
import {HeaderSection} from "../../headerSection";
import {HeaderNavigationSection} from "../../headerNavigationSection";
import {FooterSection} from "../../footerSection";
import {InformationModal} from "../../modal/informationModal";
import {useSelector} from "react-redux";

export const CustomWrapper = ({children}) => {

    const state = useSelector(state => state)

    return (
        <>
            <HeaderSection />
            <HeaderNavigationSection />
            {children}
            <FooterSection />
        </>
    );
}