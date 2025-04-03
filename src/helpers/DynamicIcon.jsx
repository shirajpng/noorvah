import React from "react";
import * as Icons from "react-icons/fa";

const DynamicIcon = ({ icon, ...props }) => {
    const iconNames = Object.keys(Icons); // Get all icon names

    const filteredIcon = iconNames.filter(name => 
        name.toLowerCase().includes(icon.toLowerCase())
    );
    const IconComponent = filteredIcon ? Icons[filteredIcon] : null;
    console.log(IconComponent)
    return <IconComponent  {...props} />
};
export default DynamicIcon;