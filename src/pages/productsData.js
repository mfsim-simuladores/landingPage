export const products = [
    // 1
    {
        name: 'SMC208',
        id: 'SMC208',
        imageText: 'SIMULADOR CESSNA CARAVAN C208',
        description: 'Simulador capaz de reproduzir procedimentos IFR, familiarização e sistemas baseados na aeronave real.',
        imageAlt: 'Simulador Cessna Caravan C208 em ambiente escuro.',
        imageSrc: "/imagens/SMC208.jpg",
        pricing: {
            price: 'Sob Consulta'
        }
    },
    // 2
    {
        name: 'SMB58 G1000',
        id: 'SMB58-G1000',
        imageText: 'SIMULADOR BARON 58 G1000',
        imageSrc: '/imagens/B58G1000.jpg',
        description: 'Simulador multi-motor, modelo B58. Completo para procedimentos IFR.',
        imageAlt: 'Simulador do Baron 58',
        details: [
            {
                title: ' ',
                content: `O MFSim SMB58-G1000 é um simulador de voo completo inspirado no consagrado Beechcraft Baron 58, agora equipado com o avançado sistema  de aviônicos G1000.
                            Desenvolvido para proporcionar imersão total, realismo operacional e ergonomia fiel à aeronave real, o SMB58-G1000 oferece integração completa com as principais plataformas de simulação de voo do mercado.
                            Com o padrão de qualidade MFSim, o sistema combina robustez, precisão e confiabilidade profissional.`
            },
            {
                title: 'Paineis Modulares e Expansíveis',
                content: {
                    paragraphs: [
                        "A MFSim oferece um sistema modular, permitindo que cada painel seja adquirido separadamente, de acordo com sua necessidade ou espaço disponível. Monte seu cockpit de forma personalizada, com compatibilidade total entre os módulos.",
                        "Sistema completo para seu voo! O SMB58-G1000 inclui todos os comandos essenciais para uma simulação realista e precisa:"
                    ],
                    list: [
                        "Yokes modelo Baron, disponíveis em versões simples ou duplo comando linkado;",
                        "Manetes de potência, mistura e passo de hélice com sensação autêntica;",
                        "Painel G1000 completo (PFD + MFD) com autopilot integrado e funcional;",
                        "Magnetos, luzes, pitot heat, bomba de combustível, flaps, gear, masters, rádios e instrumentos operacionais;",
                        "Elevator trim e parking brake com resposta física realista;",
                        "Compatibilidade total com X-Plane e Microsoft Flight Simulator, garantindo sincronismo perfeito de dados e exibição dos instrumentos em tempo real."
                    ]
                }
            },
            {
                title: 'Requisitos Técnicos',
                content: {
                    paragraphs: [
                        `Para funcionamento do painel completo:`],
                        list: [ `5 portas USB disponíveis`, `2 saídas de vídeo (HDMI ou DisplayPort)`]
                }
            },
            {
                title: 'Incluso no Pacote',
                content: {
                    paragraphs: [ `* Sob condições e horários definidos pelo fabricante. ** Consulte áreas atendidas para frete gratuito.`],
                    list: [
                        `Suporte à instalação remota*`,
                        `Softwares e licenças de operação`,
                        `Frete grátis para regiões cobertas**`,
                        `Manual técnico detalhado com instruções e mapeamento dos comandos`,

                    ]
                }
            },
            {
                title: 'Versão HOME',
                content: `Esta versão é destinada exclusivamente a uso não homologável (recreativo ou treinamento doméstico).
                        Para a versão certificada e homologável, entre em contato com nossa equipe técnica.`
            }
        ],
        pricing: {
            items: [
                {
                    name: "MÓDULO 1 (com comando simples)",
                    price: "R$ 3.200,00",
                    description: "À vista ou até 12x (consultar valor)"
                },
                {
                    name: "MÓDULO 1 (com DUPLO comando)",
                    price: "R$ 4.200,00",
                    description: "À vista ou até 12x (consultar valor)"
                },
                {
                    name: "MÓDULO 2",
                    price: "R$ 8.000,00",
                    description: "À vista ou até 12x (consultar valor)"
                },
                {
                    name: "MÓDULO 3",
                    price: "R$ 7.700,00",
                    description: "À vista ou até 12x (consultar valor)"
                },
                {
                    name: "CONSOLE THROTTLE (4)",
                    price: "R$ 2.300,00",
                    description: "À vista ou até 12x (consultar valor)"
                },
                {
                    name: "RUDDER PEDAL (SINGLE)",
                    price: "R$ 1.900,00",
                    description: "À vista ou até 12x (consultar valor)"
                },
                {
                    name: "RUDDER PEDAL (DUPLO)",
                    price: "R$ 3.400,00",
                    description: "À vista ou até 12x (consultar valor)"
                },
            ]
        }
    },

    // 3
    {
        name: 'SMB58',
        id: 'SMB58',
        imageText: 'SIMULADOR BARON 58',
        imageSrc: '/imagens/B58.jpg',
        description: 'Simulador multi-motor, modelo B58. Completo para procedimentos IFR.',
        imageAlt: 'Simulador do Baron 58',
        details: [
            {
                title: '',
                content: `O MFSim SMB58 é um simulador de voo completo inspirado no lendário Beechcraft Baron 58, desenvolvido para entregar realismo absoluto, ergonomia fiel à aeronave real e integração total com os principais simuladores de voo do mercado.
                        Projetado com o padrão de qualidade MFSim, o sistema oferece robustez, precisão e imersão incomparável.`
            },
            {
                title: 'Paineis Modulares e Expansíveis',
                content: {
                    paragraphs: [
                        `A MFSim oferece um sistema modular, permitindo que cada painel seja adquirido separadamente, de acordo com sua necessidade ou espaço disponível. Monte seu cockpit de forma personalizada, com compatibilidade total entre os módulos.
                            Sistema completo para seu voo!
                            O SMB58 oferece todos os comandos essenciais para um voo completo e realista:`
                    ],
                    list: [
                        "Yokes modelo Baron, disponíveis em versões simples ou duplo comando linkado;",
                        "Manetes de potência, mistura e passo de hélice com sensação autêntica;",
                        "Autopilot funcional integrado ao simulador;",
                        "Painel com magnetos, luzes, pitot heat, bomba de combustível, flaps, gear, masters, rádio e instrumentos operacionais;",
                        "Elevator trim e parking brake com resposta física;",
                        "GNS430 funcional integrado ao painel para navegação."
                    ]
                }
            },
            {
                title: 'Requisitos Técnicos',
                content: {
                    paragraphs: [
                        `Para funcionamento do painel completo:`],
                        list: [ `4 portas USB disponíveis`, `2 saídas de vídeo (HDMI ou DisplayPort)`]
                }
            },
            {
                title: 'Incluso no Pacote',
                content: {
                    paragraphs: [ `* Sob condições e horários definidos pelo fabricante. ** Consulte áreas atendidas para frete gratuito.`],
                    list: [
                        `Suporte à instalação remota*`,
                        `Softwares e licenças de operação`,
                        `Frete grátis para regiões cobertas**`,
                        `Manual técnico detalhado com instruções e mapeamento dos comandos`,

                    ]
                }
            },
            {
                title: 'Versão HOME',
                content: `Esta versão é destinada exclusivamente a uso não homologável (recreativo ou treinamento doméstico).
                        Para a versão certificada e homologável, entre em contato com nossa equipe técnica.`
            }

        ],
        pricing: {
            items: [
                {
                    name: "MÓDULO 1 (com comando simples)",
                    price: "R$ 3.200,00",
                    description: "À vista ou até 12x (consultar valor)"
                },
                {
                    name: "MÓDULO 1 (com DUPLO comando)",
                    price: "R$ 4.200,00",
                    description: "À vista ou até 12x (consultar valor)"
                },
                {
                    name: "MÓDULO 2",
                    price: "R$ 4.300,00",
                    description: "À vista ou até 12x (consultar valor)"
                },
                {
                    name: "MÓDULO 3",
                    price: "R$ 4.000,00",
                    description: "À vista ou até 12x (consultar valor)"
                },
                {
                    name: "CONSOLE THROTTLE (4)",
                    price: "R$ 2.300,00",
                    description: "À vista ou até 12x (consultar valor)"
                },
                {
                    name: "RUDDER PEDAL (SINGLE)",
                    price: "R$ 1.900,00",
                    description: "À vista ou até 12x (consultar valor)"
                },
                {
                    name: "RUDDER PEDAL (DUPLO)",
                    price: "R$ 3.400,00",
                    description: "À vista ou até 12x (consultar valor)"
                },
            ]
        }
    },

    // 4
    {
        name: 'SMC172',
        id: 'SMC172',
        imageText: 'SIMULADOR CESSNA 172',
        imageSrc: '/imagens/C172.jpg',
        description: 'Deixe seu voo ainda mais real! Simulador completo para realização de procedimentos VFR e IFR.',
        imageAlt: 'Simulador do Cessna 172',
        details: [
            {
                title: '',
                content:
                    `O MFSim SMC172 é um simulador de voo completo inspirado na Cessna 172, projetado para proporcionar realismo, precisão e imersão total na experiência de pilotagem.`
            },
            {
                title: 'Paineis Modulares e Expansíveis',
                content: `A MFSim oferece um sistema modular, permitindo que cada painel seja adquirido separadamente, de acordo com sua necessidade ou espaço disponível. Monte seu cockpit de forma personalizada, com compatibilidade total entre os módulos.`
            },
            {
                title: "Sistema Completo de Comandos",
                content: {
                    paragraphs: ["O conjunto completo inclui:"],
                    list: [
                        "Yokes modelo Cessna, disponíveis em versões simples ou duplo comando linkado;",
                        "Manetes de potência, mistura e passo de hélice (TPM) com sensação real de voo;",
                        "Painel principal funcional, com autopilot, magnetos, flaps, trem de pouso (gear), luzes, bomba de combustível, pitot, masters e rádios operacionais;",
                        "Elevator Trim e Parking Brake de acionamento físico e responsivo;",
                        "Instrumentos totalmente funcionais e sincronizados com o simulador."
                    ]

                }
            },
            {
                title: 'Requisitos Técnicos',
                content: {
                    paragraphs: [
                        `Para funcionamento do painel completo:`],
                        list: [ `3 portas USB disponíveis`, `2 saídas de vídeo (HDMI ou DisplayPort)`]
                }
            },
            {
                title: 'Incluso no Pacote',
                content: {
                    paragraphs: [ `* Sob condições e horários definidos pelo fabricante. ** Consulte áreas atendidas para frete gratuito.`],
                    list: [
                        `Suporte à instalação remota*`,
                        `Softwares e licenças de operação`,
                        `Frete grátis para regiões cobertas**`,
                        `Manual técnico detalhado com instruções e mapeamento dos comandos`,

                    ]
                }
            },
            {
                title: 'Versão HOME',
                content: `Esta versão é destinada exclusivamente a uso não homologável (recreativo ou treinamento doméstico).
                        Para a versão certificada e homologável, entre em contato com nossa equipe técnica.`
            }
        ],
        pricing: {
            items: [
                {
                    name: "MÓDULO 1 (com comando simples)",
                    price: "R$ 3.700,00",
                    description: "À vista ou até 12x (consultar valor)"
                },
                {
                    name: "MÓDULO 1 (com DUPLO comando)",
                    price: "R$ 4.800,00",
                    description: "À vista ou até 12x (consultar valor)"
                },
                {
                    name: "MÓDULO 2",
                    price: "R$ 3.300,00",
                    description: "À vista ou até 12x (consultar valor)"
                },
                {
                    name: "MÓDULO 3",
                    price: "R$ 3.500,00",
                    description: "À vista ou até 12x (consultar valor)"
                },
                {
                    name: "CONSOLE ELEVATOR TRIM (4)",
                    price: "R$ 1.400,00",
                    description: "À vista ou até 12x (consultar valor)"
                },
                {
                    name: "RUDDER PEDAL (SINGLE)",
                    price: "R$ 1.900,00",
                    description: "À vista ou até 12x (consultar valor)"
                },
                {
                    name: "RUDDER PEDAL (DUPLO)",
                    price: "R$ 3.400,00",
                    description: "À vista ou até 12x (consultar valor)"
                },
            ]
        }
    },

    // 5
    {
        name: 'SMC172 G1000',
        id: 'SMC172-G1000',
        imageText: 'SIMULADOR CESSNA 172 G1000',
        imageSrc: '/imagens/C172G1000.jpg',
        description: "Deixe seu voo ainda mais real! Simulador completo para realização de procedimentos VFR e IFR.",
        imageAlt: 'Simulador do Cessna 172 com painel G1000',
        details: [
            {
                title: '',
                content: `O MFSim SMC172-G1000 é um simulador de voo completo inspirado no Cessna 172 equipado com G1000, desenvolvido para oferecer imersão total, fidelidade operacional e desempenho profissional na simulação de voo.
                            Projetado para uso doméstico ou em centros de treinamento não certificáveis, o sistema entrega realismo e robustez característicos dos produtos MFSim.`
            },
            {
                title: 'Paineis Modulares e Expansíveis',
                content: {
                    paragraphs: [
                        `A MFSim oferece um sistema modular, permitindo que cada painel seja adquirido separadamente, de acordo com sua necessidade ou espaço disponível. Monte seu cockpit de forma personalizada, com compatibilidade total entre os módulos.
                            Sistema completo para seu voo!
                            O conjunto inclui:`
                    ],
                    list: [
                        "Yokes modelo Cessna, disponíveis em versões simples ou duplo comando linkado;",
                        "Manetes de potência, mistura e passo de hélice (TPM) com resposta real e precisa;",
                        "Painel de avionicos G1000 completo (PFD + MFD) com autopilot integrado;",
                        "Magnetos, luzes, pitot heat, bomba de combustível, flaps, gear, masters, elevator trim e parking brake físicos e operacionais;",
                        "Integração total com os simuladores X-Plane e Microsoft Flight Simulator, mantendo sincronismo de dados e instrumentos em tempo real."
                    ]
                }
            },
            {
                title: 'Requisitos Técnicos',
                content: {
                    paragraphs: [
                        `Para funcionamento do painel completo:`],
                        list: [ `5 portas USB disponíveis`, `2 saídas de vídeo (HDMI ou DisplayPort)`]
                }
            },
            {
                title: 'Incluso no Pacote',
                content: {
                    paragraphs: [ `* Sob condições e horários definidos pelo fabricante. ** Consulte áreas atendidas para frete gratuito.`],
                    list: [
                        `Suporte à instalação remota*`,
                        `Softwares e licenças de operação`,
                        `Frete grátis para regiões cobertas**`,
                        `Manual técnico detalhado com instruções e mapeamento dos comandos`,
                    ]
                }
            },
            {
                title: 'Versão HOME',
                content: `Esta versão é destinada exclusivamente a uso não homologável (recreativo ou treinamento doméstico).
                        Para a versão certificada e homologável, entre em contato com nossa equipe técnica.`
            }
        ],
        pricing: {
            items: [
                {
                    name: "MÓDULO 1 (com comando SINGLE)",
                    price: "R$ 3.700,00",
                    description: "À vista ou até 12x (consultar valor)"
                },
                {
                    name: "MÓDULO 1 (com DUPLO comando)",
                    price: "R$ 4.800,00",
                    description: "À vista ou até 12x (consultar valor)"
                },
                {
                    name: "MÓDULO 2",
                    price: "R$ 5.600,00",
                    description: "À vista ou até 12x (consultar valor)"
                },
                {
                    name: "MÓDULO 3",
                    price: "R$ 5.400,00",
                    description: "À vista ou até 12x (consultar valor)"
                },
                {
                    name: "CONSOLE ELEVATOR TRIM (4)",
                    price: "R$ 1.400,00",
                    description: "À vista ou até 12x (consultar valor)"
                },
                {
                    name: "RUDDER PEDAL (SINGLE)",
                    price: "R$ 1.900,00",
                    description: "À vista ou até 12x (consultar valor)"
                },
                {
                    name: "RUDDER PEDAL (DUPLO)",
                    price: "R$ 3.400,00",
                    description: "À vista ou até 12x (consultar valor)"
                },
            ]
        }
    },

    // 6
    {
        name: 'SMC172C',
        id: 'SMC172C',
        imageText: 'SIMULADOR CESSNA 172C',
        imageSrc: "/imagens/C172C.jpg",
        description: 'Desenvolvido junto à aeroclube, simulador compacto ideal para estudos ou para quem tem pouco espaço em casa!',
        imageAlt: '',
        details: [
            {
                title: '',
                content: `A fim de facilitar para você, a MFSim oferece painéis modulares, podendo ser adquiridos separadamente de acordo com sua necessidade.
                            Sistema perfeito para seu estudo!
                            Simulador desenvolvido junto com instrutores e diretor de aeroclube, o projeto é um simulador com todos os comandos necessarios para procedimentos IFR.
                            Além das vantagens de treinamento, ele é bem compacto, com apenas 52cm pode facilmente ser transportado em viagens, porta malas de um carro, entre outros.`
            },
            {
                title: 'Paineis Modulares e Expansíveis', 
                content: {
                    paragraphs: [
                        `A MFSim oferece um sistema modular, permitindo que cada painel seja adquirido separadamente, de acordo com sua necessidade ou espaço disponível. Monte seu cockpit de forma personalizada, com compatibilidade total entre os módulos.
                            Sistema completo para seu voo!
                            O SMC172C oferece todos os comandos essenciais para um voo completo e realista:`
                    ],
                    list: [
                        "Yokes modelo Cessna;",
                        "Manetes de potência, mistura e passo de hélice (TPM) com sensação real de voo;",
                        "Painel principal funcional, com autopilot, magnetos, flaps, trem de pouso (gear), luzes, bomba de combustível, pitot, masters e rádios operacionais;",
                        "Elevator Trim e Parking Brake de acionamento físico e responsivo;",
                        "Instrumentos totalmente funcionais e sincronizados com o simulador."
                    ]

                }
            },
            {
                title: 'Requisitos Técnicos',
                content: {
                    paragraphs: [ `Para funcionamento do painel completo:`],
                    list: [ `1 porta USB disponível`, `1 saída de vídeo (HDMI ou DisplayPort)`] 

                }
            },
            {
                title: 'Incluso no Pacote',
                content: {
                    paragraphs: [ `* Sob condições e horários definidos pelo fabricante. ** Consulte áreas atendidas para frete gratuito.`],
                    list: [
                        `Suporte à instalação remota*`,
                        `Softwares e licenças de operação`,
                        `Frete grátis para regiões cobertas**`,
                        `Manual técnico detalhado com instruções e mapeamento dos comandos`,

                    ]
                }
            }
                
        ],
        pricing: {
            items: [
                {
                    name: "PAINEL SMC172C",
                    description: "À vista ou até 12x (consultar valor)",
                    price: "R$ 8.500,00"
                }
            ]
        }
    },

    // 7
    {
        name: "SMG1000c",
        id: "SMG1000c",
        imageText: "SIMULADOR G1000 CUSTOM",
        imageSrc: "/imagens/G1000c.png",
        videoId: `Hwzq8mHr14Q`,
        description: "Simulador GlassCockpit, com PFD e MFD, alta tecnologia para um aviônico completo.",
        imageAlt: "Simulador G1000 Custom da MFSim",
        details: [
            {
                title: "",
                content: `A fim de facilitar para você, a MFSim oferece painéis modulares, podendo ser adquiridos separadamente de  acordo com sua necessidade.
                Sistema completo G1000 com tela PFD e MFD. Nossos avionicos G1000 são completos com Piloto automatico no PFD e MFD.`
            },
            {
                title: "Requisitos Técnicos",
                content: {
                    paragraphs: [ `Para funcionamento do painel completo:`],
                    list: [ `1 portas USB disponível`, `2 saídas de vídeo (HDMI ou DisplayPort)`]
                }
            },
            {
                title: "Incluso no Pacote",
                content: {
                    paragraphs: [ `* Sob condições e horários definidos pelo fabricante. ** Consulte áreas atendidas para frete gratuito.`],
                    list: [
                        `Suporte à instalação remota*`,
                        `Softwares e licenças de operação`,
                        `Frete grátis para regiões cobertas**`,
                        `Manual técnico detalhado com instruções e mapeamento dos comandos`,

                    ]
                }
            }
        ],
        pricing: {
            items: [
                {
                    name: "SMG1000c (PFD + MFD)",
                    description: "À vista ou até 12x (consultar valor)",
                    price: "R$ 13.500,00"
                }
            ]
        }

    },

    // 8
    {
        name: "SMSEN2",
        id: "SMSEN2",
        imageText: "SIMULADOR PIPER SENECA II",
        imageSrc: "/imagens/SMSENII.jpg",
        description: "Simulador capaz de reproduzir procedimentos de IFR, familiarização e sistemas baseados na aeronave real.",
        imageAlt: "Simulador do Piper Seneca II da MFSim",
        details: [
            {
                title: "EM BREVE",
                content: ""
            },
        ],
        pricing: {
            price: "..."
        }
    },

    // 9
    {
        name: "AS350 KIT",
        id: "AS350-KIT",
        imageText: "MFSim - AS350 KIT",
        imageSrc: "/imagens/KITAS350.jpg",
        imageAlt: "AS350 KIT da MFSim",
        description: `Comandos de voo para asa rotativa, com alta precisção e robustez!`,
        details: [
            {
                title: "",
                content: {
                    paragraphs: [ `A fim de facilitar para você, a MFSim oferece painéis modulares, podendo ser adquiridos separadamente de acordo com sua necessidade.
                Sistema completo para seu voo!
                Kit completo de comandos para helicoptero, baseado na aeronave AS350.`],
                list: [
                `Comando de ciclico com 6 botões, 1 gatilho e 2 hat switchs, Iluminação azul na base, comandos leves e precisos.`,
                `Comando de coletivo com 3 chaves toggles e 1 hat switch, manipulo para ajuste de fricção, base com fixadores para suporte de cadeira ou banco, comando leve e preciso.`,
                `Comando de pedal fabricado em metal, borracha e fita anti-derrapante, comandos leves e precisos.`]
                }
            },
            {
                title: "Requisitos Técnicos",
                content: {
                    paragraphs: [ `Para funcionamento do painel completo:`],
                    list: [ `3 portas USB disponíveis`] 
                }
            },
            {
                title: "Incluso no Pacote",
                content: {
                    paragraphs: [ `* Sob condições e horários definidos pelo fabricante. ** Consulte áreas atendidas para frete gratuito.`],
                    list: [
                        `Suporte à instalação remota*`,
                        `Softwares e licenças de operação`,
                        `Frete grátis para regiões cobertas**`,
                        `Manual técnico detalhado com instruções e mapeamento dos comandos`,

                    ]
                }  
            }
        ],
        pricing: {
            items: [
                {
                    name: "MFSim Cíclico AS350",
                    price: "R$ 3.300,00",
                    description: "À vista ou até 12x (consultar valor)"
                },
                {
                    name: "MFSim Coletivo AS350",
                    price: "R$ 2.200,00",
                    description: "À vista ou até 12x (consultar valor)"
                },
                {
                    name: "MFSim Pedal AS350",
                    price: "R$ 1.900,00",
                    description: "À vista ou até 12x (consultar valor)"
                }
            ]
        }

    },

    // 10
    {
        name: 'RADIO STACK',
        id: 'RADIO-STACK',
        imageText: 'MFSim - Radio Stack + GNS430',
        imageSrc: '/imagens/Radios.jpg',
        imageAlt: 'Módulo de Rádios da MFSim',
        videoId: `_bzFuqH14SE`,
        description: 'Aviônico completo com frequências de comunicação, navegação, incluindo autopilot e sistema de GNS430 completo.',
        details: [
            {
                title: '',
                content: `A fim de facilitar para você, a MFSim oferece painéis modulares, podendo ser adquiridos separadamente de acordo com sua necessidade.\n\nCompativel com IVAO e VATSIM ✅\nAudio Switch, COM1 / NAV1 , GNS430, COM2 NAV2, ADF, DME1/2, Xponder e Autopilot.`

            },
            {
                title: 'Requisitos Técnicos',
                content: {
                    paragraphs: [ `Para funcionamento do painel completo:`],
                    list: [ `1 porta USB disponível;`, `1 saída de vídeo (HDMI)`]
                }
            },
            {
                title: 'Incluso no Pacote',
                content: {
                    paragraphs: [ `* Sob condições e horários definidos pelo fabricante. ** Consulte áreas atendidas para frete gratuito.`],
                    list: [
                        `Suporte à instalação remota*`,
                        `Softwares e licenças de operação`,
                        `Frete grátis para regiões cobertas**`,
                        `Manual técnico detalhado com instruções e mapeamento dos comandos`,

                    ]
                }
            }
        ],
        pricing: {
            items: [
                {
                    name: 'MFSim Radio Stack + GNS430',
                    price: 'R$ 2.600,00',
                    description: 'À vista ou até 12x (consultar valor)'
                }
            ]
           
        }
    },

    // 11
    {
        name: "GNS430",
        id: "GNS430",
        imageText: "MFSim - GNS430",
        imageSrc: "/imagens/GNS430.jpg",
        videoId: `WaWB7Iver38`,
        description: "Equipamento de navegação, COM1/NAV1 compatível com Xplane, FSX e Prepar3D.",
        imageAlt: "GNS430 da MFSim",
        details: [
            {
                title: "",
                content: `O MFSim GNS430 é um módulo de navegação GPS completo, projetado para reproduzir com fidelidade o comportamento do Garmin GNS430 real.
                Totalmente funcional e compatível com as principais plataformas de simulação Microsoft Flight Simulator e X-Plane.`
                },
                {
                    title: "Realismo e Integração Completa",
                    content: {
                        paragraphs: [ `Com interface e controles idênticos ao equipamento original, o MFSim GNS430 é integrado ao sistema GPS da própria plataforma, reproduzindo:`],
                        list: [ `Mapas de navegação em tempo real;`, `COM1 e NAV1 totalmente operacionais;`,`Funções completas de rota, aproximação e comunicação;`,`Compatibilidade com o RealityXP GNS430 para simulação de alto nível.`]
                    }
                },
                {
                    title: "Requisitos Técnicos",
                    content: {
                        paragraphs: [ `Para funcionamento do painel completo:`],
                        list: [ `1 porta USB disponível;`, `1 saída de vídeo (HDMI)`]
                    }
                },
                {
                    title: "Incluso no Pacote",
                    content: { 
                        paragraphs: [ `* Sob condições e horários definidos pelo fabricante. ** Consulte áreas atendidas para frete gratuito.`],
                        list: [
                            `Suporte à instalação remota*`,
                            `Softwares e licenças de operação`,
                            `Frete grátis para regiões cobertas**`,
                            `Manual técnico detalhado com instruções e mapeamento dos comandos`,

                        ]
                    }
                },
                {
                    title: "Versão HOME",
                    content: `Este equipamento é destinado a uso não homologável, voltado a simulação recreativa ou treinamento doméstico.
                    Para versões certificadas ou integradas a simuladores profissionais, entre em contato com a MFSim.`
                }
        ],
        pricing: {
            price: "R$ 2.600,00"
        }
    },

    // 12
    {
        name: 'SMY172',
        id: 'SMY172',
        imageText: 'MFSim - Manche Yoke Custom',
        imageSrc: '/imagens/Y172.jpg',
        description: 'Hardware refinado em metal e revestimento em couro. Indispensável para pilotos exigentes.',
        imageAlt: 'Manche Yoke da MFSim',
        details: [
            {
                title: '',
                content: `O MFSim SMY172CUSTOM é um conjunto completo de comandos principais, construído em estrutura metálica e frente revestida em couro, garantindo durabilidade, ergonomia e realismo em cada detalhe.`
            },
            {
                title: `Painéis Modulares`,
                content: `A MFSim oferece um sistema totalmente modular, permitindo que cada painel seja adquirido separadamente, conforme sua necessidade ou espaço disponível. Monte seu cockpit sob medida e expanda seu simulador com facilidade.
                Sistema perfeito para sua simulaçao!
                Compatível com os principais simuladores do mercado:
                Microsoft Flight Simulator 2020/24, X-Plane 11/12 e Prepar3D.`
            },
            {
                title: 'Recursos e Controles',
                content: {  
                    paragraphs: [ `O sistema inclui todos os comandos essenciais para uma experiência de voo realista:`],
                    list: [`Yoke modelo Cessna com movimentos de 90 graus para cada lado do aileron (totalizando 180 graus), 120mm de comando de profundor`,
                        `Manetes de potência, passo e mistura`,
                        `Master Battery, Alternator e Avionics`,
                        `Chaves de luzes (Beacon, Nav, Taxi, Landing, Strobe)`,
                        `Fuel Pump, Pitot Heat, Flaps, Landing Gear e Parking Brake`,
                        `Elevator Trim, Fuel Selector e Cutoff`
                    ]
                }
            },
            {
                title: 'Requisitos Técnicos',
                content: {
                    paragraphs: [ `Para funcionamento do painel completo:`],
                    list: [ `1 porta USB disponível`]
                }
            },
            {
                title: 'Incluso no Pacote',
                content: {
                    paragraphs: [ `* Sob condições e horários definidos pelo fabricante. ** Consulte áreas atendidas para frete gratuito.`],
                    list: [
                        `Suporte à instalação remota*`,
                        `Softwares e licenças de operação`,
                        `Frete grátis para regiões cobertas**`,
                        `Manual técnico detalhado com instruções e mapeamento dos comandos`,

                    ]
                }
            }
        ],
        pricing: {
            items: [
                { 
                    name: 'SMY172 CUSTOM',
                    price: 'R$ 4.000,00' ,
                    description: 'À vista ou até 12x (consultar valor)'
                }

            ]
        }
    },

    // 13
    {
        name: "737 YOKE",
        id: "737-YOKE",
        imageText: "MFSim - Manche Yoke 737",
        imageSrc: "/imagens/Yoke737.png",
        description: "Sinta as emoções de ter o controle de um Boeing 737 em suas mãos.",
        imageAlt: "Manche Yoke da MFSim",
        details: [
            {
                title: "",
                content: {
                    paragraphs: [ `Com o Yoke 737 seu voo fica ainda melhor! Sinta as emoções de ter o controle de um Boeing 737 em suas mãos.`],
                    list: [`Sistema com rolamentos, dando melhor precisão nos movimentos;`,
                        `Comandos macios e ótima sensibilidade;`,
                        `Em escala real;`,
                        `Comando de elevator trim + 4 botoes customizáveis(AP DESENGAGE, PTT, CAMERA, IVAP STANDBY/MODO C, etc).`,
                        `Plug&Play;`,
                        `Compatível com XPLANE, PREPAR3D, FSX, AEROFLY, entre outros.`]
                }
            },
            {
                title: "Requisitos Técnicos",
                content: {
                    paragraphs: [ `Para funcionamento do painel completo:`],
                    list: [ `1 porta USB disponível`]
                }
            },
            {
                title: "Incluso no Pacote",
                content: {
                    paragraphs: [ `* Sob condições e horários definidos pelo fabricante. ** Consulte áreas atendidas para frete gratuito.`],
                    list: [
                        `Suporte à instalação remota*`,
                        `Softwares e licenças de operação`,
                        `Frete grátis para regiões cobertas**`,
                        `Manual técnico detalhado com instruções e mapeamento dos comandos`,

                    ]
                }
            }
        ],
        pricing: {
            items: [
                {
                    name: "737 YOKE",
                    description: "À vista ou até 12x (consultar valor)",    
                    price: "R$ 4.000,00"
                }
            ]
        }
    },

    // 14
    {
        name: "GFC700",
        id: "GFC700",
        imageText: "MFSim - Autopilot GFC700",
        imageSrc: "/imagens/GFC700.jpg",
        description: "Piloto automatico completo Plug&Play",
        imageAlt: "Autopilot GFC700 da MFSim",
        details: [
            {
                title: "",
                content: `O MFSim GFC700 AP é o piloto automático definitivo para sua simulação de voo.
                Inspirado no sistema GFC700 real, ele entrega precisão, realismo e integração total com os principais simuladores do mercado.`,
            },
            {
                title: `Eleve seu realismo`,
                content: `Não perca tempo — transforme sua experiência de voo com o MFSim GFC700 AP e sinta o controle de um verdadeiro piloto automático profissional.`
            },
            {
                title: `Design Modular e Compatibilidade`,
                content: {
                    paragraphs: [ `A MFSim oferece painéis modulares, permitindo que cada componente seja adquirido separadamente, de acordo com sua necessidade ou espaço disponível.
                        Monte seu painel de voo de forma personalizada e profissional. O GFC700 é um piloto automático plug & play, com todas as funções operacionais e ajustes finos para o seu perfil de voo.
                        Ideal para aeronaves equipadas com glass cockpit, sendo amplamente utilizado em jatos leves e aeronaves de aviação geral.`],
                    list: [ `Totalmente funcional em aeronaves que possuam suporte a piloto automático nos simuladores X-Plane 11/12 e Microsoft Flight Simulator 2020/24.`,
                        `Sistema de backlight ajustável que garante conforto visual e realismo durante voos noturnos.`,
                        `Compatível com Zibo, PMDG, Airbus, Cessna, Baron, Caravan, entre outros modelos.`
                    ]
                }
            },
            {
                title: `Requisitos Técnicos`,
                content: {
                    paragraphs: [ `Para funcionamento do painel completo:`],
                    list: [ `1 porta USB disponível`]
                }
            },
            {
                title: `Incluso no Pacote`,
                content: {
                    paragraphs: [ `* Sob condições e horários definidos pelo fabricante. ** Consulte áreas atendidas para frete gratuito.`],
                    list: [
                        `Suporte à instalação remota*`,
                        `Softwares e licenças de operação`,
                        `Frete grátis para regiões cobertas**`,
                        `Manual técnico detalhado com instruções e mapeamento dos comandos`,

                    ]
                }
            }
        ],
        pricing: {
            items: [
                {
                    name: "GFC700 Autopilot",
                    price: "R$ 970,00",
                    description: "À vista ou até 5x no cartão sem juros"
                }
            ]
        }
    },

    // 15
    {
        name: "Rudder Pedal Single",
        id: "Rudder-Pedal-Single",
        imageText: "MFSim - Rudder Pedal Single",
        imageSrc: "/imagens/PedalRudder.png",
        description: "Preciso, freios independentes e graduais.",
        imageAlt: "Pedal Rudder da MFSim",
        details: [
            {
                title: "",
                content: `O MFSim Pedal Single foi desenvolvido para proporcionar controle preciso, suavidade e realismo absoluto durante o voo.
                Com estrutura metálica reforçada e sistema de rolamentos industriais, entrega a sensação autêntica de pilotagem — especialmente em pousos com vento cruzado e manobras de solo.`
            },
            {
                title: "Desempenho e Sensação Real",
                content: { 
                    paragraphs: [`O sistema foi projetado para oferecer resposta linear e equilíbrio perfeito entre conforto e controle:`],
                    list: [`Sistema com rolamentos para movimentos suaves e precisos;`,
                        `Construção 100% metálica, garantindo robustez e longa durabilidade;`,
                        `Comandos macios e precisos, proporcionando controle refinado de direção e frenagem;`,
                        `Freios independentes e progressivos (esquerdo e direito);`,
                        `Operação Plug & Play, pronta para uso imediato.`
                    ]
                }
            },
            {
                title: `Compatibilidade`,
                content: {
                    paragraphs: [`Compatível com as principais plataformas de simulação:`],
                    list:[`X-Plane`, `Microsoft Flight Simulator 2020/24`, `Prepar3D`, `FSX`, `Aerofly`]
                }
            },
            {
                title: "Requisitos Técnicos",
                content: {
                    paragraphs: [ `Para funcionamento do painel completo:`],
                    list: [ `1 porta USB disponível`]
                }
            },
            {
                title: "Incluso no Pacote",
                content: {
                    paragraphs: [ `* Sob condições e horários definidos pelo fabricante. ** Consulte áreas atendidas para frete gratuito.`],
                    list: [
                        `Suporte à instalação remota*`,
                        `Softwares e licenças de operação`,
                        `Frete grátis para regiões cobertas**`,
                        `Manual técnico detalhado com instruções e mapeamento dos comandos`,

                    ]
                }
            },
            {
                title: "Versão HOME",
                content: `Este equipamento é destinado a uso não homologável, ideal para simuladores domésticos ou de treinamento recreativo.
                Para a versão certificada, entre em contato com a equipe técnica da MFSim.`
            }
        ],
        pricing: {
            items: [
                {
                    name: "Rudder Pedal Single",
                    description: "À vista ou até 12x (consultar valor)",
                    price: "R$ 1.900,00"
                }
            ]
        }
    },

    // 16
    {
        name: "Rudder Pedal Duplo",
        id: "Rudder-Pedal-Duplo",
        imageText: "MFSim - Rudder Pedal Duplo",
        imageSrc: "/imagens/PedalRudderDuplo.png",
        description: "Precisos, sincronizados, freios independentes e graduais.",
        imageAlt: "Pedal Rudder da MFSim",
        details: [
            {
                title: "",
                content: `A fim de facilitar para você, a MFSim oferece painéis e avionicos modulares, podendo ser adquiridos separadamente de acordo com sua necessidade.`
            },
            {
                title: "",
                content: {
                    paragraphs: [`Com o pedal seu voo fica ainda melhor!
                    Sinta as emoções de pousar com ventos e ter o controle da aeronave completa.`],
                    list: [`Sistema com rolamentos, dando melhor precisão nos movimentos;`,
                        `Fabricado todo em estrutura de metal, com alta robustez e durabilidade;`,
                        `Comandos macios, precisos e ótima sensibilidade;`,
                        `Duplo sincronizado;`,
                        `Freios independentes e graduais (Freio esuqerdo e direito).`,
                        `Plug&Play;`,
                        `Compatível com XPLANE, MSFS2020, PREPAR3D, FSX, AEROFLY, entre outros.`
                        
                    ]
                }
            },
            {
                title: "Requisitos Técnicos",
                content: {
                    paragraphs: [ `Para funcionamento do painel completo:`],
                    list: [ `1 porta USB disponível`]
                }
            },
            {
                title: "Incluso no Pacote",
                content: {
                    paragraphs: [ `* Sob condições e horários definidos pelo fabricante. ** Consulte áreas atendidas para frete gratuito.`],
                    list: [
                        `Suporte à instalação remota*`,
                        `Softwares e licenças de operação`,
                        `Frete grátis para regiões cobertas**`,
                        `Manual técnico detalhado com instruções e mapeamento dos comandos`,

                    ]
                }
            }
        ],
        pricing: {
            items: [
                {
                    name: "RUDDER PEDAL (DUPLO)",
                    description: "À vista ou até 12x (consultar valor)",
                    price: "R$ 3.400,00"
                }
            ]
        }
    },
];
