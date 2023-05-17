import { View, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { styles } from "./styles";

interface CheckboxProps {
  id: number;
  isChecked: boolean;
  handleSetSelected: (id: number) => void;
}

export function Checkbox({ id, isChecked, handleSetSelected }: CheckboxProps) {

}
