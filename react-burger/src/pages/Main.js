import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import MainSection from "../components/MainSection/MainSection";

const Main = () => {
    return (
        <DndProvider backend={HTML5Backend}>
            <MainSection />
        </DndProvider>
    );
};

export default Main;
