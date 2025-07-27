

export default function Citysearch() {
  return (
    <div className="bg-[#02D482] p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-left text-white">Search for a City</h2>
        <input type="text" placeholder="Enter city name" className="city-input" />
        <button className="search-button">Search</button>
      </div>
    );
}