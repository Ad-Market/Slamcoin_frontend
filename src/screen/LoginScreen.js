import React, { useState } from 'react';
import Header from '../components/Header'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { setSetting } from '../actions/projectSetting'
function LoginScreen(props) {
    const [isDay, setIsDay] = useState(props.projectSetting.isDay)
    const [showPassword, setShowPassword] = useState(false)
    const [showRegisterPassword, setShowRegisterPassword] = useState(false);
    const [showRegisterConfirmPassword, setShowRegisterConfirmPassword] = useState(false);
    const [showRegisterPanel, setShowRegisterPanel] = useState(false);
    const [showError, setShowError] = useState(false);
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");

    const onSetDayStatus = () => {
        let tempDay = isDay
        setIsDay(!tempDay)
        props.setSetting(!tempDay)
    }

    const onSetShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const onSetShowRegisterPassword = () => {
        setShowRegisterPassword(!showRegisterPassword);
    }

    const onSetShowRegisterConfrimPassword = () => {
        setShowRegisterConfirmPassword(!showRegisterConfirmPassword);
    }

    const onSetShowRegisterPanel = () => {
        setShowRegisterPanel(!showRegisterPanel);
    }

    const onChangeNewPassword = (e) => {
        setNewPassword(e.target.value);
    }

    const onChangeConfirmNewPassword = (e) => {
        setConfirmNewPassword(e.target.value);
    }

    const onConfirmNewPasswordBlur = () => {
        if(confirmNewPassword != newPassword) {
            setShowError(true);
        }else{
            setShowError(false);
        }
    }
    return (
        <div className={"LoginComponent " + (!isDay ? "NightMode" : "")}>
            <Header onSetDayStatus={onSetDayStatus} isDay={isDay} />
            <div className="mainContent">
                <div className="Content">
                    <div className="Content1">
                        {!showRegisterPanel ? <div className="LoginContent">
                            <div className="LogoImg">
                                <img src={"./image/Login/logo" + (isDay ? "" : "_night") + ".png"} />
                            </div>
                            <div className="subTitle">Login</div>
                            <div className="subDes">Log in with your data that you entered during your registration.</div>
                            <div className="inputGroup">
                                <div className="label">E-mail</div>
                                <div className="inputText">
                                    <input type="text" placeholder="Enter your email " />
                                </div>
                            </div>
                            <div className="inputGroup">
                                <div className="label">Password</div>
                                <div className="inputText">
                                    <input type={showPassword ? "text" : "password"} placeholder="At least 8 characters" />
                                    <img src="./image/setting/eye.svg" onClick={onSetShowPassword} />
                                </div>
                            </div>
                            <div className="checkGroup">
                                <input type="checkbox" />
                                <div className="checkLabel">Keep me logged in</div>
                            </div>
                            <div className="loginBtn">Log in</div>
                            <div className="loginFooter1">
                                <div className="footerLabel">Don’t have an acoount yet?<a onClick={onSetShowRegisterPanel}>Register</a></div>
                            </div>
                            <div className="loginFooter2">
                                <div className="forgotBtn">Forgot Password?</div>
                            </div>
                        </div> :
                            <div className="RegisterContent">
                                <div className="LogoImg">
                                    <img src={"./image/Login/logo" + (isDay ? "" : "_night") + ".png"} />
                                </div>
                                <div className="subTitle">Registration</div>
                                <div className="subDes">
                                    Type in your email and pasword to get access to <a>Slamwallet</a>
                                </div>
                                <div className="inputText">
                                    <input type="text" placeholder="Your Phone" />
                                </div>
                                <div className="inputText">
                                    <input type="text" placeholder="Your Email*" />
                                </div>
                                <div className="inputText">
                                    <input type={showRegisterPassword ? "text" : "password"} placeholder="Your Password*" value = {newPassword} onChange = {onChangeNewPassword}/>
                                    <img src="./image/setting/eye.svg" onClick={onSetShowRegisterPassword} />
                                </div>
                                <div className="inputText">
                                    <input type={showRegisterConfirmPassword ? "text" : "password"} placeholder="Repeat Your Password*" value = {confirmNewPassword} onChange = {onChangeConfirmNewPassword} onBlur = {onConfirmNewPasswordBlur}/>
                                    <img src="./image/setting/eye.svg" onClick={onSetShowRegisterConfrimPassword} />
                                    {showError ? <div className="errText">Password must be same.</div> : ""}
                                </div>
                                
                                <div className="registerText">Please take a few minutes to read and understand SlamWallet <a>Terms of Service</a>. To continue, you’ll need to accept the Terms of Service by checking the box.</div>
                                <div className="checkGroup">
                                    <input type="checkbox" />
                                    <div className="checkLabel">I accept the SlamNFTs Terms of Service</div>
                                </div>
                                <div className="loginBtn">Register</div>
                                <div className="registerFooter">Already have an account? <a onClick={onSetShowRegisterPanel}>Log in</a></div>
                            </div>}
                    </div>
                    <div className="Content2">
                        <div className="LogoImg">
                            <img src={"./image/Login/logo" + (isDay ? "" : "_night") + ".png"} />
                        </div>
                        <img src={"./image/Login/iPhone 27" + (isDay ? "" : "_night") + ".png"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

LoginScreen.propTypes = {
    projectSetting: PropTypes.object.isRequired,
    setSetting: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    projectSetting: state.projectSetting
})

export default connect(mapStateToProps, { setSetting })(
    LoginScreen
)