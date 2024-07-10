import Input from '../Input';
import SearchIcon from '@assets/icons/search.svg?react';

const SearchFilter = ({ placeholder }: { placeholder: string }) => {
  return (
    <div>
      <Input
        typeof=""
        placeholder={placeholder}
        startAdornment={<SearchIcon />}
        startAdornmentProps={{
          className: '!border-0 !pr-0',
        }}
      />
    </div>
  );
};

export default SearchFilter;
