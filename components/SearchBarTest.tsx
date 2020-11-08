import React from "react";
import { SearchBar } from "react-native-elements";
import { useState } from "react";
import { styles } from "./styles";
import { Text, Pressable } from "react-native";

interface searchVal {
  value: string;
  label: string;
}

export const SearchBarTest: React.FC = () => {
  const [query, setQuery] = useState<string>("");

  const updateSearch = (search: string) => {
    setQuery(search);
  };

  return (
    <>
      <SearchBar
        placeholder="Type Everywhere..."
        onChangeText={(str) => updateSearch(str)}
        value={query}
      />
      {year.map((obj: searchVal, index: number) => (
        <>
          {obj.value.includes(query) ? (
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
                },
                styles.searchBarItem,
              ]}
              onPress={() => {
                setQuery(obj.value);
              }}
            >
              <Text style={styles.searchBarItemText}>{obj.value}</Text>
            </Pressable>
          ) : null}
        </>
      ))}
    </>
  );
};

const year = [
  { value: "Freshman", label: "Freshman" },
  { value: "Sophomore", label: "Sophomore" },
  { value: "Junior", label: "Junior" },
  { value: "Senior", label: "Senior" },
  { value: "5th Year", label: "5th Year" },
];

// import React from 'react';
// import { SearchBar } from 'react-native-elements';

// interface Props {
//   search: string;
// }

// export default class SearchBarTest extends React.Component {
//   state = {
//     search: '',
//   };

//   updateSearch = (search : string) => {
//     this.setState({ search });
//   };

//   render() {
//     const { search } = this.state;

//     return (
//       <SearchBar
//         placeholder="Type Here..."
//         onChangeText={this.updateSearch}
//         value={search}
//       />
//     );
//   }
// }
