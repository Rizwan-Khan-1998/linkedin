export default function SearchBar() {
    return (
      <div className="flex rounded items-center w-70 bg-slate-200 mr-12 px-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="search-medium"
          aria-hidden="true"
          role="none"
          data-supported-dps="24x24"
          fill="currentColor"
          className="text-gray-900 w-4 h-4 mr-2"
        >
          <path d="M21.41 18.59l-5.27-5.28A6.83 6.83 0 0017 10a7 7 0 10-7 7 6.83 6.83 0 003.31-.86l5.28 5.27a2 2 0 002.82-2.82zM5 10a5 5 0 115 5 5 5 0 01-5-5z"></path>
        </svg>
        <input
          type="text"
          placeholder="Search"
          className="bg-slate-200 text-gray-800 placeholder-gray-700 h-9 focus:outline-none"
        />
      </div>
    );
}