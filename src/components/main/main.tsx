import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GetCountries } from "../../GraphQL/GetCountries";
import {Country} from "../../interfaces/MainInterface";
import {Container} from "../styles/styles";
import CountriesList from "../countries-list/countries-list";


const Main = () => {
    const [searchValue, setSearchValue] = useState("");
    const [searchActive, setSearchActive] = useState(false);
    const [filteredData, setFilteredData] = useState<Country []>([]);
    const { loading, data } = useQuery(GetCountries);

    useEffect(() => {
    }, [data, filteredData]);

    const filterCountries = async (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        const filteredCountries = data.countries.filter((country: Country) =>
            country.name.toLowerCase().includes(searchValue)
        );
        setFilteredData(filteredCountries);
        setSearchActive(true);
    };

    return (
        <Container>
            <div className={"container"}>
                <h3 data-testid="title" className="text-center my-1">Countries Catalog</h3>
            {loading ? <div className="spinner-border my-3 d-flex mx-auto" role="status">
                <span className="visually-hidden">Loading...</span>
            </div> :
                <form>
                        <div className="form-group mt-2">
                            <label htmlFor="searchInput">Keyword</label>
                            <div className="d-flex justify-content-between searchInput">
                                <input
                                    type="search"
                                    onChange={(event) => setSearchValue(event.target.value)}
                                    className="form-control searchInput mr-2"
                                    id="searchInput"
                                    data-testid="searchInput"
                                    aria-describedby="emailHelp"
                                    placeholder="search keyword"
                                />
                                <button
                                    onClick={(event) => filterCountries(event)}
                                    type="submit"
                                    className="btn btn-primary ml-1"
                                    data-testid="searchButton"
                                    disabled={!searchValue}
                                >
                                    Search
                                </button>
                            </div>


                        </div>

                        <CountriesList filteredData={filteredData} searchActive={searchActive}/>
                </form> }
            </div>

    </Container>
    );
};


export default Main;
