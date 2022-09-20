import {render, screen, cleanup} from "@testing-library/react";
import renderer from "react-test-renderer";
import Main from "../main/main"
import  '@testing-library/jest-dom'
import {MockedProvider} from "@apollo/client/testing";
import {GetCountries} from "../../GraphQL/GetCountries";

afterEach(() => {
    cleanup();
})
const mocks = [
    {
        request: {
            query: GetCountries,
            variables: {
                name: "Nigeria"
            }
        },
        result: {
            data: {
                country: { name: "Nigeria"}
            }
        }
    }
];
describe('test the Main page component', () => {
    test('should render main component', () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Main/>
            </MockedProvider>)
        const titleElement =  screen.getByTestId('title');
        expect(titleElement).toBeInTheDocument();
    })
    test('should render the login form with search button', () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Main/>
            </MockedProvider>)
        const button =  screen.getByTestId('button');
        expect(button).toBeInTheDocument();
    })
})

