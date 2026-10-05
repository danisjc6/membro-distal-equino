import vista_medial from "../assets/anatomia/vista_medial.jpeg";
import vista_palmar from "../assets/anatomia/vista_palmar.jpeg";
import ligg_palmar from "../assets/anatomia/ligg_palmar.png";
import ligg_lateral from "../assets/anatomia/ligg _lateral.png";
import metacarpo_palmar from "../assets/anatomia/metacarpo_palmar.png";
import posicoes_imagem_transversal from "../assets/diagnostico/posicoes_imagem_transversal.png";
import posicoes_imagem_longitudinal from "../assets/diagnostico/posicoes_imagem_longitudinal.png";
import posicionamento_radiografico from "../assets/diagnostico/posicionamento_radiografico.png";
import desmites from "../assets/patologias/desmites.png";
import fratura_metacarpo from "../assets/patologias/fratura_metacarpo.png";
import tendinite_transversal from "../assets/patologias/tendinite_transversal.png";
import tendinite2 from "../assets/patologias/tendinite2.png";
import desmite_proximal from "../assets/patologias/desmite_proximal.png";
import desmite_corpo from "../assets/patologias/desmite_corpo.png";
import desmite_ramos from "../assets/patologias/desmite_ramos.png";
import articulacoes from "../assets/anatomia/articulacoes.jpeg";
import artrite from "../assets/patologias/artrite.png";
import esquema_artrite from "../assets/diagnostico/esquema_artrite.png";
import calcificacao from "../assets/diagnostico/calcificacao.png";
import doenca_navicular from "../assets/patologias/doenca_navicular.png";
import posicoes_navicular from "../assets/diagnostico/posicoes_navicular.png";
import lateral_navicular from "../assets/diagnostico/lateral_navicular.png";
import skyline_navicular from "../assets/diagnostico/skyline_navicular.png";
import dorsopalmar_navicular from "../assets/diagnostico/dorsopalmar_navicular.png";
import ressonancia from "../assets/inicio/ressonancia.png";
import tomografia from "../assets/inicio/tomografia.png";
import navicular_anatomia from "../assets/anatomia/navicular_anatomia.png";

export type ContentImage = {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
  explanation: string;
  source?: string;
};

export type ImagingModality = {
  id: string;
  name: string;
  shortName: string;
  description: string;
  indications: string[];
  views?: { code: string; name: string }[];
  images?: ContentImage[];
};

export type SubSection = {
  id: string;
  title: string;
  content: string;
  type?: "text" | "list" | "composite";
  items?: string[];
  subsections?: { title: string; items: string[] }[];
  images?: ContentImage[];
};


export type Pathology = {
  id: string;
  title: string;
  shortTitle: string;
  region: string;
  overview: string;
  sections: SubSection[];
  references: string[];
  images?: { label: string; caption?: string }[];
};

export type NavSection = {
  id: string;
  label: string;
  icon: string;
  pathologies?: Pathology[];
};

export const projectAbout = {
  objective:
    "Plataforma interativa para complementar o estudo da anatomia, das principais afecções e do diagnóstico por imagem do membro torácico distal equino, com linguagem acessível e apoio didático para ensino e aprendizagem.",
  developers: [
    "Profa. Dra. Daniela Oliveira - Área de Anatomia Animal - Laboratório de Anatomia e Patologia Animal — UFAPE",
    "Manuela Gueiros - Acadêmica do Curso de Medicina Veterinária — UFAPE",
  ],
};

