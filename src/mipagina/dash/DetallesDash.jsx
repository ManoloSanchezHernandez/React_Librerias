import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Paper, Typography, Button, Box, List, ListItem, Divider } from "@mui/material";

export default function DetallesDash() {
    let { id } = useParams();
    const [meal, setMeal] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    

    useEffect(() => {
        const fetchMeal = async () => {
            try {
                if (!id) {
                    throw new Error("ID no proporcionado");
                }

                const response = await fetch(
                    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
                );
                const result = await response.json();

                if (!result.meals) {
                    throw new Error("Receta no encontrada");
                }

                setMeal(result.meals[0]);
            } catch (error) {
                console.error(error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMeal();
    }, [id]);

    if (loading) {
        return (
            <Box
                sx={{
                    background: "linear-gradient(to bottom, #FFFAF0, #F7DCB9)",
                    minHeight: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Typography variant="h4" color="primary">
                    Cargando...
                </Typography>
            </Box>
        );
    }

    if (error) {
        return (
            <Box
                sx={{
                    background: "linear-gradient(to bottom, #FFFAF0, #F7DCB9)",
                    minHeight: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Typography variant="h4" color="error">
                    {error}
                </Typography>
            </Box>
        );
    }

    return (
        <Box
            sx={{
                background: "linear-gradient(to bottom, #FFFAF0, #F7DCB9)",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 3,
            }}
        >
            <Paper
                sx={{
                    p: 5,
                    maxWidth: 1000,
                    borderRadius: 4,
                    boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "white",
                }}
            >
                {/* Sección superior: Nombre, Imagen y Receta */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        alignItems: "center",
                        justifyContent: "space-between",
                        mb: 4,
                    }}
                >
                    {/* Información del platillo */}
                    <Box sx={{ flex: 1, textAlign: "center" }}>
                        <Typography variant="h3" fontWeight="bold" color="primary">
                            {meal?.strMeal}
                        </Typography>
                        <Typography variant="h6" sx={{ mt: 1 }}>
                            <b>ID:</b> {id}
                        </Typography>
                        <Typography variant="h6">
                            <b>Categoría:</b> {meal?.strCategory}
                        </Typography>
                        <Typography variant="h6">
                            <b>Región:</b> {meal?.strArea}
                        </Typography>

                        {/* Botón para la receta */}
                        {meal?.strSource && (
                            <Button
                                variant="contained"
                                color="secondary"
                                sx={{ mt: 2 }}
                                href={meal.strSource}
                                target="_blank"
                            >
                                Ver Receta
                            </Button>
                        )}
                    </Box>

                    {/* Imagen del platillo */}
                    <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
                        <img
                            src={meal?.strMealThumb}
                            alt={meal?.strMeal}
                            style={{
                                maxWidth: "400px",
                                borderRadius: "12px",
                                boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
                            }}
                        />
                    </Box>
                </Box>

                {/* Sección inferior: Ingredientes e Instrucciones */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        gap: 4,
                    }}
                >
                    {/* Ingredientes */}
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="h3" textAlign="center" mb={2} >
                            Ingredientes
                        </Typography>
                        <List
                            sx={{
                                backgroundColor: "#FFF7E6",
                                borderRadius: 2,
                                p: 2,
                                boxShadow: "0px 3px 10px rgba(0,0,0,0.1)",
                            }}
                        >
                            {meal &&
                                Object.keys(meal).map((key) => {
                                    if (key.includes("strIngredient") && meal[key]) {
                                        const ingredientNumber = key.split("strIngredient")[1];
                                        const measure = meal[`strMeasure${ingredientNumber}`] || "Cantidad no especificada";
                                        return (
                                            <ListItem key={key}>
                                                <Typography variant="body1">
                                                    <b>{meal[key]}</b> - {measure}
                                                </Typography>
                                            </ListItem>
                                        );
                                    }
                                    return null;
                                })}
                        </List>
                    </Box>

                    {/* Instrucciones */}
                    <Box sx={{ flex: 2 }}>
                        <Typography variant="h3" textAlign="center" mb={2} >
                            Instrucciones
                        </Typography>
                        <List
                            sx={{
                                backgroundColor: "#E6F2FF",
                                borderRadius: 2,
                                p: 2,
                                boxShadow: "0px 3px 10px rgba(0,0,0,0.1)",
                            }}
                        >
                            {meal &&
                                meal.strInstructions &&
                                meal.strInstructions.split("\n").map((instruction, index) => (
                                    <React.Fragment key={index}>
                                        <ListItem>
                                            <Typography variant="body1">{instruction}</Typography>
                                        </ListItem>
                                        {index !== meal.strInstructions.split("\n").length - 1 && <Divider />}
                                    </React.Fragment>
                                ))}
                        </List>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
}