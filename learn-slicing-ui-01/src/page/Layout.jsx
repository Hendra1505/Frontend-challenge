import img1 from '../assets/asset1.svg';
import './Layout.css';

const Layout = () => {

    return(
        <div className="layout">
            <div className="layout-left">
                <div className="brand">
                    Englighten
                </div>

                <div className="badge">
                    Coming Soon
                </div>
                <h1 class="heading">
                    Get your dancing shoes ready
                </h1>
                <p className="lead">
                We're putting the finishing touches on our website and getting ready to launch. 
                Sign up for updates and be the first to know when we go live.
                </p>

                <form action="" className="invite-form">
                    <input type='text' placeholder='Email address' />
                    <button type='submit'>Invite Me</button>
                </form>

                <p className="form-text">
                    Sign up for updates to be the first to know when we launch.
                    No spam, just important information and exclusive offers.
                </p>
            </div>
            <div className="layout-right">
            </div>

        </div>
    );
};

export default Layout;