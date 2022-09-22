export type Country = {
    name: string;
    code: string;
    emoji: string;
    emojiU: string;
    continent: { name: string };
};
export type CountryProps = {
    filteredData: Country[];
    searchActive: boolean;
}
