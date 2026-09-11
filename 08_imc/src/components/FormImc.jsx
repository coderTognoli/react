import { useState } from 'react'
import styles from './FormImc.module.css'

function FormImc() {
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [msg, setMsg] = useState('')

  // Função Limpar
  function limpar() {
    setPeso('')
    setAltura('')
    setMsg('')
  }

  const calcularImc = (e) => {
    e.preventDefault()

    if (!peso || !altura) {
      setMsg('* Preencha peso e altura.')
      return
    }

    const pesoNum = parseFloat(peso)
    const alturaNum = parseFloat(altura)

    if (isNaN(pesoNum) || isNaN(alturaNum) || alturaNum <= 0) {
      setMsg('Peso e altura inválidos.')
      return
    }

    const resultado = pesoNum / (alturaNum * alturaNum)
    const imc = resultado.toFixed(2)

    if (resultado < 18.5) {
      setMsg(`IMC: ${imc} - abaixo do Peso`)
    } else if (resultado < 25) {
      setMsg(`IMC: ${imc} - Peso Normal`)
    } else if (resultado < 30) {
      setMsg(`IMC: ${imc} - Sobrepeso`)
    } else {
      setMsg(`IMC: ${imc} - Obesidade`)
    }
  }

  return (
    <div className={styles.wrapper}>
      <form onSubmit={calcularImc} className={styles.formContainer}>
        <h2>Calculador de IMC</h2>

        <div className={styles.peso}>
          <input
            type="text"
            name="peso"
            placeholder="Informe o peso..."
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
        </div>

        <div className={styles.altura} >
          <input
            type="text"
            name="altura"
            placeholder="Informe a altura..."
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />
        </div>

        <button className={styles.btn} type="submit">Calcular</button>
        <button className={styles.btn} type="reset" onClick={limpar}>Limpar</button>

        {msg && <p className={styles.resultado} >{msg}</p>}
      </form>
    </div>
  )
}

export default FormImc