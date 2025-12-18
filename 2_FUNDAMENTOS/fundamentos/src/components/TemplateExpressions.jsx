const TemplateExpressions = () => {
    
    const name = "Guilherme";
    const data = {
        age: 34,
        job: "Programmer"
    }
    
    return (
        <div>
            {/* Tudo que é passado por dentro das chaves é processado e "printado" na tela */}
            {/* Por isso que o { 4 + 4 } já imprime 8 diretamente */}
            <h1>Olá, {name}, tudo bem?</h1>
            <p>Você atua como {data.job}</p>
            {4 + 4}
            {console.log("JSX React")}
        </div>
    )
}

export default TemplateExpressions;