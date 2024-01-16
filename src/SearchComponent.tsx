import React from 'react';

export interface SearchComponentProps {
  placeholder: string;
  onSearch: (value: string) => void;
  style?: React.CSSProperties;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ placeholder, onSearch, style }) => {
  // Handle the input change event
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Call onSearch with the current input value
    onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={handleChange} // Use handleChange here
      style={style}
    />
  );
};

export default SearchComponent;
