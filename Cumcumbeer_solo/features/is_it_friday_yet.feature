# language: es
Requisito: Es viernes todavia?

Esquema del escenario: Es o no viernes
  Dado que hoy es "<dias>"
  Cuando pregunto si ya es viernes
  Entonces deberian decirme "<respuestas>"

# Escenario: hoy es viernes
#   Dado que hoy es viernes
#   Cuando pregunto si ya es viernes
#   Entonces me deberian decir "TGIF"

   Ejemplos:
    | dias            | respuestas |
    | viernes         | TGIF   |
    | domingo         | Nope   |
    | anything else!  | Nope   |