import React from "react";
import {Box , Typography , Stack} from "@mui/material";
import HorizontalScrollBar from "./HorizontalScrollBar";
import Loader from "./Loader";

const SimilarExercises = ({equipmentMuscleExercises, targetMuscleExercises}) => {
    return (
        <Box sx={{mt : {lg:'100px' , xs:'0'}}}>
            <Typography variant="h3" mb={5}>Exercises that targets the same muscle group</Typography>
            <Stack direction="row" sx={{p:'2' ,position:'relative'}}>
                {targetMuscleExercises.length ?
                    <HorizontalScrollBar data={targetMuscleExercises} /> :
                     <Loader />}
            </Stack>
            <Typography variant="h3" mb={5}>Exercises that use the same equipment</Typography>
            <Stack direction="row" sx={{p:'2' ,position:'relative'}}>
                {equipmentMuscleExercises.length ?
                    <HorizontalScrollBar data={equipmentMuscleExercises} /> :
                    <Loader />}
            </Stack>

        </Box>
    );
};


export default SimilarExercises;