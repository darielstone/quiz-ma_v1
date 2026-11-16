import {useState} from "react"
import Questions from "./question.ts"
//composant d'entete
function Header(){
    return(
        <div className="card-header">
            <div><h1>Awesome Quiz Application</h1></div>
            <div className="timer-content">😊😊😊</div>
        </div>
    )
}
// creation d'un type pour stoker les variables de l'objets 
type proposition = {
    option : string;
}
//composant de propsitions
function Proposition({option}:proposition){
    return (
        <div>
            <label className="option-quiz">
                <h2>{option}</h2>
                <input 
                type="radio"
                name = "quiz-quest"
                value={(option)}
                className="radio-btn"/>
            </label>
        </div>
    )
}
// creer les types pour l'objet qui va contenir la variable de verification et celle qui va la modifier (elle est une fonction)
type validation_de_reponse = {
    setExplique:(newValue_estvalider :string) => void;
    setNumQuest: (newValue_estvalider :number) => void;
    setIndex:  (newValue_estvalider :number) => void;
    setQuest: (newValue_estvalider :string) => void;
    setscore:(newValue_estvalider :number) => void;
    setStateQuiz:(newValue_estvalider :boolean) => void;
    index:number;
    score:number;
    stateQuiz:boolean;
    estvalider:boolean;
    setEstvalider : (newValue_estvalider :boolean) => void; // signifie que la variable setEstvalider contient une fontion qui prend en parametre un boolean et ne renvoi rien 
}
//composant de pied de page
function Footer({setscore,stateQuiz,setStateQuiz,setExplique,setNumQuest,setQuest,score,index,estvalider,setEstvalider,setIndex}:validation_de_reponse){
    function valid(){
        const radioCoche = document.querySelector('input:checked') as HTMLInputElement ;
        if (radioCoche){
            const bonneOptionInput = document.querySelector(`input[value="${Questions[index].correct}"]`) as HTMLInputElement | null;
            const labelBonneOptionInput = bonneOptionInput?.parentElement as HTMLLabelElement;
            const labelradio = radioCoche.parentElement as HTMLLabelElement ;
            if (radioCoche.value === Questions[index].correct){
                if (labelradio){
                    labelradio.id = "correct-answer";
                    setscore(score + 1);
                }
            } else {
                labelradio.id = "bad-answer";
                labelBonneOptionInput.id = "correct-answer";
            }
        }
        setEstvalider(false);
    }
    // nouvelle page ici au click sur le bouton next
    const nextIndex = index + 1;
    function nextPage(){
        if (nextIndex < Questions.length){
            setIndex(nextIndex);
            setQuest(Questions[nextIndex].question);
            setNumQuest(Questions[nextIndex].id);
            setExplique(Questions[nextIndex].explanation);
            setEstvalider(true);
        } else {
            setStateQuiz(true);
        }
    }
    function recommencer(){
        setIndex(0);
        setQuest(Questions[0].question);
        setNumQuest(Questions[0].id);
        setExplique(Questions[0].explanation);
        setEstvalider(true);
        setscore(0);
        setStateQuiz(false);
    }
    return(
        <div className="card-footer">
            <p className="footer-text">{index + 1} of {Questions.length} questions</p>
            {estvalider? (<button className="btn" onClick={valid}>Valider</button>) // affiche le bouton valider si estvalide est true ce qui est le cas par default
            :stateQuiz? (<button className="btn-primary" onClick={recommencer}>Ressayer</button>) :!estvalider?(<button className="btn" onClick={nextPage}>Next <i className="fa-solid fa-arrow-right fa-arrow-custum"></i></button>) : null // affiche le bouton next si estvalider est false ce qui devient le cas au clik de du bouton valider grace a setEstvalider
            } 
        </div>
    )
}
type question = {
    quest : string;
    numQuest : number;
}
//composant de question
function Question({quest,numQuest}:question){
    return(
        <h1 className="title-question"><span>{numQuest + "."} </span>{quest}</h1>
    )
}
//creation du type pour l'objet qui va recevoir l'explication;
type explication = {
    explique : string;
}
//composant de l'explication
function Explain({explique} : explication){
    return(
        <div className="explain-bloc">
            <p>{explique}</p>
        </div>
    )

}
//composant principale app ()
function App(){
    const [index, setIndex] = useState<number>(0)
    const [quest, setQuest] = useState<string>(Questions[index].question)
    const [numQuest, setNumQuest] = useState<number>(Questions[index].id)
    const [estvalide, setEstvalide] = useState<boolean>(true)
    const [explique, setExplique] = useState<string>(Questions[index].explanation)
    const [stateQuiz,setStateQuiz] = useState<boolean>(false)
    const [score,setscore] = useState<number>(0)
    const [theme, setTheme] = useState<"dark" | "light">("dark")
    const percentage = Math.round((score / Questions.length) * 100)
    return(
            <main className={`app-shell theme-${theme}`}>
                <div className="app-content">
                    <div className="theme-toggle">
                        <button
                            type="button"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            aria-label={`Activer le mode ${theme === "dark" ? "clair" : "sombre"}`}
                            aria-pressed={theme === "light"}
                        >
                            <span aria-hidden="true">{theme === "dark" ? "☀️" : "🌙"}</span>
                            <span>{theme === "dark" ? "Mode clair" : "Mode sombre"}</span>
                        </button>
                    </div>
                    <div className="card-quiz">
                        <Header/>
                        {!stateQuiz? (
                            <div className="menu-primary">
                                <Question quest={quest} numQuest={numQuest}/>
                                <div className="menu-secondary" key={index}>
                                    <Proposition option={Questions[index].answers[0]}/>
                                    <Proposition option={Questions[index].answers[1]}/>
                                    <Proposition option={Questions[index].answers[2]}/>
                                </div>
                                <div>
                                    {!estvalide? (<Explain explique={explique}/>) : null}
                                </div>
                            </div>
                        ) : (
                            <section className="result-panel" aria-labelledby="result-title">
                                <div className="result-heading">
                                    <span className="result-kicker">Quiz terminé</span>
                                    <h2 id="result-title">Bravo, vous êtes arrivé au bout !</h2>
                                    <p>Voici le bilan de votre session.</p>
                                </div>
                                <div className="result-summary">
                                    <div
                                        className="progress-ring"
                                        role="progressbar"
                                        aria-label="Score du quiz"
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                        aria-valuenow={percentage}
                                        style={{
                                            background: `conic-gradient(var(--accent) ${percentage}%, var(--ring-track) ${percentage}% 100%)`,
                                        }}
                                    >
                                        <div className="progress-ring-center">
                                            <strong>{percentage}%</strong>
                                            <span>réussite</span>
                                        </div>
                                    </div>
                                    <div className="result-copy">
                                        <span className="result-score">{score}<span> / {Questions.length}</span></span>
                                        <p>bonnes réponses</p>
                                        <p className="result-message">
                                            {percentage >= 80
                                                ? "Excellent travail, vous maîtrisez le sujet !"
                                                : percentage >= 50
                                                    ? "Belle progression, continuez comme ça !"
                                                    : "Chaque tentative est une occasion d’apprendre."}
                                        </p>
                                    </div>
                                </div>
                                <div className="result-note">
                                    <span aria-hidden="true">✦</span>
                                    <span>Votre prochaine réussite commence par une nouvelle tentative.</span>
                                </div>
                            </section>
                        )}
                        <Footer stateQuiz={stateQuiz} setStateQuiz={setStateQuiz} score={score} setscore={setscore} setExplique={setExplique} setNumQuest={setNumQuest} setQuest={setQuest} setIndex={setIndex} estvalider={estvalide} setEstvalider={setEstvalide} index={index}/>
                        </div>
                </div>
            </main>
    )
}
export default App