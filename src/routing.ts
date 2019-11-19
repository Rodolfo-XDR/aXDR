export const Routing = {
    DEFAULT: {
        url: '',
        title: 'undefined'
    },
    ERROR: {
        url: 'error',
        title: 'Error'
    },
    GUEST: {
        url: '',
        title: 'GUEST',
        children: {
            LOGIN: 
            {
                url: '',
                title: 'Login',
                onlyGuest: true
            },
            REGISTER: 
            {
                url: 'register',
                title: 'Registro',
                onlyGuest: true
            }
        }
    },
    USER: {
        url: '',
        title: 'USER',
        children: {
            HABBO: {
                id: 'HABBO',
                url: '',
                directURL: 'me',
                title: 'Inicio',
                children: {
                    HOME: {
                        url: 'me',
                        title: 'Home',
                        sideBar: true
                    },
                    PROFILE: {
                        url: 'profile',
                        title: 'Mi Perfil',
                    },
                    SETTINGS: {
                        url: 'settings',
                        title: 'Ajustes',
                        sideBar: true,
                        children: {
                            GENERAL: {
                            url: '',
                            title: 'General',
                            },
                            PREFERENCES: {
                            url: 'preferences',
                            title: 'Preferencias',
                            },
                            CUSTOMIZATION: {
                            url: 'customization',
                            title: 'Personalización',
                            },
                        }
                    },
                }
            },
            HOTEL: {
                id: 'HOTEL',
                url: 'hotel',
                title: 'Hotel'
            },
            COMMUNITY: {
                id: 'COMMUNITY',
                url: 'community',
                title: 'Comunidad',
                children: {
                    ARTICLES: {
                        url: 'articles',
                        title: 'Noticias'
                    },
                    PHOTO_GALLERY: {
                        url: 'photo-gallery',
                        title: 'Galería de Fotos'
                    },
                    TOP: {
                        url: 'top',
                        title: 'Tops'
                    },
                    TEAM: {
                        url: 'team',
                        title: 'Equipo Staff'
                    }
                }
            },
            DISCOVER: {
                id: 'DISCOVER',
                url: 'playing',
                title: 'Descubre %HOTELNAME%',
                directURL: 'what-is',
                children: {
                    WHATIS: {
                        url: 'what-is',
                        title: '¿Qué es %HOTELNAME%?'
                    },
                    HOWTOPLAY: {
                        url: 'how-to-play',
                        title: '¿Cómo Jugar?'
                    },
                    HELP: {
                        url: 'help',
                        title: 'Ayuda'
                    }
                }
            },
        }
    }
}