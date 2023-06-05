import React, { useState } from "react";
import { Text, View, SafeAreaView } from "react-native";
import BottomTab from "./components/BottomTab";
import ProductSelection from "./components/ProductSelection";
import { DUMMY_DATA } from "./helpers/helper";

const ITEMS_PER_PAGE = 6;
export default function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(
    Math.ceil(DUMMY_DATA.length / ITEMS_PER_PAGE)
  );

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ProductSelection
        itemsPerPage={ITEMS_PER_PAGE}
        currentPage={currentPage}
      />
      <BottomTab
        currentPage={currentPage}
        totalPages={totalPages}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />
    </SafeAreaView>
  );
}
