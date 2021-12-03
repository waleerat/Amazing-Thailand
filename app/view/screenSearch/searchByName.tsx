import * as React from 'react';
import {
  Center,
  Container,
  Heading
} from "native-base";  

interface SearchByNameProps {}

const SearchByName: React.FC<SearchByNameProps> = props => {
  return (
    <Container safeArea>
      <Heading size="lg">Search By Name</Heading>  
      </Container>  
  );
};

export default SearchByName;