import React, {Component, useState} from "react";
import RecipeChoices from "./RecipeChoices";
import teasJson from "../assets/teas.json";
import './TeaForm.css'

const TeaForm = () => {
    const [currentDrink, setCurrentDrink] = useState('');

    const [trueRecipe, setTrueRecipe] = useState({});
    const getNextDrink = () => {
        let randomDrinkIndex = Math.floor(Math.random() * teasJson.teas.length);
        setCurrentDrink(teasJson.teas[randomDrinkIndex].name);
        setTrueRecipe(teasJson.teas[randomDrinkIndex].ingredients);
        setCheckedTemperature('');
        setCheckedSweetener('');
        setCheckedMilk('');
        setCheckedLeaves('');
    };
    const [inputs, setInputs] = useState({
        'leaves': '',
        'temperature': '',
        'sweetener': '',
        'milk': ''
    });
    const ingredients = {
    'leaves': ['green', 'black', 'oolong', 'white', 'herbal', 'hibiscus', 'rooibos', 'peppermint', 'thyme', 'sage', 'other'],
    'temperature' : ['hot', 'lukewarm', 'cold'],
    'sweetener': ['sugar', 'vanilla sugar', 'honey', 'agave', 'stevia', 'other', 'none'],
    'milk': ['cow', 'oat', 'goat', 'almond', 'sweetended condensed milk', 'other', 'none']
    }
    const onNewDrink = () => {
        setInputs({
        'leaves': '',
        'temperature': '',
        'sweetener': '',
        'milk': ''});
        
        getNextDrink();
    };
    const [correct_temp, setCheckedTemperature] = useState('');
    const [correct_sweetener, setCheckedSweetener] = useState('');
    const [correct_milk, setCheckedMilk] = useState('');
    const [correct_leaves, setCheckedLeaves] = useState('');
    const onCheckAnswer = () => {
        var wrongAnswers = false;
        if (trueRecipe.leaves != inputs['leaves']){
            setCheckedLeaves('wrong');
            wrongAnswers = true;
        }
        else {
            setCheckedLeaves("correct");
        }
        
        if (trueRecipe.temperature != inputs['temperature']){
            setCheckedTemperature('wrong');
            wrongAnswers = true;
        }
        else {
            setCheckedTemperature("correct");
        }
        
        if (trueRecipe.sweetener != inputs['sweetener']){
            setCheckedSweetener('wrong');
            wrongAnswers = true;
        }
        else {
            setCheckedSweetener("correct");
        }

        if (trueRecipe.milk != inputs['milk']){
            setCheckedMilk('wrong');
            wrongAnswers = true;
        }
        else {
            setCheckedMilk("correct");
        }

        if (wrongAnswers) {
            alert("Some of your answers were incorrect. Please try again.");
        }
    };
  
  return (
    <div>
        <h2>Selected Tea:</h2>
        <div className="drink-container">
            <h2 className="mini-header">{currentDrink}</h2>
            <button
                type="new-drink-button"
                className="button newdrink"
                onClick={onNewDrink}
            >
                🔄
            </button>
        </div>
        <form className="container">
            <div className="mini-container">
                <h3>Leaves</h3>
                <div className="answer-space" id={correct_leaves}>
                {inputs["leaves"]}
                </div>
                <RecipeChoices
                handleChange={(e) => setInputs((prevState) => ({
                    ...prevState,
                    [e.target.name]: e.target.value,
                }))}
                label="leaves"
                choices={ingredients["leaves"]}
                checked={inputs["leaves"]}
                />
            </div>
            <div className="mini-container">
                <h3>Temperature</h3>
                <div className="answer-space" id={correct_temp}>
                    {inputs['temperature']}
                </div>
                <RecipeChoices
                    handleChange={(e) => setInputs((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value,
                    }))}
                    label="temperature"
                    choices={ingredients["temperature"]}
                    checked={inputs["temperature"]}
                />
            </div>
            <div className="mini-container">
                <h3>Sweetener</h3>
                <div className="answer-space" id={correct_sweetener}>
                {inputs["sweetener"]}
                </div>
                <RecipeChoices
                handleChange={(e) => setInputs((prevState) => ({
                    ...prevState,
                    [e.target.name]: e.target.value,
                }))}
                label="sweetener"
                choices={ingredients["sweetener"]}
                checked={inputs["sweetener"]}
                />
            </div>
            <div className="mini-container">
                <h3>Milk</h3>
                <div className="answer-space" id={correct_milk}>
                {inputs["milk"]}
                </div>
                <RecipeChoices
                handleChange={(e) => setInputs((prevState) => ({
                    ...prevState,
                    [e.target.name]: e.target.value,
                }))}
                label="milk"
                choices={ingredients["milk"]}
                checked={inputs["milk"]}
                />
            </div>
        </form>

        <button type="submit" className="button submit" onClick={onCheckAnswer}>
            Check Answer
        </button>


    </div>
  );
  
};

export default TeaForm;