export const navigation: NavSection[] = [
  {
    id: "home",
    label: "Início",
    icon: "home",
  },
  {
    id: "anatomia",
    label: "Anatomia",
    icon: "bone",
  },
  {
    id: "patologias",
    label: "Patologias",
    icon: "stethoscope",
    pathologies: [
      {
        id: "fratura-mc2-mc4",
        title: "Fratura do II e IV Metacarpiano",
        shortTitle: "Fratura MC II/IV",
        region: "Metacárpico",
        overview: "",
        sections: [
          {
            id: "anatomia",
            title: "Anatomia",
            type: "composite",
            content:
              "Os ossos metacarpianos II e IV estão localizados medial e lateralmente ao terceiro metacarpiano, respectivamente.\n\nEmbora não participem diretamente da sustentação de peso como o terceiro metacarpiano, contribuem para:",
            items: [
              "Estabilização do carpo",
              "Inserção de ligamentos interósseos",
              "Distribuição de forças durante a locomoção",
              "Suporte biomecânico do aparelho locomotor distal",
            ],
            images: [
              {
                src: metacarpo_palmar,
                alt: "Anatomia da região metacárpica do equino",
                title: "Ossos da região metacárpica",
                caption: "Figura 1. Ossos metacárpicos equinos.",
                explanation:
                  "Nesta imagem podem ser observados os ossos metacárpicos equinos. Os metacarpianos II e IV encontram-se, respectivamente, medial e lateralmente ao terceiro metacarpiano.",
                source: "Acervo do Laboratório de Anatomia e Patologia Animal - UFAPE",
              },
              {
                src: ligg_lateral,
                alt: "Anatomia da região metacárpica do equino",
                title: "Ligamentos e tendões da região metacárpica",
                caption: "Figura 2. Ligamentos e tendões das regiões metacárpica e falangeana equinas.",
                explanation:
                  "Nesta imagem podem ser observados os principais tendões e ligamentos que compõem a região metacárpica do membro torácico equino.",
                source: "Acervo do Laboratório de Anatomia e Patologia Animal - UFAPE",
              },
            ],
          },
          {
            id: "biomecanica",
            title: "Biomecânica",
            type: "text",
            content:
              "Durante a movimentação do cavalo, principalmente em esportes de alta velocidade, os metacarpianos acessórios absorvem forças de torção e tensão transmitidas pelo carpo e pelos ligamentos interósseos. Em exercícios intensos, os ligamentos interósseos exercem tração constante sobre os metacarpianos acessórios, podendo contribuir para fraturas por estresse ou avulsão.",
          },
          {
            id: "diagnostico",
            title: "Diagnóstico",
            type: "composite",
            content: "",
            subsections: [
              {
                title: "Anamnese",
                items: [
                  "Histórico de trauma",
                  "Queda",
                  "Coice",
                  "Início súbito da claudicação",
                ],
              },
              {
                title: "Exame Clínico",
                items: [
                  "Dor localizada",
                  "Edema",
                  "Instabilidade",
                  "Presença de deformidade",
                ],
              },
            ],
          },
          {
            id: "imagem",
            title: "Exame de Imagem",
            type: "composite",
            content:
              "A avaliação radiográfica é o método de imagem de eleição para diagnóstico das fraturas dos metacarpianos acessórios.",
            subsections: [
              {
                title: "Projeções Radiográficas",
                items: [
                  "DP — Dorsopalmar",
                  "LM — Lateromedial",
                  "DMPLO — Dorsomedial-palmarolateral",
                  "DLPMO — Dorsolateral-palmaromedial",
                ],
              },
              {
                title: "Achados Radiográficos",
                items: [
                  "Linha radiolucente atravessando o osso",
                  "Descontinuidade cortical",
                  "Fragmentação",
                  "Reação periosteal (crescimento ósseo)",
                ],
              },
            ],
            images: [
              {
                src: fratura_metacarpo,
                alt: "Fratura do II e IV metacarpiano do equino",
                title: "Imagem radiográfica",
                caption: "",
                explanation:
                  "Projeção lateromedial, perda da continuidade óssea, fratura do 2° ou 4º metacarpiano (linha radiolucente/escura interferindo na continuidade do osso que é radiopaco/claro na imagem).",
                source: "GVET e CLINILAB VET (@clinilab_vet). [Publicação no Instagram].",
              },
            ],
          },
          {
            id: "etiologia",
            title: "Etiologia",
            type: "list",
            content: "Principais causas:",
            items: [
              "Impactos/traumas contra obstáculos",
              "Coices",
              "Colisões durante transporte",
              "Sobrecarga mecânica repetitiva",
            ],
          },
          {
            id: "fisiopatologia",
            title: "Fisiopatologia",
            type: "text",
            content:
              "A fratura provoca interrupção da continuidade óssea, resultando em hemorragia local, inflamação e formação de tecido de granulação. Em exercícios intensos, os ligamentos interósseos exercem tração constante sobre os metacarpianos acessórios, podendo contribuir para fraturas por estresse ou avulsão.",
          },
          {
            id: "sinais",
            title: "Sinais Clínicos",
            type: "list",
            content: "",
            items: [
              "Claudicação",
              "Dor à palpação",
              "Aumento de volume local",
              "Calor",
              "Sensibilidade intensa sobre o metacarpiano afetado",
            ],
          },
          {
            id: "tratamento",
            title: "Tratamento",
            type: "composite",
            content: "",
            subsections: [
              {
                title: "Conservador — fraturas incompletas e sem deslocamento",
                items: [
                  "Repouso em baia",
                  "Caminhadas controladas",
                  "Anti-inflamatórios não esteroidais (AINEs)",
                  "Monitoramento radiográfico periódico",
                ],
              },
              {
                title: "Cirúrgico",
                items: ["Remoção cirúrgica do fragmento distal"],
              },
            ],
          },
          {
            id: "relacoes",
            title: "Relação com Outras Patologias",
            type: "text",
            content:
              "As fraturas dos II e IV metacarpianos podem estar associadas a lesões paralelas do ligamento interósseo, especialmente em fraturas com tração brusca e alterações biomecânicas capazes de predispor à desmite do ligamento suspensor do boleto e à tendinite dos tendões flexores devido à sobrecarga compensatória do membro. Em casos de fraturas proximais ou com envolvimento articular, pode haver desenvolvimento de osteoartrite secundária.",
          },
        ],
        references: [
          "THOMASSIAN, Armen. Enfermidades dos Cavalos. 4. ed. São Paulo: Varela, 2005.",
          "FEITOSA, Francisco Leydson Formiga. Semiologia Veterinária: A Arte do Diagnóstico. 4. ed. São Paulo: Roca, 2020.",
          "RADOSTITS, Otto M. et al. Clínica Veterinária: Um Tratado de Doenças dos Bovinos, Ovinos, Suínos, Caprinos e Equinos. 10. ed. Rio de Janeiro: Guanabara Koogan, 2010.",
          "STASHAK, Ted S. Claudicação em Equinos Segundo Adams. 5. ed. São Paulo: Roca, 2006.",
          "AUER, Jörg A.; STICK, John A. Cirurgia Equina. Tradução da 4. ed. Rio de Janeiro: Elsevier, 2012.",
          "KÖNIG, Horst Erich; LIEBICH, Hans-Georg. Anatomia dos Animais Domésticos: Texto e Atlas Colorido. 6. ed. Porto Alegre: Artmed, 2016.",
          "DYCE, K. M.; SACK, W. O.; WENSING, C. J. G. Tratado de Anatomia Veterinária. 5. ed. Rio de Janeiro: Elsevier, 2019.",
        ],
      },
      {
        id: "tendinite",
        title: "Tendinite",
        shortTitle: "Tendinite",
        region: "Tendões",
        overview: "",
        sections: [
          {
            id: "anatomia",
            title: "Anatomia",
            type: "text",
            content: 
              "Acomete principalmente os tendões flexores digitais, especialmente o tendão flexor digital superficial (TFDS) e, em menor frequência, o tendão flexor digital profundo (TFDP). Essas estruturas localizam-se na face palmar do metacarpo e são responsáveis pela sustentação do membro e absorção das forças geradas durante a locomoção. A tendinite é uma das principais causas de claudicação em cavalos atletas.",
            images: [
              {
                src: vista_palmar,
                alt: "Anatomia da região palmar do membro torácico equino",
                title: "Anatomia da região palmar",
                caption: "Figura 1. Região palmar do membro torácico equino.",
                explanation:
                  "Nesta imagem estão representados o tendão do músculo flexor digital superficial (TFDS) em verde, e o tendão do músculo flexor digital profundo (TFDP), em vermelho. Profundamente a esses dois tendões, está representado o ligamento suspensor do boleto, em amarelo.",
                source: "Acervo 3D do Laboratório de Anatomia e Patologia Animal - UFAPE",
              },
              {
                src: ligg_lateral,
                alt: "Anatomia da região metacárpica do equino",
                title: "Ligamentos e tendões da região metacárpica",
                caption: "Figura 2. Ligamentos e tendões das regiões metacárpica e falangeana equinas.",
                explanation:
                  "Nesta imagem podem ser observados os principais tendões e ligamentos que compõem a região metacárpica do membro torácico equino.",
                source: "Acervo do Laboratório de Anatomia e Patologia Animal - UFAPE",
              },
            ],
          },
          {
            id: "biomecânica",
            title: "Biomecânica",
            type: "text",
            content: "Os tendões flexores funcionam como estruturas elásticas que armazenam e liberam energia durante o movimento. Em atividades de alta intensidade, como vaquejada, corrida e salto, essas estruturas são submetidas a elevadas forças de tração. Quando a capacidade fisiológica do tendão é excedida, ocorre lesão das fibras colágenas e desenvolvimento da tendinite.",
          },
          {
            id: "etiologia",
            title: "Etiologia",
            type: "list",

            content: "",
            subsections: [
              {
                title: "",
                items: [
                  "Exercício excessivo", 
                  "Pisos duros ou irregulares", 
                  "Ferrageamento incorreto", 
                  "Sobrecarga esportiva",
                  "Conformação inadequada dos membros",
                  "Idade avançada",
                  "Lesões prévias no tendão"
                ],
              },
            ],
          },
          {
            id: "fisiopatologia",
            title: "Fisiopatologia",
            type: "text",
            content: "A tendinite caracteriza-se pela ruptura parcial das fibras colágenas do tendão, seguida por um processo inflamatório local. Inicialmente ocorre hemorragia e edema, com posterior formação de tecido cicatricial. Esse novo tecido possui menor elasticidade e resistência quando comparado ao tendão normal, aumentando o risco de recidivas.",
          },
          {
            id: "sinais",
            title: "Sinais Clínicos",
            type: "list",
            content: "",
            items: [
              "Claudicação",
              "Aumento de volume na região tendínea",
              "Calor local",
              "Dor à palpação",
              "Edema",
              "Redução do desempenho esportivo",
              "Maior predisposição a novas lesões"
            ],
          },
          {
            id: "diagnostico",
            title: "Diagnóstico",
            type: "list",
            content: "",
            subsections: [
              {
                title: "Anamnese",
                items: [
                  "Histórico esportivo",
                  "Episódios anteriores de claudicação",
                  "Intensidade do treinamento",
                ],
              },
              {
                title: "Exame Clínico",
                items: ["Dor",
                  "Edema",
                  "Temperatura local",
                  "Alterações na locomoção",
                  "Bloqueios anestésicos",
                  "Testes de flexão"
                ],
              },
              ],
          },
          {
            id: "imagem",
            title: "Exame de Imagem",
            type: "composite",
            content:
              "A avaliação ultrassonográfica é o método de imagem de eleição para diagnóstico das tendinites.",

              subsections: [
              {
                title: "Probe - posicionamento:",
                items: [
                  "Transdutor linear",
                  "Avaliação transversal e longitudinal do tendão",
                ],
              },
              {
                title: "Achados Ultrassonográficos",
                items: [
                  "Áreas hipoecoicas (cinza-escuro ou preto)  ou anecoicas (preto, sugerindo presença de líquido);",
                  "Desorganização das fibras;",
                  "Aumento da área transversal do tendão.",
                ],
              },
            ],
            images: [
              {
                src: tendinite_transversal,
                alt: "Tendinite",
                title: "Imagem ultrassonográfica 1",
                caption: "Fig 1: Aspecto ultrassonográfico com alteração do padrão fibrilar do tendão flexor digital superficial.",
                explanation:
                  "Imagens de ultrassom transversal (A) e sagital (B) mostrando uma área mal definida, heterogênea e ligeiramente hipoecoica no plano transversal dentro do tendão flexor digital superficial (setas amarelas). A imagem mostra ruptura grave das fibras e diminuição da ecogenicidade. Observe o aumento da área da seção transversal do tendão flexor digital superficial e o edema periférico do paratendão (seta branca).",
                source: "KIDD, Jessica A.; LU, Kristina G.; FRAZER, Michele L. (ed.). Atlas of equine ultrasonography. 1. ed. Chichester: John Wiley & Sons, 2014.",
              },
              {
                src: tendinite2,
                alt: "Tendinite",
                title: "Imagem ultrassonográfica 2",
                caption: "Fig 2: Aspecto ultrassonográfico com alteração do padrão fibrilar do tendão flexor digital superficial.",
                explanation:
                  "Imagens de ultrassom transversal (A) e sagital (B) da região média do metacarpo palmar (nível 3). Uma lesão central hipoecoica bem definida está presente na parte central do tendão. Essa aparência está relacionada ao tecido de granulação inicial, que aparece homogeneamente hipoecoico. DDFT: tendão flexor digital profundo; SDFT: tendão flexor digital superficial.",
                source: "KIDD, Jessica A.; LU, Kristina G.; FRAZER, Michele L. (ed.). Atlas of equine ultrasonography. 1. ed. Chichester: John Wiley & Sons, 2014.",
              },
            ],
          },
          {
            id: "tratamento",
            title: "Tratamento",
            type: "list",
            content: "",
            subsections: [
              {
                title: "Tratamento Conservador",
                items: [
                  "Repouso controlado",
                  "Crioterapia na fase aguda",
                  "Antiinflamatório não esteroidal (AINE)"
                ]
              },
              {
                title: "Terapias Regenerativas",
                items: [
                  "Plasma rico em plaquetas (PRP)", 
                  "Células-tronco mesenquimais"
                ]
              },
              {
                title: "Fisioterapia",
                items: [
                  "Laserterapia",
                  "Ultrassom terapêutico",
                  "Magnetoterapia",
                  "Exercícios controlados"
                ]
              }
            ]
          },
          {
            id: "relacoes",
            title: "Relação com Outras Patologias",
            type: "text",
            content: "A tendinite frequentemente está associada a alterações do membro locomotor. Cavalos com desmite do ligamento suspensor do boleto, síndrome do navicular, desequilíbrios podais ou osteoartrite podem desenvolver sobrecarga nos tendões flexores, favorecendo o aparecimento da lesão. Além disso, tendinites crônicas podem resultar em compensações locomotoras que aumentam o risco de novas lesões ligamentares e articulares.",
          },
        ],

        references: [
          "THOMASSIAN, A. Enfermidades dos Cavalos. 4. ed. São Paulo: Varela, 2005.",
          "STASHAK, T. S. Claudicação em Equinos Segundo Adams. 5. ed. São Paulo: Roca, 2006.",
          "AUER, J. A.; STICK, J. A. Cirurgia Equina. Rio de Janeiro: Elsevier, 2012.",
          "REEF, V. B. Ultrassonografia de Equinos. São Paulo: Roca, 2000.",
          "KÖNIG, H. E.; LIEBICH, H. G. Anatomia dos Animais Domésticos: Texto e Atlas",
          "Colorido. 6. ed. Porto Alegre: Artmed, 2016.",
          "ROSS, M. W.; DYSON, S. J. Diagnosis and Management of Lameness in the Horse. St.Louis: Elsevier, 2011.",
        ],
      },
      {
        id: "desmite",
        title: "Desmite do Ligamento Suspensor do Boleto",
        shortTitle: "Desmite",
        region: "Ligamento Suspensor do Boleto",
        overview: "", 
      
        sections: [
          {
            id: "anatomia",
            title: "Anatomia",
            type: "text",
            content: "O ligamento suspensor do boleto (LSB) é uma importante estrutura do sistema locomotor equino. Origina-se na face proximopalmar do terceiro metacarpiano e nos ossos do carpo, dividindo-se distalmente em dois ramos que se inserem nos ossos sesamoides proximais e, posteriormente, unem-se ao tendão extensor digital comum. Sua principal função é sustentar a articulação metacarpofalângica (boleto) e evitar sua hiperextensão durante a locomoção.",
          images: [
              {
                src: ligg_palmar,
                alt: "Ligamento Suspensor do Boleto",
                title: "Ligamento Suspensor do Boleto",
                caption: "Fig 1: Vista palmar do ligamento suspensor do boleto.",
                explanation:
                  "O ligamento suspensor do boleto localiza-se palmar ao metacarpo e divide-se em dois ramos, que se direcionam dorsalmente e se unem ao tendão extensor digital comum.",
                source: "Acervo do Laboratório de Anatomia e Patologia Animal - UFAPE.",
              },
              {
                src: vista_medial,
                alt: "Ligamento Suspensor do Boleto",
                title: "Posição do Ligamento Suspensor do Boleto",
                caption: "Fig 2: Vista medial do ligamento suspensor do boleto.",
                explanation:
                  "O ligamento suspensor do boleto está localizado palmar ao metacarpo, e nessa peça impressa em 3D está representado em amarelo. Note o ramo que se direciona para o tendão extensor digital comum, representado em azul.",
                source: "Acervo 3D do Laboratório de Anatomia e Patologia Animal - UFAPE.",
              },
              {
                src: vista_palmar,
                alt: "Ligamento Suspensor do Boleto",
                title: "Posição do Ligamento Suspensor do Boleto",
                caption: "Fig 3: Vista palmar da região metacárpica.",
                explanation:
                  "O ligamento suspensor do boleto nessa peça impressa em 3D está representado em amarelo. A partir dos sesamoides proximais, o ligamento divide-se em dois ramos, que se direcionam para o tendão extensor digital comum, dorsalmente.",
                source: "Acervo 3D do Laboratório de Anatomia e Patologia Animal - UFAPE.",
              },
            ],
          },
          {
            id: "Biomecanica",
            title: "Biomecânica",
            type: "list",
            content: "Durante o apoio do membro, especialmente em altas velocidades, o ligamento suspensor atua absorvendo e distribuindo forças mecânicas geradas pelo peso corporal e pelo impacto contra o solo. O excesso de tensão sobre essa estrutura pode resultar em microlesões das fibras ligamentares, culminando na desmite.",
          },
          {
            id: "etiologia",
            title: "Etiologia",
            type: "list",
            content: "",
            items: [
              "Exercícios intensos e repetitivos;", 
              "Treinamento inadequado;",
              "Pisos excessivamente duros ou profundos;",
              "Ferrageamento incorreto;",
              "Sobrecarga esportiva;",
              "Conformação inadequada dos membros;",
              "Fraqueza ligamentar;",
              "Idade avançada;",
              "Histórico de lesões anteriores."
            ],
          },
          {
            id: "fisiopatologia",
            title: "Fisiopatologia",
            type: "text",
            content: "A desmite caracteriza-se por inflamação e degeneração das fibras do ligamento. Inicialmente ocorre ruptura microscópica das fibras colágenas, seguida por edema, inflamação e tentativa de reparação tecidual. Durante a cicatrização forma-se tecido fibroso menos resistente e menos elástico, favorecendo recidivas e comprometendo a função biomecânica do aparelho suspensor."
          },
          {
            id: "sinais",
            title: "Sinais Clínicos",
            type: "list",
            content: "",
            items: [
              "Claudicação;",
              "Dor à palpação;",
              "Aumento de volume na região acometida;",
              "Sensibilidade durante o exercício;",
              "Redução do desempenho atlético;",
              "Espessamento do ligamento;",
              "Persistência da dor após exercício intenso;"
            ]
          },
          {
            id: "diagnostico",
            title: "Diagnóstico",
            type: "list",
            content: "",
            subsections: [
              {
                title: "Anamnese",
                items: ["Modalidade esportiva praticada;", "Frequência e intensidade dos exercícios;", "Histórico de claudicação."],
              },
              {
                title: "Exame Clínico",
                items: ["Claudicação;", "Dor à palpação;", "Edema;", "Bloqueio anestésico;", "Testes de flexão."]
              }
            ],
              images: [
              {
                src: desmites,
                alt: "Ligamento Suspensor do Boleto",
                title: "Posição das desmites",
                caption: "Fig 1: Localização das desmites do ligamento suspensor do boleto.",
                explanation:
                  "As desmites do ligamento suspensor do boleto podem ocorrer em diferentes regiões do ligamento, incluindo a porção proximal, corpo e inserção nos ossos sesamoides proximais. A imagem ilustra as áreas mais comumente afetadas.",
                source: "GONÇALVES, Inês dos Santos. Exostoses metacarpianas em cavalos de desporto. 2023. Dissertação (Mestrado Integrado em Medicina Veterinária) – Faculdade de Medicina Veterinária, Universidade de Lisboa, Lisboa, 2023.",
                },
            ]
          },
          {
            id: "imagem",
            title: "Exame de Imagem",
            type: "list",
            content: "",
            subsections: [
              {
                title: "Ultrassonografia",
                items: ["Áreas hipoecoicas;", "Perda do padrão fibrilar normal;", "Aumento da área transversal;", "Presença de edema."],
              }
            ],
            images: [
              {
                src: desmite_proximal,
                alt: "Ligamento Suspensor do Boleto",
                title: "Desmite Proximal",
                caption: "Fig 1: Desmite Proximal.",
                explanation:
                  "Ultrassonografias dos membros torácicos esquerdo e direito mostrando uma lesão (seta) no ligamento suspensor proximal do membro esquerdo. A lesão pode ser vista como uma área hipoecoica correspondente (setas) nas imagens longitudinais (B) e transversais (A). O membro direito não apresenta alterações nas fibras.",
                source: "DENOIX, Jean-Marie. Atlas of Equine Ultrasonography. 1. ed. Boca Raton: CRC Press, 2006.",
                },
                {
                src: desmite_corpo,
                alt: "Ligamento Suspensor do Boleto",
                title: "Desmite do Corpo",
                caption: "Fig 2: Desmite do Corpo do Ligamento Suspensor do Boleto.",
                explanation:
                  "Ultrassonografias dos membros torácicos direito e esquerdo mostrando uma lesão (seta) no ligamento suspensor proximal do membro esquerdo. A lesão pode ser vista como uma área hipoecoica correspondente (setas) nas imagens longitudinais (B). O membro direito não apresenta alterações nas fibras.",
                source: "DENOIX, Jean-Marie. Atlas of Equine Ultrasonography. 1. ed. Boca Raton: CRC Press, 2006.",
                },
                {
                src: desmite_ramos,
                alt: "Ligamento Suspensor do Boleto",
                title: "Desmite dos Ramos",
                caption: "Fig 3: Desmite dos Ramos do Ligamento Suspensor do Boleto.",
                explanation:
                  "Desmite do ramo medial do ligamento suspensor. Observe a lesão hipoecoica vista nas imagens transversais (A) e longitudinais (B), que parece apresentar um defeito em sua margem articular (seta tracejada). Não é incomum que lesões desse ramo suspensor se rompam na bolsa palmar da articulação metacarpofalângica, causando inflamação articular e justificando o desbridamento artroscópico. Observe também a fibrose periligamentar que comumente acompanha essas lesões (setas sólidas).",
                source: "DENOIX, Jean-Marie. Atlas of Equine Ultrasonography. 1. ed. Boca Raton: CRC Press, 2006.",
                },
            ]
          },
          {
            id: "tratamento",
            title: "Tratamento",
            type: "list",
            content: "",
            subsections: [
              {
                title: "Tratamento Conservador",
                items: ["Repouso controlado;", "Crioterapia na fase aguda;", "Antiinflamatório não esteroidal (AINE);", "Programa gradual de exercícios."],
              },
              {
                title: "Terapias Regenerativas",
                items: ["Plasma rico em plaquetas (PRP);", "Células-tronco ;", "IRAP (Proteína Antagonista do Receptor de Interleucina-1)."],
              },
              {
                title: "Fisioterapia",
                items: ["Laserterapia;", "Ultrassom terapêutico;", "Magnetoterapia;", "Exercícios de reabilitação;"],
              }
            ] 
          },
          {
            id: "relacoes",
            title: "Relação com Outras Patologias",
            type: "text",
            content: "A desmite do ligamento suspensor do boleto está frequentemente associada a tendinites dos tendões flexores, devido à atuação conjunta dessas estruturas no suporte do boleto. Alterações podais, síndrome do navicular, osteoartrite da articulação metacarpofalângica (boleto) e desequilíbrios de aprumos também podem aumentar a sobrecarga sobre o ligamento, favorecendo o aparecimento da lesão. Em casos crônicos, a hiperextensão do boleto pode predispor ao desenvolvimento de alterações articulares degenerativas e comprometer outras estruturas do aparelho suspensor.",
          },
        ],  
         

        references: [
          "THOMASSIAN, A. Enfermidades dos Cavalos. 4. ed. São Paulo: Varela, 2005.",
          "STASHAK, T. S. Claudicação em Equinos Segundo Adams. 5. ed. São Paulo: Roca, 2006.",
          "AUER, J. A.; STICK, J. A. Cirurgia Equina. Rio de Janeiro: Elsevier, 2012.",
          "REEF, V. B. Ultrassonografia de Equinos. São Paulo: Roca, 2000.",
          "KÖNIG, H. E.; LIEBICH, H. G. Anatomia dos Animais Domésticos: Texto e Atlas Colorido. 6. ed. Porto Alegre: Artmed, 2016.",
          "FEITOSA, F. L. F. Semiologia Veterinária: A Arte do Diagnóstico. 4. ed. São Paulo: Roca, 2020.",
          "ROSS, M. W.; DYSON, S. J. Diagnosis and Management of Lameness in the Horse. St. Louis: Elsevier, 2011..",
        ],
      },
      {
        id: "artrite",
        title: "Artrite",
        shortTitle: "Artrite",
        region: "Articulações",
        overview: "",

        sections: [
          {
            id: "anatomia",
            title: "Anatomia",
            type: "text",
            content: "A artrite é uma afecção inflamatória que acomete as articulações sinoviais, podendo afetar diversas articulações do membro torácico equino, como a articulação metacarpofalangeana (boleto), interfalangeana proximal (quartela), interfalangeana distal (casco) e articulações do carpo. As articulações são formadas por superfícies ósseas revestidas por cartilagem articular, cápsula articular e líquido sinovial, estruturas responsáveis por permitir movimentos suaves e absorver impactos.",
            images: [
              {
                src: articulacoes,
                alt: "Articulação sinovial",
                title: "Articulação sinovial",
                caption: "Figura 1. Articulações do membro torácico distal equino.",
                explanation:
                  "A articulação sinovial é a que permite maior amplitude de movimento, graças ao espaçamento entre os ossos permitido pela cápsula articular. A cápsula é composta por membrana fibrosa, protetora, e a membrana sinovial, responsável pela produção de líquido sinovial. A cartilagem articular recobre as superfícies ósseas, permitindo o deslizamento suave durante a movimentação. Como a cartilagem não é inervada, a dor articular é percebida principalmente quando há perda dessa cartilagem e exposição do osso subcondral, que é inervado. A inflamação articular pode levar à produção excessiva de líquido sinovial, causando efusão articular e aumento de volume, na tentativa de lubrificar a articulação e reduzir o atrito entre as superfícies ósseas.",
                source: "Acervo do Laboratório de Anatomia e Patologia Animal - UFAPE",
              },
            ]
          },
          {
            id: "biomecanica",
            title: "Biomecânica",
            type: "text",
            content: "As articulações distribuem as forças geradas durante a locomoção e permitem a movimentação dos membros. Quando submetidas a sobrecarga excessiva ou processos inflamatórios, ocorre comprometimento da cartilagem articular e das estruturas adjacentes, resultando em dor, redução da mobilidade e prejuízo ao desempenho atlético."
          },
          {
            id: "etiologia",
            title: "Etiologia",
            type: "list",
            content: "",
            items: [
              "Traumatismos;",
              "Exercício excessivo;",
              "Sobrecarga esportiva;",
              "Fraturas articulares;",
              "Infecções articulares;",
              "Desequilíbrios podais;",
              "Idade avançada;",
              "Alterações de conformação."
            ]
          },
          {
            id: "fisiopatologia",
            title: "Fisiopatologia",
            type: "text",
            content: "O processo inflamatório provoca alterações na membrana sinovial, aumento da produção de mediadores inflamatórios e degradação progressiva da cartilagem articular. A inflamação leva ao aumento da produção de líquido sinovial, dor e redução da capacidade de absorção de impacto da articulação. Em casos persistentes, pode evoluir para artrose, caracterizada por alterações degenerativas permanentes. A artrite pode ser classificada em séptica, quando há infecção articular, ou não séptica, quando resulta de trauma, desgaste ou sobrecarga mecânica."
          },
          {
            id: "sinais",
            title: "Sinais Clínicos",
            type: "list",
            content: "",
            items: [
              "Claudicação;",
              "Dor à movimentação;",
              "Aumento de volume articular;",
              "Calor local;",
              "Sensibilidade à palpação;",
              "Rigidez articular;",
              "Redução da amplitude dos movimentos;",
              "Diminuição do desempenho esportivo;",
              "Espessamento da cápsula articular."
            ]
          },
          {
            id: "diagnostico",
            title: "Diagnóstico",
            type: "list",
            content: "",
            subsections: [
              {
                title: "Anamnese",
                items: [
                  "Histórico de trauma;",
                  "Procedimentos intra-articulares recentes;",
                  "Queda de desempenho;",
                  "Presença de feridas próximas à articulação.",
                ],
              },
              {
                title: "Exame Clínico",
                items: [
                  "Claudicação;",
                  "Efusão articular;",
                  "Dor à flexão;",
                  "Limitação dos movimentos.",
                ],
              },
              {
                title: "Características da artrite",
                items: [
                  "Alterações da cartilagem articular",
                  "Aumento de volume articular",
                ],
              },
            ],
            images: [
              {
                src: esquema_artrite,
                alt: "Artrite",
                title: "Características da artrite:",
                caption: "Fig.1: Representação esquemática do aspecto radiográfico das fases das artrites.",
                explanation:
                  "A. Articulação normal. B. Primeira fase ou fase de alargamento, cuja lâmina óssea subcondral pode aparecer descontínua. C. Segunda fase ou fase de pinçamento, caracterizada por ossificação subcondral, formação de osteófitos e entesófitos. D. Terceira fase ou fase de desaparecimento, caracterizada por anquilose. As cartilagens articulares estão representadas em azul e não são vistas radiograficamente. As setas mostram os entesófitos. ",
                source: "SOUZA, Anderson Fernando de; GRANELLA, Milena Carol Sbrussi; HAGEN, Stefano Carlo Filippo. Guia de posicionamento radiográfico em equinos. São Paulo: Faculdade de Medicina Veterinária e Zootecnia da Universidade de São Paulo, 2023.",
              }              
            ],
          },
          {
            id: "imagem",
            title: "Exame de Imagem",
            type: "composite",
            content: "",
            subsections: [
              {
                title: "Projeções Radiográficas",
                items: [
                  "Projeção DP - dorsopalmar",
                  "Projeção LM - lateromedial",
                  "Dorso45º - lateral-palmaromedial (D45L-PaM)",
                  "Dorso45º - medial-palmarolateral (D45M-PaL)",
                  "Lateromedial flexionada (LM flex)",
                ],
              },
              {
                title: "Achados Radiográficos",
                items: [
                  "Aumento do espaço articular na fase inflamatória inicial;",
                  "Osteófitos;",
                  "Esclerose óssea subcondral;",
                  "Remodelamento ósseo periarticular;",
                  "Fragmentos osteocondrais.",
                ],
            },
            ],
            images: [
              {
                src: artrite,
                alt: "Artrite",
                title: "Posicionamento radiográfico",
                caption: "Fig.1: Posicionamento radiográfico para avaliação da articulação metacarpofalângica (boleto) em um equino.",
                explanation: "",
                source: "SOUZA, Anderson Fernando de; GRANELLA, Milena Carol Sbrussi; HAGEN, Stefano Carlo Filippo. Guia de posicionamento radiográfico em equinos. São Paulo: Faculdade de Medicina Veterinária e Zootecnia da Universidade de São Paulo, 2023.",
              },
              { 
                src: calcificacao,
                alt: "Calcificação",
                title: "Calcificação da cartilagem alar",
                caption: "Fig.2: Imagens radiográficas (A, B, C, D e E) calcificação da cartilagem alar (setas vermelhas).",
                explanation:
                  "",
                source: "SILVA, Gabriela Oliveira Lamarca da et al. Alterações radiográficas em equinos da raça Puro Sangue Lusitano entre 3 e 4 anos – relato de caso. Revista Agrária Acadêmica, v. 7, n. 1, p."
              }
            ],
          },
          {
            id: "tratamento",
            title: "Tratamento",
            type: "list",
            content: "",
            subsections: [
              {
                title: "Tratamento Conservador",
                items: [
                  "Repouso controlado;",
                  "Antiinflamatórios não esteroidais;",
                  "Controle da atividade física;",
                  "Correção de desequilíbrios podais.",
                ],
              },
              {
                title: "Tratamento Intra-articular",
                items: [
                  "Ácido hialurônico;",
                  "Corticosteroides;",
                  "Terapias biológicas.",
                ],
              },
              {
                title: "Terapias Regenerativas",
                items: [
                  "PRP (Plasma Rico em Plaquetas);",
                  "RAP;",
                  "Células-tronco.",
                ],
              },
              {
                title: "Tratamento da Artrite Séptica",
                items: [
                  "Lavagem articular;",
                  "Antibioticoterapia sistêmica e intra-articular;",
                  "Artroscopia em casos indicados.",
                ],
              },
            ],
          },
          {
            id: "relacoes",
            title: "Relação com Outras Patologias",
            type: "text",
            content: "A artrite frequentemente está associada a fraturas articulares, osteocondrose, artrose, desmite do ligamento suspensor do boleto e tendinites, uma vez que alterações biomecânicas e inflamatórias podem aumentar a sobrecarga sobre as articulações. Além disso, lesões crônicas dos tendões e ligamentos podem alterar a distribuição de forças no membro, favorecendo o desenvolvimento de inflamação articular. Quando não tratada adequadamente, a artrite pode evoluir para osteoartrite (artrose), caracterizada por degeneração progressiva da cartilagem e perda permanente da função articular."
          },
        ],
        references: [
          "THOMASSIAN, A. Enfermidades dos Cavalos. 4. ed. São Paulo: Varela, 2005.", 
          "STASHAK, T. S. Claudicação em Equinos Segundo Adams. 5. ed. São Paulo: Roca, 2006.",
          "AUER, J. A.; STICK, J. A. Cirurgia Equina. Rio de Janeiro: Elsevier, 2012.", 
          "FEITOSA, F. L. F. Semiologia Veterinária: A Arte do Diagnóstico. 4. ed. São Paulo: Roca, 2020.", 
          "KÖNIG, H. E.; LIEBICH, H. G. Anatomia dos Animais Domésticos: Texto e Atlas Colorido. 6. ed. Porto Alegre: Artmed, 2016.", 
          "RADOSTITS, O. M. et al. Clínica Veterinária: Um Tratado de Doenças dos Bovinos.",
          "AUER, J. A.; STICK, J. A. Cirurgia Equina. Rio de Janeiro: Elsevier, 2012.",
          "FEITOSA, F. L. F. Semiologia Veterinária: A Arte do Diagnóstico. 4. ed. São Paulo: Roca, 2020.",
          "KÖNIG, H. E.; LIEBICH, H. G. Anatomia dos Animais Domésticos: Texto e Atlas Colorido. 6. ed. Porto Alegre: Artmed, 2016.",
          "RADOSTITS, O. M. et al. Clínica Veterinária: Um Tratado de Doenças dos Bovinos,Ovinos, Suínos, Caprinos e Equinos. 10. ed. Rio de Janeiro: Guanabara Koogan, 2010.",
          "ROSS, M. W.; DYSON, S. J. Diagnosis and Management of Lameness in the Horse. St. Louis: Elsevier, 2011.",
          "SILVA, Gabriela Oliveira Lamarca da; PAVAN, Ana Luíza Bernardes; MORAIS, Bianca Costa de; et al. Alterações radiográficas em equinos da raça Puro Sangue Lusitano entre 3 e 4 anos: relato de caso. Revista Agrária Acadêmica, Imperatriz, v. 7, n. 1, p. 79-84, 2024.",
        ],
      },
      {
        id: "navicular",
        title: "Doença do Navicular",
        shortTitle: "Doença do Navicular",
        region: "sesamoide distal",
        overview: "",
        sections: [
          {
            id: "anatomia",
            title: "Anatomia",
            type: "text",
            content:
              "A doença do navicular acomete o complexo podotroclear, formado pelo osso navicular (sesamoide distal), bursa podotroclear, ligamentos sesamoidianos distais e pela porção do tendão flexor digital profundo (TFDP) que desliza sobre a superfície flexora do osso navicular. Essas estruturas localizam-se na região palmar do casco e desempenham papel fundamental na absorção de impactos e na movimentação da articulação interfalangeana distal.",
            images: [
              {
                src: navicular_anatomia,
                alt: "Doença do Navicular",
                title: "Osso navicular",
                caption: "Fig.1: Vista palmar dos ossos do membro distal equino, mostrando o osso navicular (sesamoide distal), indicado nos números 13 a 16.",
                explanation:
                  "",
                source: "DENOIX, Jean-Marie. The equine distal limb: an atlas of clinical anatomy and comparative imaging. CRC Press, 2025.",
              },
            ],
          },
          {
            id: "biomecanica",
            title: "Biomecânica",
            type: "text",
            content:
              "Durante a locomoção, especialmente em velocidades elevadas e durante mudanças bruscas de direção, o osso navicular e as estruturas associadas suportam elevadas forças compressivas e de tração. O tendão flexor digital profundo exerce pressão constante sobre o osso navicular, funcionando como uma polia que auxilia a movimentação do membro. Alterações biomecânicas podem aumentar a sobrecarga sobre o complexo podotroclear, favorecendo o desenvolvimento da doença.",
          },
          {
            id: "etiologia",
            title: "Etiologia",
            type: "list",
            content: "",
            items: [
              "Exercício repetitivo;",
              "Trabalho em pisos rígidos;",
              "Ferrageamento inadequado;",
              "Sobrecarga esportiva;",
              "Conformação inadequada dos cascos (talões baixos e pinças longas);",
              "Defeitos de aprumo;",
              "Atualmente, considera-se que a doença do navicular possui origem multifatorial, envolvendo alterações ósseas, ligamentares, tendíneas e vasculares.",
            ]
          },
          {
            id: "fisiopatologia",
            title: "Fisiopatologia",
            type: "text",
            content:
              "A doença do navicular caracteriza-se por alterações degenerativas e inflamatórias do complexo podotroclear. Ocorrem mudanças na vascularização do osso navicular, remodelamento ósseo, degeneração da cartilagem, inflamação da bursa podotroclear e lesões do tendão flexor digital profundo. Com a progressão da doença, essas alterações resultam em dor crônica e comprometimento da função locomotora."
          },
          {
            id: "sinais",
            title: "Sinais Clínicos",
            type: "list",
            content: "",
            subsections: [
              {
                title: "Fase Inicial",
                items: [
                  "Claudicação discreta e intermitente;",
                  "Passadas curtas;",
                  "Tropeços frequentes;",
                  "Redução do desempenho esportivo.",
                ],
              },
              {
                title: "Fase Avançada",
                items: [
                  "Claudicação;",
                  "Apoio preferencial da pinça do casco;",
                  "Dor durante testes de flexão;",
                  "Claudicação bilateral dos membros torácicos."
                ],
              },
            ],
          },
          {
            id: "diagnostico",
            title: "Diagnóstico",
            type: "list",
            content: "",
            subsections: [
              {
                title: "Anamnese",
                items: [
                  "Histórico esportivo;",
                  "Evolução da claudicação;",
                  "Tipo de ferrageamento;",
                  "Condições de manejo e treinamento.",
                ],
              },
              {
                title: "Exame Clínico",
                items: [
                  "Claudicação;",
                  "Resposta à pinça de casco;",
                  "Testes de flexão;",
                  "Alterações de aprumo e casqueamento.",
                ]
              },
              {
                title: "Bloqueio anestésico digital palmar",
                items: ["Resposta ao bloqueio anestésico"],
              },
            ],
          },
           {
            id: "imagem",
            title: "Exame de Imagem",
            type: "composite",
            content: "",
            subsections: [
              {
                title: "Projeções Radiográficas",
                items: [
                  "Lateromedial (LM);",
                  "Dorsopalmar (DP);",
                  "Dorsoproximal-palmarodistal oblíqua (Skyline).",
                ],
              },
              {
                title: "Achados Radiográficos",
                items: [
                  "remodelamento;", "aumento dos canais sinoviais;", "esclerose medular;", "irregularidades corticais;", "cistos ósseos."
                ],
            },
            ],
            images: [
              {
                src: doenca_navicular,
                alt: "doencaNavicular",
                title: "Posicionamento radiográfico",
                caption: "Fig.1: Posicionamento radiográfico para avaliação da doença do navicular .",
                explanation: "",
                source: "SOUZA, Anderson Fernando de; GRANELLA, Milena Carol Sbrussi; HAGEN, Stefano Carlo Filippo. Guia de posicionamento radiográfico em equinos. São Paulo: Faculdade de Medicina Veterinária e Zootecnia da Universidade de São Paulo, 2023.",
              },
              { 
                src: posicoes_navicular,
                alt: "navicular",
                title: "Graus de alteração do osso navicular",
                caption: "Fig.2: Características de alteração do osso navicular.",
                explanation:
                "Projeção dorsoproximal palmarodistal oblíqua (Skyline): A – Normal; B – Entesófito de remodelamento na extremidade e borda proximal irregular; C – Invaginações em forma de pirulito na borda distal; D – Formação de lesão cística. Projeção lateromedial: A – normal; B – Perfil navicular alongado causado pelo remodelamento (formação entesofítica); C – Erosão do córtex flexor; D – Formação da lesão cística. Projeção palmaroproximal palmarodistal: A – Normal; B – Erosão do córtex flexor; C – Fossa alargada e erosão em córtex flexor; D – Formação da lesão cística. (Modificado com permissão de Richard Park, Fort Collins, Colo.)",
                source: "BEZERRA, Helen. Síndrome do navicular: sinais clínicos e tratamento. Blog Equinovet, 19 out. 2021. Atualizado em 6 mar. 2026. "
              },
              {
                src: lateral_navicular,
                alt: "doencaNavicular",
                title: "Posicionamento lateral",
                caption: "Fig.3: Projeções laterais do osso navicular.",
                explanation: "A – Osso navicular normal. B – Alongamento proximal causado por remodelamento. C – Entesófito (esporão) na borda proximal (seta preta) e lise do córtex flexor (seta branca).",
                source: "BEZERRA, Helen. Síndrome do navicular: sinais clínicos e tratamento. Blog Equinovet, 19 out. 2021. Atualizado em 6 mar. 2026.",
              },
              { src: skyline_navicular,
                alt: "doencaNavicular",
                title: "Skyline do osso navicular",
                caption: "Fig.4: Projeções dorsoproximal-palmarodistal oblíqua (Skyline) do osso navicular.",
                explanation: "A – Osso navicular normal. B – Alargamento da invaginações sinoviais da borda navicular distal. C – Invaginações sinoviais em forma de pirulito da borda navicular distal. D – Cavitação cística sobre o plano da cavidade medular do navicular. E – Grande entesófito (seta branca) na margem lateral do osso navicular.",
                source: "BEZERRA, Helen. Síndrome do navicular: sinais clínicos e tratamento. Blog Equinovet, 19 out. 2021. Atualizado em 6 mar. 2026. ",
              },   
              { src: dorsopalmar_navicular,
                alt: "doencaNavicular",
                title: "Projeção dorsopalmar do osso navicular",
                caption: "Fig.5: Projeções dorsopalmar do osso navicular.",
                explanation: "A – Visualização do aumento das invaginações sinoviais em borda distal. B – Erosões do córtex flexor (setas) resultam na perda do contorno flexor regular normal. C – Grande lise cortical focal causando descontinuidade do córtex flexor na eminência central. D – Esclerose óssea subcondral na porção central da cavidade medular.",
                source: "BEZERRA, Helen. Síndrome do navicular: sinais clínicos e tratamento. Blog Equinovet, 19 out. 2021. Atualizado em 6 mar. 2026.",
              },          
           ],
          },
          {
            id: "tratamento",
            title: "Tratamento",
            type: "list",
            content: "",
            subsections: [
              {
                title: "Tratamento Conservador",
                items: [
                  "Controle da atividade física;",
                  "Antiinflamatórios não esteroidais;",
                  "Ferrageamento corretivo;",
                  "Casqueamento terapêutico.",
                ],
              },
              {
                title: "Tratamento Medicamentoso",
                items: [
                  "Vasodilatadores periféricos;",
                  "Bisfosfonatos;",
                  "Analgésicos.",
                ],
              },
              {
                title: "Terapias Complementares",
                items: ["PRP;", "Terapias regenerativas;", "Fisioterapia."],
              },
              {
                title: "Casos específicos",
                items: [
                  "Neurectomia digital palmar. Entretanto, o procedimento não elimina a progressão da doença e deve ser cuidadosamente avaliado.",
                ],
              },
            ],
          },
          {
            id: "relacoes",
            title: "Relação com Outras Patologias",
            type: "text",
            content:
              "A doença do navicular apresenta forte relação com tendinite do tendão flexor digital profundo, devido ao contato direto dessa estrutura com o osso navicular. Também pode estar associada a desmite dos ligamentos sesamoidianos distais, osteoartrite da articulação interfalangeana distal, alterações de casqueamento e desequilíbrios podais. Além disso, a dor crônica causada pela síndrome navicular pode modificar a biomecânica do membro, favorecendo o desenvolvimento de lesões compensatórias em tendões, ligamentos e articulações proximais.",
          },
        ],
        references: [
          "THOMASSIAN, A. Enfermidades dos Cavalos. 4. ed. São Paulo: Varela, 2005.",
          "STASHAK, T. S. Claudicação em Equinos Segundo Adams. 5. ed. São Paulo: Roca, 2006.",
          "AUER, J. A.; STICK, J. A. Cirurgia Equina. Rio de Janeiro: Elsevier, 2012.",
          "REEF, V. B. Ultrassonografia de Equinos. São Paulo: Roca, 2000.",
          "KÖNIG, H. E.; LIEBICH, H. G. Anatomia dos Animais Domésticos: Texto e Atlas Colorido. 6. ed. Porto Alegre: Artmed, 2016.",
          "FEITOSA, F. L. F. Semiologia Veterinária: A Arte do Diagnóstico. 4. ed. São Paulo: Roca, 2020.",
          "ROSS, M. W.; DYSON, S. J. Diagnosis and Management of Lameness in the Horse. St. Louis: Elsevier, 2011.",
          "DYCE, K. M.; SACK, W. O.; WENSING, C. J. G. Tratado de Anatomia Veterinária. 5. ed. Rio de Janeiro: Elsevier, 2019.",
        ],
      },
    ],
  },
  {
    id: "imagem",
    label: "Diagnóstico por Imagem",
    icon: "image",
  },
];

