// ==============================
// Lista de escuelas generada desde el Excel
// label: combina número y nombre de la escuela
// depto: coincide con los valores visibles del campo Departamento
// cue: CUE-Anexo
// ==============================
const listaEscuelas = [
  {
    "label": "4042 - IV CENTENARIO DE LA FUNDACION DE SALTA",
    "depto": "Capital",
    "cue": "660000400"
  },
  {
    "label": "4104 - PACHI GORRITI",
    "depto": "Rosario de la Frontera",
    "cue": "660000500"
  },
  {
    "label": "4001 - JUAN BAUTISTA ALBERDI",
    "depto": "Capital",
    "cue": "660001200"
  },
  {
    "label": "4794 - Colonia Santa Rosa",
    "depto": "Orán",
    "cue": "660013930"
  },
  {
    "label": "4453 - Virgen de la Merced",
    "depto": "Orán",
    "cue": "660037300"
  },
  {
    "label": "4294 - Rdo. Padre Antonio D´Nilo",
    "depto": "Orán",
    "cue": "660043100"
  },
  {
    "label": "4628 - Dr. José Benito Graña",
    "depto": "Orán",
    "cue": "660043400"
  },
  {
    "label": "4237 - Maria Ernestina Gutierrez",
    "depto": "Orán",
    "cue": "660065400"
  },
  {
    "label": "4108 - 9 de Julio",
    "depto": "Orán",
    "cue": "660065500"
  },
  {
    "label": "4213 - José Gómez Martinez",
    "depto": "Orán",
    "cue": "660091400"
  },
  {
    "label": "4109 - El Señor y Virgen del Milagro",
    "depto": "Orán",
    "cue": "660097300"
  },
  {
    "label": "4015 - REMEDIOS ESCALADA DE SAN MARTIN",
    "depto": "Capital",
    "cue": "660002900"
  },
  {
    "label": "4010 - SANTA MARIA EUFRASIA PELLETIER",
    "depto": "Capital",
    "cue": "660003000"
  },
  {
    "label": "4016 - MAESTRA JACOBA SARAVIA",
    "depto": "Capital",
    "cue": "660004400"
  },
  {
    "label": "4135 - MONSEÑOR ROBERTO JOSE TAVELLA",
    "depto": "General Güemes",
    "cue": "660004600"
  },
  {
    "label": "4101 - MARTINA SILVA DE GURRUCHAGA",
    "depto": "Rosario de la Frontera",
    "cue": "660005000"
  },
  {
    "label": "4361 - DOCTOR MARTIN RAUL MAINOLI",
    "depto": "Capital",
    "cue": "660005400"
  },
  {
    "label": "8074 - Colegio Nuestra Sra de Luján",
    "depto": "San Martín",
    "cue": "660062600"
  },
  {
    "label": "4415 - ESCUELA Nª 4415",
    "depto": "Metán",
    "cue": "660020600"
  },
  {
    "label": "4012 - PRESIDENTE JULIO ARGENTINO ROCA",
    "depto": "Capital",
    "cue": "660006500"
  },
  {
    "label": "4129 - FRAY JUSTO SANTA MARIA DE ORO",
    "depto": "Metán",
    "cue": "660033400"
  },
  {
    "label": "4338 - GENERAL JUSTO JOSE DE URQUIZA",
    "depto": "General Güemes",
    "cue": "660007300"
  },
  {
    "label": "4473 - HILARIO ASCASUBI",
    "depto": "General Güemes",
    "cue": "660007500"
  },
  {
    "label": "4693 - PROFESORA CLARA GUTIEZ",
    "depto": "General Güemes",
    "cue": "660007600"
  },
  {
    "label": "4850 - Francisco Nuestro Papa",
    "depto": "Orán",
    "cue": "660159800"
  },
  {
    "label": "4853 - 29 de Junio",
    "depto": "Orán",
    "cue": "660161100"
  },
  {
    "label": "4479 - ELIECER SALGADO",
    "depto": "Rosario de la Frontera",
    "cue": "660008500"
  },
  {
    "label": "4102 - CARMEN SALAS",
    "depto": "Rosario de la Frontera",
    "cue": "660008200"
  },
  {
    "label": "4523 - ESCUELA Nº 4523",
    "depto": "Rosario de la Frontera",
    "cue": "660008300"
  },
  {
    "label": "4103 - DR.LUIS GUEMES",
    "depto": "Rosario de la Frontera",
    "cue": "660008800"
  },
  {
    "label": "4417 - REP. DE LA INDIA",
    "depto": "Rosario de la Frontera",
    "cue": "660014800"
  },
  {
    "label": "4410 - ESCUELA Nª 4410",
    "depto": "Rosario de la Frontera",
    "cue": "660014900"
  },
  {
    "label": "4044 - FRAY HONORATO PISTOIA",
    "depto": "Capital",
    "cue": "660010300"
  },
  {
    "label": "4638 - FRAY LUIS BELTRAN",
    "depto": "Capital",
    "cue": "660010500"
  },
  {
    "label": "4145 - Robustiano Patròn Costas",
    "depto": "Orán",
    "cue": "660010800"
  },
  {
    "label": "4139 - Osvaldo Pos",
    "depto": "Orán",
    "cue": "660010900"
  },
  {
    "label": "4434 - MARIA ELVIRA REYES DE CAMPOS",
    "depto": "Capital",
    "cue": "660011000"
  },
  {
    "label": "4046 - CESAR FERMIN PERDIGUERO",
    "depto": "Capital",
    "cue": "660011100"
  },
  {
    "label": "4435 - ESCUELA Nº 4435",
    "depto": "Metán",
    "cue": "660034600"
  },
  {
    "label": "4020 - GENERAL JUSTO JOSE DE URQUIZA",
    "depto": "Capital",
    "cue": "660011900"
  },
  {
    "label": "4392 - NTRA SRA.DEL ROSARIO DE SAN NICOLAS",
    "depto": "Metán",
    "cue": "660034700"
  },
  {
    "label": "4694 - SAN LEONARDO MURIALDO",
    "depto": "Rosario de la Frontera",
    "cue": "660012200"
  },
  {
    "label": "4130 - ALBERGUE BATALLA DE SALTA",
    "depto": "Rosario de la Frontera",
    "cue": "660015000"
  },
  {
    "label": "4336 - SAN LORENZO",
    "depto": "Rosario de la Frontera",
    "cue": "660015200"
  },
  {
    "label": "4413 - JUAN BAUTISTA CABRAL",
    "depto": "Rosario de la Frontera",
    "cue": "660015300"
  },
  {
    "label": "4447 - ESCUELA Nª 4447",
    "depto": "Rosario de la Frontera",
    "cue": "660015400"
  },
  {
    "label": "4593 - ESCUELA Nª 4593",
    "depto": "Rosario de la Frontera",
    "cue": "660023900"
  },
  {
    "label": "4116 - CESAR ALBERTO TORINO",
    "depto": "Rosario de la Frontera",
    "cue": "660024000"
  },
  {
    "label": "4581 - SAN ANTONIO DE PADUA",
    "depto": "Rosario de la Frontera",
    "cue": "660028400"
  },
  {
    "label": "4258 - NUESTRA SEÑORA DEL ROSARIO",
    "depto": "Rosario de la Frontera",
    "cue": "660015100"
  },
  {
    "label": "4509 - JUAN FRANCISCO SALINAS",
    "depto": "Rosario de la Frontera",
    "cue": "660028600"
  },
  {
    "label": "4412 - ESCUELA N° 4412",
    "depto": "Rosario de la Frontera",
    "cue": "660028700"
  },
  {
    "label": "4395 - FUERZA AEREA ARGENTINA",
    "depto": "Rosario de la Frontera",
    "cue": "660083700"
  },
  {
    "label": "4409 - VIRGEN DE LA MONTAÑA",
    "depto": "Rosario de la Frontera",
    "cue": "660088400"
  },
  {
    "label": "4633 - CRISTO REDENTOR",
    "depto": "Rosario de la Frontera",
    "cue": "660088600"
  },
  {
    "label": "4414 - POSTA DE YATASTO",
    "depto": "Metán",
    "cue": "660038700"
  },
  {
    "label": "4589 - REGIMIENTO GRANADEROS A CABALLO",
    "depto": "Metán",
    "cue": "660041200"
  },
  {
    "label": "4484 - FRANCISCO NAZARIO CATALAN",
    "depto": "Metán",
    "cue": "660044700"
  },
  {
    "label": "4337 - PORTAVIONES A.R.A. 25 DE MAYO",
    "depto": "Metán",
    "cue": "660045000"
  },
  {
    "label": "4131 - CONSTANCIO CARLOS VIGIL",
    "depto": "Metán",
    "cue": "660055600"
  },
  {
    "label": "4810 - ESCUELA Nº 4810",
    "depto": "Metán",
    "cue": "660148100"
  },
  {
    "label": "4641 - JUAN VUCETICH",
    "depto": "Metán",
    "cue": "660097800"
  },
  {
    "label": "4246 - ANA SAJAREVICH DE FERNANDEZ",
    "depto": "Metán",
    "cue": "660033300"
  },
  {
    "label": "4659 - SAN JOSE DE CALASANZ",
    "depto": "Metán",
    "cue": "660034500"
  },
  {
    "label": "4008 - GRAL BARTOLOME MITRE",
    "depto": "Capital",
    "cue": "660027400"
  },
  {
    "label": "4340 - ANDREA AZUCENA CARENZO DE VILLA",
    "depto": "Metán",
    "cue": "660034800"
  },
  {
    "label": "4673 - GRAL DE BRIGADA (RE) JORGE EDGAR LEAL",
    "depto": "Rosario de la Frontera",
    "cue": "660028100"
  },
  {
    "label": "4087 - CANONIGO JUAN IGNACIO DE GORRITI",
    "depto": "Metán",
    "cue": "660055200"
  },
  {
    "label": "4639 - PROFESOR AMELIO RONCO CERUTI",
    "depto": "Rosario de la Frontera",
    "cue": "660028500"
  },
  {
    "label": "4406 - NUESTRA SEÑORA DEL VALLE",
    "depto": "Metán",
    "cue": "660058900"
  },
  {
    "label": "4086 - MAGDALENA GUEMES DE TEJADA",
    "depto": "Metán",
    "cue": "660065800"
  },
  {
    "label": "4366 - VIRGEN DEL VALLE",
    "depto": "Cafayate",
    "cue": "660035900"
  },
  {
    "label": "4665 - Jesús de la Divina Misericordia",
    "depto": "San Martín",
    "cue": "660030100"
  },
  {
    "label": "4250 - Mateo Ríos",
    "depto": "Orán",
    "cue": "660030500"
  },
  {
    "label": "4069 - GOBERNADOR MANUEL SOLA",
    "depto": "Cerrillos",
    "cue": "660030700"
  },
  {
    "label": "4319 - MARCO SASTRE",
    "depto": "Cerrillos",
    "cue": "660031100"
  },
  {
    "label": "4261 - MONS.DIEGO GUTIERREZ PEDRAZA",
    "depto": "Cafayate",
    "cue": "660091200"
  },
  {
    "label": "4022 - DOCTOR BENJAMIN ZORRILLA",
    "depto": "Capital",
    "cue": "660031400"
  },
  {
    "label": "4021 - 20 DE FEBRERO DE 1813",
    "depto": "Capital",
    "cue": "660031500"
  },
  {
    "label": "4018 - DR.JOSE VICENTE SOLA",
    "depto": "Capital",
    "cue": "660031700"
  },
  {
    "label": "4643 - DR.JOAQUIN CASTELLANOS",
    "depto": "Capital",
    "cue": "660031900"
  },
  {
    "label": "4586 - Lidia Rosa de Sidorenko",
    "depto": "Orán",
    "cue": "660032300"
  },
  {
    "label": "4275 - Osvaldo Burela",
    "depto": "Orán",
    "cue": "660032400"
  },
  {
    "label": "4098 - Cornelio Saavedra",
    "depto": "San Martín",
    "cue": "660033000"
  },
  {
    "label": "4355 - MARIA LUISA LOPEZ",
    "depto": "Cafayate",
    "cue": "660091300"
  },
  {
    "label": "4480 - CHAIN WEISMAN",
    "depto": "Capital",
    "cue": "660006100"
  },
  {
    "label": "4398 - GENERAL BARTOLOME MITRE",
    "depto": "Rosario de Lerma",
    "cue": "660033600"
  },
  {
    "label": "4330 - JOSE EUSTAQUIO ALDERETE",
    "depto": "Rosario de Lerma",
    "cue": "660034100"
  },
  {
    "label": "4310 - Humberto Milanessi",
    "depto": "San Martín",
    "cue": "660034300"
  },
  {
    "label": "4419 - Juan Bautista Cabral",
    "depto": "San Martín",
    "cue": "660007200"
  },
  {
    "label": "8036 - Evaristo Piñón Arias",
    "depto": "Capital",
    "cue": "660011200"
  },
  {
    "label": "4053 - GRAL.RUDECINDO ALVARADO",
    "depto": "Capital",
    "cue": "660005600"
  },
  {
    "label": "4540 - Lola Mora",
    "depto": "La Candelaria",
    "cue": "660022300"
  },
  {
    "label": "4634 - SUBMARINO A.R.A. SALTA",
    "depto": "Capital",
    "cue": "660035400"
  },
  {
    "label": "4035 - PROFESOR ALEJANDRO GAUFFIN",
    "depto": "Capital",
    "cue": "660035600"
  },
  {
    "label": "4705 - REPUBLICA DE COLOMBIA-",
    "depto": "Rosario de la Frontera",
    "cue": "660012000"
  },
  {
    "label": "4350 - 2 DE FEBRERO",
    "depto": "La Candelaria",
    "cue": "660022500"
  },
  {
    "label": "4027 - DOCTOR BENJAMIN DAVALOS Y AVILES",
    "depto": "Capital",
    "cue": "660027500"
  },
  {
    "label": "4502 - Cristina C. de Chamorro",
    "depto": "La Candelaria",
    "cue": "660022600"
  },
  {
    "label": "4182 - Combate de San Lorenzo",
    "depto": "La Candelaria",
    "cue": "660022700"
  },
  {
    "label": "4425 - RVDO.PADRE RAFAEL SARAVIA",
    "depto": "La Candelaria",
    "cue": "660087400"
  },
  {
    "label": "4099 - DR.FRANCISCO DE GURRUCHAGA",
    "depto": "Rosario de Lerma",
    "cue": "660038900"
  },
  {
    "label": "4394 - CORONEL VICENTE TORINO",
    "depto": "Rosario de Lerma",
    "cue": "660039100"
  },
  {
    "label": "4241 - FRAGATA LIBERTAD",
    "depto": "Rosario de Lerma",
    "cue": "660039400"
  },
  {
    "label": "4320 - SAN AGUSTIN",
    "depto": "Cerrillos",
    "cue": "660031200"
  },
  {
    "label": "4096 - Coronel Vicente de Uriburu",
    "depto": "San Martín",
    "cue": "660040600"
  },
  {
    "label": "4496 - LIDIA Manuela Cardozo de Mariño",
    "depto": "San Martín",
    "cue": "660040800"
  },
  {
    "label": "4696 - Daniel León",
    "depto": "San Martín",
    "cue": "660041100"
  },
  {
    "label": "4220 - El Pantanillo",
    "depto": "La Candelaria",
    "cue": "660087500"
  },
  {
    "label": "4029 - DR. NICOLAS AVELLANEDA",
    "depto": "Capital",
    "cue": "660041400"
  },
  {
    "label": "4048 - PROVINCIA DE SALTA",
    "depto": "Capital",
    "cue": "660041600"
  },
  {
    "label": "4049 - INDEPENDENCIA NACIONAL",
    "depto": "Capital",
    "cue": "660041700"
  },
  {
    "label": "4691 - ALMIRANTE CRISTOBAL COLON",
    "depto": "Capital",
    "cue": "660041900"
  },
  {
    "label": "4026 - DOCTOR DELFIN LEGUIZAMON",
    "depto": "Capital",
    "cue": "660042000"
  },
  {
    "label": "4033 - REPUBLICA ARGENTINA",
    "depto": "Capital",
    "cue": "660042100"
  },
  {
    "label": "4079 - Dr. Pedro Antonio Arias de Velázquez",
    "depto": "La Candelaria",
    "cue": "660087700"
  },
  {
    "label": "4185 - Teniente Gobernador Benjamín Villafañe",
    "depto": "Orán",
    "cue": "660043000"
  },
  {
    "label": "4427 - JOSEFA FRIAS DE ARAMBURU",
    "depto": "Cafayate",
    "cue": "660035800"
  },
  {
    "label": "4411 - GRAL. GREGORIO VELEZ",
    "depto": "Cafayate",
    "cue": "660036100"
  },
  {
    "label": "4019 - PRESIDENTE JOSE EVARISTO URIBURU",
    "depto": "Capital",
    "cue": "660043500"
  },
  {
    "label": "8134 - Escuela Albergue San Agustin",
    "depto": "Cafayate",
    "cue": "660036000"
  },
  {
    "label": "4460 - General Manuel Blegrano",
    "depto": "San Martín",
    "cue": "660040300"
  },
  {
    "label": "4654 - Coronel Juan Pascual Pringles",
    "depto": "Chicoana",
    "cue": "660043900"
  },
  {
    "label": "4369 - CARMEN GUEMES DE LATORRE",
    "depto": "Chicoana",
    "cue": "660044200"
  },
  {
    "label": "4375 - DR. BERNARDO FRIAS",
    "depto": "Chicoana",
    "cue": "660045100"
  },
  {
    "label": "4037 - MARIQUITA SANCHEZ DE THOMPSON",
    "depto": "Capital",
    "cue": "660045200"
  },
  {
    "label": "4692 - MARIA DEL ROSARIO DE SAN NICOLAS",
    "depto": "Capital",
    "cue": "660045300"
  },
  {
    "label": "4003 - DOCTOR JOAQUIN CASTELLANOS",
    "depto": "Capital",
    "cue": "660045500"
  },
  {
    "label": "4688 - NUESTRA SEÑORA DE LA ASUNCION",
    "depto": "Capital",
    "cue": "660046200"
  },
  {
    "label": "4317 - TTE.CORONEL CALIXTO GAUNA",
    "depto": "Capital",
    "cue": "660046700"
  },
  {
    "label": "4055 - JOSE MANUEL ESTRADA",
    "depto": "Capital",
    "cue": "660046800"
  },
  {
    "label": "4024 - PREBISTERO DOCTOR JUAN FRANCISCO DE CASTRO",
    "depto": "Capital",
    "cue": "660047000"
  },
  {
    "label": "4274 - MONSEÑOR PEDRO REGINALDO LIRA",
    "depto": "La Caldera",
    "cue": "660047200"
  },
  {
    "label": "4380 - ANTONIO CLERICO",
    "depto": "Metán",
    "cue": "660089600"
  },
  {
    "label": "4118 - Dr. Gustavo Martínez Zuviría",
    "depto": "La Caldera",
    "cue": "660047500"
  },
  {
    "label": "4077 - JUANA MORO DE LOPEZ",
    "depto": "La Caldera",
    "cue": "660047600"
  },
  {
    "label": "4005 - JUAN CARLOS DAVALOS",
    "depto": "Capital",
    "cue": "660047700"
  },
  {
    "label": "4281 - MANUEL J.CASTILLA",
    "depto": "Chicoana",
    "cue": "660049800"
  },
  {
    "label": "8020 - COOPERATIVA DE PREVISION DE SERVICIOS EDUCACIONALES CHICOANA LTDA",
    "depto": "Chicoana",
    "cue": "660050000"
  },
  {
    "label": "4636 - CORONEL LUIS BURELA Y SAAVEDRA",
    "depto": "Chicoana",
    "cue": "660050200"
  },
  {
    "label": "4432 - SAN JOSE DE LA VIÑA",
    "depto": "Chicoana",
    "cue": "660050300"
  },
  {
    "label": "4017 - PRESIDENTE DOMINGO FAUSTINO SARMIENTO",
    "depto": "Capital",
    "cue": "660050600"
  },
  {
    "label": "4036 - DOCTOR AUGUSTO RAUL CORTAZAR",
    "depto": "Capital",
    "cue": "660051000"
  },
  {
    "label": "4050 - CLARA SARAVIA LINARES DE ARIAS",
    "depto": "Capital",
    "cue": "660051100"
  },
  {
    "label": "4013 - MIGUEL DE CERVANTES SAAVEDRA",
    "depto": "Capital",
    "cue": "660051300"
  },
  {
    "label": "8083 - Dr. Raúl Goytia",
    "depto": "Capital",
    "cue": "660051600"
  },
  {
    "label": "4034 - SANTA LUCIA",
    "depto": "Capital",
    "cue": "660052100"
  },
  {
    "label": "4006 - AMERICA LATINA",
    "depto": "Capital",
    "cue": "660052200"
  },
  {
    "label": "4646 - PAULA ALBARRACIN",
    "depto": "Capital",
    "cue": "660052300"
  },
  {
    "label": "4025 - DR. MIGUEL ORTIZ",
    "depto": "Capital",
    "cue": "660052700"
  },
  {
    "label": "4043 - MONSEÑOR CARLOS MARIANO PEREZ",
    "depto": "Capital",
    "cue": "660052900"
  },
  {
    "label": "4704 - EX ESCUELA NORMAL SUPERIOR",
    "depto": "Cafayate",
    "cue": "660053600"
  },
  {
    "label": "8035 - Dr. Ernesto Solá",
    "depto": "Cerrillos",
    "cue": "660053900"
  },
  {
    "label": "4640 - CAMINO DEL INCA",
    "depto": "La Caldera",
    "cue": "660047300"
  },
  {
    "label": "4094 - Libertador General San Martin",
    "depto": "Orán",
    "cue": "660042700"
  },
  {
    "label": "4653 - TRISTAN LOPEZ",
    "depto": "Guachipas",
    "cue": "660013100"
  },
  {
    "label": "4352 - PONTIFICE JUAN PABLO II",
    "depto": "Guachipas",
    "cue": "660013200"
  },
  {
    "label": "8073 - Nuestra Señora de la Candelaria",
    "depto": "Capital",
    "cue": "660055900"
  },
  {
    "label": "4038 - ARMADA NACIONAL",
    "depto": "Capital",
    "cue": "660056000"
  },
  {
    "label": "4040 - MERCEDES DE LOS MILAGROS LAVIN",
    "depto": "Capital",
    "cue": "660056100"
  },
  {
    "label": "4004 - CORDOBA",
    "depto": "Capital",
    "cue": "660056700"
  },
  {
    "label": "8065 - Escuela Parroquial Martin Fierro",
    "depto": "Capital",
    "cue": "660056800"
  },
  {
    "label": "4011 - BERNARDINO RIVADAVIA",
    "depto": "Capital",
    "cue": "660056900"
  },
  {
    "label": "4304 - NUESTRA SEÑORA DEL CARMEN",
    "depto": "Capital",
    "cue": "660057100"
  },
  {
    "label": "4075 - DR. FRANCISCO J.ORTIZ",
    "depto": "Guachipas",
    "cue": "660013300"
  },
  {
    "label": "4371 - DOCTOR JORGE ALBERTO TREVISAN PALACIOS",
    "depto": "Cerrillos",
    "cue": "660058400"
  },
  {
    "label": "4084 - JUANA MANUELA GORRITI",
    "depto": "Metán",
    "cue": "660054800"
  },
  {
    "label": "4429 - COMBATE LA VUELTA DE OBLIGADO",
    "depto": "Cachi",
    "cue": "660016500"
  },
  {
    "label": "4078 - DOCTOR BERNABE LOPEZ",
    "depto": "La Caldera",
    "cue": "660059200"
  },
  {
    "label": "4041 - INGENIERO RAFAEL PATRICIO SOSA",
    "depto": "Capital",
    "cue": "660059400"
  },
  {
    "label": "4032 - LEOPOLDO LUGONES",
    "depto": "Capital",
    "cue": "660059500"
  },
  {
    "label": "4031 - PEDRO BONIFACIO PALACIOS - Almafuerte",
    "depto": "Capital",
    "cue": "660059600"
  },
  {
    "label": "4023 - EJERCITO ARGENTINO",
    "depto": "Capital",
    "cue": "660059900"
  },
  {
    "label": "4642 - CAMPAÑA DEL DESIERTO",
    "depto": "Capital",
    "cue": "660060000"
  },
  {
    "label": "4030 - DOCTOR MARIANO MORENO",
    "depto": "Capital",
    "cue": "660060400"
  },
  {
    "label": "4318 - GRAL JOSE DE SAN MARTIN",
    "depto": "Capital",
    "cue": "660060600"
  },
  {
    "label": "4014 - SAN JOSE",
    "depto": "Capital",
    "cue": "660061100"
  },
  {
    "label": "4074 - DR.BERNARDO FRIAS",
    "depto": "Guachipas",
    "cue": "660023100"
  },
  {
    "label": "4081 - CORONEL JOSE MOLDES",
    "depto": "La Viña",
    "cue": "660076800"
  },
  {
    "label": "4063 - DR. VICTORINO DE LA PLAZA",
    "depto": "Cachi",
    "cue": "660077500"
  },
  {
    "label": "4563 - DR.INDALECIO GOMEZ",
    "depto": "Capital",
    "cue": "660063200"
  },
  {
    "label": "4316 - JUANA AZURDUY DE PADILLA",
    "depto": "Capital",
    "cue": "660063500"
  },
  {
    "label": "4349 - CORONEL BONIFACIO RUIZ DE LOS LLANOS",
    "depto": "Cachi",
    "cue": "660078300"
  },
  {
    "label": "4360 - SAN JUAN BAUTISTA",
    "depto": "San Carlos",
    "cue": "660064300"
  },
  {
    "label": "8091 - Instituto San Bernardo",
    "depto": "La Viña",
    "cue": "660094200"
  },
  {
    "label": "4080 - GENERAL DIONISIO DE PUCH",
    "depto": "La Viña",
    "cue": "660099800"
  },
  {
    "label": "4273 - Dr. Arturo Illía",
    "depto": "Orán",
    "cue": "660064800"
  },
  {
    "label": "4271 - Fray Aristidis Nibi",
    "depto": "Orán",
    "cue": "660064900"
  },
  {
    "label": "4333 - ESCUELA N° 4333",
    "depto": "La Viña",
    "cue": "660099900"
  },
  {
    "label": "4181 - SANTO DOMINGO SAVIO",
    "depto": "San Carlos",
    "cue": "660001800"
  },
  {
    "label": "4082 - GENERAL MANUEL BELGRANO",
    "depto": "Metán",
    "cue": "660058800"
  },
  {
    "label": "4288 - CORONEL ENRIQUE VIDT",
    "depto": "San Carlos",
    "cue": "660002000"
  },
  {
    "label": "4706 - PROFESOR EVELIO MELIAN",
    "depto": "Metán",
    "cue": "660065700"
  },
  {
    "label": "4660 - ESCUELA HOGAR CARMEN PUCH DE GUEMES",
    "depto": "Capital",
    "cue": "660066300"
  },
  {
    "label": "4645 - 25 DE MAYO DE 1810",
    "depto": "Capital",
    "cue": "660066600"
  },
  {
    "label": "4647 - DR.MARIANO BOEDO",
    "depto": "Capital",
    "cue": "660066800"
  },
  {
    "label": "4007 - GENERAL MARTIN MIGUEL DE GÜEMES",
    "depto": "Capital",
    "cue": "660066900"
  },
  {
    "label": "4362 - DOMINGO FAUSTINO SARMIENTO",
    "depto": "San Carlos",
    "cue": "660067800"
  },
  {
    "label": "4107 - DR.ARTURO LEON DAVALOS",
    "depto": "San Carlos",
    "cue": "660067900"
  },
  {
    "label": "4142 - Coronel Jorge Enrrique Vidt",
    "depto": "San Martín",
    "cue": "660069900"
  },
  {
    "label": "4167 - 12 de Octubre \"Día de la Raza\"",
    "depto": "San Martín",
    "cue": "660070800"
  },
  {
    "label": "4028 - BRIG.GRAL.JUAN ANTONIO ALVAREZ DE ARENALES",
    "depto": "Capital",
    "cue": "660071800"
  },
  {
    "label": "4296 - Jesús de Nazareth",
    "depto": "Orán",
    "cue": "660074500"
  },
  {
    "label": "4270 - MUJERES DE ACERO EN LA GESTA GUEMESIANA",
    "depto": "San Carlos",
    "cue": "660002100"
  },
  {
    "label": "4689 - Islas Malvinas",
    "depto": "Orán",
    "cue": "660077100"
  },
  {
    "label": "4516 - Armada Argentina",
    "depto": "San Martín",
    "cue": "660077200"
  },
  {
    "label": "4461 - CIUDAD DE LA PLATA",
    "depto": "San Carlos",
    "cue": "660002200"
  },
  {
    "label": "4095 - Coronel Apolinario de Figueroa",
    "depto": "Orán",
    "cue": "660078000"
  },
  {
    "label": "4512 - SAN NICOLAS CIUDAD DEL ACUERDO",
    "depto": "San Carlos",
    "cue": "660002300"
  },
  {
    "label": "8081 - Presbítero Pedro Ortiz de Zárate ( Sin categoria)",
    "depto": "Orán",
    "cue": "660078500"
  },
  {
    "label": "4315 - REINO DE BELGICA",
    "depto": "Capital",
    "cue": "660078600"
  },
  {
    "label": "8015 - Escuela Salesiana Ceferino Namuncurá",
    "depto": "Capital",
    "cue": "660078900"
  },
  {
    "label": "4045 - DR. ARTURO OÑATIVIA",
    "depto": "Capital",
    "cue": "660079900"
  },
  {
    "label": "4650 - SANTA TERESA DE JESUS",
    "depto": "San Carlos",
    "cue": "660002400"
  },
  {
    "label": "4387 - PASTORCITOS DE FATIMA",
    "depto": "San Carlos",
    "cue": "660002500"
  },
  {
    "label": "4105 - DR.FRANCISCO ALSINA",
    "depto": "San Carlos",
    "cue": "660002600"
  },
  {
    "label": "4386 - RIO LA VIÑA",
    "depto": "San Carlos",
    "cue": "660008900"
  },
  {
    "label": "4388 - MARIA MERCEDES PEÑALOZA",
    "depto": "San Carlos",
    "cue": "660009000"
  },
  {
    "label": "4475 - ESCUELA 4475 SAN LUCAS",
    "depto": "San Carlos",
    "cue": "660009100"
  },
  {
    "label": "4596 - GRAL.MARTIN MIGUEL JUAN DE LA MATA GUEMES",
    "depto": "San Carlos",
    "cue": "660009200"
  },
  {
    "label": "4487 - ESCUELA Nª 4487",
    "depto": "San Carlos",
    "cue": "660064200"
  },
  {
    "label": "4292 - Berta Blanca Cerezo de Mamaní",
    "depto": "Orán",
    "cue": "660088700"
  },
  {
    "label": "4286 - Juan Domingo Perón",
    "depto": "Orán",
    "cue": "660088800"
  },
  {
    "label": "4089 - General Pizarro",
    "depto": "Orán",
    "cue": "660089000"
  },
  {
    "label": "4285 - ESCUELA Nº4285",
    "depto": "San Carlos",
    "cue": "660064400"
  },
  {
    "label": "4703 - GENERAL MANUEL BELGRANO",
    "depto": "Capital",
    "cue": "660089700"
  },
  {
    "label": "4047 - MARIA EVA DUARTE DE PERON",
    "depto": "Capital",
    "cue": "660090600"
  },
  {
    "label": "4358 - DOCTOR NICOLAS AVELLANEDA",
    "depto": "Cafayate",
    "cue": "660091100"
  },
  {
    "label": "4354 - JORGE NEWBERY",
    "depto": "San Carlos",
    "cue": "660064500"
  },
  {
    "label": "4357 - DEL MILAGRO",
    "depto": "San Carlos",
    "cue": "660082100"
  },
  {
    "label": "4749 - PAMPA LLANA (REGIMEN DE VERANO)",
    "depto": "San Carlos",
    "cue": "660125700"
  },
  {
    "label": "4408 - MANUEL LAINEZ",
    "depto": "Chicoana",
    "cue": "660091500"
  },
  {
    "label": "4374 - EMMA SOLA DE SOLA",
    "depto": "Chicoana",
    "cue": "660091900"
  },
  {
    "label": "4039 - PROVINCIA DE BUENOS AIRES",
    "depto": "Capital",
    "cue": "660092300"
  },
  {
    "label": "4009 - 9 DE JULIO DE 1816",
    "depto": "Capital",
    "cue": "660092400"
  },
  {
    "label": "4314 - BRIGADIER GRAL JUAN ANTONIO ALVAREZ DE ARENALES",
    "depto": "Capital",
    "cue": "660092900"
  },
  {
    "label": "4002 - MARIANO CABEZON",
    "depto": "Capital",
    "cue": "660093100"
  },
  {
    "label": "4064 - FACUNDO DE ZUVIRIA",
    "depto": "Cafayate",
    "cue": "660094100"
  },
  {
    "label": "4439 - GUILLERMO SIERRA",
    "depto": "Metán",
    "cue": "660065900"
  },
  {
    "label": "4083 - MARCOS AVELLANEDA",
    "depto": "Metán",
    "cue": "660094900"
  },
  {
    "label": "4321 - PBRO.DOCTOR ANDRES PACHECO DE MELO",
    "depto": "Chicoana",
    "cue": "660095400"
  },
  {
    "label": "8093 - Colegio San Cayetano",
    "depto": "La Caldera",
    "cue": "660095700"
  },
  {
    "label": "4644 - ALMIRANTE GUILLERMO BROWN",
    "depto": "Capital",
    "cue": "660095800"
  },
  {
    "label": "4071 - GOBERNADOR ABRAHAM CORNEJO",
    "depto": "Chicoana",
    "cue": "660096000"
  },
  {
    "label": "4093 - Gral. M. Miguel de Güemes",
    "depto": "Orán",
    "cue": "660096100"
  },
  {
    "label": "4154 - Fray Francisco Victoria",
    "depto": "San Martín",
    "cue": "660024200"
  },
  {
    "label": "8173 - Cento Educativo \"San José\"",
    "depto": "Rosario de la Frontera",
    "cue": "660124000"
  },
  {
    "label": "4399 - DR.ADOLFO GUEMES",
    "depto": "San Carlos",
    "cue": "660099000"
  },
  {
    "label": "4110 - Virgen de Lujan",
    "depto": "San Martín",
    "cue": "660024300"
  },
  {
    "label": "4514 - Martin Miguel de Güemes",
    "depto": "San Martín",
    "cue": "660029900"
  },
  {
    "label": "4127 - MANUELA PEDRAZA",
    "depto": "Rosario de la Frontera",
    "cue": "660105200"
  },
  {
    "label": "4701 - Ciudad de Orán",
    "depto": "Orán",
    "cue": "660107500"
  },
  {
    "label": "4699 - DOCTOR RICARDO JOAQUIN DURAN",
    "depto": "Capital",
    "cue": "660108100"
  },
  {
    "label": "4700 - LEGADO GENERAL BELGRANO",
    "depto": "Capital",
    "cue": "660108200"
  },
  {
    "label": "4768 - PABLO VI",
    "depto": "Rosario de la Frontera",
    "cue": "660113200"
  },
  {
    "label": "4728 - ALBA CORONEL DE PEREYRA ROZAS",
    "depto": "Capital",
    "cue": "660121200"
  },
  {
    "label": "4726 - PROFESOR OSCAR VENANCIO OÑATIVIA",
    "depto": "Capital",
    "cue": "660121400"
  },
  {
    "label": "4730 - NUESTRA SEÑORA DEL MILAGRO",
    "depto": "Capital",
    "cue": "660121600"
  },
  {
    "label": "4731 - FRAY ROQUE CHIELLI",
    "depto": "Capital",
    "cue": "660121800"
  },
  {
    "label": "4732 - SAN CARLOS BORROMEO",
    "depto": "Capital",
    "cue": "660121900"
  },
  {
    "label": "4734 - DOCTOR RENE GERONIMO FAVALORO",
    "depto": "Capital",
    "cue": "660122400"
  },
  {
    "label": "8171 - Centro Educativo Fe y Alegria",
    "depto": "Capital",
    "cue": "660122900"
  },
  {
    "label": "8169 - \"Nuestra Señora de Pentecostés\"",
    "depto": "Cafayate",
    "cue": "660123000"
  },
  {
    "label": "4742 - Maria Dolores Laurentina Aranda",
    "depto": "Cerrillos",
    "cue": "660123300"
  },
  {
    "label": "4741 - DOCTOR GUSTAVO CUCHI LEGUIZAMON",
    "depto": "Capital",
    "cue": "660123400"
  },
  {
    "label": "4775 - PROFESORA ELSA SALFITY",
    "depto": "Capital",
    "cue": "660135000"
  },
  {
    "label": "4305 - Madre Teresa de Calcuta",
    "depto": "San Martín",
    "cue": "660058100"
  },
  {
    "label": "4737 - Padre Rafael Gobelli",
    "depto": "San Martín",
    "cue": "660061800"
  },
  {
    "label": "4761 - ROBERTO ROMERO",
    "depto": "Capital",
    "cue": "660131100"
  },
  {
    "label": "4763 - Hugo Alberto Luna",
    "depto": "Orán",
    "cue": "660132000"
  },
  {
    "label": "4774 - GENERAL JUAN JOSE VALLE",
    "depto": "Capital",
    "cue": "660134800"
  },
  {
    "label": "8176 - Fe y Alegria Jesus",
    "depto": "San Martín",
    "cue": "660129400"
  },
  {
    "label": "4795 - Luis Maria Preti",
    "depto": "San Martín",
    "cue": "660137300"
  },
  {
    "label": "4796 - JOSE ROBERTO IRIARTE",
    "depto": "Rosario de la Frontera",
    "cue": "660138600"
  },
  {
    "label": "4784 - DOLORES CAMPION",
    "depto": "Rosario de Lerma",
    "cue": "660139200"
  },
  {
    "label": "4811 - 2 DE MAYO CRUCERO A.R.A. GENERAL BELGRANO\"",
    "depto": "Capital",
    "cue": "660144400"
  },
  {
    "label": "4808 - Gesta Sanmartiniana\"",
    "depto": "Rosario de Lerma",
    "cue": "660145000"
  },
  {
    "label": "4813 - República de Turquía",
    "depto": "Orán",
    "cue": "660146900"
  },
  {
    "label": "4290 - Héroes de Malvinas",
    "depto": "San Martín",
    "cue": "660062200"
  },
  {
    "label": "4816 - Bicentenario de la Patria",
    "depto": "San Martín",
    "cue": "660149100"
  },
  {
    "label": "4817 - Dr. Roberto Domingo Nazr",
    "depto": "Capital",
    "cue": "660149300"
  },
  {
    "label": "4837 - SAN JOSE DE LOS CERRILLOS",
    "depto": "Cerrillos",
    "cue": "660157000"
  },
  {
    "label": "4843 - Bicentenario de la Batalla de Salta",
    "depto": "Capital",
    "cue": "660157100"
  },
  {
    "label": "4363 - Bernardino Rivadavia",
    "depto": "San Martín",
    "cue": "660080300"
  },
  {
    "label": "4851 - Dr. Nestor Juan Taranto",
    "depto": "Orán",
    "cue": "660160000"
  },
  {
    "label": "4848 - Nuestra Sra. de Atocha",
    "depto": "Capital",
    "cue": "660160300"
  },
  {
    "label": "4385 - WENCESLAO SARAVIA TOLEDO",
    "depto": "Metán",
    "cue": "660055400"
  },
  {
    "label": "4845 - \"Bicentenario de la Independencia Argentina\"",
    "depto": "Capital",
    "cue": "660162500"
  },
  {
    "label": "4152 - Reconquista",
    "depto": "Orán",
    "cue": "660779000"
  },
  {
    "label": "4303 - Maestro Roberto Terrones Riera",
    "depto": "Orán",
    "cue": "6600028900"
  }
];

