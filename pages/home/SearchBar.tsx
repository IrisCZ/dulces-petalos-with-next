import styled from "@emotion/styled";
import { InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const SearchBar: React.FC<SearchBarProps> = (props) => {
  const { onChange } = props;

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        onChange={(e) => onChange(e.target.value)}
      />
    </Search>
  );
};

interface SearchBarProps {
  onChange: (criteria: string) => void;
}

const Search = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 2rem;
  border-radius: 2px;
  border: 1px solid;
  border-color: rgb(44, 102, 147);
  width: 30%;
  @media (max-width: 1250px) {
    margin-left: 0;
    width: 100%;
  }
`;

const SearchIconWrapper = styled.div`
  padding: 0 8px;
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledInputBase = styled(InputBase)`
  color: inherit;
  padding: 0 42px;
`;
