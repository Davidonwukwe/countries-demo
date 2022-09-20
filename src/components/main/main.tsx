import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GetCountries } from "../../GraphQL/GetCountries";
import styled from "styled-components";

type Country = {
    name: string;
    code: string;
    emoji: string;
    emojiU: string;
    continent: { name: string };
};
const Container = styled.div`
  display: flex;
  justify-content: center;
  .container {
    width: 500px;
  }
  ul {
    list-style: none;
  }
  .emoji {
    font-family: 'NotoColorEmojiLimited', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol';
  }
  .searchInput {
    input {
      width: 82.5%;
    }
    button {
      height: 38px;
    }
    
  }
`;

const Main = () => {
    const [country, setCountry] = useState("US");
    const [searchValue, setSearchValue] = useState("");
    const [searchActive, setSearchActive] = useState(false);
    const [filteredData, setFilteredData] = useState<Country[]>([]);
    const { error, loading, data } = useQuery(GetCountries);

    useEffect(() => {

    }, [data]);
    const filterCountries = () => {
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
                <>

                        <div className="form-group mt-2">
                            <label htmlFor="searchInput">Keyword</label>
                            <div className="d-flex justify-content-between searchInput">
                                <input
                                    type="search"
                                    onChange={(event) => setSearchValue(event.target.value)}
                                    className="form-control searchInput mr-2"
                                    id="searchInput"
                                    aria-describedby="emailHelp"
                                    placeholder="search keyword"
                                />
                                <button
                                    onClick={() => filterCountries()}
                                    className="btn btn-primary ml-1"
                                >
                                    Search
                                </button>
                            </div>


                        </div>

                        {(searchActive && !!filteredData.length) && (
                            <>
                                {filteredData.map((country, index) => (
                                    <div className="my-3">
                                        <div key={index}><span className="emoji" role="img">{country.emoji}</span> {country.name}</div>
                                        <div>Continent: {country.continent.name}</div>
                                        <button className="btn btn-sm btn-primary"> See Details</button>
                                    </div>
                                ))}
                            </>
                        )}
                        {(searchActive && !filteredData.length) && <div className="mt-2"> No result found</div>}
                </> }
            </div>

    </Container>
    );
};


export default Main;
