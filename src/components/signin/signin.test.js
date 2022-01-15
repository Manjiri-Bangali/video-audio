import { render } from "@testing-library/react";
import Signin from './signin';

describe("SigninComponent Tests", () => {
    it("Signin renders successfully", () => {
        const signinComponent = render(<Signin/>);
        expect(signinComponent).toMatchSnapshot();
    });
    
});