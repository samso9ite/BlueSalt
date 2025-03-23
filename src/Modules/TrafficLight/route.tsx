import { FunctionComponent } from "react"
import { Route, Routes } from "react-router-dom"
import TrafficLightSystem from "."

const TrafficSystemRoute:FunctionComponent<Record<string,never>> = () => {
    return(
        <Routes>
            <Route path="/">
                <Route path="/" element={<TrafficLightSystem />}  />
            </Route>
            <Route
                path="*"
                element={
                <div
                    style={{
                    width: "50%",
                    margin: "5em auto",
                    textAlign: "center",
                    }}
                >
                    <p>Oopppss, you seem to be lost</p>
                </div>
                }
            />
        </Routes>
    )}

export default TrafficSystemRoute