export const anatomyRegions = [
  {
    id: "carpo",
    name: "Carpo",
    description:
      "Articulação composta pelas fileiras proximal e distal dos ossos do carpo, permitindo movimentos de flexão e extensão.",
    structures: [
      "Osso rádio",
      "Osso ulna (rudimentar)",
      "Ossos da fileira proximal: radial, intermédio, ulnar e acessório",
      "Ossos da fileira distal: cárpico primeiro e segundo, cárpico terceiro (CIII) e cárpico quarto (CIV)",
    ],
  },
  {
    id: "metacarpo",
    name: "Região Metacarpiana",
    description:
      "Composta pelo terceiro metacarpiano (cânon) e pelos metacarpianos acessórios II e IV (ossos de flauta).",
    structures: [
      "Terceiro metacarpiano (MC III) — osso principal",
      "Segundo metacarpiano (MC II) — medial",
      "Quarto metacarpiano (MC IV) — lateral",
      "Ligamentos interósseos",
      "Tendão flexor digital superficial",
      "Tendão flexor digital profundo",
      "Ligamento suspensor do boleto",
    ],
  },
  {
    id: "boleto",
    name: "Articulação do Boleto",
    description:
      "Articulação metacarpofalangeana formada pela epífise proximal do MC III e a base da falange proximal, com ossos sesamóides proximais.",
    structures: [
      "Epífise proximal do MC III",
      "Base da falange proximal (P1)",
      "Ossos sesamóides proximais (medial e lateral)",
      "Ligamentos sesamóideos reto e oblíquos",
      "Cápsula articular",
    ],
  },
  {
    id: "pastern",
    name: "Quartela",
    description:
      "Região entre o boleto e o casco, envolvendo as falanges proximal e média e suas articulações.",
    structures: [
      "Falange proximal (P1)",
      "Falange média (P2)",
      "Articulação interfalangeana proximal",
      "Ligamentos colaterais",
      "Bainha tendinosa digital",
    ],
  },
  {
    id: "casco",
    name: "Casco e Falange Distal",
    description:
      "Estrutura de revestimento queratinizado que protege e envolve a falange distal, o osso navicular e as estruturas associadas.",
    structures: [
      "Falange distal (P3) — osso do casco",
      "Osso navicular (sesamóide distal)",
      "Articulação interfalangeana distal",
      "Ligamento sesamóideo distal ímpar",
      "Bursa podotrocleal",
      "Lâminas sensíveis e insensíveis",
    ],
  },
];


