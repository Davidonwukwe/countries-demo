import {render, screen, cleanup} from "@testing-library/react";
import renderer, {act} from "react-test-renderer";
import Main from "../components/main/main"
import  '@testing-library/jest-dom'
import {MockedProvider} from "@apollo/client/testing";
import {GetCountries} from "../GraphQL/GetCountries";

afterEach(() => {
    cleanup();
})

const mocks = [
    {
        request: {
            query: GetCountries
        },
        result: {
            data: {
                countries: [{
                    "name": "Nigeria",
                    "code": "NG",
                    "continent": {
                        "name": "Africa",
                    },
                    "emoji": "🇳🇬",
                }]
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
    test('should render the login form with search input and button', async () => {
            render(
                <MockedProvider mocks={mocks} addTypename={false}>
                    <Main/>
                </MockedProvider>)

        await new Promise((r) => setTimeout(r, 3000));
        const searchButton = screen.getByTestId('searchButton');
        const searchInput = screen.getByTestId('searchInput');

        expect(searchInput).toBeInTheDocument();
    })
})

