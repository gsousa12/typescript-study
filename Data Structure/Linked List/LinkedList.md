# Linked List

Uma lista vinculada é uma ED baseada em nós interligados.

Cada nó terá um valor de dados e uma referência ao proximo nó da lista.

Na estrutura todos os elementos são organizados em ordem linear.

Diferentemente de ARRAYs , lista vinculada é uma representação flexível para conjuntos dinãmicos. Os elementos na lista vinculada não precisam ser alocados no mesmo bloco de memória(como no array), mas podem ser encadeados usando um ponteiro para formar uma lista.

### Lista Vincluada Individualmente
∟ Cada elemento mantém um ponteiro para o próximo elemento.

### Lista Duplamente Vincluada 
∟ Igual a individual só que mantém um ponteiro tanto para o proximo elemento quanto para o anterior.

## Operações

### Pesquisar
∟ Pesquisar um elemento com base em seu valor armazenado ou sua localização.

### Inserir
∟ Inserir um novo elemento na lista.

### Excluir
∟ Remover um elemento com base em seu valor ou sua localização na lista.

## Vantagens

### Estrutura de Dados Dinâmica
∟ Por ser um arranjo dinãmico diminui o tempo de execução alocando e desalocando memória.

### Sem Desperdício de Memória
∟ Utilização eficiente de memória.

### Facilidade de Implementação

## Desvantagens

### Maior Utilização de Memória
∟ Mais memória é necessária na lista vinculada em comparação com uma array. Porque em uma lista encadeada, um ponteiro também é necessário para armazenar o endereço do próximo elemento e requer memória extra para si mesmo.

### Não é possível o acesso a dados randomicos 
∟ Para acessar um nó de posição n você precisa percorrer todos os nós anteriores a ele.
