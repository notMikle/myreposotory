import React from 'react';
import { IconType } from 'react-icons';
import styled from 'styled-components';

type PropsType = {
    icon: IconType | string;
    size?: string;
    color?: string;
};

export const Icon: React.FC<PropsType> = ({ icon, size, color,  }) => {
    const IconComponent = styled(icon)`
      margin: 0 auto;
      height: ${size};
      width: ${size};
      color: ${color};
      
    `

    return (
            <IconComponent />
    );
};