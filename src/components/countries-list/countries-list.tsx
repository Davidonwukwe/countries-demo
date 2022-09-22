import React from "react";
import {Country, CountryProps} from "../../interfaces/MainInterface";

const CountriesList = ({filteredData, searchActive} : CountryProps) => {

    return (
        <div>
            {(!!filteredData.length) && (
                <div data-testid="countryResult">
                    {filteredData.map((country: Country, index: number) => (
                        <div key={index} className="my-3">
                            <div key={index}><span className="emoji" role="img">{country.emoji}</span> <span data-testid="countryName">{country.name}</span> </div>
                            <div>Continent: {country.continent.name}</div>
                            <button className="btn btn-sm btn-primary"> See Details</button>
                        </div>
                    ))}
                </div>
            )}
            {(searchActive && !filteredData.length) && <div className="mt-2"> No result found</div>}
        </div>
    );

}
export default CountriesList;
