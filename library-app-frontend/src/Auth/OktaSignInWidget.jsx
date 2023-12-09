import { useEffect, useRef } from "react";
import OktaSignIn from "@okta/okta-signin-widget";
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
import { oktaConfig } from '../lib/oktaConfig';

const OktaSignInWidget = ({ onSuccess, onError }) => {
    const widgetRef = useRef();

    useEffect(() => {

        if (!widgetRef.current) {
            return false;
        }

        const widget = new OktaSignIn(oktaConfig);

        widget.showSignInToGetTokens({
            el: widgetRef.current,
        }).then(onSuccess).catch(onError);

        return () => widget.remove();
    }, [onSuccess, onError]);

    return (
        <div className="container mt-5 mb-5">
            <div className='h4 text-center'>
                <div><span className='text-primary'>Demo Username:</span> test.user@email.com</div>
                <div><span className='text-primary'>Password:</span> librarymember</div>
            </div>
        
            <div ref={widgetRef}></div>
        </div>

    );
};

export default OktaSignInWidget;