export const imagingModalities: ImagingModality[] = [
  {
    id: "rx",
    name: "Radiografia",
    shortName: "RX",
    description:
      "Método de eleição para avaliação de estruturas ósseas. Permite identificar fraturas, remodelação óssea, osteólise e alterações articulares.",
    views: [
      { code: "DP", name: "Dorsopalmar" },
      { code: "LM", name: "Lateromedial" },
      { code: "DMPLO", name: "Dorsomedial-palmarolateral oblíqua" },
      { code: "DLPMO", name: "Dorsolateral-palmaromedial oblíqua" },
    ],
    indications: [
      "Fraturas e luxações",
      "Osteoartrite",
      "Osteomielite",
      "Alterações naviculares",
      "Avaliação pré-cirúrgica",
    ],
    images: [
      {
        src: posicionamento_radiografico,
        alt: "Posicionamento radiográfico do membro torácico equino",
        explanation:
          "Exemplos de posicionamento para a realização de exames radiográficos em equinos.",
        source: "SOUZA, Anderson Fernando de; GRANELLA, Milena Carol Sbrussi; HAGEN, Stefano Carlo Filippo. Guia de posicionamento radiográfico em equinos. São Paulo: Faculdade de Medicina Veterinária e Zootecnia da Universidade de São Paulo, 2023.",
      },
    ],
  },
  {
    id: "us",
    name: "Ultrassonografia",
    shortName: "US",
    description:
      "Método de escolha para avaliação de tecidos moles: tendões, ligamentos, bainhas e estruturas vasculares. Permite avaliação em tempo real.",
    indications: [
      "Tendinites (TFDS, TFDP)",
      "Desmites (ligamento suspensor)",
      "Efusão sinovial",
      "Avaliação pós-tratamento",
      "Guia para infiltrações",
    ],
    images: [
      {
        src: posicoes_imagem_transversal,
        alt: "Posicionamento transversal da sonda durante ultrassonografia equina",
        explanation:
          "Vista transversal do posicionamento da sonda ultrassonográfica para avaliação do membro equino.",
        source: "KIDD, Jessica A.; LU, Kristina G.; FRAZER, Michele L. (ed.). Atlas of equine ultrasonography. 1. ed. Chichester: John Wiley & Sons, 2014.",
      },
      {
        src: posicoes_imagem_longitudinal,
        alt: "Posicionamento longitudinal da sonda durante ultrassonografia equina",
        explanation:
          "Vista longitudinal do posicionamento da sonda ultrassonográfica para avaliação do membro equino.",
        source: "KIDD, Jessica A.; LU, Kristina G.; FRAZER, Michele L. (ed.). Atlas of equine ultrasonography. 1. ed. Chichester: John Wiley & Sons, 2014.",
      },
    ],
  },
  {
    id: "rm",
    name: "Ressonância Magnética",
    shortName: "RM",
    description:
      "Permite avaliação detalhada de osso e tecidos moles simultaneamente. Indicada quando RX e US são inconclusivos, especialmente para patologia do casco.",
    indications: [
      "Doença do navicular (síndrome podotroclear)",
      "Fraturas por estresse",
      "Lesões de cartilagem",
      "Patologias intracapsulares",
      "Casos refratários ao tratamento",
    ],
    images: [
      {
        src: ressonancia,
        alt: "ressonância magnética equina",
        explanation:
          "Imagem dorsal ponderada em T2, obtida pela técnica de eco de gradiente 3D, de um cavalo com histórico de duas semanas de claudicação grave no membro torácico esquerdo. O lado medial está à direita. Observa-se aumento de volume do ligamento colateral medial da articulação interfalângica distal (seta) e aumento focal da intensidade de sinal na região de inserção do ligamento colateral na falange distal (ponta de seta). Este cavalo apresentava evidências radiográficas de osteólise no local de inserção do ligamento colateral medial da articulação interfalângica distal na falange distal.",
        source: "Gutierrez-Nibeyro, S.D., White, N.A., II, Werpy, N.M., Tyrrell, L., Allen, K.A., Sullins, K.E. and Mitchell, R.D. (2009), MAGNETIC RESONANCE IMAGING FINDINGS OF DESMOPATHY OF THE COLLATERAL LIGAMENTS OF THE EQUINE DISTAL INTERPHALANGEAL JOINT. Veterinary Radiology & Ultrasound, 50: 21-31.",
      },
    ],
  },
  {
    id: "tc",
    name: "Tomografia Computadorizada",
    shortName: "TC",
    description:
      "Excelente para avaliação tridimensional de estruturas ósseas complexas. Útil no planejamento cirúrgico de fraturas cominutivas.",
    indications: [
      "Fraturas cominutivas",
      "Planejamento cirúrgico",
      "Avaliação de enxertos",
      "Lesões carpianas complexas",
    ],
    images: [
      {
        src: tomografia,
        alt: "tomografia computadorizada equina",
        explanation:
          "Regiões de interesse (ROIs; círculos) e zonas (EAN média calculada a partir de todas as ROIs incluídas em uma área anatômica; linhas) na face palmar/plantar da articulação do boleto anterior em uma imagem transversal monoenergética (tomografia computadorizada espectral baseada em detector, Philips) no nível médio dos ossos sesamoides proximais (OSPs): ROIs no osso subcondral dos côndilos metacarpais/metatarsais medial e lateral (zona MC/MT palmar/plantar; linha contínua), no osso subcondral dorsal dos OSPs medial e lateral (zona do OSP; linha tracejada) e na zona da articulação do boleto (FJ) palmar/plantar (linha retangular contínua).",
        source: "Steiner J, Richter H, Kaufmann R, Ohlerth S. Characterization of Normal Bone in the Equine Distal Limb with Effective Atomic Number and Electron Density Determined with Single-Source Dual Energy and Detector-Based Spectral Computed Tomography. Animals. 2024; 14(7):1064.",
      },
    ],
  },
];
