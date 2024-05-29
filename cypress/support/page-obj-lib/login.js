import GenericFuntions from '../genericFunctions/GenericFunctions'
import FixturePath from '../fixtureReader/FixturePath'
import ReadData from '../fixtureReader/ReadData'
import WriteData from '../fixtureReader/WriteData'

export default class Login {

    get email_TXTFLD() { return { locator: "#userEmail" } }
    get password_TXTFLD() { return { locator: "#userPassword" } }
    get login_BTN() { return { locator: "#login" } }
    get register_BTN() { return { locator: "section .btn1" } }


    email_TXTFLD_clear = () => {
        const genericFuntions = new GenericFuntions();
        genericFuntions.get_clear(this.email_TXTFLD.locator)
    }

    email_TXTFLD_type = (value) => {
        const genericFuntions = new GenericFuntions();
        this.email_TXTFLD_clear()
        genericFuntions.get_type(this.email_TXTFLD.locator, value)
    }

    password_TXTFLD_clear = () => {
        const genericFuntions = new GenericFuntions();
        genericFuntions.get_clear(this.password_TXTFLD.locator)
    }

    password_TXTFLD_type = (value) => {
        const genericFuntions = new GenericFuntions();
        this.password_TXTFLD_clear()
        genericFuntions.get_type(this.password_TXTFLD.locator, value)
    }

    login_BTN_click = () => {
        const genericFuntions = new GenericFuntions();
        genericFuntions.get_click(this.login_BTN.locator)
    }

    login = (username, password) => {
        this.email_TXTFLD_type(username)
        this.password_TXTFLD_type(password)
        this.login_BTN_click()
    }

    register_BTN_click = () => {
        const genericFuntions = new GenericFuntions();
        genericFuntions.get_click(this.register_BTN.locator)
    }

    getLoginDataFromRegistration = () => {
        const writeData = new WriteData()
        const readData = new ReadData()
        const fixturePath = new FixturePath()
        readData.readValidDataForLoginUsingReadFile(fixturePath.registrationData.path).then(data => {
            writeData.writeDatatToFile(fixturePath.validLoginData.path, { email: data.email, password: data.password })
        })
    }
}


