import React, {useState}from 'react'
import { programlist } from '../../Data'
import { Navbar } from '..'



const Program = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPrograms, setFilteredPrograms] = useState(programlist);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = programlist.filter((program) =>
      program.name.toLowerCase().includes(term)
    );
    setFilteredPrograms(filtered);
  };
  return (
    <div   className="font-Poppins bg-Solitude">
    <Navbar/>
    <div className="bg-gray-100">
    <div className="p-4">
      <input
        type="text"
        placeholder="Search programs..."
        className="border border-gray-300 px-3 py-2 rounded-md mb-4"
        value={searchTerm}
        onChange={handleSearch}
      />
<h2 className="text-2xl font-bold text-gray-900">Programs for you</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      
        {filteredPrograms.map((program) => (
          <div key={program.id} className="border p-4 rounded-md">
            <img
              src={program.imageSrc}
              alt={program.imageAlt}
              className="mb-2 rounded-md"
            />
            <h3 className="text-lg font-semibold">{program.name}</h3>
            <p>{program.description}</p>
            <a
              href={program.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  )
}

export default Program