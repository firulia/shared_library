// my-shared-library/src/SearchComponent.tsx
import React from 'react';

interface SearchComponentProps {
  placeholder: string;
  onSearch: (value: string) => void;
  style?: React.CSSProperties;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ placeholder, onSearch, style }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={onSearch}
      style={style}
    />
  );
};

export default SearchComponent;
