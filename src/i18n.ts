import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'pt',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    months: {
                        0: "January",
                        1: 'February',
                        2: 'March',
                        3: 'April',
                        4: 'May',
                        5: 'June',
                        6: 'July',
                        7: 'August',
                        8: 'September',
                        9: 'October',
                        10: 'November',
                        11: 'December'
                    },
                    components: {
                        SideBar: {
                            profileMenu: {
                                profile: 'Profile',
                                signOut: 'Sign Out'
                            },
                            drawer: {
                                mainPage: "Main Page",
                                users: "Users",
                                books: "Books",
                                requests: "Requests",
                                transfers: "Transfers",
                                notifications: "Notifications",
                                evaluations: "Evaluations",
                                authors: "Authors",
                                categories: "Categories"
                            }
                        },
                        table: {
                            requests: {
                                requestID: "ID",
                                physicalID: "Book ID",
                                isbn: "ISBN",
                                user: "Email",
                                startDate: "Start Date",
                                endDate: "End Date",
                                requestStatus: "Status"
                            },
                            transfers: {
                                transferID: "ID",
                                physicalBookID: "Book ID",
                                physicalBookStatus: "Book Status",
                                sourceLibrary: "Source",
                                destinationLibrary: "Destination",
                                startDate: "Start Date",
                                endDate: "End Date",
                                transferStatus: "Status"
                            },
                            users: {
                                userID: "ID",
                                userName: "Name",
                                userEmail: "Email",
                                library: "Library",
                                numberOfRequests: "Nº Requests",
                                numberOfPunishments: "Nº Punishments"
                            },
                            punishments: {
                                requestID: "Request ID",
                                punishmentID: "Punishment ID",
                                punishmentReason: "Reason",
                                punishmentLevel: "Level",
                                userName: "Name"
                            },
                            authors: {
                                authorID: "ID",
                                authorName: "Name"
                            },
                            categories: {
                                categoryID: "ID",
                                categoryName: "Name"
                            },
                            genericBooks: {
                                isbn: "ISBN",
                                title: "Title",
                                pageNumber: "Nº Pages",
                                datePublished: "Publication Date",
                                language: "Language",
                                authors: "Author(s)",
                                copies: "Copies"
                            },
                            physicalBooks: {
                                physicalBookID: "ID",
                                genericBook: "ISBN",
                                libraryAlias: "Library",
                                physicalBookStatus: "Status"
                            },
                            evaluations: {
                                evaluationID: "ID",
                                evaluationDescription: "Description",
                                evaluationScore: "Score",
                                isbn: "ISBN",
                                title: "Title",
                                userID: "User ID",
                                userName: "User Name"
                            }
                        },
                        menus: {
                            authors: {
                                1: "Edit",
                                2: "Show books (not implemented)",
                                3: "Delete (not implemented)",
                                inputNameDialog: {
                                    title: "Edit Author"
                                }
                            },
                            categories: {
                                1: "Edit",
                                2: "Show books (not implemented)",
                                3: "Delete (not implemented)"
                            },
                            genericBooks: {
                                1: "View",
                                2: "View/Add Copies",
                                3: "Edit",
                                4: "View Reviews (not implemented)",
                                5: "Delete (not implemented)"
                            },
                            requests: {
                                1: "Cancel",
                                2: "Change to requested",
                                3: "Change to returned",
                                4: "Extend deadline",
                                5: "Delete"
                            },
                            transfers: {
                                1: "Cancel",
                                2: "Accept",
                                3: "Reject",
                                4: "Delete"
                            },
                            users: {
                                1: "Show requests",
                                2: "Show punishments"
                            }
                        },
                        forms: {
                            step2: {
                                label1: "Select Copy",
                            },
                            step3: {
                                label1: "Starting Date",
                                label2: "Due Date"
                            },
                            step4: {
                                button1: "Back",
                                button2: "Submit"
                            },
                        },
                        dialogs: {
                            deleteConfirmation: {
                                title: "Are you sure you want to delete?",
                                actions: {
                                    1: "No",
                                    2: "Yes"
                                }
                            },
                            failure: {
                                title: "Failure",
                                author: "an error occurred while adding authors",
                                category: "an error occurred while adding categories",
                                error_500: "Internal server error",
                                error_400: "Error 400",
                                generic_book: "an error occurred while adding generic books",
                                password: "the password inputted isn't the current one",
                                requests: {
                                    delete: "can not delete this request",
                                    cancel: "an error occurred while cancel this request",
                                    returned: "can not returned this book",
                                    extend_time: "can not extend time",
                                    requested: "an error occurred while returned request",
                                    create: "an error occurred while created a request"
                                },
                                transfer: {
                                    delete: "can not delete this transfer",
                                    cancel: "an error occurred while cancel this transfer",
                                    accepted: "can not accept this transfer",
                                    reject: "an error occurred while rejecting this transfer",
                                    create: "an error occurred while created a transfer"
                                },
                                punishment: {
                                    delete: "can not delete this punishment"
                                },
                                book: {
                                    create: "can not create a new book"
                                },
                                profile: {
                                    wrong_password: "Your current password is wrong"
                                },
                                library: {
                                    create: "can not create a new library",
                                    exists: "this library already exists"
                                }
                            },
                            inputDate: {
                                title: "Change deadline",
                                label: "New Date",
                                actions: {
                                    1: "Cancel",
                                    2: "Submit"
                                }
                            },
                            inputName: {
                                label: "Name",
                                actions: {
                                    1: "Cancel",
                                    2: "Submit"
                                }
                            },
                            success: {
                                title: "Success!",
                                author: "new author created successfully",
                                category: "new category created successfully",
                                generic_book: "new book added",
                                password: "the password was changed successfully",
                                requests: {
                                    delete: "Delete successfully",
                                    cancel: "Cancel request successfully",
                                    returned: "Returned successfully",
                                    extend_time: "Extend time successfully",
                                    requested: "Requested successfully",
                                    create: "Request created successfully"
                                },
                                transfer: {
                                    delete: "Transfer deleted successfully",
                                    cancel: "Transfer canceled successfully",
                                    accepted: "Transfer accepted successfully",
                                    reject: "Transfer rejected successfully",
                                    create: "Transfer created successfully"
                                },
                                punishment: {
                                    delete: "Punishment deleted successfully"
                                },
                                book: {
                                    create: "New book created successfully"
                                },
                                profile: {
                                    success: "Password updated successfully"
                                },
                                library: {
                                    create: "New library created successfully"
                                }
                            },
                            updatePassword: {
                                title: "Update Password",
                                currentPassword: "Current Password",
                                newPassword: "New Password",
                                actions: {
                                    1: "Close",
                                    2: "Update"
                                }
                            }
                        }
                    },
                    pages: {
                        LibrarianFrontPage: {
                            header: {
                                greeting: 'Hello',
                                library: 'Library Name'
                            },
                            table: {
                                users: 'Users',
                                books: 'Books',
                                authors: 'Authors',
                                physicalBooks: 'Physical Books',
                                requests: 'Requests',
                                transfers: 'Transfers',
                                punishments: 'Punishments',
                                notifications: 'Notifications',
                                evaluations: 'Evaluations'
                            },
                            dashboard: {
                                requests_pending: "Pending Requests",
                                transfers_pending: "Pending Transfers",
                                libraries_list: "Libraries",
                                alias: "Alias",
                                address: "Address"
                            }
                        },
                        UsersPage: {
                            query: {
                                label: "Search for user (ID, Name or Email)",
                                error: "No users in library"
                            },
                            punishmentsPage: {
                                title: "Punishments of user ID",
                                backButton: "Back",
                                error: "This user doesn't have punishments"
                            },
                            requestsPage: {
                                title: "Requests of user ID",
                                backButton: "Back",
                                error: "This user doesn't have requests"
                            }
                        },
                        BooksPage: {
                            title: "Books",
                            createButton: "Create Book",
                            query: {
                                label: "Search for Book (ISBN or Title)",
                                error: "No Books"
                            },
                            viewPage: {
                                title: "Book",
                                backButton: "Back",
                                description: "Description",
                                infoArray: {
                                    isbn: "ISBN",
                                    pageNumber: "Page Number",
                                    pubDate: "Publication Date",
                                    lan: "Language",
                                    authors: "Author(s)",
                                    categories: "Categories",
                                    availability: "Available copies in Library"
                                }
                            },
                            copiesPage: {
                                title: "Copies of Book",
                                backButton: "Back",
                                label: "Number of Copies",
                                addButton: "Add"
                            },
                            addPage: {
                                title: "Add Book",
                                backButton: "Back",
                                infoPage: {
                                    alertErrorMessage: "Error adding the Book",
                                    form: {
                                        isbn: "ISBN",
                                        pubDate: "Publication Date",
                                        title: "Title",
                                        lan: "Language",
                                        authors: "Author(s)",
                                        addAuthors: "Add More Authors",
                                        numPages: "Number of Pages",
                                        category: "Category",
                                        addCategories: "Add More Categories",
                                        description: "Description",
                                        sThumb: "Small Thumbnail",
                                        thumb: "Thumbnail",
                                    },
                                    addButton: "Add Book"
                                }
                            },
                            editPage: {
                                title: "Edit Book",
                                successMessage: "Book successfully updated",
                                infoPage: {
                                    alertErrorMessage: "Error updating the Book",
                                    form: {
                                        isbn: "ISBN",
                                        pubDate: "Publication Date",
                                        title: "Title",
                                        lan: "Language",
                                        authors: "Author(s)",
                                        addAuthors: "Add More Authors",
                                        numPages: "Number of Pages",
                                        category: "Category",
                                        addCategories: "Add More Categories",
                                        description: "Description",
                                        sThumb: "Small Thumbnail",
                                        thumb: "Thumbnail",
                                    },
                                    updateButton: "Update Book"
                                }
                            }
                        },
                        AuthorsPage: {
                            title: "Authors",
                            addAuthor: "Create Author",
                            query: {
                                label: "Search for Author (ID or Name)",
                                error: "No Authors"
                            },
                            addDialogTitle: "Create Author"
                        },
                        CategoriesPage: {
                            title: "Categories",
                            addButton: "Create Category",
                            query: {
                                label: "Search for Category (ID or Name)",
                                error: "No Categories"
                            },
                            addDialogTitle: "Create Category"
                        },
                        EvaluationsPage: {
                            title: "Evaluations"
                        },
                        LoginPage: {
                            input: {
                                emailLabel: "Email Address",
                                passwordLabel: "Password"
                            },
                            signinButton: "Sign In"
                        },
                        RequestsPage: {
                            title: "Requests",
                            addButton: "Create Request",
                            activeRequests: {
                                title: "Active Requests",
                                query: {
                                    label: "Search for Request (ID or Email)",
                                    error: "No active requests",
                                }
                            },
                            pastRequests: {
                                title: "Past Requests",
                                error: "No past requests"
                            },
                            error: "No requests in the Library",
                            addPage: {
                                title: "Create Request",
                                step1: {
                                    title: "Select User",
                                    error: "No users available"
                                },
                                step2: {
                                    title: "Select book for request",
                                    formControlLabel: "Enter waiting list for book"
                                },
                                step3: {
                                    title: "Select request deadline"
                                }
                            }
                        },
                        StatusPage: {
                            404: {
                                1: "The page you are looking for doesn't exist",
                                2: "It's on us, we moved the content to a different page",
                                homeButton: "Go to homepage"
                            }
                        },
                        TransfersPage: {
                            title: "Transfers",
                            addButton: "Create Transfer",
                            activeTransfers: {
                                title: "Active Transfers",
                                error: "No active transfers"
                            },
                            pastTransfers: {
                                title: "Past Transfers",
                                error: "No past transfers"
                            },
                            error: "No transfers in library",
                            addPage: {
                                title: "Create Transfer",
                                step1: {
                                    title: "Select source library",
                                    error: "No libraries available"
                                },
                                step2: {
                                    title: "Select book for transfer",
                                    error: "No books available for transfer"
                                }
                            }
                        },
                        ProfilePage: {
                            title: "Profile",
                            backButton: "Back",
                            infoArray: {
                                name: "Name",
                                email: "Email",
                                libraryAlias: "Works on"
                            },
                            dialogTitle: "Update Password",
                            updatePasswordButton: "Update Password",
                            error: "Your profile wasn't found"
                        },
                        AdminFrontPage: {
                            header: {
                                greeting: "Hello",
                                library: "Library Name"
                            },
                            table: {
                                users: "Users",
                                libraries: "Libraries",
                                categories: "Categories",
                                languages: "Languages",
                                authors: "Authors",
                                evaluations: "Evaluations",
                                notifications: "Notifications"
                            }

                        }
                    }
                }
            },
            pt: {
                translation: {
                    months: {
                        0: "Janeiro",
                        1: 'Fevereiro',
                        2: 'Março',
                        3: 'Abril',
                        4: 'Maio',
                        5: 'Junho',
                        6: 'Julho',
                        7: 'Agosto',
                        8: 'Setembro',
                        9: 'Outubro',
                        10: 'Novembro',
                        11: 'Dezembro'
                    },
                    components: {
                        SideBar: {
                            profileMenu: {
                                profile: 'Perfil',
                                signOut: 'Terminar Sessão'
                            },
                            drawer: {
                                mainPage: "Página Principal",
                                users: "Utilizadores",
                                books: "Livros",
                                requests: "Pedidos",
                                transfers: "Transferências",
                                notifications: "Notificações",
                                evaluations: "Avaliações",
                                authors: "Autores",
                                categories: "Categorias"
                            }
                        },
                        table: {
                            requests: {
                                requestID: "ID do Pedido",
                                physicalID: "ID do Livro",
                                isbn: "ISBN",
                                user: "Email do Utilizador",
                                startDate: "Data de Início",
                                endDate: "Data de Fim",
                                requestStatus: "Estado"
                            },
                            transfers: {
                                transferID: "ID Transferência",
                                physicalBookID: "ID Livro",
                                physicalBookStatus: "Estado ",
                                sourceLibrary: "Origem",
                                destinationLibrary: "Destino",
                                startDate: "Data de Início",
                                endDate: "Data de Fim",
                                transferStatus: "Estado"
                            },
                            users: {
                                userID: "ID do Utilizador",
                                userName: "Nome do Utilizador",
                                userEmail: "Email",
                                library: "Biblioteca",
                                numberOfRequests: "Nº de Pedidos",
                                numberOfPunishments: "Nº de Punições"
                            },
                            punishments: {
                                requestID: "ID do Pedido",
                                punishmentID: "ID da Punição",
                                punishmentReason: "Motivo",
                                punishmentLevel: "Nível",
                                userName: "Nome do Utilizador"
                            },
                            authors: {
                                authorID: "ID do Autor",
                                authorName: "Nome do Autor"
                            },
                            categories: {
                                categoryID: "ID da Categoria",
                                categoryName: "Nome da Categoria"
                            },
                            genericBooks: {
                                isbn: "ISBN",
                                title: "Título",
                                pageNumber: "Nº de Páginas",
                                datePublished: "Data de Publicação",
                                language: "Idioma",
                                authors: "Autor(es)",
                                copies: "Copias"
                            },
                            physicalBooks: {
                                physicalBookID: "ID do Livro Físico",
                                genericBook: "ISBN",
                                libraryAlias: "Biblioteca",
                                physicalBookStatus: "Estado do Livro Físico"
                            },
                            evaluations: {
                                evaluationID: "ID da Avaliação",
                                evaluationDescription: "Descrição da Avaliação",
                                evaluationScore: "Pontuação da Avaliação",
                                isbn: "ISBN",
                                title: "Título",
                                userID: "ID do Utilizador",
                                userName: "Nome do Utilizador"
                            }
                        },
                        menus: {
                            authors: {
                                1: "Editar",
                                2: "Ver livros (não implementado)",
                                3: "Eliminar (não implementado)",
                                inputNameDialog: {
                                    title: "Editar Autor"
                                }
                            },
                            categories: {
                                1: "Editar",
                                2: "Ver livros (não implementado)",
                                3: "Eliminar (não implementado)"
                            },
                            genericBooks: {
                                1: "Ver",
                                2: "Ver/Adicionar Cópias",
                                3: "Editar",
                                4: "Ver Avaliações (não implementado)",
                                5: "Eliminar (não implementado)"
                            },
                            requests: {
                                1: "Cancelar",
                                2: "Alterar para solicitado",
                                3: "Alterar para devolvido",
                                4: "Prolongar prazo",
                                5: "Eliminar"
                            },
                            transfers: {
                                1: "Cancelar",
                                2: "Aceitar",
                                3: "Rejeitar",
                                4: "Eliminar"
                            },
                            users: {
                                1: "Ver pedidos",
                                2: "Ver punições"
                            }
                        },
                        forms: {
                            step2: {
                                label1: "Seleciona uma cópia",
                            },
                            step3: {
                                label1: "Data de Início",
                                label2: "Data de Fim"
                            },
                            step4: {
                                button1: "Voltar",
                                button2: "Submeter"
                            }
                        },
                        dialogs: {
                            deleteConfirmation: {
                                title: "Tem a certeza de que deseja eliminar?",
                                actions: {
                                    1: "Não",
                                    2: "Sim"
                                }
                            },
                            failure: {
                                title: "Falha",
                                author: "ocorreu um erro ao adicionar autores",
                                category: "ocorreu um erro ao adicionar categorias",
                                error_500: "Erro interno do servidor",
                                error_400: "já existe",
                                generic_book: "ocorreu um erro ao adicionar livros genéricos",
                                password: "a palavra-passe inserida não é a atual",
                                requests: {
                                    delete: "não é possível eliminar este pedido",
                                    cancel: "ocorreu um erro ao cancelar este pedido",
                                    returned: "não é possível devolver este livro",
                                    extend_time: "não é possível prolongar o tempo",
                                    requested: "ocorreu um erro ao devolver o pedido",
                                    create: "ocorreu um erro ao criar um pedido"
                                },
                                transfer: {
                                    delete: "não é possível eliminar esta transferência",
                                    cancel: "ocorreu um erro ao cancelar esta transferência",
                                    accepted: "não é possível aceitar esta transferência",
                                    reject: "ocorreu um erro ao rejeitar esta transferência",
                                    create: "ocorreu um erro ao criar uma transferência"
                                },
                                punishment: {
                                    delete: "não é possível eliminar esta punição"
                                },
                                book: {
                                    create: "ocorreu um erro ao criar um livro"
                                },
                                profile: {
                                    wrong_password: "A sua password atual está errada"
                                },
                                library: {
                                    create: "Não foi possivel criar nova biblioteca",
                                    exists: "Esta biblioteca ja existe"
                                }
                            },
                            inputDate: {
                                title: "Alterar prazo",
                                label: "Nova Data",
                                actions: {
                                    1: "Cancelar",
                                    2: "Submeter"
                                }
                            },
                            inputName: {
                                label: "Nome",
                                actions: {
                                    1: "Cancelar",
                                    2: "Submeter"
                                }
                            },
                            success: {
                                title: "Sucesso!",
                                author: "novo autor criado com sucesso",
                                category: "nova categoria criada com sucesso",
                                generic_book: "novo livro adicionado",
                                password: "a palavra-passe foi alterada com sucesso",
                                requests: {
                                    delete: "Eliminação bem-sucedida",
                                    cancel: "Pedido cancelado com sucesso",
                                    returned: "Devolução bem-sucedida",
                                    extend_time: "Prazo prolongado com sucesso",
                                    requested: "Pedido efetuado com sucesso",
                                    create: "Pedido criado com sucesso"
                                },
                                transfer: {
                                    delete: "Transferência eliminada com sucesso",
                                    cancel: "Transferência cancelada com sucesso",
                                    accepted: "Transferência aceite com sucesso",
                                    reject: "Transferência rejeitada com sucesso",
                                    create: "Transferência criada com sucesso"
                                },
                                punishment: {
                                    delete: "Punição eliminada com sucesso"
                                },
                                book: {
                                    create: "Novo livro criado com sucesso"
                                },
                                profile: {
                                    success: "Palavra-passe atualizada com sucesso"
                                },
                                library: {
                                    create: "Biblioteca criada com sucesso"
                                }
                            },
                            updatePassword: {
                                title: "Alterar palavra-passe",
                                currentPassword: "Palavra-passe atual",
                                newPassword: "Nova palavra-passe",
                                actions: {
                                    1: "Fechar",
                                    2: "Confirmar"
                                }
                            }
                        }
                    },
                    pages: {
                        LibrarianFrontPage: {
                            header: {
                                greeting: 'Bem-vindo',
                                library: 'Nome da Biblioteca'
                            },
                            table: {
                                users: 'Utilizadores',
                                books: 'Livros',
                                authors: 'Autores',
                                physicalBooks: 'Livros Físicos',
                                requests: 'Pedidos',
                                transfers: 'Transferências',
                                punishments: 'Punições',
                                notifications: 'Notificações',
                                evaluations: 'Avaliações'
                            },
                            dashboard: {
                                requests_pending: "Requisições pendentes",
                                transfers_pending: "Transferências pendentes",
                                libraries_list: "Bibliotecas",
                                alias: "Sigla",
                                address: "Morada"
                            }
                        },
                        UsersPage: {
                            query: {
                                label: "Procurar por utilizador (ID, Nome ou Email)",
                                error: "Nenhum utilizador na biblioteca"
                            },
                            punishmentsPage: {
                                title: "Punições do utilizador ID",
                                backButton: "Voltar",
                                error: "Este utilizador não tem punições"
                            },
                            requestsPage: {
                                title: "Pedidos do utilizador ID",
                                backButton: "Voltar",
                                error: "Este utilizador não tem pedidos"
                            }
                        },
                        BooksPage: {
                            title: "Livros",
                            createButton: "Criar Livro",
                            query: {
                                label: "Procurar por Livro (ISBN ou Título)",
                                error: "Sem Livros"
                            },
                            viewPage: {
                                title: "Livro",
                                backButton: "Voltar",
                                description: "Descrição",
                                infoArray: {
                                    isbn: "ISBN",
                                    pageNumber: "Nº de Páginas",
                                    pubDate: "Data de Publicação",
                                    lan: "Idioma",
                                    authors: "Autor(es)",
                                    categories: "Categorias",
                                    availability: "Cópias Disponíveis na Biblioteca"
                                }
                            },
                            copiesPage: {
                                title: "Cópias do Livro",
                                backButton: "Voltar",
                                label: "Número de Cópias",
                                addButton: "Adicionar"
                            },
                            addPage: {
                                title: "Adicionar Livro",
                                backButton: "Voltar",
                                infoPage: {
                                    alertErrorMessage: "Erro ao adicionar o Livro",
                                    form: {
                                        isbn: "ISBN",
                                        pubDate: "Data de Publicação",
                                        title: "Título",
                                        lan: "Idioma",
                                        authors: "Autor(es)",
                                        addAuthors: "Adicionar Mais Autores",
                                        numPages: "Número de Páginas",
                                        category: "Categoria",
                                        addCategories: "Adicionar Mais Categorias",
                                        description: "Descrição",
                                        sThumb: "Miniatura Pequena",
                                        thumb: "Miniatura",
                                    },
                                    addButton: "Adicionar Livro"
                                }
                            },
                            editPage: {
                                title: "Editar Livro",
                                successMessage: "Livro atualizado com sucesso",
                                infoPage: {
                                    alertErrorMessage: "Erro ao atualizar o Livro",
                                    form: {
                                        isbn: "ISBN",
                                        pubDate: "Data de Publicação",
                                        title: "Título",
                                        lan: "Idioma",
                                        authors: "Autor(es)",
                                        addAuthors: "Adicionar Mais Autores",
                                        numPages: "Número de Páginas",
                                        category: "Categoria",
                                        addCategories: "Adicionar Mais Categorias",
                                        description: "Descrição",
                                        sThumb: "Miniatura Pequena",
                                        thumb: "Miniatura",
                                    },
                                    updateButton: "Atualizar Livro"
                                }
                            }
                        },
                        AuthorsPage: {
                            title: "Autores",
                            addAuthor: "Criar Autor",
                            query: {
                                label: "Procurar por Autor (ID ou Nome)",
                                error: "Sem Autores"
                            },
                            addDialogTitle: "Criar Autor"
                        },
                        CategoriesPage: {
                            title: "Categorias",
                            addButton: "Criar Categoria",
                            query: {
                                label: "Procurar por Categoria (ID ou Nome)",
                                error: "Sem Categorias"
                            },
                            addDialogTitle: "Criar Categoria"
                        },
                        EvaluationsPage: {
                            title: "Avaliações"
                        },
                        LoginPage: {
                            input: {
                                emailLabel: "Endereço de Email",
                                passwordLabel: "Palavra-passe"
                            },
                            signinButton: "Iniciar Sessão"
                        },
                        RequestsPage: {
                            title: "Pedidos",
                            addButton: "Criar Pedido",
                            activeRequests: {
                                title: "Pedidos Ativos",
                                query: {
                                    label: "Procurar por Pedido (ID ou Email)",
                                    error: "Sem pedidos ativos",
                                }
                            },
                            pastRequests: {
                                title: "Pedidos Anteriores",
                                error: "Sem pedidos anteriores"
                            },
                            error: "Sem pedidos na biblioteca",
                            addPage: {
                                title: "Criar Pedido",
                                step1: {
                                    title: "Selecionar Utilizador",
                                    error: "Sem utilizadores disponíveis"
                                },
                                step2: {
                                    title: "Selecionar livro para o pedido",
                                    formControlLabel: "Entrar na lista de espera para o livro"
                                },
                                step3: {
                                    title: "Selecionar prazo do pedido"
                                }
                            }
                        },
                        StatusPage: {
                            404: {
                                1: "A página que está a procurar não existe",
                                2: "A culpa é nossa, movemos o conteúdo para uma página diferente",
                                homeButton: "Ir para a página inicial"
                            }
                        },
                        TransfersPage: {
                            title: "Transferências",
                            addButton: "Criar Transferência",
                            activeTransfers: {
                                title: "Transferências Ativas",
                                error: "Sem transferências ativas"
                            },
                            pastTransfers: {
                                title: "Transferências Anteriores",
                                error: "Sem transferências anteriores"
                            },
                            error: "Sem transferências na biblioteca",
                            addPage: {
                                title: "Criar Transferência",
                                step1: {
                                    title: "Selecionar biblioteca de origem",
                                    error: "Sem bibliotecas disponíveis"
                                },
                                step2: {
                                    title: "Selecionar livro para a transferência",
                                    error: "Sem livros disponíveis para transferência"
                                }
                            }
                        },
                        ProfilePage: {
                            title: "Perfil",
                            backButton: "Voltar",
                            infoArray: {
                                name: "Nome",
                                email: "Email",
                                libraryAlias: "Trabalha em"
                            },
                            dialogTitle: "Alterar palavra-passe",
                            updatePasswordButton: "Alterar palavra-passe",
                            error: "O seu perfil não foi encontrado"
                        },
                        AdminFrontPage: {
                            header: {
                                greeting: "Bem-vindo",
                                library: "Nome da biblioteca"
                            },
                            table: {
                                users: "Utilizadores",
                                libraries: "Bibliotecas",
                                categories: "Categorias",
                                languages: "Idiomas",
                                authors: "Autores",
                                evaluations: "Avaliações",
                                notifications: "Notificações"
                            }

                        }
                    }
                }
            }

        }
    });

export default i18n;