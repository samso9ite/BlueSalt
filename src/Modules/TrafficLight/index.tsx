import { useEffect, useState } from "react";
import styled from "styled-components";

// Define props for the styled component
interface LightProps {
  color: string;
  active: boolean;
}

// Styled Components
const TrafficLightContainer = styled.div`
  width: 80px;
  background: #fdc331;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  height:13rem;
  paddingTop:5rem

`;

const Light = styled.div<LightProps>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ active, color }) => (active ? color : "#555")};
  transition: background 0.3s ease-in-out;
  cursor: pointer;
`;

const IntersectionA = styled.div`
  background-color: #2b2b2a;
  height: 90vh;
  margin-top: 1.25rem; 
  padding: 1.25rem; 
  width: 170px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
//    border-left:2px solid #ffff00;
//   border-right:2px solid #ffff00
`;
const IntersectionB = styled.div`
  background-color: #2b2b2a;
  height: 30vh;
  margin-top: 1.25rem; 
  padding: 1.25rem; 
  width: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-top:2px solid #ffff00;
  border-bottom:2px solid #ffff00
`;

const StyledButton = styled.button `
    background-color: #008001;
    color:white;
    padding:5px 20px 5px 20px;
    border-radius:10px
`
const CenteredContainer = styled.div`
  display: flex;
  justify-content: center; /* Centers horizontally */
  align-items: center; /* Centers vertically */
  height: 100vh; /* Full viewport height */
`;


// Traffic Light Component
const TrafficLightBoxA = ({activeLightA}:{ activeLightA: "red" | "yellow" | "green" }) => {
 
  return (
    <TrafficLightContainer>
      <Light color="red" active={activeLightA === "red"} />
      <Light color="yellow" active={activeLightA === "yellow"} />
      <Light color="green" active={activeLightA === "green"} />
    </TrafficLightContainer>
    
  );
};

const TrafficLightBoxB = ({activeLightB}:{ activeLightB: "red" | "yellow" | "green" }) => {
 
    return (
      <TrafficLightContainer>
        <Light color="red" active={activeLightB === "red"} />
        <Light color="yellow" active={activeLightB === "yellow"} />
        <Light color="green" active={activeLightB === "green"} />
      </TrafficLightContainer>
      
    );
  };

// Main Component
const TrafficLightSystem = () => {
    const [start, setStart] = useState<boolean>(false)
    const [activeLightA, setActiveLightA] = useState<"red" | "yellow" | "green">("red");
    const [activeLightB, setActiveLightB] = useState<"red" | "yellow" | "green">("red");
 
    useEffect(() => {
        const trafficCycle = async () => {
          // Step 1: Street A turns green, Street B stays red (One Cycle)
          setActiveLightA("green");
          setActiveLightB("red");
          await new Promise((resolve) => setTimeout(resolve, 10000));
    
          // Step 2: Both turn yellow (Half Cycle)
          setActiveLightA("yellow");
          setActiveLightB("yellow");
          await new Promise((resolve) => setTimeout(resolve, 5000));
    
          // Step 3: Street A turns red, Street B turns green (One Cycle)
          setActiveLightA("red");
          setActiveLightB("green");
          await new Promise((resolve) => setTimeout(resolve, 10000));
    
          // Step 4: Both turn yellow again (Half Cycle)
          setActiveLightA("yellow");
          setActiveLightB("yellow");
          await new Promise((resolve) => setTimeout(resolve, 5000));
    
          // Step 5: Restart the cycle
          trafficCycle();
        };
        if(start){
            trafficCycle();
        }
    }, [start]);
   
    const resetHandler = () => {
            setActiveLightA("green")
            setActiveLightB("red")
            // setStart(false)
      }
  return (
    <>  
    <div className="flex justify-center">
        <h3 className="mt-10 font-medium absolute top-10 left-[37rem] font-bold">Street A</h3>
            <CenteredContainer>
                <IntersectionB>
                    <TrafficLightBoxB activeLightB={activeLightB}/>
                </IntersectionB>
                <IntersectionA>
                    <TrafficLightBoxA activeLightA={activeLightA}/>
                    <StyledButton onClick={() => setStart(true)}>Start</StyledButton>
                    <StyledButton onClick={resetHandler}>Reset</StyledButton>
                    <TrafficLightBoxA activeLightA={activeLightA}/>
                </IntersectionA>
                    <IntersectionB>
                        <TrafficLightBoxB activeLightB={activeLightB}/>
                </IntersectionB>
            </CenteredContainer>
            <h3 className="mt-10 font-medium absolute top-[13rem] right-[27rem] font-bold">Street B</h3>
         </div>
    </>
  );
};

export default TrafficLightSystem;
