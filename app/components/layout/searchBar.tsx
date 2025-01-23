// searchBar

export default function SearchBar() {
    return (
        <div className="w-full flex items-center bg-yellow-200">
            <input
                type="text"
                placeholder="Suche..."
                className="flex-grow p-sm bg-bg-light2nd dark:bg-bg-dark2nd rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
        </div>
    );
}