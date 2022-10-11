import { priority } from './../../api/fake.api/priority';
import { users } from './../../api/fake.api/mockedUsers';
export const ForgotPass = {
    headingForm: [
        {
            h2: "Forgot password?",
            h3: "Enter your email from registered account",
        },
    ],
    arrInput: [
        {
            id: 1,
            title: "email:",
            type: "email",
            placeholder: "Email address",
            selectedArr: [null],
        },
    ],
    submitButton: "Send",

    formHelp: { p: "Don’t have an account?", a: "Sign up" },
};

export const Login = {
    headingForm: [
        { h2: "Log In to Dashboard Kit", h3: "Enter your email and password" },
    ],
    arrInput: [
        {
            id: 1,
            title: "email",
            type: "email",
            placeholder: "Email address",
            selectedArr: [null],
        },
        {
            id: 2,
            title: "Event Title:",
            type: "password",
            placeholder: "Password",
            selectedArr: [null],
        },
    ],
    submitButton: "Log In",

    formHelp: { p: "Forgot password?", a: "Reestablish" },
};

export const ResetPassword = {
    headingForm: [
        {
            h2: "Reset Password",
            h3: "Enter new password",
        },
    ],
    arrInput: [
        {
            id: 1,
            title: "new password",
            type: "password",
            placeholder: "Password",
            selectedArr: [null],
        },
        {
            id: 2,
            title: "confirm new password",
            type: "password",
            placeholder: "Password",
            selectedArr: [null],
        },
    ],
    submitButton: "Send",

    formHelp: { p: "Don’t have an account?", a: "Sign up" },
};

export const SignUp = {
    headingForm: [
        {
            h2: "Sign Up",
            h3: "Create a new account",
        },
    ],
    arrInput: [
        {
            id: 1,
            title: "email",
            type: "email",
            placeholder: "Email address",
            selectedArr: [null],
        },
        {
            id: 2,
            title: "First name",
            type: "text",
            placeholder: "First name",
            selectedArr: [null],
        },
        {
            id: 3,
            title: "LAST name",
            type: "text",
            placeholder: "Last name",
            selectedArr: [null],
        },
        {
            id: 4,
            title: "new password",
            type: "password",
            placeholder: "Password",
            selectedArr: [null],
        },
        {
            id: 5,
            title: "confirm new password",
            type: "password",
            placeholder: "Password",
            selectedArr: [null],
        },
    ],
    submitButton: "Register",

    formHelp: { p: null, a: null },
};

export const SuccesScreen = {
    headingForm: [
        {
            h2: "Forgot password?",
            h3: "Link to change your password has been sent to provided email if we have it inside our system",
        },
    ],
    arrInput: [],
    submitButton: "Back to Login",
    formHelp: { p: null, a: null },
};

export const ModalEdit = {
    headingForm: [
        {
            h2: "EDIT | DELETE USER ",
            h3: "Enter your email from registered account",
        },
    ],
    arrInput: [
        {
            id: 1,
            title: "Name",
            type: "text",
            placeholder: "",
            selectedArr: [null],

        },
        // {
        //     _id: "1",
        //     name: "A Mandeep Walton",
        //     email: "skdfjsd.ds@gmail.com",
        //     address: "Unit 1, Moons Park, Burnt Meadow Road, Moons Moat North Industrial Estate,B98 9PA",
        //     created: "May 26, 2019",
        //     image: "https://picsum.photos/id/1/200/300",
        //     priority: priority.high,
        //     rate: 2.5
        // },
        {
            id: 2,
            title: "Email",
            type: "email",
            placeholder: "",
            selectedArr: [null],
        },
        {
            id: 3,
            title: "Address",
            type: "text",
            placeholder: "",
            selectedArr: [null],
        },
        {
            id: 4,
            title: "date",
            type: "date",
            placeholder: "",
            selectedArr: [null],
        },
        {
            id: 5,
            title: "Prority",
            type: "select",
            placeholder: "",
            selectedArr: [priority.high, priority.normal, priority.low],
        },
    ],
    submitButton: [null],
    formHelp: { p: "Don’t have an account?", a: "Sign up" },
};

export const ModalAdd = {
    headingForm: [
        {
            h2: "ADD USER ",
            h3: "Enter your email from registered account",
        },
    ],
    arrInput: [
        {
            id: 1,
            title: "Name",
            type: "text",
            placeholder: "",
            selectedArr: [null],

        },
        // {
        //     _id: "1",
        //     name: "A Mandeep Walton",
        //     email: "skdfjsd.ds@gmail.com",
        //     address: "Unit 1, Moons Park, Burnt Meadow Road, Moons Moat North Industrial Estate,B98 9PA",
        //     created: "May 26, 2019",
        //     image: "https://picsum.photos/id/1/200/300",
        //     priority: priority.high,
        //     rate: 2.5
        // },
        {
            id: 2,
            title: "Email",
            type: "email",
            placeholder: "",
            selectedArr: [null],
        },
        {
            id: 3,
            title: "Address",
            type: "text",
            placeholder: "",
            selectedArr: [null],
        },
        {
            id: 4,
            title: "date",
            type: "date",
            placeholder: "",
            selectedArr: [null],
        },
        {
            id: 5,
            title: "Prority",
            type: "select",
            placeholder: "",
            selectedArr: [priority.high, priority.normal, priority.low],
        },
    ],
    submitButton: [null],
    formHelp: { p: "Don’t have an account?", a: "Sign up" },
};