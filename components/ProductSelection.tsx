import React, { useMemo, useState } from "react";
import { View, ScrollView, FlatList } from "react-native";
import { DUMMY_DATA } from "../helpers/helper";
import ProductCard from "./ProductCard";
import tw from "twrnc";

const ProductSelection = ({
  currentPage,
  itemsPerPage,
}: {
  currentPage: number;
  itemsPerPage: number;
}) => {
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = useMemo(
    () => DUMMY_DATA.slice(startIndex, endIndex),
    [currentPage, itemsPerPage]
  );

  const [isCheckedMap, setIsCheckedMap] = useState<{ [key: string]: boolean }>(
    {}
  );

  const handleToggleCheck = (title: string) => {
    setIsCheckedMap((prevState) => ({
      ...prevState,
      [title]: !prevState[title],
    }));
  };

  const renderItem = ({ item }: { item: any }) => (
    <ProductCard
      img={item.img}
      title={item.title}
      isChecked={isCheckedMap[item.title] || false}
      weight={item.weight}
      price={item.price}
      ingredients={item.ingredients}
      onToggleCheck={handleToggleCheck}
    />
  );

  return (
    <View>
      <View style={[tw`flex justify-center items-center pt-[1rem]`]}>
        <FlatList
          data={paginatedData}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default ProductSelection;