// Normalizador de texto (acentos, mayúsculas/minúsculas)
function norm(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

let pantallaActual = "datos";

function mostrarPantalla(idPantalla) {
  document.querySelectorAll(".screen").forEach(sec => {
    sec.hidden = sec.id !== "screen-" + idPantalla;
  });
  pantallaActual = idPantalla;
}

// Navegación a partir de los datos personales
function irDesdeDatos() {
  const cargo = document.getElementById("cargo").value;

  if (!cargo) {
    alert("Por favor, seleccione su cargo.");
    return;
  }

  if (cargo === "Director/a" || cargo === "Vicedirector/a") {
    mostrarPantalla("directivos");
    return;
  }

  if (cargo === "Docente de grado") {
    mostrarPantalla("docentes");
    return;
  }

  if (cargo === "Directivo con grado a cargo" || cargo === "Personal único") {
    mostrarPantalla("dir-grado");
    return;
  }

  // Cargo "Otro": pasa directo a evaluación
  mostrarPantalla("eval");
}

// Desde bloques intermedios se pasa siempre a evaluación
function irAEvaluacion() {
  mostrarPantalla("eval");
}

// Botón Anterior en evaluación: depende del cargo
function volverDesdeEvaluacion() {
  const cargo = document.getElementById("cargo").value;

  if (cargo === "Director/a" || cargo === "Vicedirector/a") {
    mostrarPantalla("directivos");
    return;
  }

  if (cargo === "Docente de grado") {
    mostrarPantalla("docentes");
    return;
  }

  if (cargo === "Directivo con grado a cargo" || cargo === "Personal único") {
    mostrarPantalla("dir-grado");
    return;
  }

  // Cargo "Otro"
  mostrarPantalla("datos");
}

// Validaciones en vivo: DNI y correo
function configurarValidaciones() {
  // DNI: solo números
  document.querySelectorAll("[data-dni='1']").forEach(el => {
    el.addEventListener("input", () => {
      const soloDigitos = el.value.replace(/\D/g, "");
      if (el.value !== soloDigitos) {
        el.value = soloDigitos;
      }
    });
  });

  // Correo: formato básico
  document.querySelectorAll("[data-mail='1']").forEach(el => {
    el.addEventListener("input", () => {
      const mail = el.value.trim();
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (mail && !regex.test(mail)) {
        el.classList.add("input-error");
      } else {
        el.classList.remove("input-error");
      }
    });
  });
}

// Autocompletado de escuela filtrado por departamento
function configurarEscuelas() {
  const deptoSelect = document.getElementById("departamento");
  const escuelaInput = document.getElementById("escuela");
  const datalist = document.getElementById("escuelas-list");
  const cueHidden = document.getElementById("cue_anexo");

  function actualizarOpcionesEscuelas() {
    const depto = deptoSelect.value;
    datalist.innerHTML = "";
    escuelaInput.value = "";
    cueHidden.value = "";

    if (!depto) return;

    const filtradas = listaEscuelas.filter(e => e.depto === depto);

    filtradas.forEach(e => {
      const opt = document.createElement("option");
      opt.value = e.label;
      datalist.appendChild(opt);
    });
  }

  deptoSelect.addEventListener("change", actualizarOpcionesEscuelas);

  escuelaInput.addEventListener("change", () => {
    const texto = escuelaInput.value.trim();
    const depto = deptoSelect.value;
    cueHidden.value = "";

    if (!texto || !depto) return;

    const encontrada = listaEscuelas.find(
      e => e.depto === depto && norm(e.label) === norm(texto)
    );

    if (encontrada) {
      cueHidden.value = encontrada.cue;
    }
  });

  actualizarOpcionesEscuelas();
}

// Guardar respuestas localmente (puede reemplazarse luego por sincronización)
function guardarRespuestasLocalmente() {
  const datos = {
    marca_temporal: new Date().toISOString(),
    apellido: document.getElementById("apellido").value,
    nombre: document.getElementById("nombre").value,
    correo: document.getElementById("correo").value,
    dni: document.getElementById("dni").value,
    cargo: document.getElementById("cargo").value,
    departamento: document.getElementById("departamento").value,
    escuela: document.getElementById("escuela").value,
    cue_anexo: document.getElementById("cue_anexo").value,
    gestion_directivos: document.getElementById("gestion_directivos")?.value || "",
    preg_docentes: document.getElementById("preg_docentes")?.value || "",
    preg_dir_grado: document.getElementById("preg_dir_grado")?.value || "",
    satisfaccion: document.getElementById("satisfaccion").value,
    comentarios: document.getElementById("comentarios").value
  };

  const prev = JSON.parse(localStorage.getItem("encuesta_respuestas") || "[]");
  prev.push(datos);
  localStorage.setItem("encuesta_respuestas", JSON.stringify(prev));
  console.log("Respuesta guardada localmente:", datos);
}

document.addEventListener("DOMContentLoaded", () => {
  // Pantalla inicial
  mostrarPantalla("datos");

  configurarValidaciones();
  configurarEscuelas();

  // Navegación
  document.getElementById("btn-datos-siguiente")
    .addEventListener("click", irDesdeDatos);

  document.getElementById("btn-directivos-siguiente")
    .addEventListener("click", irAEvaluacion);

  document.getElementById("btn-docentes-siguiente")
    .addEventListener("click", irAEvaluacion);

  document.getElementById("btn-dir-grado-siguiente")
    .addEventListener("click", irAEvaluacion);

  document.querySelector("#screen-eval .secondary[data-prev='dinamico']")
    .addEventListener("click", volverDesdeEvaluacion);

  document.getElementById("btn-finalizar").addEventListener("click", () => {
    guardarRespuestasLocalmente();
    mostrarPantalla("final");
  });

  // Botones Anterior de los bloques intermedios
  document.querySelectorAll(".screen[data-screen='directivos'] .secondary[data-prev='datos'], .screen[data-screen='docentes'] .secondary[data-prev='datos'], .screen[data-screen='dir-grado'] .secondary[data-prev='datos']")
    .forEach(btn => {
      btn.addEventListener("click", () => mostrarPantalla("datos"));
    });

  // Service worker para modo offline
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch(err => {
      console.warn("No se pudo registrar el service worker:", err);
    });
  }
});
