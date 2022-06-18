programa {
	funcao inicio() {
		real nota_a1, nota_a2, nota_b1, nota_b2
		
	    escreva("Digite as notas do aluno A: ")
	    leia(nota_a1)
	    leia(nota_a2)
	    
	    escreva("Digite as notas do aluno B: ")
	    leia(nota_b1)
	    leia(nota_b2)
	    
	    escreva("Média do aluno A: ", media_aluno(nota_a1, nota_a2))
	    escreva("\nMédia do aluno B: ", media_aluno(nota_b1, nota_b2))
	}
	funcao real media_aluno(real nota1, real nota2) {
	    retorne (nota1 + nota2) / 2
	}
}
