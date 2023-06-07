import { Drawer } from "expo-router/drawer";


export default function Layout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index"
        options={{
          title: "Index",
          
         }}
      />
       <Drawer.Screen
        name="home"
        options={{
          title: "Home",
 }}
      />
      <Drawer.Screen
        name="sobre"
        options={{
          title: "Sobre",
          drawerItemStyle: { height: 0 }
        }}
      />
      <Drawer.Screen
        name="cadastro"
        options={{
          title: "Cadastro",
          drawerItemStyle: { height: 0 }
        }}
      />
    </Drawer>
  );
}