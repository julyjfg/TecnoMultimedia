class Textos {
  constructor() {
    this.textos=[]
      this.texto=" "
      this.generarTextos()
     
  }
  cargarTextos(pantallas,hitPretendientes) {
    switch(pantallas) {
    case 0:
      push()
        textSize(100)
        fill(0, 255, 0)
        text(this.textos[pantallas], width/2, 200)
        pop()
        break
      case 1:
      push()
        textSize(50)
        fill(0, 255, 0)
        text(this.textos[pantallas], width/2, 300)
        pop()
        break
      case 2:
        push()
        noStroke()
        fill(127,150)
        rect(width/2, 150,1000,200,50)
        pop()
        push()
        textSize(30)
        fill(0, 255, 0)
        text(this.textos[pantallas], width/2, 100)
        pop()
        break
      case 3:
        push()
        noStroke()
        fill(127,150)
        rect(width/2, 160,1000,200,50)
        pop()
        push()
        textSize(30)
        fill(0, 255, 0)
        text(this.textos[pantallas], width/2, 100)
        pop()
       break
      case 4:
        push()
        noStroke()
        fill(127,150)
        rect(width/2, 160,1000,200,50)
        pop()
        push()
        textSize(30)
        fill(0, 255, 0)
        text(this.textos[pantallas], width/2, 100)
        pop()
        break
      case 5:
        push()
        noStroke()
        fill(127,150)
        rect(width/2, 160,1000,200,50)
        pop()
        push()
        textSize(30)
        fill(0, 255, 0)
        text(this.textos[pantallas], width/2, 100)
        pop()
        break
      case 6:
        push()
        noStroke()
        fill(127,150)
        rect(width/2, 160,1000,200,50)
        pop()
        push()
        textSize(30)
        fill(0, 255, 0)
        text(this.textos[pantallas], width/2, 100)
        pop()
      break
      case 7:
        push()
        noStroke()
        fill(127,150)
        rect(width/2, 160,1000,200,50)
        pop()
        push()
        textSize(30)
        fill(0, 255, 0)
        text(this.textos[pantallas], width/2, 100)
        pop()
      break
      case 8:
        push()
        noStroke()
        fill(127,150)
        rect(width/2, 160,1000,300,50)
        pop()
        push()
        textSize(30)
        fill(0, 255, 0)
        text(this.textos[pantallas], width/2, 90)
        pop()
      break
      case 9:
        push()
        noStroke()
        fill(127,150)
        rect(width/2, 160,1000,300,50)
        pop()
        push()
        textSize(30)
        fill(0, 255, 0)
        text(this.textos[pantallas], width/2, 80)
        pop()
      break
      case 10:
        push()
        noStroke()
        fill(127,150)
        rect(width/2, 160,1000,250,50)
        pop()
        push()
        textSize(30)
        fill(0, 255, 0)
        text(this.textos[pantallas], width/2, 80)
        pop()
      break
      case 11:
        push()
        noStroke()
        fill(127,150)
        rect(width/2, 345,1265,500,50)
        pop()
        push()
        textSize(50)
        fill(0, 255, 0)
        text(this.textos[pantallas], width/2, 160)
        pop()
      break
      case 13:
        push()
        noStroke()
        fill(127,150)
        rect(width/2, 200,1000,300,50)
        pop()
        push()
        textSize(30)
        fill(0, 255, 0)
        text("Penélope duda de la identidad de Odiseo y pide una prueba más.\nOdiseo revela un secreto sobre su cama que solo ellos conocen,\nPenélope finalmente reconoce a su esposo. Ambos se reencuentran\ncon gran alegría y se cuentan sus experiencias durante la separación.\nOdiseo también se reencuentra con su padre Laertes.\nLa paz y la prosperidad vuelven a Ítaca.\nPretendientes muertos:"+hitPretendientes, width/2, 90)
        pop()
      break
      case 14:
        push()
        noStroke()
        fill(127,150)
        rect(width/2, 160,1000,180,50)
        pop()
        push()
        textSize(30)
        fill(0, 255, 0)
        text("Los pretendientes llegaron a escapar para buscar ayuda para\nmatar a Odiseo y su familia. Sufre una doloroza derrota.\nItaca caen en caos\nPretendientes muertos:"+hitPretendientes, width/2, 100)
        pop()
      break
    }
  }
  generarTextos() {
    for (let i=0; i<=14; i++) {
      this.guardarTextos(i)
        this.textos[i]=this.texto
    }
  }
  guardarTextos(pos) {
    switch(pos) {
    case 0:
      this.texto="La Odisea"
        break
      case 1:
      this.texto="Director:Julian Ferrari Goñi\n\nArtista:Julian Ferrari Goñi\n\nProgramador:Julian Ferrari Goñi"
        break
      case 2:
      this.texto="Odiseo, disfrazado como mendigo, se encuentra en el palacio de Ítaca.\n Observa con atención a los pretendientes que han \n estado abusando de su casa y su esposa. \n El aire está cargado de tensión y secretos."
        break
      case 3:
      this.texto="Penélope anuncia que el arco de Odiseo será el premio para\n quien pueda tensarlo y disparar una flecha\n a través de los aros de doce hachas.\n Los pretendientes se alborotan, discutiendo entre ellos \n mientras Odiseo permanece en silencio, vigilante."
        break
      case 4:
      this.texto="Odiseo quiere hacer la prueba. Los pretendientes se niegan a permitir \nque Odiseo intente la prueba del arco. Se burlan de él,\n menospreciando su apariencia de mendigo. Ahora elige.\nA)Dudar de sus habilidades\nB)Hacer la prueba"
        break
      case 5:
      this.texto="Odiseo, desconfiando de su propia habilidad, decide no\nparticipar en el certamen de Penélope. Uno de los pretendientes,\n con destreza, acierta a pasar la flecha a través de las doce argollas.\n Los pretendientes celebran victoriosos su éxito. El reino de Ítaca\n cae en manos de los pretendientes y la opresión se extiende."
        break
      case 6:
      this.texto="La sala se llena de risas y burlas mientras los pretendientes\nse mofan de Odiseo por su audacia. Lo ridiculizan y cuestionan\n su habilidad para manejar el arco y disparar la flecha.\n Odiseo, firme en su determinación,\n mantiene la calma y se prepara para demostrar su valía."
        break
      case 7:
      this.texto="Justo cuando Odiseo se acerca al arco, uno de los pretendientes,\nlleno de envidia y desdén, se interpone entre él y el objetivo.\n Penélope, interviniendo como anfitriona,\n exige que Odiseo tenga la oportunidad de probar la prueba,\n recordando su hospitalidad hacia el mendigo desconocido."
        break
      case 8:
      this.texto="Es el turno de Odiseo de intentar tensar el arco y disparar la flecha.\nLa multitud observa con incredulidad. Todos los ojos\n están puestos en él, pero una sirvienta, en un momento de descuido,\n se encuentra en una encrucijada. Puedes decidir si:\nA)La sirvienta es fiel a Odiseo.\nB)Traicionarlo murmurando su nombre en la cena."
        break
      case 9:
      this.texto="El murmullo se propaga rápidamente entre los pretendientes,\nquienes se dan cuenta de que el mendigo es en realidad Odiseo.\nLa tensión aumenta, y algunos pretendientes se ponen nerviosos,\nmientras otros se enojan. La sirvienta, cediendo a la tentación\no al miedo, murmura el nombre de Odiseo en voz baja,\nrevelando su identidad."
        break
      case 10:
      this.texto="Con determinación y habilidad, Odiseo tensa el arco con facilidad y\ndispara la flecha con precisión a través de los aros de doce hachas.\n El silencio cae sobre la sala mientras todos contemplan el\n increíble logro de Odiseo. Los pretendientes quedan atónitos y se\n dan cuenta de su error al subestimar al mendigo. El destino de Ítaca\n da un giro repentino."
        break
      case 11:
      this.texto="Objetivo:Mata a los pretendientes antes de que escapen\n\nControles\n\nMovimiento:Flechas arriba y abajo\n\nDisparo:Barra Espaciadora"
        break
    }
  }
}
