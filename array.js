let fila = [];
let opcao = "";

do{
 let pacientes = "";
 for(i=0; i< fila.length; i++){
     pacientes += (1+i) + "º -" +fila[i] +"\n"
}
    opcao = prompt(
        "Pacientes \n" + pacientes +
        "\nEscolha uma ação" + "\n1-Cadastrar Pacience"+"\n2- Atender Paciente"
        +"\n3- Sair"
    )
  switch(opcao){
    case "1":
        const novoPaciente = prompt("Nome do paciente");
        fila.push(novoPaciente);
        break;
    case "2":
        const pacienteConsultado = fila.shift();
            if(!pacienteConsultado){
                alert("Sem pacientes na fila")
            } else {
                alert("Paciente foi atendido!")
            }
            break;
    case "3":
        alert("Saindo...")
        break;        
    default:
        alert("Insira uma opção válida!");
        break;
  }


}while(opcao!=3);