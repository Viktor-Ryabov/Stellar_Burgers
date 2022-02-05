import React from 'react';
import { getIconColor, TIconProps } from './utils';

export const MoneyIcon = ({ type }: TIconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill={getIconColor(type)}
        >
            <path d="M11.3849 3.65561C11.5818 3.18895 11.0397 2.75899 10.6301 3.05689L2.41184 9.03382C2.15309 9.222 2.00001 9.52262 2.00001 9.84256V14.4828C2.00001 14.6932 2.13171 14.8811 2.32948 14.9529L5.15637 15.9785C5.65685 16.1601 6.21185 15.9177 6.41879 15.4271L11.3849 3.65561Z" fill="#F2F2F3"/>
            <path d="M2.62116 16.9076C2.32217 16.7916 2.00001 17.0122 2 17.3329V17.3329C2 17.4889 2.07968 17.634 2.21127 17.7178L11.2307 23.4574C11.3326 23.5223 11.4408 23.3844 11.3536 23.3008L6.22556 18.3879C6.13043 18.2968 6.01823 18.2254 5.89541 18.1777L2.62116 16.9076Z" fill="#F2F2F3"/>
            <path d="M14.6465 23.3008C14.5592 23.3844 14.6674 23.5223 14.7693 23.4574L23.7887 17.7178C23.9203 17.634 24 17.4889 24 17.3329V17.3329C24 17.0122 23.6778 16.7916 23.3788 16.9076L20.1046 18.1777C19.9818 18.2254 19.8696 18.2968 19.7745 18.3879L14.6465 23.3008Z" fill="#F2F2F3"/>
            <path d="M23.6705 14.9529C23.8683 14.8811 24 14.6932 24 14.4828V9.84256C24 9.52262 23.8469 9.222 23.5882 9.03382L15.3699 3.05689C14.9603 2.75899 14.4183 3.18895 14.6151 3.65561L19.5812 15.4271C19.7882 15.9177 20.3432 16.1601 20.8436 15.9785L23.6705 14.9529Z" fill="#F2F2F3"/>
            <path d="M13.7142 21.9615C13.3221 22.3616 12.6779 22.3616 12.2858 21.9615L8.10635 17.6968C7.83068 17.4155 7.7458 16.9986 7.88954 16.6319L12.069 5.97004C12.4009 5.12332 13.5991 5.12333 13.931 5.97004L18.1105 16.6319C18.2542 16.9986 18.1693 17.4155 17.8937 17.6968L13.7142 21.9615Z" fill="#F2F2F3"/>
        </svg>
    );
};