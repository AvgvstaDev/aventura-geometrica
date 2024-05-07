const pi = 3.14

function calcularAreaCir () {
  let raio = document.getElementById("raio_cir")
  let raioValue = raio.value
  let calculo = (raioValue * raioValue) * pi
  let resultado = document.getElementById("resul_cir")
  return resultado.textContent = `${calculo}`
}

function calcularVolCubo () {
    let aresta = document.getElementById("aresta_cubo")
    let arestaValue = aresta.value
    let calculo = Math.pow(arestaValue, 3) 
    let resultado = document.getElementById("resul_cubo")
    return resultado.textContent = `${calculo}`
}

function calcularAreaCuboide () {
    let ladoA = document.getElementById("a_cubo")
    let ladoAValue = parseFloat(ladoA.value)
    let ladoB = document.getElementById("b_cubo")
    let ladoBValue = parseFloat(ladoB.value)
    let ladoC = document.getElementById("c_cubo")
    let ladoCValue = parseFloat(ladoC.value)
  
    let superficie = (2 * ladoAValue * ladoBValue + 2 * ladoBValue * ladoCValue + 2 * ladoAValue * ladoCValue)
    let volume = (ladoAValue * ladoBValue * ladoCValue)
    let resultado = document.getElementById("resul_cuboide")
    return resultado.textContent = `A superfície é ${superficie} e o volume é ${volume}`
}

function calcularAreaQuadrado () {
    let ladoQua = document.getElementById("area_qua")
    let ladoQuaValue = parseFloat(ladoQua.value)
    let calculo = (ladoQuaValue * ladoQuaValue)
    let resultado = document.getElementById("resul_qua")
    return resultado.textContent = `${calculo}`
}

function calcularAreaRet () {
    let baseRet = document.getElementById("base_ret")
    let baseRetValue = baseRet.value
    let alturaRet = document.getElementById("alt_ret")
    let alturaRetValue = alturaRet.value
    let calculo = (baseRetValue * alturaRetValue)
    let resultado = document.getElementById("resul_ret")
    return resultado.textContent = `${calculo}`
}

function calcularVolR () {
    let dMaior = document.getElementById("r_maior")
    let dMaiorValue = dMaior.value
    let dMenor = document.getElementById("r_menor")
    let dMenorValue = dMenor.value
    let alturaR = document.getElementById("r_alt")
    let alturaRValue = alturaR.value
    let calculo = ((dMaiorValue * dMenorValue) / 2) * alturaRValue
    let resultado = document.getElementById("resul_r")
    return resultado.textContent = `${calculo}`
}

function calcularAreaTrapezoide () {
    let bMenor = document.getElementById("b_menor")
    let bMenorValue = parseFloat(bMenor.value)
    let bMaior = document.getElementById("b_maior")
    let bMaiorValue = parseFloat(bMaior.value)
    let alturaT = document.getElementById("t_alt")
    let alturaTValue = parseFloat(alturaT.value)
    let calculo = ((bMaiorValue + bMenorValue) * alturaTValue) / 2
    let resultado = document.getElementById("resul_t")
    return resultado.textContent = `${calculo}`
}

function calcularAreaPentagono() {
    let pBase = document.getElementById("p_base")
    let pBaseValue = parseFloat(pBase.value)
    let alturaP = document.getElementById("p_alt")
    let alturaPValue = parseFloat(alturaP.value)
    let calculo = ((pBaseValue * alturaPValue) / 2) * 5
    let resultado = document.getElementById("resul_p")
    return resultado.textContent = `${calculo}`
}
  
function calcularAreaHexagono() {
    let hBase = document.getElementById("h_base")
    let hBaseValue = parseFloat(hBase.value)
    let alturaH = document.getElementById("h_alt")
    let alturaHValue = parseFloat(alturaH.value)
    let calculo = ((hBaseValue * alturaHValue) / 2) * 6
    let resultado = document.getElementById("resul_h")
    return resultado.textContent = `${calculo}`
}

function calcularAreaTriangulo() {
    let tBase = document.getElementById("t_base")
    let tBaseValue = parseFloat(tBase.value)
    let alturaT = document.getElementById("t_alt")
    let alturaTValue = parseFloat(alturaT.value)
    let calculo = (tBaseValue * alturaTValue) / 2
    let resultado = document.getElementById("resul_t")
    return resultado.textContent = `${calculo}`
}
  