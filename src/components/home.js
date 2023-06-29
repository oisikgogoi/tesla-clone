import react from "react";
import Section from "./section";

function Home(){
    return(
      <>

     <Section className="model-s"
      maintext= {"model S"}
      background={"model-s.jpg"}
      btn2={"Existing inventory"}
      TchlessDelevery={true}
      />
        
      <Section 
      maintext= {"model 3"}
      background={"modelThree.jpg"}
      btn2={"Existing inventory"}
      TchlessDelevery={true}
      />

    <Section 
      maintext= {"model X"}
      background={"model-x.jpg"}
      btn2={"Existing inventory"}
      TchlessDelevery={true}
      />

     <Section  
      maintext={"model Y"}
      background={"model-y.jpg"}
      btn2={"Existing inventory"}
      TchlessDelevery={true}
      />
       
  
       <Section 
      maintext= {"Solar Panels"}
      background={"solar-panel.jpg"}
      subText="lowest cost solar panels in america"
      btn2={"Existing inventory"}
      />

      <Section 
      maintext= {"Solar Roofs"}
      background={"solar-roof.jpg"}
      subText={"produces clean energy from your roof"}
      btn2={"Existing inventory"}
      />

      
      <Section 
      maintext= {"Accessories"}
      subText=""
      background={"accessories.jpg"}
      btn1={"shop now"}
      />
      </>
    );
}
export default Home;