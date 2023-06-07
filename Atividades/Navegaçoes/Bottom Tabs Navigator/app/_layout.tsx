import { Tabs } from "expo-router";

export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen
       
        name="index"
        options={{
         
          title: "Home",
          href: '/',
        }}
      />
            <Tabs.Screen
       
       name="telaA"
       options={{
        
        title: "Tela A",
          href: 'telaA',
       }}
     />
                <Tabs.Screen
       
       name="telaB"
       options={{
        
        title: "Tela B",
          href: 'telaB',
       }}
     />
    </Tabs>
  );
}