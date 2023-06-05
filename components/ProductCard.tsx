import { View, Text, Image, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

interface Item {
  title: string;
  ingredients: string;
  weight: string;
  price: string;
  img: string;
  isChecked: boolean;
  onToggleCheck: (title: string) => void;
}

const ProductCard = ({
  img,
  title,
  ingredients,
  weight,
  price,
  isChecked,
  onToggleCheck,
}: Item) => {
  const handleToggleCheck = () => {
    onToggleCheck(title);
    setChecked(!checked);
  };
  const [checked, setChecked] = useState(isChecked);

  const checkboxIcon = checked ? "checkbox" : "square-outline";

  return (
    <View
      style={[
        tw`flex mt-[0.3rem] gap-[0.5rem] mx-[0.5rem] rounded-lg w-[11rem] pb-[0.8rem] mb-[1rem] shadow-sm border-[#E9E1D9] border-[1px] bg-white`,
      ]}
    >
      <TouchableOpacity
        style={[tw`absolute right-2 top-1 z-10 bg-white w-7 h-7 rounded-xl`]}
        onPress={handleToggleCheck}
      >
        <Ionicons
          name={checkboxIcon}
          size={28}
          color={checked ? "#FFC529" : "#FFC529"}
        />
      </TouchableOpacity>
      <Image
        source={{ uri: img }}
        style={{
          width: 110,
          height: 110,
          marginRight: "auto",
          marginLeft: "auto",
          marginTop: 25,
        }}
      />
      <View
        style={[
          tw`border-t-[1px] border-[#E9E1D9] pl-[1rem] flex flex-col gap-[0.4rem]`,
        ]}
      >
        <Text style={[tw`font-semibold text-[1rem] pt-[1rem]`]}>{title}</Text>
        <Text style={[tw`text-[#979593] pr-[1rem]`]}>{ingredients}</Text>
        <View style={[tw`flex flex-row gap-[0.5rem]`]}>
          <Text style={[tw`font-light`]}>{weight}</Text>
          <Text style={[tw`text-[#979593]`]}>|</Text>
          <Text style={[tw`font-semibold`]}>{price}</Text>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;
