import React from 'react';

import BodyWrapper from '../components/BodyWrapper';
import PopupForm from './PopupForm';
import PopupHeader from './Header';

const Popup = (): JSX.Element => {
    return (
        <BodyWrapper>
            <div>
                <PopupHeader />
                <PopupForm defaultDomainId="1" />
            </div>
        </BodyWrapper>
    );
};

export default Popup;
