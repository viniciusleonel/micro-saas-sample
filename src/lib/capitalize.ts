export default function capitalize(sentence: string): string {
    // Verifica se a frase é vazia
    if (sentence.length === 0) {
        return sentence;
    }
    
    // Divide a frase em palavras
    const words = sentence.split(" ");
    
    // Capitaliza cada palavra na frase
    const capitalizedWords = words.map((word) => {
        return capitalizeWord(word);
    });
    
    // Combina as palavras capitalizadas em uma frase novamente
    return capitalizedWords.join(" ");
}

function capitalizeWord(word: string): string {
    // Capitaliza a primeira letra e torna as outras minúsculas
    const firstLetterUpperCase = word.charAt(0).toUpperCase();
    const restanteLowerCase = word.slice(1).toLowerCase();
    
    // Combina a primeira letra maiúscula com o resto da palavra em minúsculas
    return firstLetterUpperCase + restanteLowerCase;
}