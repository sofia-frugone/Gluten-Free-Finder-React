import './App.css';
import Navbar from './Navbar'
import Searchbar from './Searchbar';
import { useState } from 'react';


// list of fake data to display before API is added
const posts = [
  { id: '1', name: 'Green Hill' },
  { id: '2', name: 'Rouse Hill' },
  { id: '3', name: 'Burwood' },
  { id: '4', name: 'Kellyville' },
];

// filter the list based on search query. Search bar will navigate to a new url when a search is performed
const filterPosts = (posts, query) => {
  if (!query) {
      return posts;
  }

  return posts.filter((post) => {
      const postName = post.name.toLowerCase();
      return postName.includes(query);
  });
};

const App = () => {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredPosts = filterPosts(posts, searchQuery);
  
  
  return (
    <div className="App">
      <Navbar />
      <Searchbar 
  
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}

      />
      
      {/* simple function that filters posts depeneding on search query - might replace this with js search in the future*/}
      <ul>
        {filteredPosts.map((post) => (
          <li key={post.id}>{post.name}</li>
        ))}
      </ul>
    
    </div>
   
 
  );
}

export default App;
